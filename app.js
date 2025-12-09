const Controller = require("./controllers/controller");

const [param1, param2, param3] = process.argv.slice(2)

switch (param1) {
    case "planetList":
        Controller.readPlanet()
        break;

    default:
        Controller.help()
        break;
}