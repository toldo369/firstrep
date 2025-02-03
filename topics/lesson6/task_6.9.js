// Створити масив з даними у відповідній послідовності 'Harry Potter', 'Godfather', 'Scarface', 'Casino'.
//     Перебрати масив за допомогою цикла(for of), якщо довжина масива більше 3, то видалити перше значення з масиву.


let arrCinema = ["Harry Potter", "Godfather", "Scarface", "Casino"];

for (let cinema of arrCinema) {
  console.log(cinema);
}

if (arrCinema.length > 3) {
    arrCinema.shift();
}

console.log(arrCinema);