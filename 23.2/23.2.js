

const storm = {
  superPower: "flying",
  internal: printSuperPower,
  func: function external() {
    this.internal();
  },
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.func();
