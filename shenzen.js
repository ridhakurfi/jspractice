const hero = ["Superman", "Ultraman", "Megaman"];

const randomizer = (arai) => {
  return arai[Math.floor(Math.random() * arai.length)];
};

console.log(randomizer(hero));
