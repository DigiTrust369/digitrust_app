"use client";

import { useEffect, useState } from 'react';

interface ResponseProps {
  id: number;
  name?: string;
  symbol?: string;
  price?: number;
  logo_url?: string;
}

export function fetchTokens() {
  const [response, setResponse] = useState<ResponseProps[]>();
  const [error, setError] = useState('');

  async function fetchData() {
    try {
      const res = await fetch('https://dgt-dev.vercel.app/v1/list_token');
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setError("Error")
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { response, error }
}

// export const Tokens = [
//   {
//     logo: "https://assets.coingecko.com/coins/images/14004/large/RAI-logo-coin.png?1613592334",
//     label: "RAI",
//     price: 2.83,
//     name: "RAI",
//   },
//   {
//     logo: "https://assets.coingecko.com/coins/images/12271/large/512x512_Logo_no_chop.png?1606986688",
//     label: "SUSHI",
//     price: 1.67,
//     name: "SUSHI",
//   },
//   {
//     logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72/logo.png",
//     label: "ENS",
//     price: 20.65,
//     name: "ENS",
//   },
// ];

// export default Tokens;

