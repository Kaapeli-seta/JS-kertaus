'use strict';
function calc(points){
  const cord = points.split("," && "." && " ");
  console.log(cord)

  const x = parseFloat(cord[0]);
  const y = parseFloat(cord[1]);
  const x2 = parseFloat(cord[2]);
  const y2 = parseFloat(cord[3]);

  const equat = Math.sqrt(Math.pow((x2 - x), 2) + Math.pow((y2 - y), 2));

  if (isNaN(equat)){
    const new_points = prompt("incurrect imput, missing number or missing \",\" pleas enter: x, y, x2, y2");
    calc(new_points);
  }
  else {
    return equat
  }
}

const points = prompt("Give the cordinates for points 1 and 2: x, y, x2, y2");
const distance = calc(points);

document.getElementById("demo").innerHTML = "The result is " + distance;
