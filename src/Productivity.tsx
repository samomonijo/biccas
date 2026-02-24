import productivityImg from "./assets/productivity.png";
import curveImg from "./assets/curve.svg";

import CTABtn from "./components/CTABtn";
import HeadingContent from "./components/HeadingContent";
import PlaySvg from "./assets/PlaySvg";

const Productivity = () => {
  return (
    <section className="flex flex-col items-center space-y-10 py-5 sm:flex-row sm:justify-between sm:items-center bg-linear-to-r from-[#83C4AB]/80 to-[#FFFFFF]/80">
      <div className="flex flex-col items-center text-center space-y-5 sm:text-left sm:items-start sm:flex-1 sm:mt-0">
        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-3 max-w-80 max-[650px]:justify-self-center">
          We're here to Increase your Productivity
        </h1>

        <img src={curveImg} alt="Curve" className="w-5/10" />

        <HeadingContent
          textColor="black"
          fontSize="small"
          alignCenter={false}
          content="Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day."
        />

        <div className="flex space-x-3">
          <CTABtn content="Try free trial" />

          <a
            href="#"
            className={`bg-white hover:bg-[#F7F1F1] text-black text-xs min-[1500px]:text-base font-normal inline-flex items-center justify-center w-35 h-10 rounded-4xl whitespace-nowrap transition`}
          >
            <p className="flex items-center space-x-2">
              <PlaySvg /> <span>View Demo</span>
            </p>
          </a>
        </div>
      </div>

      <div className="flex justify-center sm:flex-1 w-4/5 sm:mt-0">
        <img src={productivityImg} alt="Productivity" />
      </div>
    </section>
  );
};

export default Productivity;