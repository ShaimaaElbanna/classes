const shouldGreet = false;
const shouldBeFormal = true;

//if (shouldGreet == true)
if (shouldGreet){
    console.log ("Hello");
} else if (shouldBeFormal){
    console.log ("Bye")
} else {
    console.log ("good day")
}

//switch

const myNumber = 4;

switch (myNumber) {
 case 0: {
 console.log("zero")
 }
break;
 case 1: {
     console.log("one")
 }
 break;
 default:{
 console.log("default")
}
}