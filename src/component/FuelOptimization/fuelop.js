let numberOfStation = 4;

let tankCapacity = 10;

let totalDistance = 17;

let currentFuel = 3;

let gasStation = [[2, 40], [9, 15], [10, 6], [5, 7]];

// let gasStation = [[2, 40], [5, 7], [9, 15], [10, 12]];

let config = {};

let totalCost = 0;

let nextCheapestStation = new Array(gasStation.length).fill(-1);

let data = []

// sort gasStation by distance

gasStation.sort(function(a, b) {
  return a[0] - b[0];
});

let stack = [];

// find nextCheapest corresponding to gasStation
// for (let i = gasStation.length - 1; i >= 0; i--) {
//   while (stack.length > 0 && gasStation[stack[0]][1] >= gasStation[i][1]) {
//     stack.pop();
//   }
//   nextCheapestStation[i] = stack.length === 0 ? -1 : stack[0];
//   stack.push(i);
// }

for(let i = 0; i < gasStation.length; i++){
  for (let j = i+1; j < gasStation.length; j++){
    if(gasStation[j][1] < gasStation[i][1]){
      nextCheapestStation[i] = j;
      break;
    }
  }
}

console.log(nextCheapestStation)

currentFuel -= gasStation[0][0];

/* solve path */

for (let i = 0; i < gasStation.length; i++) {
  if (currentFuel < 0) {
    totalCost = -1;
    break;
  }

  let gasNeeded = Math.min(
    tankCapacity,
    (nextCheapestStation[i] === -1
      ? totalDistance
      : gasStation[nextCheapestStation[i]][0]) - gasStation[i][0]
  );

  // console.log(gasNeeded);
  if (gasNeeded > currentFuel) {

    data.push({
      index : i,
      distance: gasStation[i][0],
      cost_per_lit: gasStation[i][1],
      gasFilled: gasNeeded - currentFuel,
      price_for_gasFilled: (gasNeeded - currentFuel) * gasStation[i][1]
    })

    totalCost += (gasNeeded - currentFuel) * gasStation[i][1];
    currentFuel = gasNeeded;
  }

  let g = (i === numberOfStation - 1 ? totalDistance : gasStation[i + 1][0]) -
  gasStation[i][0];
  console.log('g', g)
  currentFuel -= g;

  // currentFuel -=
  //   (i === numberOfStation - 1 ? console.log('true') || tankCapacity : gasStation[i + 1][0]) -
  //   gasStation[i][0];

  console.log(currentFuel, 'cf', i)
  // console.log(totalCost);
}
console.log(data)
// console.log('current fuel', currentFuel)

console.log(totalCost);