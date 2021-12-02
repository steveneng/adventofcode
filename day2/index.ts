import fs from "fs";

let listOfDepths:string[] = fs.readFileSync(`${__dirname}\\input.txt`,"utf-8").split("\n")

let netY = 0; 
let netX = 0;

for(let i = 0 ; i<listOfDepths.length ; i++){
    let currentDirection:string[] = listOfDepths[i].split(" ");
    let direction:number = parseInt(currentDirection[1])
    if(currentDirection[0]==="forward"){
        netX +=direction
    }
    else if(currentDirection[0]==="down"){
        netY +=direction
    }
    else if(currentDirection[0]==="up"){
        netY -=direction
    }
}

console.log(netX*netY)