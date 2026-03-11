import SupportRatings from "./SupportRatings";
import SupportDetails from "./SupportDetails";

const Support = () => {
  return (
    <section className="py-7 grid grid-cols-1 gap-10 md:grid-cols-[1fr_0.75fr]">
      {/* Support Ratings */}
      <SupportRatings />

      {/* Support Details */}
      <SupportDetails />
    </section>
  );
};

export default Support;