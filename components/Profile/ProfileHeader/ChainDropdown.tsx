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
import SUIWallet from "@/icons/SUIWalletIcon";
import AptosIcon from "@/icons/AptosIcon";
import AlgorandIcon from "@/icons/AlgorandIcon";
import Down from "@/icons/Down";
import KlayIcon from "@/icons/KlayIcon";
import React, { ReactElement } from "react";

interface Props {
    selectedKeys: ReactElement<any, any>;
    setSelectedKeys: (element: ReactElement<any, any>) => void;
    chain: string;
    setChain: (chain: string) => void;
}

export default function ChainDropdown({ selectedKeys, setSelectedKeys, chain, setChain }: Props) {
    const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <Dropdown>
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
            </Dropdown>
    );
}