/**
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

For example,
Given the following words in dictionary,

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf".

Note:
You may assume all letters are in lowercase.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
*/
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if (words.length === 0) {
        return '';
    }
    
    let len = words.length;
    //map of the letter in the next word at the same index
    let map = {};
    //number of letters in the same index of the previous words
    let charPreReqCount = {};
    
    for (let i = 0; i < len; i++) {
        const chars = words[i];
        
        //create a map of every character
        for (let j = 0; j < chars.length; j++) {
            if (!map[chars[j]]) {
                map[chars[j]] = [];
                charPreReqCount[chars[j]] = 0;
            }
        }

        //skip for the first word and if prev and current words are the same
        if (i === 0 || words[i] === words[i - 1]) {
            continue;
        }
        
        //compare with the previous word
        const cur = words[i];
        const prev = words[i - 1];
        let j = 0;
        //skip if the cur and prev letters are the same
        while(j < cur.length && j < prev.length && cur.charAt(j) === prev.charAt(j)) {
            j++;
        }
        
        //the previous letter at the same index is different from the current one
        //check already in the map
        if (j < prev.length && map[prev.charAt(j)].indexOf(cur.charAt(j)) === -1) {
            //key: prev letter, val: current letter
            map[prev.charAt(j)].push(cur.charAt(j));
            //number of different prev letters
            charPreReqCount[cur.charAt(j)]++;
        }
    }
    
    console.log(map, charPreReqCount);

    //queue letter with no previous letters
    let queue = [];
    Object.keys(charPreReqCount).forEach(char => {
        if (charPreReqCount[char] === 0) {
            queue.push(char);
        }
    });
    console.log(queue);

    //check in order letters
    let result = [];
    while(queue.length > 0) {
        const char = queue.shift();
        //push the first letter to the result
        result.push(char);        
        //push the following letters to result
        for (let i = 0; i < map[char].length; i++) {
            //check the folllowing letter is the last one
            charPreReqCount[map[char][i]]--;
            if (charPreReqCount[map[char][i]] === 0) {
                //push the next letter to the queue
                queue.push(map[char][i]);
            }
        }
    }
    
    // detect cycle
    let hasCycle = false;

    Object.keys(charPreReqCount).forEach(function(char) {
        //something wrong with the order, so there's remained letters
        if (charPreReqCount[char] !== 0) {
            hasCycle = true;
        }
    });
    
    return hasCycle ? '' : result.join('');
};

console.log(alienOrder(["wrt","wrf","er","ett","rftt"]));
console.log(alienOrder(
[
  "aab",
  "aac",
  "aadce"
]));
