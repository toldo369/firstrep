// Нижче наведено код, що просить користувача ввести два числа і відображає їхню суму.
//
//     Він працює неправильно. Код у прикладі виводить 12 (для початкових значень у полях вводу).
//
// У чому помилка? Виправте її. Результат має бути 3.
//
//
// let a = prompt("Перше число?", 1);
// let b = prompt("Друге число?", 2);
//
// alert(a + b); // 12


let a = +prompt("Перше число?", 1);
let b = +prompt("Друге число?", 2);

console.log(a + b); // 3