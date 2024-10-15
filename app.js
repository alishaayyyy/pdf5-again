var num1 = 8;
var num2 = 16;
var total = num1 + num2;
document.write("The sum of" + " " + num1 + "+" + num2 + " " + "is" + " " + total);

document.write('<br>')

var num1 = 80;
var num2 = 55;
var total = num1 - num2;
document.write("The subtraction of" + " " + num1 + "-" + num2 + " " + "is" + " " + total);

document.write('<br>')

var num1 = 8;
var num2 = 3;
var total = num1 * num2;
document.write("The  multiplication of" + " " + num1 + "*" + num2 + " " + "is" + " " + total);

document.write('<br>')

var num1 = 60;
var num2 = 3;
var total = num1 / num2;
document.write("The division of" + " " + num1 + "/" + num2 + " " + "is" + " " + total);

document.write('<br>')

var num1 = 84;
var num2 = 9;
var total = num1 % num2;
document.write("The modulus of" + " " + num1 + "%" + num2 + " " + "is" + " " + total);

document.write('<br>');


document.write('<br>');
document.write('<br>');




// 3
var math = 5;
document.write("Initial value is " + math);

document.write('<br>');

var incre = ++math;
document.write("Increment value is " + incre);

document.write('<br>');

var add = incre + 7;
document.write("Value after addition is " + add);

document.write('<br>');

var decre = --add;
document.write("Decrement value is " + decre);

document.write('<br>');

var mod = decre % 3;
document.write("The reminder is " + mod);



document.write('<br>');
document.write('<br>');


var tick = 600;
var persons = 5;
document.write("Total cost to buy " + persons + " tickets to a movie is" + " " + persons * tick);


document.write('<br>');
document.write('<br>');

// table

var ask = prompt("Table number please");
var number = ask;
var table = "";


for (let i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "<br>";
}
document.write("<h2>Table of " + number + ":<br>" + table + "</h2>");

document.write('<br>');
document.write('<br>');

// temp

var celsiusTemp = prompt("celsiusTemperature please");

var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
console.log(celsiusTemp + "C" + " " + "is" + " " + fahrenheitTemp + "F");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemp = prompt("cfahrenheitTemperature please");

// d. Convert it to Celsius & output "NNoF is NNOC".
celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
console.log(fahrenheitTemp + "F" + " " + "is" + " " + celsiusTemp + "C");

// next
var onePriceItem = 650;
var quantityOfOneItem = 3;
var twoPriceItem = 100;
var quantityOfTwoItem = 7;
var shippingCharges = 100;
var total = 1950 + 800;

document.write("<h1>Shipping Carts</h1>" + "<br>" + "Price of 1 item is" + (onePriceItem * 3) + "<br>" + "Quantity of 1 items is " + quantityOfOneItem + "<br>" + "Price of 2 items is " + (twoPriceItem * 7 + shippingCharges) + "<br>" + "Quantity of two items is " + quantityOfTwoItem + "<br>" + "Shipping Charges" + shippingCharges + "<br>" + "<br>");
document.write("Total cost of your order is " + total + "<br>");


// next
var totalMarks = 1000;
var obtainedMarks = 900;
var percentage = 900 / 1000;

document.write("<h1>MARKS SHEET</h1>" + "<br>" + "Total Marks =" + totalMarks + "<br>" + "Obtained Marks =" + obtainedMarks + "<br>" + "percentage =" + percentage * 100 + "%" + "<br>");

// next
var dollar = 10;
var pakistani = 104.80;
var dpakistaniCurrency = 10 * 104.80;

var saudiRiyals = 25;
var pakistani = 28;
var pakistaniCurrency = 25 * 28;

var totalCurrency = dpakistaniCurrency + pakistaniCurrency;
document.write("<h1>Currency in PKR</h1>" + "<br>" + "total currency in PKR" + totalCurrency + "<br>");

// next
var initialNum = 15 + 5 * 10 / 2;
document.write(initialNum + "<br>");


// next
var cuurentYear = 2024;
var bithYear = 2007;
var currentAge = 2024 - 2007;
document.write("<h1>Current Age</h1>" + "<br>" + "The current age is " + "<b>" + currentAge + "</b>" + "<br>" + "Current year " + cuurentYear + "<br>" + "birth year " + bithYear + "<br>");


// next
var fvrtSnake = "KURKURE"
var age = 17;
var Estimate_maximum_age = 60;
var amountOf_snake_per_days = 5;
var until_60years_need_eat = 60 * 5;
document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>" + "Favourite Snake" + fvrtSnake + "<br>" + "CurrentAge" + age + "<br>" + "Estimate Maximum Age" + Estimate_maximum_age + "<br>" + "Amount of snakes per day " + amountOf_snake_per_days + "<br>" + "You will need " + until_60years_need_eat + " Lays to last you untill the rip old age of " + Estimate_maximum_age + "<br>")


