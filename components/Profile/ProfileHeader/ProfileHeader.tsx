"use client";
import Link from "next/link";
import Image from "next/image";
import { useWallet, ConnectModal, ConnectButton } from "@suiet/wallet-kit";
import { Fragment, useEffect, useState, useMemo } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  modal,
} from "@nextui-org/react";
import EVMWalletIcon from "@/icons/EVMWalletIcon";
import SUIWalletIcon from "@/icons/SUIWalletIcon";
import MetaMaskIcon from "@/icons/MetaMaskIcon";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";
import KlayIcon from "@/icons/KlayIcon";
import { PeraWalletConnect } from "@perawallet/connect";
import AlgorandIcon from "@/icons/AlgorandIcon";
import ArbitrumIcon from "@/icons/ArbitrumIcon";
import Down from "@/icons/Down";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import SUIWallet from "@/icons/SUIWalletIcon";
import digitrustLogo from "@/assets/images/digitrust_white.png";

export default function ProfileHeader() {
  const wallet = useWallet();
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { open } = useWeb3Modal();
  const EVMWallet = useWalletInfo().walletInfo;
  const peraWallet = new PeraWalletConnect();

  const [algoAccountAddress, setAlgoAccountAddress] = useState("");
  const isConnectedToPeraWallet = !!algoAccountAddress;

  function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);
        setAlgoAccountAddress(newAccounts[0]);
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
    setAlgoAccountAddress("");
  }

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

        if (accounts.length) {
          setAlgoAccountAddress(accounts[0]);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const { select, configuredWallets, detectedWallets } = useWallet();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const listSuiWallet = [...configuredWallets, ...detectedWallets].map(
    (wallet) => (
      <button
        className="bg-blue-900 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded inline-flex items-left"
        onClick={() => {
          // check if user installed the wallet
          if (!wallet.installed) {
            // do something like guiding users to install
            window.open(wallet.downloadUrl.browserExtension);
            //return;
          }
          select(wallet.name);
          onOpenChange();
        }}
      >
        <img src={wallet.iconUrl} alt="Icon" className="w-4 h-4 mr-2"></img>
        <span>{wallet.name}</span>
      </button>
    )
  );

  const [selectedKeys, setSelectedKeys] = useState(
    <>
      <SUIWalletIcon />
      Sui devnetchain
      <Down />
    </>
  );
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Fragment>
      <header className="font-feature-settings bg-blue-600 text-sm font-medium capitalize leading-normal text-white xl:text-base">
        <div className="container mx-auto py-[18px] px-[60px] xl:px-[120px]">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex flex-1 justify-start">
              <Link className="h-auto w-32 xl:w-44" href="/">
                <Image src={digitrustLogo} alt="digitrust logo" height={50} />
              </Link>
            </div>

            {/* Navigations */}
            <nav className="hidden lg:block justify-items-center">
              <ul className="flex gap-x-10">
                {[
                  ["1", "Product", "/"],
                  ["2", "Community", "/"],
                  ["3", "Resources", "/"],
                  ["4", "About Us", "/"],
                ].map(([id, title, url]) => (
                  <li key={id}>
                    <Link href={url}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Button */}
            <div className="flex flex-1 ml-5 justify-end">
              <div className="flex items-center gap-x-[10px] rounded-lg bg-white px-6 py-4 text-blue-600">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.125 5V15C3.125 15.3315 3.2567 15.6495 3.49112 15.8839C3.72554 16.1183 4.04348 16.25 4.375 16.25H16.875C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V6.875C17.5 6.70924 17.4342 6.55027 17.3169 6.43306C17.1997 6.31585 17.0408 6.25 16.875 6.25H4.375C4.04348 6.25 3.72554 6.1183 3.49112 5.88388C3.2567 5.64946 3.125 5.33152 3.125 5ZM3.125 5C3.125 4.66848 3.2567 4.35054 3.49112 4.11612C3.72554 3.8817 4.04348 3.75 4.375 3.75H15"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.0625 12.0312C14.494 12.0312 14.8438 11.6815 14.8438 11.25C14.8438 10.8185 14.494 10.4688 14.0625 10.4688C13.631 10.4688 13.2812 10.8185 13.2812 11.25C13.2812 11.6815 13.631 12.0312 14.0625 12.0312Z"
                      fill="#2563EB"
                    />
                  </svg>
                </span>
                <div>
                  {wallet.connected ||
                  EVMWallet != undefined ||
                  isConnectedToPeraWallet ? (
                    <div>
                      <Link
                        href={"/history"}
                        className="mr-2 hover:text-blue-400"
                      >
                        History
                      </Link>
                      <b className="ml-2">|</b>
                      <Link className="ml-2" href={"/profile"}>
                        Profile
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <div className="grid grid-cols-2 gap-1">
                    {wallet.connected ? (
                      <ConnectButton>Connect Wallet</ConnectButton>
                    ) : EVMWallet != undefined ? (
                      <w3m-button />
                    ) : isConnectedToPeraWallet ? (
                      <Button onPress={() => handleDisconnectWalletClick()}>
                        {peraWallet.platform}
                        {algoAccountAddress.substring(0, 12)}...
                      </Button>
                    ) : (
                      <button
                        className="text-blue-700 hover:text-blue-900 focus:outline-none font-medium rounded-lg px-2.5 py-0.5 text-center"
                        onClick={onOpen}
                      >
                        Connect Wallet
                      </button>
                    )}
                    <div
                      className={
                        wallet.connected ||
                        EVMWallet != undefined ||
                        isConnectedToPeraWallet
                          ? "ml-10"
                          : ""
                      }
                    >
                      <Dropdown>
                        <DropdownTrigger>
                          <div className="flex items-center gap-x-[2px] rounded-lg bg-white px-0 py-0 text-blue-600">
                            {selectedKeys}
                          </div>
                          {/* <Button 
                                                        variant="bordered" 
                                                        className="capitalize"
                                                        >
                                                    {selectedValue}
                                                    </Button> */}
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Single selection example"
                          variant="flat"
                          disallowEmptySelection
                          selectionMode="single"
                        >
                          <DropdownItem
                            key="suidevnet"
                            startContent={<SUIWallet className={iconClasses} />}
                            onClick={() =>
                              setSelectedKeys(
                                <>
                                  <SUIWallet className={iconClasses} />
                                  Sui devnet
                                  <Down />
                                </>
                              )
                            }
                          >
                            Sui
                          </DropdownItem>
                          {/* <DropdownItem key="suitestnet"  startContent={<SUIWallet className={iconClasses} />}>
                                                        Sui testnet
                                                    </DropdownItem>
                                                    <DropdownItem key="suimainnet"  startContent={<SUIWallet className={iconClasses} />}>
                                                        Sui mainnet
                                                    </DropdownItem> */}
                          <DropdownItem
                            key="klaytntestnet"
                            startContent={<KlayIcon className={iconClasses} />}
                            onClick={() =>
                              setSelectedKeys(
                                <>
                                  <KlayIcon className={iconClasses} />
                                  Klaytn testnet
                                  <Down />
                                </>
                              )
                            }
                          >
                            Klaytn
                          </DropdownItem>
                          {/* <DropdownItem key="klaytnmainnet"  startContent={<KlayIcon className={iconClasses} />}>
                                                        Klaytn mainnet
                                                    </DropdownItem> */}
                          <DropdownItem
                            key="arbitrumtestnet"
                            startContent={
                              <ArbitrumIcon className={iconClasses} />
                            }
                            onClick={() =>
                              setSelectedKeys(
                                <>
                                  <ArbitrumIcon className={iconClasses} />
                                  Arbitrum testnet
                                  <Down />
                                </>
                              )
                            }
                          >
                            Arbitrum
                          </DropdownItem>
                          {/* <DropdownItem key="arbitrummainnet"  startContent={<ArbitrumIcon className={iconClasses} />}>
                                                        Arbitrum mainnet
                                                    </DropdownItem> */}
                          <DropdownItem
                            key="algorandtestnet"
                            startContent={
                              <AlgorandIcon className={iconClasses} />
                            }
                            onClick={() =>
                              setSelectedKeys(
                                <>
                                  <AlgorandIcon className={iconClasses} />
                                  Algorand testnet
                                  <Down />
                                </>
                              )
                            }
                          >
                            Algorand
                          </DropdownItem>
                          {/* <DropdownItem key="algorandmainnet"  startContent={<AlgorandIcon className={iconClasses} />}>
                                                        Algorand mainnet
                                                    </DropdownItem> */}
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {!wallet.connected &&
        EVMWallet == undefined &&
        !isConnectedToPeraWallet && (
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            scrollBehavior={"inside"}
            size="xl"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Connect to a wallet
                  </ModalHeader>
                  <ModalBody>
                    <div className="grid grid-rows-1 grid-flow-col gap-4">
                      {/* <Button variant="bordered" className="font-bold" onPress={() => open({ view: 'Connect' })}>
                                        <MetaMaskIcon/>MetaMask
                                    </Button>  */}
                      <button
                        className="flex space-x-2 items-center px-3 py-2 bg-white hover:bg-gray-100 rounded-md drop-shadow-md"
                        onClick={async () => open({ view: "Connect" })}
                      >
                        <MetaMaskIcon />
                        <span className="text-current font-bold">Metamask</span>
                      </button>
                    </div>
                    <div className="grid grid-rows-1 grid-flow-col gap-4">
                      {/* <Button variant="bordered" className="font-bold" startContent={<EVMWalletIcon/>} onPress={() => open({ view: 'Networks' })}>
                                        EVM Chain Connect
                                    </Button> */}
                      <button
                        className="flex space-x-2 items-center px-3 py-2 bg-white hover:bg-gray-100 rounded-md drop-shadow-md"
                        onClick={async () => open({ view: "Networks" })}
                      >
                        <EVMWalletIcon />
                        <span className="text-current font-bold">
                          EVM Chain Connect
                        </span>
                      </button>
                    </div>
                    <div className="grid grid-rows-1 grid-flow-col gap-4">
                      <ConnectModal
                        open={showModal}
                        onOpenChange={(open) => setShowModal(open)}
                      >
                        {/* <Button variant="bordered" className="font-bold" size="md" startContent={<SUIWalletIcon/>}>
                                            SUI Connect
                                        </Button> */}
                        <button className="flex space-x-2 items-center px-3 py-2 bg-white hover:bg-gray-100 rounded-md drop-shadow-md">
                          <SUIWalletIcon />
                          <span className="text-current font-bold">
                            SUI Connect
                          </span>
                        </button>
                      </ConnectModal>
                    </div>
                    <div className="grid grid-rows-1 grid-flow-col gap-4">
                      {/* <Button variant="bordered" className="font-bold" startContent={<AlgorandIcon/>} onPress={() => handleConnectWalletClick()}>
                                        Algorand Connect
                                    </Button>  */}
                      <button
                        className="flex space-x-2 items-center px-3 py-2 bg-white hover:bg-gray-100 rounded-md drop-shadow-md"
                        onClick={() => handleConnectWalletClick()}
                      >
                        <AlgorandIcon />
                        <span className="text-current font-bold">
                          Algorand Connect
                        </span>
                      </button>
                    </div>
                    <hr className="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <Button
                      color="primary"
                      variant="light"
                      onPress={() => {
                        setShowMore(!showMore);
                      }}
                    >
                      {showMore ? "Show less" : "Show more"}
                    </Button>
                    {showMore && (
                      <div className="grid grid-rows-4 grid-flow-col gap-2">
                        {listSuiWallet}
                      </div>
                    )}
                  </ModalBody>
                  <ModalFooter></ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
    </Fragment>
  );
}
