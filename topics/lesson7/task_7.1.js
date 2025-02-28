// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
//
//     Функція повинна повертати новий масив і не змінювати вихідний.



function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 2, 6);

console.log(filtered);
console.log(arr);
