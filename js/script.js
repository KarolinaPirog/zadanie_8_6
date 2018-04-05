var a = prompt('podaj wartość a');
var b = prompt('podaj wartość b');
var value = (a * a) - (2 * a * b) - (b * b);

console.log (value);


if (value == 0){
        console.log ('wynik równy 0');
} else if (value > 0){
    console.log ('wynik dodatni');
} else {
        console.log ('wynik ujemny');        
}