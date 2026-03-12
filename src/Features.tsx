import features from "./constants/features";

import CTABtn from "./components/CTABtn";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

const Features = () => {
  return (
    <section className="py-10 flex flex-col space-y-10">
      <div className="grid gap-5 md:grid-cols-[0.4fr_1fr_0.25fr] md:gap-15">
        <Header 
          content="Our Features you can get"
          color="black"
          centered={false}
        />

        <SubHeader 
          centered={false} 
          content="We offer a variety of interesting features that you can help increase yor productivity at work and manage your project esaly"
        />

        <CTABtn 
          content="Get Started"
        />
      </div>

      <div className={`grid grid-cols-1 gap-10 ${(features.length % 2 === 0) && "sm:grid-cols-2"} md:grid-cols-3`}>
        {features.map((feature, i) => {
          return (
            <div key={i} className="flex flex-col items-center space-y-3 md:items-start">
              <img 
                src={feature.img} 
                alt={feature.feature} 
                className="max-w-50 max-h-50"
              />

              <h2 className="font-bold text-base">
                {feature.feature}
              </h2>

              <SubHeader 
                centered={false}
                content={feature.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;