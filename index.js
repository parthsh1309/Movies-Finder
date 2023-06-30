const input = document.querySelector("#input");
const form = document.querySelector("form");
const main = document.querySelector("main");
const MovieTitle = document.querySelector("#MovieTitle");
const Runtime = document.querySelector("#runtime");
const YRR = document.querySelector("#YRR");
const Genre = document.querySelector("#genre");
const Writer = document.querySelector("#writer");
const Actors = document.querySelector("#actor");
const Plot = document.querySelector("#plots");
const Language = document.querySelector("#language");
const Awards = document.querySelector("#award");
const Year = document.querySelector("#year");
const Rating = document.querySelector("#rating");
const release = document.querySelector("#release-date");

// function for adding image
const imagePrint = (getting) => {
  const posterImg = document.querySelector("#posterImg");
  let path2 = getting.data.Poster;
  posterImg.src = path2;
  console.log(path2);
};

//function for breaking plot line
const lineBreak = (str) => {
  (parts = str.split(" ")), (outStr = "");

  
  for (var i = 0; i < parts.length; i++) {
    outStr += " " + parts[i];

    if ((i + 1) % 7 === 0) {
      outStr += "<br/>";
    }
  }
  return outStr;
};


//function for adding details
const details = (getting) => {
  // adding title
  MovieTitle.innerHTML = getting.data.Title;

  //adding runtime
  Runtime.innerHTML = `(Runtime:${getting.data.Runtime})`;

  //adding Year Rating and Released

  let y = (Rating.innerHTML = `Rating: ${getting.data.imdbRating}`);
  let x = (release.innerHTML = ` Release Date:  ${getting.data.Released}`);

  Year.innerHTML = Year.innerHTML = `<span>Year:</span> ${getting.data.Year}`;
  // YRR.append(x,y)

  // YRR.innerHTML = Released;

  //adding genre
  Genre.innerHTML = `<span>Genre: </span>${getting.data.Genre}`;

  //adding writers
  Writer.innerHTML = ` <span>Writer: </span>${getting.data.Writer}`;

  //adding actors
  Actors.innerHTML = ` <span>Actors: </span>${getting.data.Actors}`;

  //adding plot
  Plot.innerHTML = ` <span>Plots: </span>${lineBreak(getting.data.Plot)}`;

  //adding language
  Language.innerHTML = `<span>Language: </span> ${getting.data.Language}`;

  //adding award
  Awards.innerHTML = `<span>Awards: </span>${getting.data.Awards}`;
};

//function for showing data
form.addEventListener("submit", async (e) => {
  try {
    // location.href('#main')
    e.preventDefault();
    const para = {
      params: {
        t: input.value,
      },
    };
    // fetching api
    const getting = await axios.get(
      `https://www.omdbapi.com/?&apikey=3d5b922f`,
      para
    );
    imagePrint(getting);
    console.log(getting);
    details(getting);
  } catch {
    console.log("error");
  }
  main.classList.remove("hidden");
  form.reset();

  // location.reload()
});
