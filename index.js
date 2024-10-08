// const userAge = 29;
// const userAge = 16;

// if (userAge > 18) {
//     console.log('Пользователю больше 18 лет');
// } else if (userAge == 20) {
//     console.log ('Пользователю 20 лет');
// } else {
//     console.log('Пользователю меньше 18 лет');

// -----------

// const userAge = 18;

// if (userAge >= 18) {
//     console.log('Пользователю больше или равно 18 лет');
// } else {
//     console.log('Пользователю меньше 18 лет');
// }const userAge = 18;

// if (userAge >= 18) {
//     console.log('Пользователю больше или равно 18 лет');
// } else {
//     console.log('Пользователю меньше 18 лет');
// }
// ---------------
// let temperature = -21;

// if (temperature >-30) {
//     console. log ('Сегодня холодно')
// } 
// if (temperature <=-20) {
//     console. log ('Сегодня холодно')
// }

// ---------

// for (let i : number = 0; i < 10; i++) {
//     console. log('Я строка')
// }
// ------------------
// let n = 100;
// let m = 5;
// let c = 0;
// while (n>m){
//     c = c + 1;
//     n = n / 2;
// }
// console.log(c);
// ------------

// let c = 0;
// for(let i = 1800; i<=2020; i++){
//     c = c + 1;
//     if (i === 1961){
// console.log(c);
//     }   
// }
// --------

// let c = 0;
// let cc = 0;
// for(let i = 1800; i<=2020; i++){
//     c = c + 1;
//     if (i === 1961){
// console.log(c);
//     }   
//     if (i%4===0){
//         cc++;
//     }
// }
// console.log(cc);
// ---------------




// 1. Вывести сумму чисел от 1 до N*/
// let n = 10;
// let summ = 0;
// for(let i=1; i< n+1; i++){
//     summ = summ + i;
// }
// console.log(summ);

// /*2. Вывести факториал числа N*/
// let f = 4;
// let factorial = 1;
// for(let i=1; i< f+1; i++){
//     factorial *= i;
// }
// console.log("Факториал числа " + f + " = " + factorial);

// /*3. Вывести четные и нечетные числа от 1 до 100*/
// let c = 100;
// for(let i = 1; i < c + 1; i++){
//     if(i%2 == 0) {
//         console.log("Чётное число: " + i)
//     }
//     if(i%2!=0) {
//         console.log("Нечётное число: " + i)
//     }
// }

// /*4. Вывести проверку на простое число*/
// let digital = 3;
// let proverka = true;
// for(let i = 1; i < 10; i++){
//     if(digital%i == 0) {
//         if(i != 1 && i !=digital) {
//             proverka = false
//         }
//     }
// }
// if(proverka == true){
//     console.log("Число " + digital + " простое! ")
// }
// else{
//     console.log("Число " + digital + " не является простым!")
// }

// /*5. Вывести таблицу умножения для числа N*/
// let increase = 4;
// for(let i = 0; i <11; i++){
//     console.log(increase + " x " + i + " = " + increase*i)
// }

// /*6. Вывести сумму цифр числа N*/
// let dig = 1654;
// let chislo = 0;
// while(dig > 0){
//     chislo += dig%10
//     dig = Math.floor(dig/10)
// }

// console.log("Сумма цифр = " + chislo);

// /*7. Обратное число*/
// let digit = 123456789;
// let obrdig = 0;
// let lastdigit = "";
// while(digit > 0){
//     lastdigit += String(digit%10)
//     digit = Math.floor(digit/10)
// }
// console.log("Обратное число: " + lastdigit);

// /*8. Количество цифр в числе N*/
// let dig1 = 1234567890;
// let chislo1 = 0;
// while(dig1 > 0){
//     chislo1 ++
//     dig1 = Math.floor(dig1/10)
// }
// console.log("Количество цифр равно " + chislo1)

// /*9. Проверка палиндрома для числа N*/
// let digit1 = 123321;
// let digit2 = digit1;
// let obrdig2 = 0;
// let lastdigit2 = "";
// let answer = "";
// while(digit2 > 0){
//     lastdigit2 += String(digit2%10)
//     digit2 = Math.floor(digit2/10)
// }
// if(lastdigit2 == digit1){
//     answer = "Число " + digit1 + " полиндром!"
// }
// else {
//     answer = "Число " + digit1 + " не полиндром!"
// }
// console.log(answer);

// /*10. Сумма квадратов чисел от 1 до N*/
// let num = 4;
// let summ1 = 0;
// for(let i = 1; i < num + 1; i++){
// summ1 += Math.pow(i,2)
// }
// console.log(`Cумма квадратов равна: ${summ1}`);



// Написать функцию, которая будет принимать имя пользователя, и 
// выводить строку с приветствием данного пользователя, если имени 
// пользователя нет, выводить приветствие гостя.
 
const username = Alex;
const secondname = Lukin;

function sayHi(userName) {
    if(userName == ""){
        "Гость Привет!"
    }else{
        userNam
    }   
}
console.log(sayHi(userName) )