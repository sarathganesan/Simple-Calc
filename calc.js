const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a math expression (e.g. "What is 5 plus 7?"): ', (input) => {
  const expression = input.match(/(\d+) (\w+) (\d+)/);
  if (expression) {
    const [_, num1, operation, num2] = expression;
    let result;
    switch (operation) {
      case 'plus':
        result = Number(num1) + Number(num2);
        break;
      case 'minus':
        result = Number(num1) - Number(num2);
        break;
      case 'multiplied by':
        result = Number(num1) * Number(num2);
        break;
      case 'divided by':
        result = Number(num1) / Number(num2);
        break;
      default:
        console.log('Unsupported operation!');
        return;
    }
    console.log(`${num1} ${operation} ${num2} is ${result}`);
  } else {
    console.log('Invalid input!');
  }
  rl.close();
});
