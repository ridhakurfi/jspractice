class Plant {
  constructor(id, name, property) {
    this.id = id;
    this.name = name;
    this.property = property;
  }
}

class Factory {
  static createPlant(data) {
    let { id, name, property } = data;
    return new Plant(id, name, property);
  }
  static createManyPlant(data) {
    let datas = data.map((item) => {
      return Factory.createPlant(item);
    });
    return datas;
  }
}

module.exports = Factory;
