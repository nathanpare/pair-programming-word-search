const transpose = function(matrix) {
  const result = [];
  let placeholder = [];
  let counter = 0;

  while (counter <= matrix[0].length - 1) {
    for (const array of matrix) {
      placeholder.push(array[counter]);
    }
    result.push(placeholder);
    placeholder = [];
    counter++;
  } return result;
};

//console.log(transpose(matrix));

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

module.exports = {transpose};