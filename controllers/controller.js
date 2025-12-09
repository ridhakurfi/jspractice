const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  static help() {
    View.tutorial();
  }
  static async readPlanet() {
    try {
      let datas = await Model.readPlanet();
      View.readPlanet(datas);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
