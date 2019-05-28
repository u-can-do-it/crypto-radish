const sortData = (arr, sortBy, sortDirection = "ASC") => {
  const tab = [...arr];

  function getNested(theObject, path, separator = ".") {
    try {
      return path
        .replace("[", separator)
        .replace("]", "")
        .split(separator)
        .reduce(function(obj, property) {
          return obj[property];
        }, theObject);
    } catch (err) {
      return undefined;
    }
  }

  if (sortDirection === "DESC") {
    return tab.sort((a, b) => {
      if (getNested(a, sortBy) > getNested(b, sortBy)) {
        return -1;
      } else if (getNested(b, sortBy) > getNested(a, sortBy)) {
        return 1;
      }
      return 0;
    });
  }
  if (sortDirection === "ASC") {
    return tab.sort((a, b) => {
      if (getNested(a, sortBy) > getNested(b, sortBy)) {
        return 1;
      } else if (getNested(b, sortBy) > getNested(a, sortBy)) {
        return -1;
      }
      return 0;
    });
  }
  console.log(tab);
  return tab;
};
export default sortData;
