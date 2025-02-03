// Давайте спробуємо 5 операцій з масивом.
//
//     Створіть масив styles з елементами “Jazz” та “Blues”.
// Додайте “Rock-n-Roll” в кінець масиву.
//     Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
//     Видаліть перший елемент масиву та покажіть його.
//     Вставте Rap та Reggae на початок масиву.


let styles = ["Jazz", "Blues"];

console.log(styles);

styles.push("Rock-n-Roll");

console.log(styles);

styles[1] = "Classics";

console.log(styles);

console.log(styles.shift());

console.log(styles);

styles.unshift("Rap" , "Reggae");

console.log(styles);

