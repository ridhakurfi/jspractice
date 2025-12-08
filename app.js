const Controller = require("./controllers/controller")
const [param1, param2, param3, param4] = process.argv.slice(2);

switch (param1) {
  case "biomeList":
    Controller.list();
    break;
  default:
    Controller.help();
    break;
}
