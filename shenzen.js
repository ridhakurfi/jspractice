const hero = ["Superman", "Ultraman", "Megaman"];

const randowis = (arai) => {
  return arai[Math.floor(Math.random() * arai.length)];
};

console.log(randowis(hero));
