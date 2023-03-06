let a = +prompt('Введите число а')
let b = +prompt('Введите число b')
let c = +prompt('Введите число c')


if (b < a && a < c || c < a && a < b ) {
    alert('Число ' + a + " является средним")
}else if (a < b && b < c || c < b && b < a){
    alert('Число ' + b + " является средним")
}else if (a < c && c < b || b < c && c < a){
    alert('Число ' + b + " является средним")
}else {
    alert('Я накосячил')
}