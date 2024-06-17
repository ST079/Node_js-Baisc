//creating my own module or library

// const getHello = () => {
//   console.log("Hello world");
// };

// const greet = (name) => {
//   console.log(`Nameste ${name}`);
// };

// const addition = (a, b) => {
//   console.log(`The addtion of ${a} and ${b} is ${a + b}`);
// };

// module.exports = { getHello, greet, addition };
const properCase = (word) => {
  return (splittedWords = word
    .split(" ")
    .map((string) => {
      const splitter = string.split("");
      splitter[0] = splitter[0].toUpperCase();
      return splitter.join("");
    })
    .join(" "));
  console.log(splittedWords);
};

module.exports = { properCase };
