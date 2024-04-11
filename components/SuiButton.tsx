import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
import { formatAddress } from "@mysten/sui.js/utils";
import Link from "next/link";

function SuiButton() {
  const { currentAccount } = useWalletKit();
  return (
    <div>
      {currentAccount?.address ? (
        <div>
          <Link href={"/digitrust/wallet"}  className="mr-2 hover:text-blue-400"> Lịch sử giao dịch</Link>
          <Link href={"/profile/abc"}>Profile</Link>
        </div>
      ):(<div></div>)}
    <ConnectButton
      connectText={"Kết nối ví SUI"}
     
    />
    </div>
  );
}

export default SuiButton;