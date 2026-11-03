
console.log("Running CI tests...");

const result = 10 + 20;

if (result === 30) {
  console.log("Test Passed!");
} else {
  throw new Error("Test Failed!");
}
