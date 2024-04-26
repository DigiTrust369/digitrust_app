import Link from "next/link";
import Button from "@/components/Button";

const navLinksLeft = [
  {
    id: 1,
    title: "Work With Us",
    link: "/",
  },

  {
    id: 2,
    title: "Advertise With Us",
    link: "/",
  },

  {
    id: 3,
    title: "Support Us",
    link: "/",
  },

  {
    id: 4,
    title: "Business Advices",
    link: "/",
  },
];

const navLinksCenter = [
  {
    id: 1,
    title: "Private Coaching",
    link: "/",
  },

  {
    id: 2,
    title: "Our Work",
    link: "/",
  },

  {
    id: 3,
    title: "Our Commitment",
    link: "/",
  },

  {
    id: 4,
    title: "Our Team",
    link: "/",
  },
];

const navLinksRight = [
  {
    id: 1,
    title: "About Us",
    link: "/",
  },

  {
    id: 2,
    title: "FAQs",
    link: "/",
  },

  {
    id: 3,
    title: "Report a Bug",
    link: "/",
  },
];

export default function Footer() {
  return (
    <>
      <div className="justify-between space-y-12 px-[60px] py-14 lg:flex lg:space-y-0 xl:px-[120px] bg-white">
        <div className="space-y-10 lg:space-y-[60px]">
          {/* Logo */}
          <Link href="/">
            <svg
              className="h-auto w-36 xl:w-44"
              viewBox="0 0 171 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.9053 21H21.1507V0.678311H29.9053C31.1645 0.696694 32.2123 0.843753 33.0487 1.11949C34.4733 1.58824 35.6268 2.44761 36.5092 3.69761C37.2169 4.70864 37.6994 5.80239 37.9568 6.97886C38.2142 8.15533 38.3428 9.27666 38.3428 10.3428C38.3428 13.045 37.8005 15.3336 36.716 17.2086C35.2454 19.7362 32.9752 21 29.9053 21ZM33.0625 5.86213C32.4099 4.75919 31.1186 4.20772 29.1884 4.20772H25.273V17.4706H29.1884C31.1921 17.4706 32.5892 16.4825 33.3796 14.5064C33.8116 13.4219 34.0276 12.1305 34.0276 10.6324C34.0276 8.56434 33.7059 6.97427 33.0625 5.86213ZM41.2243 0.678311H45.443V21H41.2243V0.678311ZM61.8768 20.5037C60.7555 21.193 59.3768 21.5377 57.7408 21.5377C55.0478 21.5377 52.8419 20.6048 51.1232 18.739C49.3309 16.864 48.4347 14.2996 48.4347 11.046C48.4347 7.75552 49.3401 5.11765 51.1507 3.13236C52.9614 1.14706 55.3557 0.154414 58.3336 0.154414C60.9164 0.154414 62.989 0.811583 64.5515 2.12592C66.1232 3.43107 67.0239 5.0625 67.2537 7.02022H63.0763C62.7546 5.63235 61.9687 4.66269 60.7187 4.11122C60.0202 3.80791 59.2436 3.65625 58.3888 3.65625C56.7528 3.65625 55.4062 4.27666 54.3493 5.51747C53.3015 6.74908 52.7776 8.6057 52.7776 11.0873C52.7776 13.5873 53.3474 15.3566 54.4871 16.3952C55.6268 17.4338 56.9228 17.9531 58.375 17.9531C59.7996 17.9531 60.9669 17.5441 61.8768 16.7261C62.7868 15.8989 63.3474 14.8189 63.5588 13.4862H58.8575V10.0947H67.3226V21H64.5101L64.0827 18.4632C63.2647 19.4283 62.5294 20.1085 61.8768 20.5037ZM71.0588 0.678311H75.2776V21H71.0588V0.678311ZM94.0138 0.678311V4.27666H87.9338V21H83.6599V4.27666H77.5524V0.678311H94.0138ZM105.14 13.0313H100.756V21H96.6057V0.678311H106.574C107.998 0.705885 109.092 0.880517 109.855 1.20221C110.627 1.5239 111.279 1.99725 111.812 2.62224C112.254 3.13695 112.603 3.7068 112.86 4.3318C113.118 4.9568 113.246 5.66912 113.246 6.46875C113.246 7.43383 113.003 8.38511 112.516 9.32261C112.028 10.2509 111.224 10.9081 110.103 11.2941C111.04 11.671 111.702 12.2086 112.088 12.9072C112.483 13.5965 112.681 14.6535 112.681 16.0781V17.443C112.681 18.3713 112.718 19.0009 112.791 19.3318C112.902 19.8557 113.159 20.2417 113.563 20.4899V21H108.89C108.761 20.5496 108.669 20.1866 108.614 19.9108C108.504 19.341 108.444 18.7574 108.435 18.1599L108.407 16.2711C108.389 14.9752 108.15 14.1112 107.69 13.6792C107.24 13.2472 106.39 13.0313 105.14 13.0313ZM107.718 9.3364C108.563 8.95037 108.986 8.1875 108.986 7.0478C108.986 5.81618 108.577 4.98897 107.759 4.56618C107.3 4.32721 106.61 4.20772 105.691 4.20772H100.756V9.66728H105.567C106.523 9.66728 107.24 9.55699 107.718 9.3364ZM128.936 13.1691V0.678311H133.251V13.1691C133.251 15.329 132.915 17.011 132.244 18.2151C130.994 20.421 128.609 21.5239 125.089 21.5239C121.569 21.5239 119.179 20.421 117.92 18.2151C117.249 17.011 116.914 15.329 116.914 13.1691V0.678311H121.229V13.1691C121.229 14.5662 121.394 15.5864 121.725 16.2298C122.24 17.3695 123.361 17.9393 125.089 17.9393C126.808 17.9393 127.925 17.3695 128.439 16.2298C128.77 15.5864 128.936 14.5662 128.936 13.1691ZM144.694 18.0634C145.696 18.0634 146.509 17.9531 147.134 17.7325C148.32 17.3097 148.913 16.5239 148.913 15.375C148.913 14.704 148.619 14.1847 148.03 13.8171C147.442 13.4586 146.518 13.1415 145.259 12.8658L143.108 12.3833C140.994 11.9053 139.533 11.386 138.724 10.8254C137.355 9.88787 136.67 8.42188 136.67 6.42739C136.67 4.60754 137.332 3.09559 138.655 1.89155C139.979 0.687503 141.923 0.0854806 144.487 0.0854806C146.629 0.0854806 148.453 0.655333 149.96 1.79504C151.477 2.92555 152.272 4.57077 152.346 6.7307H148.265C148.191 5.50827 147.658 4.63971 146.665 4.125C146.004 3.78493 145.181 3.61489 144.198 3.61489C143.104 3.61489 142.231 3.83548 141.578 4.27666C140.926 4.71783 140.599 5.33364 140.599 6.12408C140.599 6.85019 140.921 7.39246 141.564 7.75092C141.978 7.98989 142.86 8.27022 144.211 8.59191L147.713 9.43291C149.248 9.80055 150.406 10.2923 151.187 10.9081C152.401 11.864 153.007 13.2472 153.007 15.0579C153.007 16.9145 152.295 18.4586 150.87 19.6903C149.455 20.9127 147.451 21.5239 144.859 21.5239C142.212 21.5239 140.131 20.9219 138.614 19.7178C137.097 18.5046 136.339 16.841 136.339 14.727H140.392C140.521 15.6553 140.774 16.3493 141.151 16.8088C141.84 17.6452 143.021 18.0634 144.694 18.0634ZM170.916 0.678311V4.27666H164.836V21H160.562V4.27666H154.455V0.678311H170.916Z"
                fill="black"
              />
              <circle cx="9.5" cy="11.5" r="9.5" fill="#3461FF" />
            </svg>
          </Link>

          {/* Socical Link */}
          <div className="flex items-center gap-x-[47px]">
            {/* Instagram */}
            <Link href="/">
              <svg
                className="text-socialLink h-auto w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M13.9997 2.33325C17.1695 2.33325 17.565 2.34492 18.8087 2.40325C20.0512 2.46159 20.897 2.65642 21.6413 2.94575C22.4113 3.24209 23.06 3.64342 23.7087 4.29092C24.3019 4.87413 24.761 5.57961 25.0538 6.35825C25.342 7.10142 25.538 7.94842 25.5963 9.19092C25.6512 10.4346 25.6663 10.8301 25.6663 13.9999C25.6663 17.1698 25.6547 17.5653 25.5963 18.8089C25.538 20.0514 25.342 20.8973 25.0538 21.6416C24.7618 22.4207 24.3027 23.1263 23.7087 23.7089C23.1253 24.302 22.4199 24.761 21.6413 25.0541C20.8982 25.3423 20.0512 25.5383 18.8087 25.5966C17.565 25.6514 17.1695 25.6666 13.9997 25.6666C10.8298 25.6666 10.4343 25.6549 9.19067 25.5966C7.94817 25.5383 7.10234 25.3423 6.35801 25.0541C5.57906 24.7618 4.87346 24.3027 4.29067 23.7089C3.69732 23.1258 3.23826 22.4203 2.94551 21.6416C2.65617 20.8984 2.46134 20.0514 2.40301 18.8089C2.34817 17.5653 2.33301 17.1698 2.33301 13.9999C2.33301 10.8301 2.34467 10.4346 2.40301 9.19092C2.46134 7.94725 2.65617 7.10259 2.94551 6.35825C3.23745 5.57913 3.69661 4.87346 4.29067 4.29092C4.87362 3.69736 5.57917 3.23827 6.35801 2.94575C7.10234 2.65642 7.94701 2.46159 9.19067 2.40325C10.4343 2.34842 10.8298 2.33325 13.9997 2.33325ZM13.9997 8.16659C12.4526 8.16659 10.9688 8.78117 9.87489 9.87513C8.78092 10.9691 8.16634 12.4528 8.16634 13.9999C8.16634 15.547 8.78092 17.0307 9.87489 18.1247C10.9688 19.2187 12.4526 19.8333 13.9997 19.8333C15.5468 19.8333 17.0305 19.2187 18.1245 18.1247C19.2184 17.0307 19.833 15.547 19.833 13.9999C19.833 12.4528 19.2184 10.9691 18.1245 9.87513C17.0305 8.78117 15.5468 8.16659 13.9997 8.16659ZM21.583 7.87492C21.583 7.48814 21.4294 7.11721 21.1559 6.84372C20.8824 6.57023 20.5114 6.41659 20.1247 6.41659C19.7379 6.41659 19.367 6.57023 19.0935 6.84372C18.82 7.11721 18.6663 7.48814 18.6663 7.87492C18.6663 8.26169 18.82 8.63263 19.0935 8.90612C19.367 9.17961 19.7379 9.33325 20.1247 9.33325C20.5114 9.33325 20.8824 9.17961 21.1559 8.90612C21.4294 8.63263 21.583 8.26169 21.583 7.87492ZM13.9997 10.4999C14.9279 10.4999 15.8182 10.8687 16.4745 11.525C17.1309 12.1814 17.4997 13.0717 17.4997 13.9999C17.4997 14.9282 17.1309 15.8184 16.4745 16.4748C15.8182 17.1312 14.9279 17.4999 13.9997 17.4999C13.0714 17.4999 12.1812 17.1312 11.5248 16.4748C10.8684 15.8184 10.4997 14.9282 10.4997 13.9999C10.4997 13.0717 10.8684 12.1814 11.5248 11.525C12.1812 10.8687 13.0714 10.4999 13.9997 10.4999Z"
                  fill="#2563EB"
                />
              </svg>
            </Link>

            {/* Twiiter */}
            <Link href="/">
              <svg
                className="text-socialLink h-auto w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M9.539 23.5009C18.596 23.5009 23.5505 15.9964 23.5505 9.49992C23.5505 9.28992 23.5505 9.07692 23.5415 8.86692C24.5061 8.16865 25.3386 7.30415 26 6.31392C25.099 6.71119 24.1441 6.97303 23.1665 7.09092C24.1963 6.47537 24.9676 5.50687 25.337 4.36542C24.3695 4.9386 23.3105 5.34098 22.2065 5.55492C21.4643 4.76445 20.4821 4.24079 19.4121 4.06505C18.3421 3.88931 17.2441 4.0713 16.288 4.58282C15.3319 5.09435 14.5712 5.90686 14.1237 6.89451C13.6761 7.88216 13.5668 8.98982 13.8125 10.0459C11.8546 9.94774 9.93922 9.43912 8.19056 8.55303C6.4419 7.66694 4.89903 6.42318 3.662 4.90242C3.03401 5.98704 2.84236 7.27002 3.12597 8.49082C3.40958 9.71161 4.14718 10.7787 5.189 11.4754C4.40831 11.4489 3.64478 11.2393 2.96 10.8634V10.9309C2.96135 12.0671 3.35496 13.168 4.07431 14.0476C4.79366 14.9271 5.79462 15.5312 6.908 15.7579C6.48539 15.8743 6.04884 15.9324 5.6105 15.9304C5.30148 15.9314 4.99307 15.9027 4.6895 15.8449C5.00418 16.823 5.61691 17.6782 6.44187 18.2906C7.26683 18.9031 8.2627 19.2422 9.29 19.2604C7.54483 20.6311 5.3891 21.3745 3.17 21.3709C2.77898 21.3726 2.38823 21.35 2 21.3034C4.25227 22.7393 6.86795 23.5017 9.539 23.5009Z"
                  fill="#2563EB"
                />
              </svg>
            </Link>

            {/* Facebook */}
            <Link href="/">
              <svg
                className="text-socialLink h-auto w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M25.6663 13.9999C25.6663 7.55992 20.4397 2.33325 13.9997 2.33325C7.55967 2.33325 2.33301 7.55992 2.33301 13.9999C2.33301 19.6466 6.34634 24.3483 11.6663 25.4333V17.4999H9.33301V13.9999H11.6663V11.0833C11.6663 8.83159 13.498 6.99992 15.7497 6.99992H18.6663V10.4999H16.333C15.6913 10.4999 15.1663 11.0249 15.1663 11.6666V13.9999H18.6663V17.4999H15.1663V25.6083C21.058 25.0249 25.6663 20.0549 25.6663 13.9999Z"
                  fill="#2563EB"
                />
              </svg>
            </Link>
          </div>

          {/* Button */}
          <Button>Contact Us</Button>
        </div>

        <div className="space-y-10 lg:flex lg:justify-end lg:gap-x-[75px] lg:space-y-0">
          <nav>
            <ul className="space-y-3 text-sm leading-[20px] lg:space-y-[48px] xl:text-base">
              {navLinksLeft.map((item) => (
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

          <nav>
            <ul className="space-y-3 text-sm leading-[20px] lg:space-y-[48px] xl:text-base">
              {navLinksCenter.map((item) => (
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

          <nav>
            <ul className="space-y-3 text-sm leading-[20px] lg:space-y-[48px] xl:text-base">
              {navLinksRight.map((item) => (
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
        </div>
      </div>

      <div className="flex items-center justify-between bg-blue-600 px-[60px] py-10 text-white xl:px-[100px]">
        <p>© 2023 DIGITRUST - All Rights Reserved</p>
        <div className="flex items-center gap-x-24">
          <Link href="/">Terms of use</Link>
          <Link href="/">Privacy policy</Link>
        </div>
      </div>
    </>
  );
}
