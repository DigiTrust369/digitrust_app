import React, { ReactElement } from "react";
import Link from "next/link";
import { useFormatter } from "next-intl";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
    Button,
    Select,
    SelectItem,
} from "@nextui-org/react";
import MenuIcon from "@/icons/MenuIcon";
import GoogleIcon from "@/icons/GoogleIcon";
import ExitIcon from "@/icons/ExitIcon";
import ProfileIcon from "@/icons/ProfileIcon";
import ChainDropdown from "./ChainDropdown";
import SUIWallet from "@/icons/SUIWalletIcon";
import AptosIcon from "@/icons/AptosIcon";
import AlgorandIcon from "@/icons/AlgorandIcon";
import Down from "@/icons/Down";
import KlayIcon from "@/icons/KlayIcon";
import WalletIcon from "@/icons/WalletIcon";
import { redirect } from 'next/navigation'

interface Props {
    isHome: boolean;
    email: string;
    walletAddress: string;
    point: number;
    chain: string;
    setChain: (chain: string) => void;
    selectedKeys: ReactElement<any, any>;
    setSelectedKeys: (element: ReactElement<any, any>) => void;
    login: () => void;
    logout: () => void;
}

export default function InfoDropdownDesktop({ isHome, email, walletAddress, point, login: beginZkLogin, logout: logOutWallet, selectedKeys, setSelectedKeys, chain, setChain }: Props) {
    const format = useFormatter();
    const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";

    const changeToProfile = () => {
        redirect("/profile");
    }

    return (
        <div className="flex gap-5">
            {/* <Dropdown>
                <DropdownTrigger className="border-2 border-zinc-300">
                    <div className="flex items-center rounded-lg bg-white px-0 text-blue-600">
                        {selectedKeys}
                        <Down />
                    </div>
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
                        onClick={() => {
                            setChain("Sui");
                            setSelectedKeys(
                                <SUIWallet className={iconClasses} />
                            );
                        }
                        }
                    >
                        Sui
                    </DropdownItem>
                    <DropdownItem
                        key="klaytntestnet"
                        startContent={<KlayIcon className={iconClasses} />}
                        onClick={() => {
                            setChain("Klaytn");
                            setSelectedKeys(
                                <KlayIcon className={iconClasses} />
                            );
                        }
                        }
                    >
                        Klaytn
                    </DropdownItem>
                    <DropdownItem
                        key="aptos"
                        startContent={<AptosIcon className={iconClasses} />}
                        onClick={() => {
                            setChain("Aptos");
                            setSelectedKeys(
                                <AptosIcon className={iconClasses} />
                            );
                        }
                        }
                    >
                        Aptos
                    </DropdownItem>
                    <DropdownItem
                        key="algorandtestnet"
                        startContent={
                            <AlgorandIcon className={iconClasses} />
                        }
                        onClick={() => {
                            setChain("Algorand");
                            setSelectedKeys(
                                <AlgorandIcon className={iconClasses} />
                            );
                        }
                        }
                    >
                        Algorand
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown> */}
            <ChainDropdown chain={chain} setChain={setChain} selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
            <Dropdown
                radius="sm"
                classNames={{
                    content: "border-small border-divider bg-white py-0",
                }}
            >
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className="capitalize text-blue-600 bg-white font-semibold"
                        disableRipple
                    >
                        <WalletIcon />
                        {`${walletAddress.slice(
                            0,
                            4
                        )}...${walletAddress.slice(-5, -1)}`}
                        <Down />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Custom item styles"
                    className="p-3 w-[300px] absolute bg-white top-0 right-1 box-border rounded-small shadow-medium"
                    variant="light"
                    itemClasses={{
                        base: [
                            "rounded-md",
                            "text-default-500",
                            "transition-opacity",
                            "data-[selectable=true]:focus:bg-default-50",
                            "data-[pressed=true]:opacity-70",
                            "data-[focus-visible=true]:ring-default-500",
                        ],
                    }}
                >
                    <DropdownSection showDivider>
                        <DropdownItem key="balance" >
                            <div className="flex justify-center items-center gap-10">
                                <span className="w-3/4 text-sm">BALANCE</span>
                                <span className="font-semibold text-base">
                                    {format.number(point)} <span className="text-sm">DGT</span>
                                </span>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="email" >
                            <div className="flex justify-center items-center gap-10">
                                <span className="w-3/4 text-sm">EMAIL</span>
                                <span className="font-semibold text-base">
                                    {email.replace("@gmail.com", "")}
                                </span>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="chain" >
                            <div className="flex justify-center items-center gap-10">
                                <span className="w-3/4 text-sm">ON CHAIN</span>
                                <div className="flex items-center gap-1 font-semibold text-base">
                                    {selectedKeys} {chain}
                                </div>
                            </div>
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownSection>
                        <DropdownItem>
                            <div className="flex justify-center gap-x-10">
                                <Link href={"/profile"}>
                                    <div className="flex-col">
                                        <div className="ml-2"> <ProfileIcon /></div>
                                        <p className="text-blue-600">Profile</p>
                                    </div>
                                </Link>
                                <div>
                                    <button onClick={async () => logOutWallet()}>
                                        <p className="ml-3.5 items-center">
                                            <ExitIcon />
                                        </p>
                                        <p className="text-blue-600">Log Out</p>
                                    </button>
                                </div>
                            </div>
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}