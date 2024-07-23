"use client";
import dynamic from "next/dynamic";

const ProfileChild = dynamic(() => import("@/components/Profile/index"), {
  ssr: false,
});

const fetchProfile = async () => {
  const response = await fetch("https://dgt-dev.vercel.app/v1/user?adr=0x132");

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export default async function profile() {
  const profile = await fetchProfile();

  const dataExample = {
    "profile_id": "unique_profile_id_4",
    "username": "user123",
    "email": "user123@example.com",
    "management_fee":"0.3",
    "bio": "This is a brief bio of user123.",
    "profile_picture_url": "https://example.com/profile_picture.jpg",
    "wallet_address": "0x1234567890abcdef1234567890abcdef12345678",
    "asset_portfolio": [
        {
            "asset_id": "asset_id_1",
            "amount": 10,
            "asset_type": "cryptocurrency"
        },
        {
            "asset_id": "asset_id_2",
            "amount": 5,
            "asset_type": "token"
        }
    ],
    "transaction_history": [
        {
            "transaction_id": "tx_1",
            "date": "2023-07-18T00:00:00Z",
            "transaction_type": "deposit",
            "status": "completed"
        },
        {
            "transaction_id": "tx_2",
            "date": "2023-07-19T00:00:00Z",
            "transaction_type": "withdrawal",
            "status": "pending"
        }
    ],
    "followers": [
        {
            "name": "dgt_v1"
        }
    ],
    "following": [
        {
            "name": "dgt_v1"
        }
    ],
    "created_at": 1626624000,
    "updated_at": 1626627600
  };

  if (!profile || Object.keys(profile).length === 0) {
    return <div>User not found</div>;
  }
  return (
    <main className="overflow-hidden flex flex-col min-h-screen">
      <div className="container mx-auto px-4">
        <ProfileChild
          name={profile.name}
          holdingAmount={profile.holding_amount}
          managedAmount={profile.managed_amount}
          description={profile.des}
          wallet={profile.wallet}
          logoUrl={profile.logo_url}
          adrUrl={profile.adr_url}
          vaults={profile.vaults}
          dgtAmount={profile.dgt_amount}
          
        ></ProfileChild>
      </div>
    </main>
  );
}
