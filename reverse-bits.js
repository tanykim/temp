/*
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer
*/

//JS DOES NOT RETURN BINARY LIKE THAT AFAIK, SO THE BELOW IS NOT THE ACCEPTED ANSWER.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var val = n.toString(2).toString().split('');
    var decimal = val.reduce((x, y, i) => {
        return +x + (+y === 1 ? Math.pow(2, i) : 0);
    }, 0)
    return decimal;
};
