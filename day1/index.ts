import fs from "fs"

let ele:string = fs.readFileSync(`${__dirname}\\input2.txt`,'utf8',)
let inputList:string[] = ele.split("\n")

let current = inputList[0];
let count = 0

for(let i = 1 ; i<inputList.length; i++){
    if(inputList[i]>current){
        count++
        current=inputList[i]
    }
    else{
        current = inputList[i]
    }
}

console.log(count)