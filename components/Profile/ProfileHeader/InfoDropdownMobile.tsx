import React, { ReactElement, useEffect } from "react";
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
import { chain } from "lodash";

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

export default function InfoDropdown({ isHome, email, walletAddress, point, login: beginZkLogin, logout: logOutWallet, selectedKeys, setSelectedKeys, chain, setChain }: Props) {
    const format = useFormatter();
    return (
        <div className="flex gap-2">
            <ChainDropdown chain={chain} setChain={setChain} selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />

            <Dropdown
                radius="sm"
                classNames={{
                    content: "border-small border-divider bg-white py-0",
                }}
            >
                <DropdownTrigger>
                    <Button
                        isIconOnly
                        variant="bordered"
                        className="capitalize "
                        disableRipple
                    >
                        <MenuIcon
                            bgColor={`${isHome ? "black" : "white"}`}
                            iconColor={`${isHome ? "white" : "black"}`}
                        />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Custom item styles"
                    className="p-3"
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
                    <DropdownSection
                        className="py-1"
                        showDivider
                        hidden={email == ""}
                    >
                        <DropdownItem
                            isReadOnly
                            key="info"
                            className="h-14 gap-2 opacity-100 bg-white"
                        >
                            <div className="grid grid-row-auto grid-flow-col">
                                <span>Wallet</span>
                                <span className="font-bold px-1">
                                    <div className="px-1">{`${walletAddress?.slice(
                                        0,
                                        4
                                    )}...${walletAddress?.slice(-5, -1)}`}</div>
                                </span>
                            </div>

                            <div className="grid grid-row-auto grid-flow-col mt-2">
                                <GoogleIcon />
                                <span className="font-bold px-1">
                                    <div className="px-1">
                                        {email.replace("@gmail.com", "")}
                                    </div>
                                </span>
                            </div>
                        </DropdownItem>
                        <DropdownItem
                            isReadOnly
                            key="balance"
                            className="h-14 gap-2 opacity-100 bg-white py-2"
                        >
                            <div className="flex justify-center items-center gap-1">
                                <span className="font-bold text-3xl">
                                    {format.number(point)}
                                </span>
                                <span className="font-medium text-sm place-items-center">
                                    DGT
                                </span>
                            </div>
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownSection showDivider hidden={email == ""}>
                        <DropdownItem key="MyMenu" className="hover:bg-white">
                            <div className="flex justify-center gap-x-10">
                                <Link href={"/profile"}>
                                    <div className="flex-col">
                                        <div className="ml-2"><ProfileIcon /></div>
                                        <p className="">Profile</p>
                                    </div>
                                </Link>
                                <div>
                                    <button onClick={async () => logOutWallet()}>
                                        <p className="ml-3.5">
                                            <ExitIcon />
                                        </p>
                                        <p className="">Log Out</p>
                                    </button>
                                </div>
                            </div>
                        </DropdownItem>
                    </DropdownSection>

                    <DropdownSection hidden={email == ""}>
                        <DropdownItem
                            isReadOnly
                            key="chain"
                            className="cursor-default font-bold"
                            endContent={
                                <div className="flex gap-1 items-center">
                                    {selectedKeys} {chain}
                                </div>
                            }
                        >
                            Chain
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}