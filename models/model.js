const Factory = require("./class");

const fs = require("fs").promises;

class Model {
  static async load() {
    try {
      const raw = await fs.readFile("./data/plants.json", "utf8");
      return JSON.parse(raw);
    } catch (error) {
      console.log(error.message);
    }
  }
  static async plantList() {
    try {
      let data = await this.load();
      data = Factory.createManyPlant(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
module.exports = Model;
