const Controller = require("./controllers/controller");

const terminal = process.argv.slice(2);
const command = terminal[0];
const param1 = terminal[1];
const param2 = terminal[2];


switch (command) {
  case "plantList":
    Controller.plantList()
    break;
  default:
    Controller.help();
    break;
}
