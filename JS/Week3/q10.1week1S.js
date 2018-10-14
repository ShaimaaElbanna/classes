let a = "Space"
let b = 3.14
let c = true
let d = [1, "sky"]
let e = false

console.log('The value of my variable a is: ' + a + '');
console.log('The value of my variable b is: ' + b + '');
console.log('The value of my variable c is: ' + c + '');
console.log('The value of my variable d is: ' + d + '');
console.log('The value of my variable d is: ' + e + '');

let aType = typeof a
let bType = typeof b
let cType = typeof c
let dType = typeof d
let eType = typeof e

console.log('Type of the a variable is: ' + aType);
console.log('Type of the b variable is: ' + bType);
console.log('Type of the c variable is: ' + cType);
console.log('Type of the d variable is: ' + dType);
console.log('Type of the e variable is: ' + eType);

let typeArray = [aType, bType, cType, dType, eType]
console.log('This is an array of all data types:', typeArray);

let sortedArray = typeArray.slice().sort();
let sameTypeArray = [];
let sameNr = 0;
let uniqueArray = [];
let uniqueNr = 0;

console.log('This is sorted version of the array:', sortedArray);

for (i = 0; i < sortedArray.length; i++) {

    if (sortedArray[i] == sortedArray[i + 1]) {
        sameTypeArray.push(sortedArray[i]);
        sameNr += 1;
    }

    if (sortedArray[i] != sortedArray[i + 1]) {
        uniqueArray.push(sortedArray[i]);
        uniqueNr += 1;
    }

}

console.log('There is ' +sameNr+ ' SAME TYPE of variable in the array! Which is: '+sameTypeArray);
console.log('There are ' +uniqueNr+ ' UNIQUE variables in the array! Which are: ' +uniqueArray);
