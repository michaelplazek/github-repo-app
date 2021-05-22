export const getPath = () => window.location.pathname;

export const parseUserFromLocation = () => {
  const pathname = getPath();
  const paths = pathname.split("/");
  // handle trailing slashes
  if ((paths.length === 3 && paths[2] === "") || (paths.length === 2 && paths[1] !== "")) {
    return paths[1];
  }
  return undefined
};

export const setLocation = (location) => {
  window.open(location, "_blank");
};
