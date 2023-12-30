// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let totalSum = 0; // Initialize the total sum of the array
    let leftSum = 0; // Initialize the left sum
  
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i]; // Calculate the total sum of the array
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (leftSum === totalSum - leftSum - arr[i]) {
        // Check if the left sum is equal to the right sum
        return i; // Return the index as the pivot index
      }
      leftSum += arr[i]; // Update the left sum for the next iteration
    }
  
    return -1; // If no pivot index is found, return -1
  }
