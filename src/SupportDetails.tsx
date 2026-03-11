import supports from "./constants/supports";

const SupportDetails = () => {
  return (
    <div className="flex flex-col space-y-5 justify-self-center">
      {supports.map((support, i) => {
        return (
          <div key={i} className="flex space-x-2">
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src={support.img.src}
                alt={support.img.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div>
              <h2 className="font-bold text-lg">
                {support.title}
              </h2>

              <p className="text-sm text-gray-500 max-w-100">
                {support.details}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default SupportDetails;