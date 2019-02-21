require("@babel/register")({
  presets: ["@babel/env"]
})

// Import the rest of our application.
module.exports = require("./server.js")
