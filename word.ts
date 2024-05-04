const word: string[] = ["W", "O", "R", "D", "L", "E"];
let guess = "";
let guessedLetters: string[] = [];

for (let i = 0; i < word.length; i++) {
  guessedLetters.push("");
}

function outputGuess(string: string[]) {
  let output: string = "";
  for (let i = 0; i < string.length; i++) {
    string[i] == ""
      ? (output = output + "_")
      : (output = output + string[i].toUpperCase());
  }
  console.log(output);
}

function checkGuess(guess: string): boolean {
  const guessArray: string[] = guess.split("");

  for (let i = 0; i < guessArray.length; i++) {
    if (guessArray[i] == word[i]) {
      guessedLetters[i] = guessArray[i].toUpperCase();
    }
  }

  outputGuess(guessedLetters);

  return guessedLetters.join("") === word.join("");
}

if (checkGuess("WXXXXX")) {
  console.log("You won the game!");
}

if (checkGuess("XOXXXXX")) {
  console.log("You won the game!");
}

if (checkGuess("WERDXX")) {
  console.log("You won the game!");
}

if (checkGuess("WARDXE")) {
  console.log("You won the game!");
}

if (checkGuess("XXXXLX")) {
  console.log("You won the game!");
}
