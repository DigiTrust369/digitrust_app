import ProfileContainer from "@/components/Profile";
import React, { useEffect, useState } from "react";

const fetchProfile = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/user?user_id=user_v1`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
};

type TVault = {
  name: string;
  balance: number;
  list_price: string;
  current_price: string;
  manager: string;
  tvl: number;
  monthly_return: string;
  daily_return: string;
  logo_url: string;
};

interface IProfile {
  name: string,
  holding_amount: number,
  managed_amount: number,
  description: string,
  wallet: string,
  logo_url: string,
  vaults: TVault[],
  dgt_amount: number
}

function Profile() {
  // const [data, setData] = useState<IProfile>({
  //   name: "test",
  //   holding_amount: 0,
  //   managed_amount: 0,
  //   description: "test",
  //   wallet: "0x000",
  //   logo_url: "test",
  //   vaults: [],
  //   dgt_amount: 0
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const profile = await fetchProfile();
  //       if (!profile || Object.keys(profile).length === 0) {
  //         setData({
  //           name: "test",
  //           holding_amount: 0,
  //           managed_amount: 0,
  //           description: "test",
  //           wallet: "0x000",
  //           logo_url: "test",
  //           vaults: [],
  //           dgt_amount: 0
  //         });
  //       } else {
  //         setData(profile);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //       // Handle error state if needed
  //       setData({
  //         name: "test",
  //         holding_amount: 0,
  //         managed_amount: 0,
  //         description: "test",
  //         wallet: "0x000",
  //         logo_url: "test",
  //         vaults: [],
  //         dgt_amount: 0
  //       });
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      {/* <ProfileContainer
        name={data.name}
        holdingAmount={data.holding_amount}
        managedAmount={data.managed_amount}
        description={data.description}
        wallet={data.wallet}
        logoUrl={data.logo_url}
        vaults={data.vaults}
        dgtAmount={data.dgt_amount}
      /> */}
    </div>
  );
}

export default Profile;