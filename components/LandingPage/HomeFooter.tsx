import { FormEvent, useState } from "react";
import Image from "next/image";
import LFooter from "./Footer";
import bgNewsletter from "@/assets/images/bg-newsletter.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = {
      email,
    };

    const response = await fetch("/api/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    alert(data.data.tableRange);

    setEmail("");
  }

  return (
    <footer className="text-sm xl:text-base">
      {/* Newsletter */}
      <div className="p-[90px] border-b border-b-[#C3D4E9]">
        <div className="relative h-full w-full overflow-hidden rounded-[10px] object-cover">
          <Image
            className="absolute h-full w-full scale-110"
            src={bgNewsletter}
            alt="bgNewsletter"
          ></Image>

          <div className="relative space-y-[30px] py-[100px] pl-[70px] text-white">
            <div className="space-y-[13px]">
              <h1 className="text-4xl font-bold leading-[110%] xl:text-[50px]">
                Get Started with DigiTrust Today!
              </h1>
              <p className="text-base font-normal leading-[150%] xl:text-xl">
                Subscribe to our newsletter to get early information and special
                calls.
              </p>
            </div>
            <div className="text-gray-800">
              <form onSubmit={submitHandler}>
                <input
                  className="w-[500px] rounded-full py-[25px] pl-[30px] pr-[200px] focus:outline-none xl:text-base"
                  type="text"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  type="submit"
                  className="absolute left-[436px] mt-[6px] items-center rounded-full bg-gray-800 px-[45px] py-[19px] text-white duration-300 hover:bg-gray-800/90"
                >
                  Start
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <LFooter />
    </footer>
  );
}
