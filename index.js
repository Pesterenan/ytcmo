import fs from "fs";
import {
  sortByName,
  filterSuper,
  formatName,
  formatTimecodeToYoutubeTimeCode,
  MPC_TIMECODE_REGEX
} from "./utils.js";
import { ChildProcess } from "child_process";

const CSV_FILE = fs.readFileSync("input.csv", "utf-8");
const filterLevel = "Super Pestinha!";
console.log("Welcome to YTCMO");

const formatYoutubeMemberships = (inputFile, level) => {
  const dataObj = inputFile.split("\n");
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
    .filter((member) => filterSuper(member, level));

  const members = memberships.reduce((acc, member) => {
    acc += formatName(member.name, level);
    acc += "\n";
    return acc;
  }, "");

  console.log(members);
};
const timecode = `
00:00:01.123                   : First chapter
00:01:00.345                   : Second chapter
`
const result = formatTimecodeToYoutubeTimeCode(timecode,MPC_TIMECODE_REGEX);
console.log(result);