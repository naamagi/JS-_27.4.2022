
function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  const { name } = this;
  console.log(`I choose you, ${name}`);
};

Pokemon.prototype.attack = function (attackNumber) {
  const { name,attackList} = this;
  console.log(`${name} used ${attackList[attackNumber]}`);
};

const pokemon1 = new Pokemon("Landorus", "flying", [
  "chloroblast",
  "bounce",
  "aeroblast",
]);
const pokemon2 = new Pokemon("Gloom", "grass", [
  "branch poke",
  "aromatherapy",
  "bloom doom",
]);
const pokemon3 = new Pokemon("Graveler", "rock", [
  "diamond storm",
  "meteor beam",
  "power gem",
]);
const pokemonObj = { 1: pokemon1, 2: pokemon2, 3: pokemon3 };

pokemonObj[1].callPokemon()
pokemonObj[1].attack(1);
pokemonObj[2].callPokemon();
pokemonObj[2].attack(0);
pokemonObj[3].callPokemon();
pokemonObj[3].attack(2);
