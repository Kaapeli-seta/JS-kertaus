function cel()
{
  console.log("Hello world")

  const C = parseFloat(prompt("Temperature in celsius>"))
  console.log(C)

  document.getElementById("demo").innerHTML = C + 273.15 + " K in Kelvin"
  document.getElementById("demo2").innerHTML = (C * 9/5) + 32 + " F in Fahrenheit"
  return
}

cel();
