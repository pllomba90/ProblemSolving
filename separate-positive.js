// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      if (arr[left] < 0 && arr[right] > 0) {
        // Swap a negative number on the left with a positive number on the right
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      } else {
        // Move pointers accordingly
        if (arr[left] >= 0) {
          left++;
        }
        if (arr[right] <= 0) {
          right--;
        }
      } 
  }
    return arr;
    }
    
    
    