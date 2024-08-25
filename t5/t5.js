'use strict'

const k = document.querySelector('#target')

let num = +prompt('enter a positive intager')
while (num<0 || isNaN(num)){
  num = +prompt('incurrect value, enter a positive intager')
}

let result = 0

for (let i = 0; i <= num; ++i) {
  result += i
}

k.insertAdjacentHTML('beforeend', result)

