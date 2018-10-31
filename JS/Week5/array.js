//how to create array

function Array0 (){
const a = [];
a[0] = 10;
const b = [1,2,3,4];
const c = new Array("cool",{},0);
const d = new Array(100);
d[50] = "Middle";

console.log(a)
console.log(b)
console.log(c)
console.log(b.length)
}



//function Array1 (name){
  //  console.log(name);
//}

//Array1 ([1,3,5])

function Array1(){
    let animals = ["horse","cat","dog","pig"]
    console.log(animals[2]);
    animals.push("rabbit");
    console.log(animals);
    animals.shift();
    console.log(animals);
    animals.unshift("fish");
    console.log(animals);
    animals.pop();
    console.log(animals);   
}

function Array2(){
    let animals = ["horse","cat","dog","pig"]
    animals.sort()
console .log(animals);
}

function Array3(){
    let arr = [
        { name: "Ronny", age: 20},
        { name: "Jhony", age: 24},
        { name: "Melody", age: 25}
]
const names = arr.map(function(obj){return obj.name})
const age = arr.map(function(obj){return obj.age})

console.log(names)
console.log(age)
}

function Array4 () {
    let arr = [
        { name: "Ronny", age: 20},
        { name: "Jhony", age: 24},
        { name: "Melody", age: 30}
]
const oldFolk = arr.filter(obj => obj.age >= 30) //how to write function with the" => " way"
console.log("old", oldFolk);

const youngFolk = arr.filter(function(obj) {return obj.age < 30})
console.log("young", youngFolk);

}
//Array0();
//Array1();
//Array2();
Array3();
Array4();