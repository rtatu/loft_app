const normalize = data => {
  let result = {};

  for (let item of data) {
    result[item.id] = item;
  }

  return result;
};

module.exports = normalize;
