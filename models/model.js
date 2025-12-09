const Factory = require("./class");

const fs = require("fs").promises;

class Model {
  static async load() {
    try {
      let raw = await fs.readFile("./data/planets.json", "utf8");
      return JSON.parse(raw);
    } catch (error) {
      console.log(error);
    }
  }
  static async readPlanet() {
    try {
      let datas = await this.load();
      datas = Factory.createManyPlanet(datas);
      return datas;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Model;
