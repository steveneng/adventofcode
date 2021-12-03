import fs from "fs";

let binaryList:string[] = fs.readFileSync(`${__dirname}\\input.txt`,'utf-8').split("\n");

// get gamma and epsilon
//  gamma is find most common in each bit 
// espsilon is the least common
// convert gamma and epsilon to int and multiply 

let epsilon:string[] = [];

let gamma:string[] = [];
let oneCount:number = 0;

let refList = binaryList.slice(0)

let refList2 = binaryList.slice(0)


for(let x = 0 ; x<binaryList[0].length; x++){
    for(let y = 0; y<refList.length; y++){
        oneCount+=parseInt(refList[y][x])
    }
    if(refList.length===1){
        break
    }
    if(oneCount>refList.length/2){
        // if more than half then 1 is more common
        gamma.push("1")


       refList =  refList.filter((a:any)=>a[x]==="1")

    }
    else if(oneCount<refList.length/2){
// if less than half then 1 is more common
        gamma.push("0")

        refList =  refList.filter((a:any)=>a[x]==="0")    }
    else if(oneCount===refList.length/2){
        gamma.push("1");
        refList =  refList.filter((a:any)=>a[x]==="1")
    }
    oneCount = 0
}


for(let x = 0 ; x<binaryList[0].length; x++){
    oneCount = 0
    for(let y = 0; y<refList2.length; y++){
        oneCount+=parseInt(refList2[y][x])
    }
    if(refList2.length===1){
        break
    }
    else if(oneCount>refList2.length/2){
        // if more than half then 1 is more common

        epsilon.push("0")

        refList2 =  refList2.filter((a)=>a[x]==="0")
     
    }
    else if(oneCount<refList2.length/2){
// if less than half then 1 is more common
 
        epsilon.push("1")
        refList2 =  refList2.filter((a)=>a[x]==="1")
       
    }
    else if(oneCount===refList2.length/2){

        epsilon.push("0")
        refList2 =  refList2.filter((a)=>a[x]==="0")
    }

}

console.log(refList,refList2)


let convertedGamma = parseInt(refList[0],2);
let convertedEp = parseInt(refList2[0],2);

console.log(convertedGamma*convertedEp )