const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  static help() {
    View.tutorial();
  }
  static async plantList() {
    try {
      let datas = await Model.plantList();
      View.plantList(datas);
    } catch (error) {
      console.log(error.message);
    }
  }
}
module.exports = Controller;
