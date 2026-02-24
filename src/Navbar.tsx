import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./components/Logo";
import MobileNavbar from "./MobileNavbar";
import Anchors from "./components/Anchors";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(() => {
    const stored = localStorage.getItem("mobileDrawerOpen");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.classList.add("no-scroll");
    }
    else {
      document.body.classList.remove("no-scroll");
    }

    localStorage.setItem('mobileDrawerOpen', JSON.stringify(mobileDrawerOpen));
  }, [mobileDrawerOpen]);

  return (
    <nav className="top-0 z-50 py-3 px-5 lg:px-20 text-base bg-linear-to-r from-[#83C4AB]/80 to-[#FFFFFF]/80">
      <div className="">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Dropdowns */}
          <div className="hidden md:flex lg:hidden lg:items-center lg:justify-between md:space-x-[20%] lg:space-x-12 text-[70%] text-white mr-15">
            <Anchors
              styles="flex hover:text-[#83C4AB]"
              setMobileDrawerOpen={setMobileDrawerOpen}
            />
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex lg:hidden lg:items-center space-x-4 text-[70%]">
            <a href="#" className="text-gray-400 px-3 py-2 md:px-6 md:py-3 rounded hover:bg-[#F7F1F1]">
              Login
            </a>

            <a href="#" className="bg-[#5ABF99] hover:bg-[#83C4AB] text-white px-4 py-3 rounded whitespace-nowrap">
              Sign Up
            </a>
          </div>

          <div className="md:hidden lg:flex items-center">
            {/* Dropdowns */}
            <div className="hidden md:flex lg:flex lg:items-center lg:justify-between md:space-x-[20%] lg:space-x-12 text-[70%] text-white mr-15">
              <Anchors
                styles="flex hover:text-[#83C4AB]"
                setMobileDrawerOpen={setMobileDrawerOpen}
              />
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex lg:flex lg:items-center space-x-4 text-[70%]">
              <a href="#" className="text-gray-400 px-3 py-2 md:px-6 md:py-3 rounded hover:bg-[#F7F1F1]">
                Login
              </a>

              <a href="#" className="bg-[#5ABF99] hover:bg-[#83C4AB] text-white px-4 py-3 rounded whitespace-nowrap">
                Sign Up
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end md:hidden lg:hidden">
            <button className="cursor-pointer text-[#5ABF99]" onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X className="mr-3" /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Hamburger Menu */}
        <MobileNavbar mobileDrawerOpen={mobileDrawerOpen} setMobileDrawerOpen={setMobileDrawerOpen} />
      </div>
    </nav>
  );
};

export default Navbar;