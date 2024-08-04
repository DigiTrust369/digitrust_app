"use client";
import dynamic from "next/dynamic";

const ProfileChild = dynamic(() => import("@/components/Profile/index"), {
  ssr: false,
});

const fetchProfile = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/user?email=pn_24@gmail.com`);

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export default async function profile() {
  const profile = await fetchProfile();

  const dataExample = {
    "name": "Pnha2411",
    "wallet": "0x7D...E95",
    "adr_url": "https://app.dappflow.org/explorer/account/I5ZVS5JQFRG4SBQPEYPP4UDTEMSMHXY6RO5BQ3GNTDKTFQWV3S7JXMYPCI/transactions",
    "des": "It is the best capital for funding allocation",
    "balance": "54241$",
    "twitter": "https://x.com/pqd_2411",
    "allTimeProfit": {
        "amount": "323,4",
        "profitloss": "3.4%"
    },
    "bestPerformer": {
        "coinID": "sol_1",
        "amount": "14.23",
        "profitloss": "4.5%"
    },
    "worstPerformer": {
        "coinID": "blas_v2",
        "amount": "3.412",
        "profitloss": "5.7%"
    },
    "assets": [
        {
            "asset": "NOT coin",
            "symbol": "NOT",
            "contract": "0x138234234",
            "chain": "btc layer-2",
            "invest_amount": 10,
            "weight": "67.4%",
            "holding": "1348$",
            "price_change": {
                "24h": "5.5"
            },
            "dgt_score": 8,
            "status": true,
            "total_usd": "1.67$",
            "token_amount": "5000",
            "price": "0.000059$",
            "profit": "20%",
            "logo_url": "https://dd.dexscreener.com/ds-data/tokens/ton/eqavlwfdxgf2lxm67y4yzc17wykd9a0guwpkms1gosm__not.png",
            "asset_url": "https://app.dappflow.org/explorer/asset/3797/transactions"
        },
        {
            "asset": "Resistance DOG",
            "symbol": "REDO",
            "contract": "0x138234234",
            "chain": "btc layer-2",
            "invest_amount": 90,
            "weight": "32.6%",
            "holding": "652$",
            "price_change": {
                "24h": "6.5"
            },
            "dgt_score": 8,
            "status": true,
            "total_usd": "24.7$",
            "token_amount": "2407",
            "price": "0.000013259$",
            "profit": "24.5%",
            "logo_url": "https://dd.dexscreener.com/ds-data/tokens/ton/eqbz_cafpydr5kuts0anxh0ztdhkpezonmlja2sngllm4cko.png",
            "asset_url": "https://app.dappflow.org/explorer/asset/10984/transactions"
        }
    ],
    "logo_url": "https://drive.google.com/file/d/1PHKQkJsCCvxi1PWc1kDoCsCZgsMHMK0O/view?usp=sharing"
  };

  if (!profile || Object.keys(profile).length === 0) {
    return <div>User not found</div>;
  }
  return (
    <main className="overflow-hidden flex flex-col min-h-screen">
      <div className="container mx-auto px-4">
        <ProfileChild
          name={profile.name}
          wallet={profile.wallet}
          adrUrl={profile.adr_url}
          description={profile.des}
          balance={profile.balance} 
          twitter={profile.twitter} 
          allTimeProfit={profile.allTimeProfit} 
          bestPerformer={profile.bestPerformer} 
          worstPerformer={profile.worstPerformer} 
          assets={profile.assets} 
          logo_url={profile.logo_url}
        ></ProfileChild>
      </div>
    </main>
  );
}
