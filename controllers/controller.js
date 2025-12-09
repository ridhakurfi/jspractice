const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  static home() {
    View.frontPage();
  }
  static async showWeapon() {
    try {
      let datas = await Model.createWeapon();
      View.showWeapon(datas);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
