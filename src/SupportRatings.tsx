import ratings from "./constants/ratings";
import getNoOfStarImgs from "./utils/getNoOfStarImgs";
import yellowStar from "./assets/yellow-star.svg";
import grayStar from "./assets/gray-star.svg";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

const SupportRatings = () => {
  return (
    <div className="flex flex-col space-y-15">
      <div className="flex flex-col space-y-5 text-center md:text-left">
        <Header 
          content="How we support our partners all over the world"
          centered={false}
          color="black"
        />

        <SubHeader 
          content="SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software"
          centered={false}
        />
      </div>

      <div className="flex items-center justify-center space-x-15 md:items-start md:justify-start">
        {ratings.map((rating, i) => {
          return (
            <div key={i} className="flex flex-col items-start space-y-3">
              <div className="flex -ml-2">
                {getNoOfStarImgs((rating.rating).toString()).yellowImgArray.map((_img, i) => {
                  return (
                    <img
                      key={i}
                      src={yellowStar}
                      alt={`${rating.rating}`}
                    />
                  );
                })}

                {getNoOfStarImgs((rating.rating).toString()).grayImgArray.map((_img, i) => {
                  return (
                    <img
                      key={i}
                      src={grayStar}
                      alt={`${rating.rating}`}
                    />
                  );
                })}
              </div>

              <p className="font-medium">
                <span className="font-bold">{rating.rating}</span> / 5 rating
              </p>

              <p className="text-base text-gray-500">
                {rating.partner}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SupportRatings;