function creditCheck(str) {
    let nums = []
    for (let i=0; i<str.length; i++) {
        nums.push(+str[i])
    } 
    // return typeof nums[0]
    // return nums[0] + nums[1]
    let nums2 = []
    let len = nums.length
    // return nums
    for (let i = 0; i<nums.length; i++) {
        if (len % 2 == 0) { //16
            if (i % 2 == 0 || i == 0) { //odd
                nums2.push(nums[i] * 2)
            } 
            else {nums2.push(nums[i])}
        } 
        else if (len % 2 == 1) { //15
            if (i % 2 == 1) {
                nums2.push(nums[i] * 2)
            } 
            else {nums2.push(nums[i])}
        } 
    } 
    let nums3 = []
    for (let i=0; i<nums2.length; i++) {
        if (nums2[i] < 10) {
            nums3.push(nums2[i])
        }
        else if (nums2[i] >= 10) {
            let n1 = (nums2[i].toString().split(''))[0]
            let n2 = (nums2[i].toString().split(''))[1]
            nums3.push(+n1 + +n2)
        }
        } 
        // console.log(nums3)
        let sum = nums3.reduce((a,b) => a+b)
        // console.log(sum)
        if (sum % 10 == 0) {
            return "The number is valid!"
        } else {return "The number is invalid!"}
}


// Account identifier:    5   5   4   1   8   0   8   9   2   3   7   9   5   2   4   0
// 2x every other digit:  10  5   8   1   16  0   16  9   4   3   14  9   10  2   8   0
// Summed digits over 10: 1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0
// Results summed:        1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0 = 70

// console.log(creditCheck('554180892379524'));
// console.log(creditCheck('5541808923795240'));
// console.log(creditCheck("4024007136512380"));
// console.log(creditCheck("6011797668867828"));

// console.log(creditCheck("5541801923795240"));
// console.log(creditCheck("4024007106512380"));
// console.log(creditCheck("6011797668868728"));

console.log(creditCheck('5541808923795240') === "The number is valid!");
console.log(creditCheck("4024007136512380") === "The number is valid!");
console.log(creditCheck("6011797668867828") === "The number is valid!");

console.log(creditCheck("5541801923795240") === "The number is invalid!");
console.log(creditCheck("4024007106512380") === "The number is invalid!");
console.log(creditCheck("6011797668868728") === "The number is invalid!");

// exports.creditCheck = 