const normalize = (data) => {
  let result = [];

  for (let item of data) {
    let d = {};
    Object.keys(item).map((key) => {
      if (Array.isArray(item[key])) {
        d[key] = objectNormalization(item[key]);
      } else {
        d[key] = item[key];
      }
    });

    result.push(d);
  }

  return objectNormalization(result);
};

const objectNormalization = (data) => {
  let result = {};
  for (let item of data) {
    result[item.id] = item;
  }

  return result;
};

module.exports = normalize;
