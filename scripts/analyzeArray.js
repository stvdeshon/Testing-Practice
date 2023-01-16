function analyzeArray(arr) {
  const obj = {};
  obj.average = arr.reduce((a, b) => a + b) / arr.length;
  obj.min = Math.min(...arr); //requires spread syntax
  obj.max = Math.max(...arr);
  obj.length = arr.length;

  return obj;
}

module.exports = analyzeArray;
