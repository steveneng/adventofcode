
import fs from "fs";

let binaryList:string[] = fs.readFileSync(`${__dirname}\\input.txt`,'utf-8').split("\n");
