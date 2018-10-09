/*function hej(){
    console.log("hej");
}

hej();
*/

/*
const hej = function(name){
    console.log("hej: " + name);
}
hej ("shaimaa");
*/


/*
const hej3 = (name) => {
    console.log("hej: " + name);
}
hej3("shaimaa")
*/

const myObj = {
    myMeth: () => {
        console.log("i'm inside")
        return "i'm outdide"
    }
}
const whereareyou = myObj.myMeth; //assing what it means
//console.log(whereareyou()); //assing the return

console,log((() =>{
    return "i'm hidden";
}
)());
