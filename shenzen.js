const biomas = (param1, param2, param3) => {
  const bioma = param1() + param2();
  const biomo = param3(bioma);
  return biomo;
};
const biomex = biomas(
  () => "Freezing ",
  () => "Tundra",
  (x) => "Forbidden " + x
);
console.log(biomex);

