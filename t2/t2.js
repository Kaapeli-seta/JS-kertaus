'use strict';

function calc()
{
  console.log("Hello world");

  const x = parseFloat(prompt("x>"));
  const y = parseFloat(prompt("y>"));

  Distance = Math.sqrt(Math.pow((x*2 - x), 2) + Math.pow((y*2 - y), 2));

  document.getElementById("demo").innerHTML = Distance
  return
}

calc();
