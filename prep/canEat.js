function canEat(iceCream) {
    return iceCream.lactoseFree && iceCream.gramsOfSugarPerScoop < 10;
}

const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: true,
  gramsOfSugarPerScoop: 5,
};

const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};

const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};

console.log(canEat(iceCream1));
console.log(canEat(iceCream2));
console.log(canEat(iceCream3));
console.log(canEat(iceCream4));
console.log(canEat(iceCream5));
