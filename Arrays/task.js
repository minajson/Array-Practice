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