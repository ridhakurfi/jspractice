const View = require("../views/view");
const Model = require("../models/model");

class Controller {
  static help() {
    View.tutorial();
  }
  static async weaponList() {
    try {
      let customers = await Model.readWeapons();
      View.listWeapons(customers);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
