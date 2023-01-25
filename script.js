function threeSum(arr, target) {
  let closestSum = Infinity;
  let closestTriplet;

  // Sort the array
  S.sort((a, b) => a - b);

  // Iterate through the array and find the closest sum
  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;
    while (left < right) {
      let sum = S[i] + S[left] + S[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
        closestTriplet = [S[i], S[left], S[right]];
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;

}

module.exports = threeSum;
