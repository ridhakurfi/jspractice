class Weapon {
  constructor(id, name, element) {
    this.id = id;
    this.name = name;
    this.element = element;
  }
}

class Factory {
  static createWeapon(weapons) {
    let { id, name, element } = weapons;
    return new Weapon(id, name, element);
  }
  static createManyWeapons(weapons) {
    let weapon = weapons.map((item) => {
      return new Factory.createWeapon(item);
    });
    return weapon;
  }
}
