// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - what was actually done

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const resetEl = document.querySelector("#reset");
let game1;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

resetEl.addEventListener("click", startGame);

startGame();

// Making an HTTP request
// getPuzzle("1")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getCountry("NP")
//   .then((country) => {
//     console.log(`Country name: ${country.name}`);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// getLocation()
//   .then((location) => {
//     return getCountry(location.country);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// fetch("http://puzzle.mead.io/puzzle", {})
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("Unable to fetch the puzzle");
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
