function FindMax(number) {
    let highest = number[0];
    for (const i of number) {
        if (i > highest) {
         highest = i
        }
    }
    return highest

}


function FindMin(number) {
    let lowest = number[0]
    for (const i of number) {
        if (i < lowest) {
            lowest = i
        }
    }
    return lowest
}

function FindAverage(number) {
    let total = 0
    for ( const i of number) {
         total = total + i

    }

    let average;
    average = total/number.length
    return average


}
const nums = [12, 5, 88, 3, 45, 88, -7];

console.log(FindMax(nums)); 
console.log(FindMin(nums)); 
console.log(FindAverage(nums))
console.log(FindMax([]))
