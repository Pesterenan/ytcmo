import fs from "fs";
import { sortByName, filterSuper, formatName } from "./utils.js";

const CSV_FILE = fs.readFileSync("input.csv", "utf-8");
console.log("Welcome to YTCMO\n\n");

const dataObj = CSV_FILE.split("\n");
dataObj.pop();
dataObj.shift();

let memberships = {};
memberships = dataObj
  .map((member) => {
    const memberFormatted = member.split(",");
    return {
      name: memberFormatted[0],
      currentLevel: memberFormatted[2],
    };
  })
  .sort(sortByName)
  .filter(filterSuper);

const members = memberships.reduce((acc, member) => {
  acc += formatName(member.name);
  acc += "\n";
  return acc;
}, "");

console.log(members);
