
const k = document.querySelector('#target');

let num = +prompt('enter a positive intager')
while (num<0 || isNaN(num)){
  num = +prompt('incurrect value, enter a positive intager')
}

let result = 0

for (let i = 1; i <= num; ++i) {


  let dataTr = document.createElement("tr");
  k.appendChild(dataTr);


  for (let j = 1; j <= num; ++j) {
    result = i*j
    td = document.createElement("td");
            title = document.createTextNode(result);
            td.appendChild(title);
            dataTr.appendChild(td);
  }
}
