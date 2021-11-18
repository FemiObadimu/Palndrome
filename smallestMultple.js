// To return the smallest positive number that can be divided by each of the values 1-10

const smallestMul = () => {
  let small = [];
  let range = [];
  for (let f = 1; f < 11; f++) {
    range.push(f);
  }
  for (let i = 1; i < 100000; i++) {
    if (range.every((num) => i % num === 0)) {
      small.push(i);
    }
  }
  return small[0];
};
console.log(smallestMul());

// To return the range of positive number that can be divided by each of the values 1-10

const smallestMul = () => {
  let small = [];
  let range = [];
  for (let f = 1; f < 11; f++) {
    range.push(f);
  }
  for (let i = 1; i < 100000; i++) {
    if (range.every((num) => i % num === 0)) {
      small.push(i);
    }
  }
  return small;
};
console.log(smallestMul());
