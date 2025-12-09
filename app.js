const Controller = require("./controllers/controller");

const terminal = process.argv.slice(2);
const command = terminal[0];
const act1 = terminal[1];
const act2 = terminal[2];

switch (command) {
  case "weaponList":
    Controller.showWeapon();
    break;
  default:
    Controller.home();
    break;
}
