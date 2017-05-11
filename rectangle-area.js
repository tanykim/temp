/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {

    var M = (C - A) * (D - B),
        N = (H - F) * (G - E);
    
    return M + N - 
        Math.max(Math.min(C, G) - Math.max(A, E), 0) *
        Math.max(Math.min(D, H) - Math.max(B, F), 0);

};
