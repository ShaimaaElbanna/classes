const myArr = ["Denmark","Sweden", "Norway" ];
const myObj = {
    SWE : "Svenska",
    DK : "Danska"
}

//for (let i = 0; i < myArr.length; i++){
   // console.log(myArr[i])
//}

/*for (let country in myArr){
    console.log( myArr[country] )

}

for (let country in myObj){
    console.log( country )
}

//country refere to index or the elment
for (let country in myObj){
    if(country === "DK"){
        console.log(myObj[country]);
        break;
    }
}*/

/*let index = 0;
while(index < myArr.length ) {
    console.log(myArr[index]);
    index++;
}
*/
let foundDK=false;
let index = 0;
while(!foundDK ) {
    if (Object.keys(myObj)[index] === "DK"){
        console.log(myObj[Object.keys(myObj)[index]])
        foundDK = true;
    }

    index++;
}