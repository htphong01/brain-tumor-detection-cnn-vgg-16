
const newCode = (str) => {
  const input = str.split('');
  let i = input.length - 1;
  while(i >= 0) {
    if(input[i] < 9) {
      input[i] = +input[i] + 1;
      return input.join('');
    }
    input[i] = 0;
    i--;
  }

  return input.join('')
}

module.exports = {
  newCode
}