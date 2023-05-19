function add(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 42;
}

module.exports = add;
