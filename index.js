// const http = require("http");

// http
//   .createServer((request, response) => {
//     response.write("<h1> Hello world</h1>");
//     response.end();
//   })
//   .listen(4500);

// console.log("server is running");

//including my own module

// const http = require("http");
// const wel = require("./library");
// const upperCase = require("to-upper");

// http
//   .createServer((request, response) => {
//     response.write("including my own module");
//     wel.greet("KuSUM");
//     wel.addition(5, 3);
//     response.end(upperCase("kusum loves sujan"));
//   })
//   .listen(4500);
// console.log("server is runnng");

const http = require("http");
const library = require("./library");
var toProperUpper = require("proper-upper-case");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const updated = library.properCase("I love you mero pyaro wifey");
    const msg = toProperUpper("from hajur ko huBBY");

    res.end(updated + " " + msg);
  })
  .listen(8000);
console.log("runs fine");
