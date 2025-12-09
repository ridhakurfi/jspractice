class Weapon {
  constructor(id, name, culture, description) {
    this.id = id;
    this.name = name;
    this.culture = culture;
    this.description = description;
  }
}

class Factory {
  static createWeapon({ id, name, culture, description }) {
    return new Weapon(id, name, culture, description );
  }
  static createManyWeapon(item) {
    let items = item.map((it) => {
      return this.createWeapon(it);
    });
    return items;
  }
}

module.exports = Factory;
