
//object
//let myobj = {
  //  prop2: "hello",
    //prop3: "go"
//};
//myobj.prop3 = "go";

//console.log (myobj);
//console.log (Object.keys (myobj)); //show the keys in the objects type
//console.log (typeof (myobj.prop2)); //show the type of anyhing

//
let myobj = {
    propEng: "hello",
    propSwe: "hej"
};

let prop1 = "ola";
let prop2 = prop1;
const myobj2 = Object.assign ({}, myobj);

myobj.propEng = "hi";
console.log(myobj);
console.log(myobj2);

//var.
//const prop1 = "hola";
//console.log (prop1);

//myArray
const myArray = [
    "Hello"
,    "hej"
]
const myArray2 = myArray
myArray2[1] = "ola"


console.log(myArray[1]);

