var calculate = function(s) {
    var nums = [];
    var signs = [];
    var prev = 0;  
    for (var i = 0; i < s.length; i++) {
        //check if it's number of not space
        if (!isNaN(s[i]) && s[i] !== ' ') {
            if (prev === 0) {
                nums.push(+s[i]);
            } else {
                //update previous number
                nums[nums.length - 1] = prev * 10 + +s[i];
            }
            //case of more than one digits
            prev = prev * 10 + +s[i];
        } else if (s[i] === '*' || s[i] === '/' || s[i] === '+' || s[i] === '-') {
            signs.push(s[i]);
            prev = 0;
        } else {
            prev = 0;
        }
    }
  
    var newSigns = [];
    var calCount = 0;
    for (var j = 0; j < signs.length; j++) {
        if (signs[j] === '*') {
            nums.splice(j - calCount, 2, nums[j - calCount] * nums[j - calCount + 1]);
            calCount += 1;
        } else if (signs[j] === '/') {
            nums.splice(j - calCount, 2, Math.floor(nums[j - calCount] / nums[j - calCount + 1]));
            calCount +=1;
        } else {
            newSigns.push(signs[j]);
        }
    }
    var calCount2 = 0;
    for (var k = 0; k < newSigns.length; k++) {
        if (newSigns[k] === '+') {
            nums.splice(k - calCount2, 2, nums[k - calCount2] + nums[k  - calCount2 + 1]);
            calCount2 += 1;          
        } else if (newSigns[k] === '-') {
            nums.splice(k - calCount2, 2, nums[k - calCount2] - nums[k  - calCount2 + 1]);
            calCount2 += 1;
        }
    }
    return nums[0];
};
