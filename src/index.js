module.exports = function reverse (n) {
  n = String(Math.abs(n));
  n = Number(n.split('').reverse().join(''));
  return n;
}
