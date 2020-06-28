const lastday = function (y, m) {
  return new Date(y, m + 1, 0).getDate();
};

export { lastday };
