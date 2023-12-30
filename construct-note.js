// add whatever parameters you deem necessary
// Helper frequency counter to speed up comparison
function freqCounter(str){
    //Create result map
    let frequencies = new Map();
    for (let char of str){
        let count = frequencies.get(char) || 0;
        frequencies.set(char, count + 1);
    }
    // Return map
    return frequencies;
}
function constructNote(message, letters) {
    // Create frequency maps for the message and letters
    const messageFrequency = freqCounter(message);
    const lettersFrequency = freqCounter(letters);
  
    // Check if we can construct the message using the letters
    for (const [char, count] of messageFrequency) {
      if (!lettersFrequency.has(char) || lettersFrequency.get(char) < count) {
        return false;
      }
    }
  
    // If we successfully used all characters in the message, return true
    return true;
}