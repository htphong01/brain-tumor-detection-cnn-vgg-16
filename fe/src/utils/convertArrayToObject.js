export const convertArrayToObject = (array, key = 'english') => {
  if (!Array.isArray(array)) return {};
  return array.reduce((pre, cur) => {
    return { ...pre, [cur[key]]: cur };
  }, {});
};
