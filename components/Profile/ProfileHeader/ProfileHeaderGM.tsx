"use client";
import Link from "next/link";
// import { useOnborda } from "onborda";
import { Fragment, useEffect, useState, useMemo } from "react";
import { useFormatter } from "next-intl";
import GoogleIcon from "@/icons/GoogleIcon";
import toast from "react-hot-toast";
import queryString from "query-string";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import {
  genAddressSeed,
  generateNonce,
  generateRandomness,
  getExtendedEphemeralPublicKey,
  getZkLoginSignature,
  jwtToAddress,
} from "@mysten/zklogin";

import { JwtPayload, jwtDecode } from "jwt-decode";
import { fromB64 } from "@mysten/bcs";
import axios from "axios";
import Image from "next/image";
import digitrustWhiteLogo from "@/assets/images/digitrust_white.png";
import digitrustNoTextWhiteLogo from "@/assets/images/digitrust_white_notext.png";
import leofiLogo from "@/assets/images/leofi.png";
import leofiNoTextLogo from "@/assets/images/leofi_notext.png";
import { scriptURLPostAlgorand, scriptURLGetAlgorand, scriptURLGetEvmApt, scriptURLPostEvmApt } from "@/constants/google";
import { setBalance } from "viem/actions";
import Hot from "@/assets/images/Hot.png";
import { useGlobalContext } from "@/Context/store";
import InfoDropdownMobile from "./InfoDropdownMobile";
import InfoDropdownDesktop from "./InfoDropdownDesktop";

// const [oauthParams, setOauthParams] = useState<queryString.ParsedQuery<string>>();
const suiClient = new SuiClient({
  url: process.env.NEXT_PUBLIC_FULLNODE_URL as string,
});

const navLinks = [
  {
    id: 1,
    title: "Marketplace",
    link: "/",
  },

  {
    id: 2,
    title: "My Portfolio",
    link: "/",
  },

  {
    id: 3,
    title: "Manage",
    link: "/",
  },

  {
    id: 4,
    title: "About Us",
    link: "/",
  },
];

async function generateAddress(account_id: string, address_id: string) {
  const evmURL = `${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/evm_adr?account_id=${account_id}&address_id=${address_id}`;
  const resEVM = await fetch(evmURL);
  const evmAddress = await resEVM.json();

  return { evmAddress };
}

async function generateAPTAddress(account_id: string) {
  const apturl = `${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/apt_adr?account_id=${account_id}`;
  const resApt = await fetch(apturl);
  const aptAddress = await resApt.json();

  return { aptAddress };
}

async function generateAlgorandAddress(email: string) {
  const url = `${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/algo_Adr?email=${email}`;
  const res = await fetch(url);
  const algoAddress = await res.json();

  return { algoAddress };
}

async function getBalance(_email: string) {
  const url = `${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/user_balance?email=${_email}`;
  const resApt = await fetch(url);
  const balance = await resApt.json();

  return { balance };
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function Header(props: { isHome: boolean, isDetail: boolean | false }) {
  // const { startOnborda } = useOnborda();
  const { userEmail, setUserEmail, chain, setChain, selectedKeys, setSelectedKeys, walletAddress, setWalletAddress } = useGlobalContext();
  const handleStartOnborda = () => {
    // startOnborda();
  };

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  //zkLogin
  const [ephemeralKeyPair, setEphemeralKeyPair] = useState<Ed25519Keypair>();
  const [currentEpoch, setCurrentEpoch] = useState("");
  const [maxEpoch, setMaxEpoch] = useState(0);
  const [nonce, setNonce] = useState("");
  const [jwtString, setJwtString] = useState("");
  const [decodedJwt, setDecodedJwt] = useState<JwtPayload>();
  const [randomness, setRandomness] = useState("");
  const [userSalt, setUserSalt] = useState<string>();
  const [zkLoginUserAddress, setZkLoginUserAddress] = useState("");
  const [oauthParams, setOauthParams] =
    useState<queryString.ParsedQuery<string>>();
  const [email, setEmail] = useState("");
  const [point, setPoint] = useState(0);

  useEffect(() => {
    const getOauthParams = async () => {
      let curEmail = userEmail;
      const location = window.location.hash;
      if (
        location != null &&
        location != "" &&
        (curEmail == "" || curEmail == null)
      ) {
        const res = queryString.parse(location);
        setOauthParams(res);
      } else if (curEmail != "" && curEmail != null) {
        let myToast = toast.loading("Loading...");
        if(email == "" || email == null)
          setEmail(curEmail != null ? curEmail : "");
        toast.dismiss(myToast);
      } else return;
    };
    getOauthParams();

  }, []);

  const logOutWallet = () => {
    setEmail("");
    window.location.hash = "";
    // window.location.href = window.location.origin + "/home";
    sessionStorage.clear();
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail && email === "") {
      setEmail(storedEmail);
      setUserEmail(storedEmail);
    }
  }, []);

  const beginZkLogin = async () => {

    var myToast = toast.loading("Getting key pair...");
    const ephemeralKeyPair = Ed25519Keypair.generate();
    window.sessionStorage.setItem(
      process.env.NEXT_PUBLIC_KEY_PAIR_SESSION_STORAGE_KEY as string,
      ephemeralKeyPair.export().privateKey
    );
    setEphemeralKeyPair(ephemeralKeyPair);

    //Get epoch
    const { epoch } = await suiClient.getLatestSuiSystemState();

    setCurrentEpoch(epoch);
    window.localStorage.setItem(
      process.env.NEXT_PUBLIC_MAX_EPOCH_LOCAL_STORAGE_KEY as string,
      String(Number(epoch) + 10)
    );
    console.log(currentEpoch);
    setMaxEpoch(Number(epoch) + 10);

    //Get randomness
    const randomness = generateRandomness();

    //Set Nonce
    const newNonce = generateNonce(
      ephemeralKeyPair?.getPublicKey(),
      maxEpoch,
      randomness
    );
    setNonce(newNonce);

    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
      response_type: "id_token",
      scope: "openid email",
      nonce: newNonce,
    });
    // const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    // window.location.replace(loginURL);
    // toast.dismiss(myToast);

    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_OPENID_PROVIDER_URL as string
      );
      const authUrl = `${data.authorization_endpoint}?${params}`;
      window.location.href = authUrl;
      toast.dismiss(myToast);
    } catch (error) {
      console.error("Error initiating Google login:", error);
      toast.dismiss(myToast);
    }
    
  };

  useEffect(() => {
    const getUserAddress = async () => {
      if (oauthParams && oauthParams?.id_token && email == "") {
        const myToast = toast.loading("Loading your account...");

        const NewdecodedJwt = jwtDecode(oauthParams.id_token as string);

        let scriptURLGet;
        if (chain === "Klaytn") {
          scriptURLGet = scriptURLGetEvmApt;
        }
        if (chain === "Algorand") {
          scriptURLGet = scriptURLGetAlgorand;
        }
        const url = `${scriptURLGet}?email=${NewdecodedJwt?.email}`;
        const res = await fetch(url);
        const data = await res.json();

        if (!data) {
          if (chain === "Klaytn") {
            //Get EVM address
            const account_id = generateRandomness().substring(0, 4);
            const address_id = generateRandomness().substring(0, 3);

            const { evmAddress } = await generateAddress(account_id, address_id);

            const { aptAddress } = await generateAPTAddress(account_id);

            if (evmAddress != null && aptAddress != null) {
              const form = {
                Email: NewdecodedJwt?.email,
                Date: new Date(),
                EVMAddress: evmAddress.address,
                AptosAddress: aptAddress.address,
              };

              var keyValuePairs = [];

              for (let [key, value] of Object.entries(form)) {
                keyValuePairs.push(key + "=" + value);
              }

              var formDataString = keyValuePairs.join("&");

              const response = await fetch(scriptURLPostEvmApt, {
                redirect: "follow",
                mode: "no-cors",
                method: "POST",
                body: formDataString,
                headers: {
                  "Content-Type": "text/plain;charset=utf-8",
                },
              });
              sessionStorage.setItem(`${chain}wallet`, evmAddress);
            }
          }

          if (chain === "Algorand") {
            //Get Algorand address
            const { algoAddress } = await generateAlgorandAddress(
              NewdecodedJwt?.email
            );

            if (algoAddress != null) {
              const form = {
                Email: NewdecodedJwt?.email,
                AlgorandAddress: algoAddress.address,
                Date: new Date(),
              };

              var keyValuePairs = [];

              for (let [key, value] of Object.entries(form)) {
                keyValuePairs.push(key + "=" + value);
              }

              var formDataString = keyValuePairs.join("&");

              const response = await fetch(scriptURLPostAlgorand, {
                redirect: "follow",
                mode: "no-cors",
                method: "POST",
                body: formDataString,
                headers: {
                  "Content-Type": "text/plain;charset=utf-8",
                },
              });
              sessionStorage.setItem(`${chain}wallet`, algoAddress);
            }
          }
          if(email == "" || email == null)
            setEmail(NewdecodedJwt?.email);
          await postData(`${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/claim_token`, {
            receiver: NewdecodedJwt?.email,
            amount: 1024,
            created_at: new Date(),
            email: NewdecodedJwt?.email,
          }).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
            toast.success(
              "Claim your first token success!\n Let's try Digitrust!",
              {
                style: {
                  maxWidth: "900px",
                },
                duration: 5000,
              }
            );
            //startOnborda();
          });
        } else {
          if(email == "" || email == null)
            setEmail(data?.email);
          sessionStorage.setItem(`${chain}wallet`, data?.wallet);
        }
        window.location.hash = "";
        toast.dismiss(myToast);
      }
    };
    
    if(email == "" || email == null)
      getUserAddress();
  }, [oauthParams]);

  useEffect(() => {
    const fetchData = async () => {
      if(email == "" || email == null)
          return
      let scriptURLGet;
      if (chain === "Klaytn") {
        scriptURLGet = scriptURLGetEvmApt;
      }
      if (chain === "Algorand") {
        scriptURLGet = scriptURLGetAlgorand;
      }
      const url = `${scriptURLGet}?email=${email}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        sessionStorage.setItem(`${chain}wallet`, data?.wallet);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    setWalletAddress(sessionStorage.getItem(`${chain}wallet`));
  }, [chain, email])

  useEffect(() => {
    window.localStorage.setItem("userEmail", email);
    setUserEmail(email);
    async function updateBalance() {
      const { balance } = await getBalance(email);
      if (balance != null) setPoint(balance?.amount);
    }

    if (email != "") {
      updateBalance();
    }
  }, [email]);

  const classes = `max-w-screen-2xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4 text-sm xl:text-base ${props.isHome ? "" : ""
    }`; {/* border-b-[1px] border-[#d7e402] border-opacity-50 */ }

  return (
    <div className={props.isDetail ? "hero-background" : ""} >
      {/* {email == "" ? (
        <div className="bg-white text-leofi flex items-center justify-center py-2">
          <Image
            src={Hot}
            alt="hot logo"
            height={30}
            className="animate-pulse"
          />
          <p>Login now and get a valuable gift worth 100 DGT!</p>
          <Image
            src={Hot}
            alt="hot logo"
            height={30}
            className="animate-pulse"
          />
        </div>
      ) : ''} */}
      <header className={classes}>
        {/* Logo */}
        <div>
          {props.isHome ? (
            <Link href="/">
              <Image
                src={leofiLogo}
                alt="leofi logo"
                height={50}
                className="hidden sm:block"
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src={leofiLogo}
                alt="leofi logo"
                height={50}
                className="hidden sm:block"
              />
            </Link>
          )}
          {props.isHome ? (
            <Link href="/">
              <Image
                src={leofiNoTextLogo}
                alt="leofi logo"
                className="sm:hidden object-fit"
                width={60}
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src={leofiNoTextLogo}
                alt="leofi logo"
                className="sm:hidden object-fit"
                width={60}
              />
            </Link>
          )}
        </div>

        {/* Create vault button */}
        {props.isHome && email ? (<button>
          <Link href="/create-profile">
            <div className="bg-leofi shadow-[0_0_15px_10px_rgba(215,228,2,0.8)] text-xs sm:text-sm px-2 sm:px-4 py-2.5 rounded-lg border-opacity-60 justify-center items-center gap-12 text-white hover:drop-shadow-md">
              Click to create your profile
            </div>
          </Link>
        </button>) : <></>}

        {/* Login button */}
        {email == "" ? (
          <button
            className=" bg-[#ed1c24]/0.8 border-solid border-1 rounded-md hover:bg-[#e48802] shadow-[5px_5px_10px_1px_rgba(215,228,2,0.8)]
hover:drop-shadow-md"
            onClick={async () => beginZkLogin()}
          >
            <div className="grid grid-row-auto grid-flow-col my-2 mx-2">
              <div className="bg-white rounded-full">
                <GoogleIcon />
              </div>
              <span className="text-white mx-2">Google login</span>
            </div>
          </button>
        ) : (
          <>
            {/* Desktop */}
            <div className="hidden sm:block">
              <InfoDropdownDesktop
                isHome={props.isHome}
                email={email}
                walletAddress={walletAddress}
                point={point}
                chain={chain}
                setChain={setChain}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys}
                login={beginZkLogin}
                logout={logOutWallet}
              />
            </div>

            {/* Mobile */}
            <div className="sm:hidden object-fit">
              <InfoDropdownMobile
                isHome={props.isHome}
                email={email}
                walletAddress={walletAddress}
                point={point}
                chain={chain}
                setChain={setChain}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys}
                login={beginZkLogin}
                logout={logOutWallet}
              />
            </div>
          </>
        )}
      </header>
    </div>
  );
}
