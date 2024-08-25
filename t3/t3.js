'use strict';

const k = document.querySelector('#target');

const s1 = +prompt('Ensimmäinen sivu');
const s2 = +prompt('Toinen sivu');
const s3 = +prompt('Kolmas sivu');

if ((s1 === s2) && (s2 === s3)) {
  k.innerHTML = 'Kolmio on tas sivuinen';
} else if (s1 !== s2 && s2 !== s3 && s1 !== s3){
  k.innerHTML = 'Kolmio on epäsäänöllinen';
} else {
  k.innerHTML = 'Kolmio on tasakylkinen';
}

