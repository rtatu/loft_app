function getMinCostRoute(props) {
  let { tankCapacity, currentFuel, gasStation, truckAverage } = props;

  let totalDistance = props.distance;

  let numberOfStation = gasStation.length;

  let totalCost = 0;

  let nextCheapestStation = new Array(gasStation.length);

  let stack = [];

  let data = {};

  console.log('gs', gasStation)


  // find nextCheapest corresponding to gasStation
  for (let i = gasStation.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      gasStation[stack[0]]["per_lit_price"] >= gasStation[i]["per_lit_price"]
    ) {
      stack.pop();
    }
    nextCheapestStation[i] = stack.length === 0 ? -1 : stack[0];
    stack.push(i);
  }

  currentFuel -= gasStation[0].distance / truckAverage;


  /* solve path */

  for (let i = 0; i < gasStation.length; i++) {
    if (currentFuel < 0) {
      totalCost = -1;
      break;
    }

    let gasNeeded =
      Math.min(
        tankCapacity,
        ((nextCheapestStation[i] === -1
          ? totalDistance
          : gasStation[nextCheapestStation[i]].distance) -
          gasStation[i].distance) / truckAverage
      );

    if (gasNeeded > currentFuel) {
      data[gasStation[i]["site_id"]] = {
        distance: gasStation[i].distance,
        cost_per_lit: gasStation[i]["per_lit_price"],
        gasFilled: gasNeeded - currentFuel,
        price_for_gasFilled:
          (gasNeeded - currentFuel) * gasStation[i]["per_lit_price"]
      };

      totalCost += (gasNeeded - currentFuel) * gasStation[i]["per_lit_price"];
      currentFuel = gasNeeded;
    }

    currentFuel -=
      ((i === numberOfStation - 1 ? totalDistance : gasStation[i + 1].distance ) -
        gasStation[i].distance ) / truckAverage

    console.log('cf', currentFuel)
  }
  // console.log('data', data)

  // let total = 0

  // Object.keys(data).map( item => total = data[item]["gasFilled"] + total)
  // console.log(total)
  console.log(currentFuel,'cf')
  console.log(totalCost);
  return data;
}


export default getMinCostRoute;
