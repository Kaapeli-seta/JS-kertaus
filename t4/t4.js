'use strict';
function cel()
{
  let x = +prompt('Grade');
  console.log(x)
  while (x<0 || 100<x || isNaN(x)){
    x = +prompt('incurect number try again');
  }

  return x
}




const x = cel();

const k = document.querySelector('#target');

if (88 <= x) {
  k.insertAdjacentHTML('beforeend', '5')
}
else if (76 <= x) {
  k.insertAdjacentHTML('beforeend', '4')
  console.log(x)
}
else if (64 <= x) {
  k.insertAdjacentHTML('beforeend', '3')
}
else if (52 <= x) {
  k.insertAdjacentHTML('beforeend', '2')
}
else if (40 <= x) {
  k.insertAdjacentHTML('beforeend', '1')
}
else {
  k.insertAdjacentHTML('beforeend', '0')
}
