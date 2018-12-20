// alert('hola');

// true
const arr = [
  [1, 1],
  [2, 5],
  [3, 8],
  [4, 6],
  [5, 3],
  [6, 7],
  [7, 2],
  [8, 4]
];

// true
const arr1 = [
  [1, 1],
  [2, 6],
  [3, 8],
  [4, 3],
  [5, 7],
  [6, 4],
  [7, 2],
  [8, 5]
];

// false
const arr2 = [
  [1, 1],
  [2, 3],
  [3, 5],
  [4, 7],
  [5, 2],
  [6, 4],
  [7, 6],
  [8, 8]
];

// false
const arr3 = [
  [1, 1],
  [2, 3],
  [3, 5],
  [4, 7],
  [5, 2],
  [6, 4],
  [7, 6],
  [8, 8]
];

// elementos de HTML
const rx1 = document.getElementById('rx1');
const ry1 = document.getElementById('ry1');

const rx2 = document.getElementById('rx2');
const ry2 = document.getElementById('ry2');

const rx3 = document.getElementById('rx3');
const ry3 = document.getElementById('ry3');

const rx4 = document.getElementById('rx4');
const ry4 = document.getElementById('ry4');

const rx5 = document.getElementById('rx5');
const ry5 = document.getElementById('ry5');

const rx6 = document.getElementById('rx6');
const ry6 = document.getElementById('ry6');

const rx7 = document.getElementById('rx7');
const ry7 = document.getElementById('ry7');

const rx8 = document.getElementById('rx8');
const ry8 = document.getElementById('ry8');

const resultPrint = document.getElementById('result');
const btn = document.getElementById('btn');
const btnTryA = document.getElementById('btn-try-a');


let i = 0;
let j = 1;
let result = '';

// Funcion que compara los elementos de array
const compare = (arr) => {
  console.log('i =', i);
  console.log('j =', j);
  if (j < arr.length) {
    // Se comparan dos reinas a la vez.
    let rest1 = arr[i][0] - arr[i][1];
    let rest2 = arr[j][0] - arr[j][1];
    console.log(rest1, rest2);

    // compara que no se repita el mismo numero en X y en Y
    if (arr[i][0] === arr[j][0] || arr[i][1] === arr[j][1]) {
      result = 'false';
      return result;
    } else {
      // compara que las reinas no esten en la misma diagonal, haciendo una resta de x-y
      if (rest1 === rest2) {
        result = 'false';
        return result;
      } else {
        // certificando que se cumple que las reina no esta en la misma linea y diagonal, se pasa a la siguiente reina.
        j++;
        compare(arr);
      }
    }
  } else {
    // si ha terminado de comparar a la primera reina con las otras 7, pasa a comparar las siguientes reinas en el mismo ciclo.
    i++;
    j = i + 1;
    if (i < arr.length) {
      compare(arr);
    } else {
      // si termina de hacer todas las comparaciones el resultado sera true.
      result = 'true';
      return result;
    };
  };
  // console.log(result);
  return result;
};

const initialFuntion = () => {
  if (rx1.value, rx2.value, rx3.value, rx4.value, rx5.value, rx6.value, rx7.value, rx8.value, ry1.value, ry2.value, ry3.value, ry4.value, ry5.value, ry6.value, ry7.value, ry8.value) {
    const arrUser = [[rx1.value, ry1.value], [rx2.value, ry2.value], [rx3.value, ry3.value], [rx4.value, ry4.value], [rx5.value, ry5.value], [rx6.value, ry6.value], [rx7.value, ry7.value], [rx8.value, ry8.value]];
    const res = compare(arrUser);
    console.log(res);
    resultPrint.innerHTML = res;
  } else {
    alert('escribe numeros validos en las casillas');
  };
};

btn.addEventListener('click', initialFuntion);
btnTryA.addEventListener('click', event=>location.reload());

// const respuesta = compare(arr1);
// console.log(respuesta);
