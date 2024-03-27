
// Write your code here
let num1 = 2
let num2 = 31
let multiply = num1 * num2

let random = Math.ceil(Math.random())
Number.isInteger(random)

let num3 =29
let num4 = 5
let mod = num3 % num4

let max = Math.max(5, 1, 10, 15, 20, 13)

function distanceFromHqInFeet(location){
}

//console.log(distanceFromHqInBlocks(43));
const headQuaters = 42;
const feetPerStreet = 264;
function distanceTravelledInFeet(headQuaters, block) {
    if (block < headQuaters){
        return (headQuaters - block) * feetPerStreet;
    }else{
        return (block - headQuaters) * feetPerStreet;
    }
}
// console.log(distanceTravelledInFeet(headQuaters, 43));

function calculatesFarePrice(headQuaters, destination) {
    const distance = Math.abs(headQuaters, destination) * 264;
    if (distance <=400) {
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <+ 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
console.log(calculatesFarePrice(43, 44));