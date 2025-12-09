class View {
  static frontPage() {
    console.log("-------------------------------");
    console.log("      Rare Weapons Shop");
    console.log("-------------------------------");
  }
  static showWeapon(data) {
    console.table(data);
  }
}

module.exports = View;
