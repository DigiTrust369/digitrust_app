"use client";
import Link from "next/link";
import {useWallet, ConnectModal,ConnectButton} from '@suiet/wallet-kit'
import { Fragment, useEffect, useState, useMemo } from "react";
import EVMWalletIcon from "@/icons/EVMWalletIcon";
import SUIWalletIcon from "@/icons/SUIWalletIcon";
import MetaMaskIcon from "@/icons/MetaMaskIcon";
import KlayIcon from "@/icons/KlayIcon";

import AlgorandIcon from "@/icons/AlgorandIcon";
import ArbitrumIcon from "@/icons/ArbitrumIcon";
import Down from "@/icons/Down";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,DropdownSection} from "@nextui-org/react";
import SUIWallet from "@/icons/SUIWalletIcon";

export default function ProfileHeader() {
    const [selectedKeys, setSelectedKeys] = useState(<><SUIWalletIcon/>Sui<Down/></>);
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    

    return (
        <Fragment>
            <header className="font-feature-settings bg-blue-600 text-sm font-medium capitalize leading-normal text-white xl:text-base">
                <div className="container mx-auto py-[18px] xl:px-0">
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex flex-1 justify-start">
                            <Link className="h-auto w-32 xl:w-44" href="/">
                                <svg
                                    viewBox="0 0 171 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M29.9053 21H21.1507V0.678311H29.9053C31.1645 0.696694 32.2123 0.843753 33.0487 1.11949C34.4733 1.58824 35.6268 2.44761 36.5092 3.69761C37.2169 4.70864 37.6994 5.80239 37.9568 6.97886C38.2142 8.15533 38.3428 9.27666 38.3428 10.3428C38.3428 13.045 37.8005 15.3336 36.716 17.2086C35.2454 19.7362 32.9752 21 29.9053 21ZM33.0625 5.86213C32.4099 4.75919 31.1186 4.20772 29.1884 4.20772H25.273V17.4706H29.1884C31.1921 17.4706 32.5892 16.4825 33.3796 14.5064C33.8116 13.4219 34.0276 12.1305 34.0276 10.6324C34.0276 8.56434 33.7059 6.97427 33.0625 5.86213ZM41.2243 0.678311H45.443V21H41.2243V0.678311ZM61.8768 20.5037C60.7555 21.193 59.3768 21.5377 57.7408 21.5377C55.0478 21.5377 52.8419 20.6048 51.1232 18.739C49.3309 16.864 48.4347 14.2996 48.4347 11.046C48.4347 7.75552 49.3401 5.11765 51.1507 3.13236C52.9614 1.14706 55.3557 0.154414 58.3336 0.154414C60.9164 0.154414 62.989 0.811583 64.5515 2.12592C66.1232 3.43107 67.0239 5.0625 67.2537 7.02022H63.0763C62.7546 5.63235 61.9687 4.66269 60.7187 4.11122C60.0202 3.80791 59.2436 3.65625 58.3888 3.65625C56.7528 3.65625 55.4062 4.27666 54.3493 5.51747C53.3015 6.74908 52.7776 8.6057 52.7776 11.0873C52.7776 13.5873 53.3474 15.3566 54.4871 16.3952C55.6268 17.4338 56.9228 17.9531 58.375 17.9531C59.7996 17.9531 60.9669 17.5441 61.8768 16.7261C62.7868 15.8989 63.3474 14.8189 63.5588 13.4862H58.8575V10.0947H67.3226V21H64.5101L64.0827 18.4632C63.2647 19.4283 62.5294 20.1085 61.8768 20.5037ZM71.0588 0.678311H75.2776V21H71.0588V0.678311ZM94.0138 0.678311V4.27666H87.9338V21H83.6599V4.27666H77.5524V0.678311H94.0138ZM105.14 13.0313H100.756V21H96.6057V0.678311H106.574C107.998 0.705885 109.092 0.880517 109.855 1.20221C110.627 1.5239 111.279 1.99725 111.812 2.62224C112.254 3.13695 112.603 3.7068 112.86 4.3318C113.118 4.9568 113.246 5.66912 113.246 6.46875C113.246 7.43383 113.003 8.38511 112.516 9.32261C112.028 10.2509 111.224 10.9081 110.103 11.2941C111.04 11.671 111.702 12.2086 112.088 12.9072C112.483 13.5965 112.681 14.6535 112.681 16.0781V17.443C112.681 18.3713 112.718 19.0009 112.791 19.3318C112.902 19.8557 113.159 20.2417 113.563 20.4899V21H108.89C108.761 20.5496 108.669 20.1866 108.614 19.9108C108.504 19.341 108.444 18.7574 108.435 18.1599L108.407 16.2711C108.389 14.9752 108.15 14.1112 107.69 13.6792C107.24 13.2472 106.39 13.0313 105.14 13.0313ZM107.718 9.3364C108.563 8.95037 108.986 8.1875 108.986 7.0478C108.986 5.81618 108.577 4.98897 107.759 4.56618C107.3 4.32721 106.61 4.20772 105.691 4.20772H100.756V9.66728H105.567C106.523 9.66728 107.24 9.55699 107.718 9.3364ZM128.936 13.1691V0.678311H133.251V13.1691C133.251 15.329 132.915 17.011 132.244 18.2151C130.994 20.421 128.609 21.5239 125.089 21.5239C121.569 21.5239 119.179 20.421 117.92 18.2151C117.249 17.011 116.914 15.329 116.914 13.1691V0.678311H121.229V13.1691C121.229 14.5662 121.394 15.5864 121.725 16.2298C122.24 17.3695 123.361 17.9393 125.089 17.9393C126.808 17.9393 127.925 17.3695 128.439 16.2298C128.77 15.5864 128.936 14.5662 128.936 13.1691ZM144.694 18.0634C145.696 18.0634 146.509 17.9531 147.134 17.7325C148.32 17.3097 148.913 16.5239 148.913 15.375C148.913 14.704 148.619 14.1847 148.03 13.8171C147.442 13.4586 146.518 13.1415 145.259 12.8658L143.108 12.3833C140.994 11.9053 139.533 11.386 138.724 10.8254C137.355 9.88787 136.67 8.42188 136.67 6.42739C136.67 4.60754 137.332 3.09559 138.655 1.89155C139.979 0.687503 141.923 0.0854806 144.487 0.0854806C146.629 0.0854806 148.453 0.655333 149.96 1.79504C151.477 2.92555 152.272 4.57077 152.346 6.7307H148.265C148.191 5.50827 147.658 4.63971 146.665 4.125C146.004 3.78493 145.181 3.61489 144.198 3.61489C143.104 3.61489 142.231 3.83548 141.578 4.27666C140.926 4.71783 140.599 5.33364 140.599 6.12408C140.599 6.85019 140.921 7.39246 141.564 7.75092C141.978 7.98989 142.86 8.27022 144.211 8.59191L147.713 9.43291C149.248 9.80055 150.406 10.2923 151.187 10.9081C152.401 11.864 153.007 13.2472 153.007 15.0579C153.007 16.9145 152.295 18.4586 150.87 19.6903C149.455 20.9127 147.451 21.5239 144.859 21.5239C142.212 21.5239 140.131 20.9219 138.614 19.7178C137.097 18.5046 136.339 16.841 136.339 14.727H140.392C140.521 15.6553 140.774 16.3493 141.151 16.8088C141.84 17.6452 143.021 18.0634 144.694 18.0634ZM170.916 0.678311V4.27666H164.836V21H160.562V4.27666H154.455V0.678311H170.916Z"
                                        fill="white"
                                    />
                                    <circle
                                        cx="9.5"
                                        cy="11.5"
                                        r="9.5"
                                        fill="white"
                                    />
                                </svg>
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
                                    {false  ? (
                                        <div>
                                            <Link href={"/history"}  className="mr-2 hover:text-blue-400">History</Link>
                                            <b className="ml-2">|</b>
                                            <Link className="ml-2" href={"/profile"}>Profile</Link>
                                        </div>
                                    ):(<div></div>)}
                                    <div className="grid grid-cols-2 gap-1">
                                        {
                                            <button className="text-blue-700 hover:text-blue-900 focus:outline-none font-medium rounded-lg px-2.5 py-0.5 text-center" onClick={onOpen} >
                                                Connect Wallet
                                            </button>
                                        }
                                        <div className='ml-1'>
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
                                                    <DropdownItem key="suidevnet"  startContent={<SUIWallet className={iconClasses} />} onClick={()=>setSelectedKeys(<><SUIWallet className={iconClasses}/>Sui devnet<Down/></>)}>
                                                        Sui
                                                    </DropdownItem>
                                                    {/* <DropdownItem key="suitestnet"  startContent={<SUIWallet className={iconClasses} />}>
                                                        Sui testnet
                                                    </DropdownItem>
                                                    <DropdownItem key="suimainnet"  startContent={<SUIWallet className={iconClasses} />}>
                                                        Sui mainnet
                                                    </DropdownItem> */}
                                                    <DropdownItem key="klaytntestnet"  startContent={<KlayIcon className={iconClasses} />} onClick={()=>setSelectedKeys(<><KlayIcon className={iconClasses}/>Klaytn testnet<Down/></>)} >
                                                        Klaytn
                                                    </DropdownItem>
                                                    {/* <DropdownItem key="klaytnmainnet"  startContent={<KlayIcon className={iconClasses} />}>
                                                        Klaytn mainnet
                                                    </DropdownItem> */}
                                                    <DropdownItem key="arbitrumtestnet"  startContent={<ArbitrumIcon className={iconClasses} />} onClick={()=>setSelectedKeys(<><ArbitrumIcon className={iconClasses}/>Arbitrum testnet<Down/></>)}>
                                                        Arbitrum
                                                    </DropdownItem>
                                                    {/* <DropdownItem key="arbitrummainnet"  startContent={<ArbitrumIcon className={iconClasses} />}>
                                                        Arbitrum mainnet
                                                    </DropdownItem> */}
                                                    <DropdownItem key="algorandtestnet"  startContent={<AlgorandIcon className={iconClasses} />} onClick={()=>setSelectedKeys(<><AlgorandIcon className={iconClasses}/>Algorand testnet<Down/></>)}>
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
        </Fragment>
    );
}
