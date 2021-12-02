import fs from "fs";

let depthList:string[] = fs.readFileSync(`${__dirname}\\input2.txt`,"utf-8").split("\n")

let currentSum:number = depthList.slice(0,3).reduce((a,b)=>{
    return a + parseInt(b)
},0)
let tempThree:string[];
let current:number=0;
let counter:number = 0



for(let i = 2 ; i<depthList.length; i++){
    if(i+2>depthList.length-1) break;
    tempThree = depthList.slice(i,i+3)
    current = tempThree.reduce((a,b)=>{
        return a + parseInt(b)
    },0)

    if(current>currentSum){
        currentSum = current
         counter +=1
    }
    else{
        currentSum = current
    }

}

console.log(counter)


