import Anchors from "./components/Anchors";

type MobileNavbarProps = {
  mobileDrawerOpen: boolean,
  setMobileDrawerOpen: (mobileDrawerOpen: boolean) => void
}

const MobileNavbar = ({ mobileDrawerOpen, setMobileDrawerOpen }: MobileNavbarProps) => {
  return (
    <>
      {mobileDrawerOpen && (
        <div className="fixed top-15 left-0 right-0 z-20 bg-white p-5 flex flex-col space-y-3 justify-center items-center lg:hidden shadow-xl shadow-gray-300/50 bg-linear-to-r from-[#83C4AB]/80 to-[#FFFFFF]/80">
          <Anchors
            styles="hover:text-[#83C4AB]"
            setMobileDrawerOpen={setMobileDrawerOpen}
          />

          <a href="#" className="text-gray-400 px-3 py-2 md:px-6 md:py-3 rounded hover:bg-[#F7F1F1]">
            Login
          </a>

          <a href="#" className="bg-[#5ABF99] hover:bg-[#83C4AB] text-white font-semibold px-4 py-3 rounded whitespace-nowrap">
            Sign Up
          </a>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;