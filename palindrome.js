function palindrome() {
  let ans = [];
  let pal = [];
  for (let i = 10; i < 100; i++) {
    for (let b = 10; b < 100; b++) {
      let mul = i * b;
      ans.push(mul);
      ans.forEach((num) => {
        if (
          num.toString().charAt(0) === num.toString().charAt(3) &&
          num.toString().charAt(1) === num.toString().charAt(2) 
        ) {
          pal.push(num);
        }
      });
    }
  }

  return pal[pal.length - 1];
}
console.log(palindrome());
