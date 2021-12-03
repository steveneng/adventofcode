import fs from "fs";

let binaryList:string[] = fs.readFileSync(`${__dirname}\\input.txt`,'utf-8').split("\n");

// get gamma and epsilon
//  gamma is find most common in each bit 
// espsilon is the least common
// convert gamma and epsilon to int and multiply 

let epsilon:string[] = [];

let gamma:string[] = [];
let tempSum:number = 0

console.log(binaryList.length,"bin length")

for(let x = 0 ; x<binaryList[0].length; x++){
    for(let y = 0; y<binaryList.length; y++){
        tempSum+=parseInt(binaryList[y][x])
    }
    if(tempSum>binaryList.length/2){
        // if more than half then 1 is more common
        gamma.push("1")
        epsilon.push("0")
   
    }
    else if(tempSum<binaryList.length/2){
// if less than half then 1 is more common
        gamma.push("0")
        epsilon.push("1")
     
    }
    tempSum = 0
}

let gammaJoin = gamma.join("")
let epsilonJoin = epsilon.join("")

let convertedGamma = parseInt(gammaJoin,2);
let convertedEp = parseInt(epsilonJoin,2);

console.log(convertedGamma,convertedEp,"multiplied:",convertedGamma*convertedEp )