import fs from "fs";
import {
  sortByName,
  filterSuper,
  formatName,
  formatTimecodeToYoutubeTimeCode,
  MPC_TIMECODE_REGEX,
  INPUT_FILE_NAME,
  OUTPUT_FILE_NAME,
} from "./utils.js";

const CSV_FILE = fs.readFileSync(INPUT_FILE_NAME, "utf-8");
const superPestinhaFilterLevel = "Super Pestinha!";
console.log("Welcome to YTCMO\n");

const formatYoutubeMemberships = (inputFile, level) => {
  const dataObj = inputFile.split("\n");
  dataObj.pop();
  dataObj.shift();

  let memberships = {};
  memberships = dataObj
    .map((member) => {
      const memberFormatted = member.split(",");
      return {
        name: memberFormatted[0].trim(),
        currentLevel: memberFormatted[2],
      };
    })
    .sort(sortByName)
    .filter((member) => filterSuper(member, level));
  console.log(`Number of members: ${memberships.length}`)

  const members = memberships.reduce((acc, member) => {
    acc += formatName(member.name);
    acc += "\n";
    return acc;
  }, "");

  return members;
};
const timecode = `
00:00:01.123                   : First chapter
00:01:00.345                   : Second chapter
`;
const result = formatTimecodeToYoutubeTimeCode(timecode, MPC_TIMECODE_REGEX);
// console.log(result);

const data = formatYoutubeMemberships(CSV_FILE, superPestinhaFilterLevel);
fs.writeFileSync(OUTPUT_FILE_NAME, data);
