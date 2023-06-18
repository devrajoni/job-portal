import { useEffect, useState } from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiSquares2X2, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Find Job",
    link: "/job",
  },
  {
    name: "Candidates",
    link: "/candidate",
  },
  {
    name: "Companies",
    link: "/company",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Pricing",
    link: "/price",
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className={`${
          navbar
            ? "fixed left-0 right-0 w-full z-50 bg-black text-white"
            : " w-full z-50 bg-[#F1F2F4]"
        }`}
      >
        <nav className="flex justify-between py-6 px-6 md:px-12 lg:px-32 font-medium items-center">
          <ul className="hidden lg:flex justify-between gap-10">
            {links.map((item) => (
              <li
                className="hover:underline hover:underline-offset-[28px] text-xl font-bold hover:text-[#0098db] font-bold"
                key={item.name}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div>
            <Link to="/">
              <div className="flex gap-2 font-bold text-xl">
                <BsTelephoneInbound className="mt-1 text-[#0098db]" />
                <p className="">02312345678</p>
              </div>
            </Link>
          </div>
          <div
            className="text-3xl cursor-pointer lg:hidden text-black"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiXMark /> : <HiSquares2X2 />}

            {/* <ion-icon name={open ? "close-outline" : "grid-outline"}></ion-icon> */}
          </div>
        </nav>
        <SideMenu isOpen={open} setOpen={setOpen} />
      </div>
    </>
  );
}

function SideMenu({ isOpen, setOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } block lg:hidden  z-50 transition duration-500`}
    >
      <ul className="py-4 px-6 md:px-12 lg:flex justify-between gap-10">
        {links.map((item) => (
          <li
            className="hover:underline hover:underline-offset-[20px] py-2 hover:text-[#0098db] font-bold"
            key={item.name}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
