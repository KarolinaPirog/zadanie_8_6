var a = prompt('podaj wartość a');
var b = prompt('podaj wartość b');
var value = (a * a) - (2 * a * b) - (b * b);

console.log (value);

console.log(value >= 0 ? 'wynik dodatni' : 'wynik ujemny');

console.log(value == 0 ? 'wynik równy 0' : 'wynik nierówny 0');