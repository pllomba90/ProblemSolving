// add whatever parameters you deem necessary
// Helper frequency counter to speed up comparison
function freqCounter(num){
    //Create result map
    let frequencies = new Map();
    //Convert num to string for easy mapping
    let numStr = String(num);
    for (let char of numStr){
        let count = frequencies.get(char) || 0;
        frequencies.set(char, count + 1);
    }
    // Return map
    return frequencies;
}

function sameFrequency(num1, num2) {
    //Create frequency maps for each number
    let freqMap1 = freqCounter(num1);
    let freqMap2 = freqCounter(num2);
    //Get keys for each map
    let keys1= Object.keys(freqMap1);
    let keys2 = Object.keys(freqMap2);
    //Compare length for edge cases
    if (keys1.length !== keys2.length){
        return false;
    }
    for (let key of keys1){
        if (freqMap1[key] !== freqMap2[key]) {
            return false; // Frequencies don't match.
          }
    }
    return true;
}
