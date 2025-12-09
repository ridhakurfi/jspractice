class Planet {
  constructor(id, planet, resource) {
    this.id = id;
    this.planet = planet;
    this.resource = resource;
  }
}

class Factory {
  static createPlanet(item) {
    let { id, planet, resource } = item;
    return new Planet(id, planet, resource);
  }
  static createManyPlanet(item) {
    let data = item.map((datas) => {
      return this.createPlanet(datas);
    });
    return data;
  }
}

module.exports = Factory;
