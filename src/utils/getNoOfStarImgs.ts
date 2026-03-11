function getNoOfStarImgs(rating: string) {
  let dec = 0;
  let setDec = false;
  let numberOfStars = 0;
  const yellowImgArray = [];
  const grayImgArray = [];
  
  if ((Number(rating) > 5) || (typeof Number(rating[0]) !== "number") || (typeof Number(rating[2]) !== "number") || (rating[1] !== ".")) rating = "0.0";
  
  if (rating.length > 3) {
    let formattedRating = "";
    for (let i = 0; i < rating.length; i++) {
      const char = rating[i];
      formattedRating += char;

      if (i === 2) {
        break;
      }
    }

    rating = formattedRating;
  }
  else if (rating.length < 3) {   
    rating = `${rating[0]}.0`;
  }

  for (let i = 0; i < rating.length; i++) {
    const char = rating[i];
    if (char === ".") setDec = true;

    if (setDec) {
      dec = Number(char);
    }
    else {
      numberOfStars = Number(char);
    }
  }

  if (dec === 9) numberOfStars++;

  for (let i = 0; i < numberOfStars; i++) {
    yellowImgArray.push(i);
  }

  for (let i = 0; i < (5 - numberOfStars); i++) {
    grayImgArray.push(i);    
  }

  return { yellowImgArray, grayImgArray };
}

export default getNoOfStarImgs;