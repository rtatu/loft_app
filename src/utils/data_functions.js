function getIn(data, str) {
  let p = str.split(".");
  let temp_data = data;

  for (let entity of p) {
    if (temp_data) {
      temp_data = temp_data[entity];
    }
  }
  return temp_data;
}

export default getIn;
