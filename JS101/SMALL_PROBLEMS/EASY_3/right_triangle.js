function triangle(number) {
  counter = 1;
  while (counter <= number) {
    console.log(' '.repeat(number - counter) + '*'.repeat(counter));
    counter += 1;
  }
}

triangle(9);