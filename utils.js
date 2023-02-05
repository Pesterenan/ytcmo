export const sortByName = (a, b) => {
  if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
  if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;

  return 0;
};

export const filterSuper = (member) =>
  member.currentLevel === "Super Pestinha!";

export const formatName = (memberName) => {
  let name = memberName.split(" ");
  name.map((word) => capitalizeFirstLetter(word));
  return name.length > 1
    ? `${name[0]} ${name[name.length - 1]}`
    : capitalizeFirstLetter(memberName);
};

const capitalizeFirstLetter = (word) => word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
