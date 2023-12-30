// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let pointer1 = 0; // Pointer for str1
    let pointer2 = 0; // Pointer for str2
  
    while (pointer1 < str1.length && pointer2 < str2.length) {
      if (str1[pointer1] === str2[pointer2]) {
        // If characters match, move both pointers forward
        pointer1++;
        pointer2++;
      } else {
        // If characters don't match, only move the pointer for str2
        pointer2++;
      }
    }
  
    // If we successfully traverse all of str1, it's a subsequence
    return pointer1 === str1.length;
  }
  
