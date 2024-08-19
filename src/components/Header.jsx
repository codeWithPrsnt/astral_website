import Button from "@/microcomponents/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showSideHeader, setShowSideHeader] = useState(false);
  const img =
    "https://s3-alpha-sig.figma.com/img/bcc3/aa86/26a6304b340f2452f8c91a497fb054b1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nnvvUOqjzFp7XnQvbz8ZEk~JqT3ESY1IlPLbqx76WIY006zYVpInSmMH-wztX1wWM6I7WZ7Hr4nkOwY~W2rS5SKqf7OwyDM4aWiY~9yGTMXp3Tx5PZMY~0GZ74zkXEh53n2jlTP~o8j0KFym6k96qAwAmoD9pcF4wKFiZXE21XTd4O-ZXoWflJr7Q-PADPR3geT7I7iTu~KO0dYSEray3L2Kav0y8Y~0wqKxcm28A1eGsxK7lVMShrMB5gOPveHfXQdGm4ytCrE4ANkxktKg1ZxoVtsdGhFVU9kZlyEAEsLWEhV8KZSN1P2JQ-JiwAn3wwLG9aRXWjyH5O-7woH77Q__";
  return (
    <header className="bg-[#0060AF] text-white h-24 w-[100vw]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={150}
              height={100}
              className="h-8 w-auto"
              src={img}
              alt="Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setShowSideHeader(true)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-5">
          {links.map(({ id, name, url }) => (
            <Link
              className="text-sm font-semibold leading-6 my-auto "
              href={url}
              key={id}
            >
              {name}
            </Link>
          ))}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            href="#footer"
            className="text-sm font-semibold leading-6 "
          >
            Enqiure Now <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
        </div>
        
      </nav>
      {showSideHeader && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 bg-gray-500">
                <span className="sr-only">Your Company</span>
                <Image
                  width={150}
                  height={50}
                  className="h-8 w-auto"
                  src={img}
                  alt="Logo"
                />
              </a>
              <button
                onClick={() => setShowSideHeader(false)}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root text-gray-800">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {links.map(({ id, name, url }) => (
                    <Link
                      className="-mx-2 block rounded-lg px-2 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                      href={url}
                      key={id}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    href="#footer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  hover:bg-gray-50"
                  >
                    Enqiure Now{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

const links = [
  {
    id: 1,
    name: "About",
    url: "#about",
  },
  {
    id: 2,
    name: "Category",
    url: "#category",
  },
  {
    id: 3,
    name: "Services",
    url: "#services",
  },
  {
    id: 4,
    name: "Colours",
    url: "#colours",
  },
  {
    id: 5,
    name: "Downloads",
    url: "#downloads",
  },
  {
    id: 6,
    name: "Become A Dealer",
    url: "#become-a-dealer",
  },
  {
    id: 7,
    name: "Blogs",
    url: "#blogs",
  },
  {
    id: 8,
    name: "Contact",
    url: "#contact",
  },
];
