/*
Implement an iterator to flatten a 2d vector.

For example,
Given 2d vector =

[
  [1,2],
  [3],
  [4,5,6]
]
By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,2,3,4,5,6].
*/
/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
    this.vec = vec2d;
    this.row = 0;
    this.col = 0;
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
    
    //empty vector
    if (this.vec.length === 0) {
        return false;
    }
    
    //check empty rows
    while (this.row < this.vec.length && this.vec[this.row].length === 0) {
        this.row++;
    }
    
    if (this.row === this.vec.length && this.col === 0) {
        return false;
    }

    return true;
    
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
    
    var val = this.vec[this.row][this.col];

    //column reached to the end of each row
    if (this.col === this.vec[this.row].length - 1) {
        this.col = 0;
        this.row++;
    } else {
        this.col++;
    }

    // this.col++;

    return val;
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
