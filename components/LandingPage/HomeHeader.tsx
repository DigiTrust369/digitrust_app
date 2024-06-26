import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import digitrustLogo from "@/assets/images/digitrust.png";
import digitrustNoTextLogo from "@/assets/images/digitrust_notext.png";

const navLinks = [
  {
    id: 1,
    title: "Product",
    link: "/",
  },

  {
    id: 2,
    title: "Community",
    link: "/",
  },

  {
    id: 3,
    title: "Resources",
    link: "/",
  },

  {
    id: 4,
    title: "About Us",
    link: "/",
  },
];

export default function Header() {
  return (
    // <div className="w-full font-primary">
    //   <header className="flex items-center justify-between px-[120px] py-[18px]">
    //     <div className="flex flex-1">
    //       <Link className="flex items-center gap-x-0.5" href="/">
    //         <div className="w-4 rounded-full bg-blue-600 p-3"></div>
    //         <svg
    //           width="150"
    //           height="22"
    //           viewBox="0 0 150 22"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M8.90533 21H0.150735V0.678311H8.90533C10.1645 0.696694 11.2123 0.843753 12.0487 1.11949C13.4733 1.58824 14.6268 2.44761 15.5092 3.69761C16.2169 4.70864 16.6994 5.80239 16.9568 6.97886C17.2142 8.15533 17.3428 9.27666 17.3428 10.3428C17.3428 13.045 16.8005 15.3336 15.716 17.2086C14.2454 19.7362 11.9752 21 8.90533 21ZM12.0625 5.86213C11.4099 4.75919 10.1186 4.20772 8.18842 4.20772H4.27298V17.4706H8.18842C10.1921 17.4706 11.5892 16.4825 12.3796 14.5064C12.8116 13.4219 13.0276 12.1305 13.0276 10.6324C13.0276 8.56434 12.7059 6.97427 12.0625 5.86213ZM20.2243 0.678311H24.443V21H20.2243V0.678311ZM40.8768 20.5037C39.7555 21.193 38.3768 21.5377 36.7408 21.5377C34.0478 21.5377 31.8419 20.6048 30.1232 18.739C28.3309 16.864 27.4347 14.2996 27.4347 11.046C27.4347 7.75552 28.3401 5.11765 30.1507 3.13236C31.9614 1.14706 34.3557 0.154414 37.3336 0.154414C39.9164 0.154414 41.989 0.811583 43.5515 2.12592C45.1232 3.43107 46.0239 5.0625 46.2537 7.02022H42.0763C41.7546 5.63235 40.9687 4.66269 39.7187 4.11122C39.0202 3.80791 38.2436 3.65625 37.3888 3.65625C35.7528 3.65625 34.4062 4.27666 33.3493 5.51747C32.3015 6.74908 31.7776 8.6057 31.7776 11.0873C31.7776 13.5873 32.3474 15.3566 33.4871 16.3952C34.6268 17.4338 35.9228 17.9531 37.375 17.9531C38.7996 17.9531 39.9669 17.5441 40.8768 16.7261C41.7868 15.8989 42.3474 14.8189 42.5588 13.4862H37.8575V10.0947H46.3226V21H43.5101L43.0827 18.4632C42.2647 19.4283 41.5294 20.1085 40.8768 20.5037ZM50.0588 0.678311H54.2776V21H50.0588V0.678311ZM73.0138 0.678311V4.27666H66.9338V21H62.6599V4.27666H56.5524V0.678311H73.0138ZM84.1397 13.0313H79.7555V21H75.6057V0.678311H85.5735C86.9981 0.705885 88.0919 0.880517 88.8548 1.20221C89.6268 1.5239 90.2794 1.99725 90.8125 2.62224C91.2537 3.13695 91.6029 3.7068 91.8603 4.3318C92.1176 4.9568 92.2463 5.66912 92.2463 6.46875C92.2463 7.43383 92.0027 8.38511 91.5156 9.32261C91.0285 10.2509 90.2243 10.9081 89.1029 11.2941C90.0404 11.671 90.7022 12.2086 91.0882 12.9072C91.4834 13.5965 91.6811 14.6535 91.6811 16.0781V17.443C91.6811 18.3713 91.7178 19.0009 91.7913 19.3318C91.9016 19.8557 92.159 20.2417 92.5634 20.4899V21H87.8897C87.761 20.5496 87.6691 20.1866 87.614 19.9108C87.5037 19.341 87.4439 18.7574 87.4347 18.1599L87.4072 16.2711C87.3888 14.9752 87.1498 14.1112 86.6902 13.6792C86.2399 13.2472 85.3897 13.0313 84.1397 13.0313ZM86.7178 9.3364C87.5634 8.95037 87.9862 8.1875 87.9862 7.0478C87.9862 5.81618 87.5772 4.98897 86.7592 4.56618C86.2996 4.32721 85.6103 4.20772 84.6912 4.20772H79.7555V9.66728H84.5671C85.523 9.66728 86.2399 9.55699 86.7178 9.3364ZM107.936 13.1691V0.678311H112.251V13.1691C112.251 15.329 111.915 17.011 111.244 18.2151C109.994 20.421 107.609 21.5239 104.089 21.5239C100.569 21.5239 98.1792 20.421 96.92 18.2151C96.2491 17.011 95.9136 15.329 95.9136 13.1691V0.678311H100.229V13.1691C100.229 14.5662 100.394 15.5864 100.725 16.2298C101.24 17.3695 102.361 17.9393 104.089 17.9393C105.808 17.9393 106.925 17.3695 107.439 16.2298C107.77 15.5864 107.936 14.5662 107.936 13.1691ZM123.694 18.0634C124.696 18.0634 125.509 17.9531 126.134 17.7325C127.32 17.3097 127.913 16.5239 127.913 15.375C127.913 14.704 127.619 14.1847 127.03 13.8171C126.442 13.4586 125.518 13.1415 124.259 12.8658L122.108 12.3833C119.994 11.9053 118.533 11.386 117.724 10.8254C116.355 9.88787 115.67 8.42188 115.67 6.42739C115.67 4.60754 116.332 3.09559 117.655 1.89155C118.979 0.687503 120.923 0.0854806 123.487 0.0854806C125.629 0.0854806 127.453 0.655333 128.96 1.79504C130.477 2.92555 131.272 4.57077 131.346 6.7307H127.265C127.191 5.50827 126.658 4.63971 125.665 4.125C125.004 3.78493 124.181 3.61489 123.198 3.61489C122.104 3.61489 121.231 3.83548 120.578 4.27666C119.926 4.71783 119.599 5.33364 119.599 6.12408C119.599 6.85019 119.921 7.39246 120.564 7.75092C120.978 7.98989 121.86 8.27022 123.211 8.59191L126.713 9.43291C128.248 9.80055 129.406 10.2923 130.187 10.9081C131.401 11.864 132.007 13.2472 132.007 15.0579C132.007 16.9145 131.295 18.4586 129.87 19.6903C128.455 20.9127 126.451 21.5239 123.859 21.5239C121.212 21.5239 119.131 20.9219 117.614 19.7178C116.097 18.5046 115.339 16.841 115.339 14.727H119.392C119.521 15.6553 119.774 16.3493 120.151 16.8088C120.84 17.6452 122.021 18.0634 123.694 18.0634ZM149.916 0.678311V4.27666H143.836V21H139.562V4.27666H133.455V0.678311H149.916Z"
    //             fill="black"
    //           />
    //         </svg>
    //       </Link>
    //     </div>

    //     <div className="flex justify-center">
    //       <ul className="flex items-center gap-x-[40px] font-medium md:text-xs xl:text-base">
    //         <li>
    //           <a href="#">Product</a>
    //         </li>
    //         <li>
    //           <a href="#">Community</a>
    //         </li>
    //         <li>
    //           <a href="#">Resources</a>
    //         </li>
    //         <li>
    //           <a href="#">About Us</a>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="flex flex-1 justify-end">
    //       <button className="rounded-[10px] bg-blue-600 px-6 py-4 text-base font-medium text-white">
    //         Launch App
    //       </button>
    //     </div>
    //   </header>
    // </div>
    <header className="w-[84%] mx-auto flex items-center justify-between px-5 py-2 text-sm xl:text-base bg-white rounded-xl">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image
            src={digitrustLogo}
            alt="digitrust logo"
            className="hidden sm:block h-[50px] w-[205px] object-fit"
          />
          <Image
            src={digitrustNoTextLogo}
            alt="digitrust logo"
            className="sm:hidden object-fit"
            width={60}
          />
        </Link>
      </div>
      {/* Navigations */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-x-10">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                className="capitalize duration-300 hover:text-blue-600"
                href={item.link}
                key={item.id}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Button */}
      <a className="block" href="/home">
        <Button>Launch App</Button>
      </a>
    </header>
  );
}
