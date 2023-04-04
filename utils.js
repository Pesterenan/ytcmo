export const INPUT_FILE_NAME = "input.csv";
export const OUTPUT_FILE_NAME = "output.txt";

export const sortByName = (a, b) => {
  if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
  if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;

  return 0;
};

export const filterSuper = (member, level) => member.currentLevel === level;

export const formatName = (memberName) => {
  const fullName = memberName.split(" ").map(capitalizeWord);
  return fullName.length > 1
    ? `${fullName[0]} ${fullName[fullName.length - 1]}`
    : capitalizeWord(memberName);
};

const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const MPC_TIMECODE_REGEX = /\.\d{3}\W+\:\W/gm;
/**
 * This method replaces the characters from the seconds to the
 * label name of each chapter in a video by the string ' - '
 * @param {string} inputTimecode
 * @param {string} regex
 * @returns
 */
export const formatTimecodeToYoutubeTimeCode = (inputTimecode, regex) => {
  return inputTimecode.replaceAll(regex, " - ");
};
