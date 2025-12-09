const Factory = require("./class");

const fs = require("fs").promises;

class Model {
  static async load() {
    return JSON.parse(await fs.readFile("./data/weapons.json", "utf8"));
  }
  static async createWeapon() {
    try {
      let datas = await this.load();
      datas = Factory.createManyWeapon(datas);
    //   console.log(datas,"<<<<<<<<");
      return datas;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Model;
