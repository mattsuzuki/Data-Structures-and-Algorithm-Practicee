const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marline",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

function findNemo(array) {
  //measure performance
  let t0 = performance.now();
  //loop through array
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!!!");
    }
  }
  //log the time it takes to loop through.
  let t1 = performance.now();
  console.log("the call to find nemo took " + (t1 - t0) + " milliseconds");
}
findNemo(nemo);
