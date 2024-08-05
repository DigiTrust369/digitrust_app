'use client'
import React from "react";

interface IPriceChange {
    "24h": number
}

interface IAsset {
    asset: string,
    symbol: string,
    contract: string,
    chain: string,
    invest_amount: number,
    weight: string,
    holding: string,
    price_change: IPriceChange,
    dgt_score: number,
    status: boolean,
    total_usd: string,
    token_amount: number,
    price: string,
    profit: string,
    logo_url: string,
    asset_url: string,
    created_at: string,
}

interface Props {
    data: IAsset[]
}

const AssetWatchList = (props: Props) => {
    function percentToNumber(percentString: string): number {
        // Remove the percentage sign and convert to number
        return parseFloat(percentString.replace('%', '')) / 100;
    }

    function formatRelativeTime(timestampString: string): string {
        const timestamp = parseInt(timestampString, 10);
        const date = new Date(timestamp);
        const now = new Date();
      
        const diffMs = now.getTime() - date.getTime();
        
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffMonths = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
      
        if (diffSeconds < 60) {
          return `${diffSeconds} second${diffSeconds !== 1 ? 's' : ''} ago`;
        } else if (diffMinutes < 60) {
          return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
        } else if (diffHours < 24) {
          return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 30) {
          return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        } else if (diffMonths < 12) {
          return `${diffMonths} month${diffMonths !== 1 ? 's' : ''} ago`;
        } else {
          return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
        }
      }
    const now = Date.now();

    return (
        <div className="p-6 bg-white text-card-foreground rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mx-2">Assets</h3>
            <table className="min-w-full mt-4 border border-zinc-300 bg-white">
                <thead>
                    <tr className="bg-muted text-muted-foreground">
                        <th className="p-2 border-b text-center">Type</th>
                        <th className="p-2 border-b text-center">Token</th>
                        <th className="p-2 border-b text-center">Total USD</th>
                        <th className="p-2 border-b text-center">Amount</th>
                        <th className="p-2 border-b text-center">Price</th>
                        <th className="p-2 border-b text-center">Profit</th>
                        <th className="p-2 border-b text-center">Age</th>
                        <th className="p-2 border-b text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((d, index) => (
                        <tr key={index}>
                            <td className="p-2 border-b text-center">{d.chain}</td>
                            <td className="p-2 border-b text-center">
                                <div className="flex items-center justify-center space-x-2">
                                    <img src={d.logo_url} alt={d.symbol} className="w-6 h-6" />
                                    <span>{d.symbol}</span>
                                </div>
                            </td>
                            <td className="p-2 border-b text-center">{d.total_usd}</td>
                            <td className="p-2 border-b text-center">{d.invest_amount}</td>
                            <td className="p-2 border-b text-center">{d.price}</td>
                            <td className="p-2 border-b text-center">
                                <h6 className={percentToNumber(d.profit)>0?"text-green-500":percentToNumber(d.profit)<0?"text-red-500":"text-black"}>
                                    {percentToNumber(d.profit) < 0 ? "▼" : percentToNumber(d.profit) > 0 ? "▲" : ""} {d.profit}
                                </h6>
                            </td>
                            <td className="p-2 border-b text-center">{formatRelativeTime(d.created_at.toString())}</td>
                            <td className="p-2 border-b text-center">
                                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full p-1 mx-1">+</button>
                                <button className="bg-muted text-muted-foreground hover:bg-muted/80 rounded-full p-1 mx-1">...</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssetWatchList;