import teamsImgs from "./constants/teams";

const Teams = () => {
  return (
    <section className="pb-10 flex flex-col space-y-5 bg-linear-to-r from-[#83C4AB]/80 to-[#FFFFFF]/80">
      <h2 className="text-center text-2xl font-bold">
        More than 25,000 teams use Collabs
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:items-center md:justify-between md:space-x-7">
        {teamsImgs.map((img, i) => {
          return (
            <img 
              key={i} 
              src={img.imgSrc} 
              alt={img.imgAlt} 
              className="w-30"
            />
          )
        })}
      </div>
    </section>
  );
};

export default Teams;