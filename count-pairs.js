// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const seen = new Set(); // Create a set to store seen elements
    let count = 0; // Initialize the count of pairs to 0
  
    for (const num of arr) {
      const complement = target - num; // Calculate the complement needed for the sum to be the target
      if (seen.has(complement)) {
        // If the complement exists in the set, it means we found a pair
        count++;
        seen.delete(complement); // Remove the complement from the set to avoid counting duplicates
      } else {
        seen.add(num); // Add the current number to the set for future checks
      }
    }
  
    return count;
  }
