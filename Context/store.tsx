'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, Children, ReactElement } from "react";
import AlgorandIcon from "@/icons/AlgorandIcon";

interface ContextProps {
    userEmail: string,
    setUserEmail: Dispatch<SetStateAction<string>>,
    chain: string,
    setChain: Dispatch<SetStateAction<string>>,
    selectedKeys: ReactElement<any, any>,
    setSelectedKeys: Dispatch<SetStateAction<ReactElement<any, any>>>,
}

const GlobalContext = createContext<ContextProps>({
    userEmail: '',
    setUserEmail: (): string => '',
    chain: '',
    setChain: (): string => '',
    selectedKeys: <AlgorandIcon />,
    setSelectedKeys: (): ReactElement<any, any> => <></>,
})

export const GlobalContextProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState('');
    const [chain, setChain] = useState('Algorand');
    const [selectedKeys, setSelectedKeys] = useState(
        <AlgorandIcon />
    );
    return (
        <GlobalContext.Provider value={{ userEmail, setUserEmail, chain, setChain, selectedKeys, setSelectedKeys }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);