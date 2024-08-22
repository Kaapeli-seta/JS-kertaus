'use strict';

const k = document.querySelector('#target');

const s1 = +prompt('yksi');
const s2 = +prompt('kaksi');
const s3 = +prompt('kolme');

if ((s1 === s2) && (s2 === s3)) {
  k.innerHTML = 'kolmio on tas sivuinen';
} else if (s1 !== s2 && s2 !== s3 && s1 !== s3){
  k.innerHTML = 'kolmio on epäsäänöllinen';
} else {
  k.innerHTML = 'kolmio on tasakylkinen';
}

