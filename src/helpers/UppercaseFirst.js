

export const uppercaseFirst = (prop) => {
  const newSent = prop
    ?.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return newSent;
};
