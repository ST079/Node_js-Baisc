const EventEmmitter = require("events");
const event = new EventEmmitter();

event.on("sayMyName", () => {
  console.log("Hello World");
});

event.emit("sayMyName");
