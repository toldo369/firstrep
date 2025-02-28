// Створити функцію palindrome, яка повертає булеве значення.
//     Паліндромом називають слово чи фразу, яка читається в обидві сторони однаково. Наприклад: anna

function palindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(palindrome("anna"));
console.log(palindrome("1anna1"));
console.log(palindrome("anna1"));
console.log(palindrome("hello"));