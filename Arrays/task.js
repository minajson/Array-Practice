let nums = [6,2,3];
function firstLast6 (nums){
    return nums[0] === 6 || nums[nums.length -1] === 6;
}
console.log(firstLast6(nums));

function diff21(n) {
    if (n <= 21) {
        return 21 - n; 
        } else {
       return (n -21) * 2;
        }

        }
 //5  
function parrotTrouble (talking, hour) {
return talking && (hour < 7 || hour > 20);
}

//6
function makes10 (a, b) {
    return (a === 10 || b === 10 || a + b == 10);
}

//7 
function nearHundrend(n) {
    return (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10);
}

function posNeg (a, b, negative) {
    if (negative) {
        return (a < 0 && b < 0);
    }else {
    return ((a < 0 && b > 0 || a > 0 && b < 0));
    }
}