function resolve2sec(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("resolved")
        }, 2000);
    })
}

async function asyncCall(){
    console.log("calling");
    var result = await resolve2sec();
    console.log(result) 
}
console.log(asyncCall())


//new things
//defult binding
//in the distrect mode it will return undefine
function foo(){
    console.log(this.a);
}
var a =2;
foo();

//implicit
function foo(){
    console.log(this.a);
}
var obj ={
    a: 2,
    foo: foo
};

obj.foo(); //2


//
function foo(){
    console.log(this.a);
}
var obj ={
    console.log()
}



const myObj = {
    myData: "hello"
};
function printData(){
    console.log(this.myData);
}
const newFunction = printData.bind(myObj)
newFunction()



function tey(){

}
const myObject = new tey();
console.log(myObject)















function foo(){
    console.log(this.a);
}
var obj ={
    a: 2,
    foo: foo
};
console.log(obj.foo)
var bar = obj.foo; //without ()
console.log(bar())
var a = "oops. it's global"

bar()

obj.foo();



//counstracter function to create a new obj
function Student(name, age){
    this.name = name;
    this.age = age;
}
var arr = [];
var first = new Student("jhone","21")
var second = new Student("elly","20")
arr.push(first);
arr.push(second);
console.log(arr);
console.log(first);
console.log( Student.prototype)


