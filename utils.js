export const sortByName = (a, b) => {
  if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
  if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;

  return 0;
};

export const filterSuper = (member, level) =>
  member.currentLevel === level;

export const formatName = (memberName) => {
  let name = memberName.split(" ");
  name.map((word) => capitalizeFirstLetter(word));
  return name.length > 1
    ? `${name[0]} ${name[name.length - 1]}`
    : capitalizeFirstLetter(memberName);
};

const capitalizeFirstLetter = (word) => word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

export const MPC_TIMECODE_REGEX = /\.\d{3}\W+\:\W/gm;
/**
 * This method replaces the characters from the seconds to the
 * label name of each chapter in a video by the string ' - '
 * @param {string} inputTimecode 
 * @param {string} regex 
 * @returns 
 */
export const formatTimecodeToYoutubeTimeCode = (inputTimecode, regex) => {
  return inputTimecode.replaceAll(regex, ' - ');
}