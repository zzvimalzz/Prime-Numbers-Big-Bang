function numArr(number) {
  if (number % 3 === 0 && number % 5 === 0 ) return 'BIG BANG'; // Divisible by 3 & 5
  if (number % 3 === 0) return 'BIG'; // Divisible by 3
  if (number % 5 === 0) return 'BANG'; // Divisible by 5
  return number.toString(); // Rest of the numbers return as string
}

// Generate the numArr and mapping them  
let results = Array.from({ length: 100 }, (_, i) => numArr(i + 1));

// Output the array to output.json
const fs = require('fs');
fs.writeFile('output.json', JSON.stringify(results, null, 2), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

//Vimal Indrakumar