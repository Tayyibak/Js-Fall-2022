/**

 * Convert temperature values into different units

 * 

 * F -> C

 * F -> K

 * 

 * C -> F

 * C -> K

 * 

 * K -> F

 * K -> C

 */



// Coverting Fahrenheit to Celsius down here

 

let fahrenheitTemp1 = 90;

let celsiusTemp1 = (fTemp1 - 32) * 5/9;

console.log(`\n${fahrenheitTemp1}°F is equals to ${celsiusTemp1}°C`);



// Converting Fahrenheit to Kelvin down here

 

let kelvinTemp = (fahrenheitTemp1 + 459.67) * 5/9;

console.log(`${fahrenheitTemp1}°F is equal to ${kelvinTemp}°K`)



// Converting Celsius to Fahrenheit down here



let celsiusTemp2 = 25;

let FahrenheitTemp2 = (cTemp2 * 1.8) + 32;

console.log(`${celsiusTemp2}°C is equal to ${FahrenheitTemp2}°F`);



// Converting Celsius to Kelvin down here



let KelvinTemp2 = cTemp2 + 273.15;

console.log(`${celsiusTemp2}°C is equal to ${KelvinTemp2}`);



// Converting Kelvin to Fahrenheit down here



let kelvinTemp3 = 80;

let FahrenheitTemp3 = (kelvinTemp3 * 9/5) - 459.67

console.log(`${kelvinTemp3}°k is equal to ${FahrenheitTemp3}°F`);



// Converting Kelvin to celsius down here

let celsiusTemp3 = kelvintemp3 - 273.15;

console.log(`${kelvinTemp3}°K is equal to ${celsiusTemp3}`);

 