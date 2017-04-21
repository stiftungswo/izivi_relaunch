const removeNull = (obj) => {
  const newObj = obj;
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (val && typeof val === 'object') {
      newObj[key] = removeNull(val);
    }
    if (!val) delete newObj[key];
  });
  return newObj;
};

export default removeNull;
