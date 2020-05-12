function getMinCostRoute(props) {
  let { tankCapacity, currentFuel, gasStation, truckAverage } = props;

  console.log(props)

  let totalDistance = props.distance;

  let numberOfStation = gasStation.length;

  let totalCost = 0;

  let nextCheapestStation = new Array(gasStation.length).fill(-1);

  let stack = [];

  let data = {};



  //find nextCheapest corresponding to gasStation
  // for (let i = gasStation.length - 1; i >= 0; i--) {
  //   while (
  //     stack.length > 0 &&
  //     gasStation[stack[0]]["per_lit_price"] >= gasStation[i]["per_lit_price"]
  //   ) {
  //     stack.pop();
  //   }
  //   nextCheapestStation[i] = stack.length === 0 ? -1 : stack[0];
  //   stack.push(i);
  // }

  for(let i = 0; i < gasStation.length; i++){
    for (let j = i+1; j < gasStation.length; j++){
      if(gasStation[j]["per_lit_price"] < gasStation[i]["per_lit_price"]){
        nextCheapestStation[i] = j;
        break;
      }
    }
  }


  currentFuel -= gasStation[0].distance / truckAverage;


  /* solve path */

  for (let i = 0; i < gasStation.length; i++) {
    if (currentFuel < 0) {
      totalCost = -1;
      break;
    }
    // let gasNeeded = 0;
    // try{
      let gasNeeded =
        Math.min(
          tankCapacity,
          ((nextCheapestStation[i] == -1
            ? totalDistance
            : console.log(gasStation[nextCheapestStation[i]]) || gasStation[nextCheapestStation[i]].distance) -
            gasStation[i].distance) / truckAverage
        );
    // } catch(e){
    //   console.log(e)
    // }


    if (gasNeeded > currentFuel) {
      data[gasStation[i]["site_id"]] = {
        distance: gasStation[i].distance,
        Street: gasStation[i].Street,
        duration: gasStation[i].duration,
        cost_per_lit: gasStation[i]["per_lit_price"],
        gasFilled: gasNeeded - currentFuel,
        price_for_gasFilled:
          (gasNeeded - currentFuel) * gasStation[i]["per_lit_price"]
      };

      totalCost += (gasNeeded - currentFuel) * gasStation[i]["per_lit_price"];
      currentFuel = gasNeeded;
    }

    currentFuel -=
      ((i === numberOfStation - 1 ? (totalDistance - 100) : gasStation[i + 1].distance ) -
        gasStation[i].distance ) / truckAverage

    // console.log('cf', currentFuel)
  }

  console.log(data, totalCost, '122222');

  if(totalCost == -1){
  
    return -1
  
  }

  return [data, totalCost];

}


export default getMinCostRoute;
