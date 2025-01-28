// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
//
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.
//
//     P.S. Використовуйте typeof для перевірки, що значення властивості числове.


let list = {
    first: 10,
    second: "five",
    third: 15
}
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(list);
console.log(list);