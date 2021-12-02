import fs from "fs";

let listOfDepths:string[] = fs.readFileSync(`${__dirname}\\input.txt`,"utf-8").split("\n")

let netX = 0;
let aim = 0; 
let depth = 0

for(let i = 0 ; i<listOfDepths.length ; i++){
    let currentDirection:string[] = listOfDepths[i].split(" ");
    let direction:number = parseInt(currentDirection[1])
    if(currentDirection[0]==="forward"){
        netX +=direction
        depth +=aim*direction 
    }
    else if(currentDirection[0]==="down"){
        aim +=direction
    }
    else if(currentDirection[0]==="up"){
        aim -=direction
    }
}

console.log(depth*netX)

