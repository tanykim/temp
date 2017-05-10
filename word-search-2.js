/*
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

For example,
Given words = ["oath","pea","eat","rain"] and board =

[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
Return ["eat","oath"].
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 
var findWords = function(board, words) {
    
    var results = [];
    
    var combinations = [];
    //row - words
    for (var i = 0; i < board.length; i++) {
        //column (letters of each word)
        for (var j = 0; j < board[i].length; j++) {
            //pick chars of neighbors
            var chars = [];
            var temp = board[i][j];
            board[i][j] === '*';
            for (var x = 0; x < board.length; x++) {
                for (var y = 0; y < board[x].length; y++) {
                    if (i === x || j === y) {
                        chars.push(board[x][y]);
                    }
                }
            }
            //add to combinations
            combinations.push(chars);
            board[i][j] === temp;
        }
    }
    
    //check with words
    for (var a = 0; a < words.length; a++) {
        for (var b = 0; b < combinations.length; b++) {
            var pickedChars = [];
            var comb = combinations[b]
            for (var idx = 0; idx < words[a].length; idx++) {
                var c = words[a].charAt(idx);
                if (comb.indexOf(c) > -1) {
                    // comb = comb.splice(comb.indexOf(c), 1);
                    pickedChars.push(c);
                }
            }
//             console.log(pickedChars)
            if (pickedChars.join('') === words[a] && results.indexOf(words[a]) === -1) {
                results.push(words[a]);            
            }
        }
        
    }
    
    return results;
    
};
console.log(findWords([
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], ["oath","pea","eat","rain"]))

console.log(findWords("aaa", ["aa"]))
