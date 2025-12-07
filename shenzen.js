const floras = (param1, param2, param3) => {
  const flour = param1() + param2();
  const flor = param3(flour);
  return flor;
};

const florr = () => {
  return "Man-Eating ";
};
const florrr = () => {
  return "Gas-Omitting ";
};
const fleur = (fl) => {
  const flr = fl + "Cactus";
  return flr;
};

const result = floras(florr, florrr, fleur);
console.log(result);
