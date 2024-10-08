const dateTime1 = document.querySelector("#input1");
const dateTime2 = document.querySelector("#input2");
const dateTime3 = document.querySelector("#input3");
const dateTime4 = document.querySelector("#input4");
const dateTime5 = document.querySelector("#input5");


// 01 04/20/2024 13:45:30

const date1   = new Date().getDate();
const month1 = (new Date().getMonth() + 1 < 10 ? '0' : '') + (new Date().getMonth() + 1);const year1 = new Date().getFullYear();
const hours1  = new Date().getHours();
const mint1   = new Date().getMinutes();
const sec1    = new Date().getSeconds();
const result1 =`${month1}/${date1}/${year1} ${hours1}:${mint1}:${sec1}`

dateTime1.innerHTML = result1;

//---------------------------------------***********************************---------------------------------------------

// 02 Thu 20/4/2024 13.45
const day2    = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const day02   = new Date().getDay();
const date2   = new Date().getDate();
const month2  = new Date().getMonth();
const year2   = new Date().getFullYear();
const hours2  = new Date().getHours();
const mint2   = new Date().getMinutes();
const result2 =`${day2[day02]} ${date2}/${month2}/${year2} ${hours2}:${mint2}`

dateTime2.innerHTML = result2;


// ---------------------------------------------***********************************-----------------------------------------

// 03 2024-04-20 3:45 Thursday

const day3 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day03   = new Date().getDay();  
const year3   = new Date().getFullYear();
const month3  = (new Date().getMonth() + 1 < 10 ? "0" : '' )+ (new Date().getMonth() + 1);
const date3   = new Date().getDate();
const hours3  = new Date().getHours();
const mint3   = new Date().getMinutes();

const result3 =`${year3}-${month3}-${date3} ${hours3}:${mint3} ${day3[day03]}`

dateTime3.innerHTML = result3;

// // ---------------------------------------------***********************************-----------------------------------------

// // 04 April 20th, 2024 01.45.30 PM


const month4 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const month04 = new Date().getMonth();
const date4   = new Date().getDate();
const year4   = new Date().getFullYear();
const hours4  = new Date().getHours();
const mint4   = new Date().getMinutes();
const sec4    = new Date().getSeconds();
const ampm4 = hours4 >= 12 ? 'PM' : 'AM';
// const result4 =`${month4}/${date4}/${year4} ${hours4}:${mint4}:${sec4}`
const formattedHours4 = hours4 % 12 === 0 ? 12 : hours4 % 12;
const result4 = `${month4[month04]} ${date4}th,${year4} ${(formattedHours4 < 10 ? '0' : '') + formattedHours4}.${(mint4 < 10 ? '0' : '') + mint4}.${(sec4 < 10 ? '0' : '') + sec4} ${ampm4}`;
dateTime4.innerHTML = result4;

// //-------------------------------------******************************-------------------------------------------------------

// // 05  20 April 2024 at 01:45 PM

const date5 = new Date().getDate();
const month5 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const month05 = new Date().getMonth();
const year5 = new Date().getFullYear();
const hour5 = new Date().getHours();
const mint5 = new Date().getMinutes();
const sec5 = new Date().getSeconds();
const ampm5 = hour5 >= 12 ? 'PM' : 'AM';
const formattedHour5 = hour5 % 12 === 0 ? 12 : hour5 % 12;
const result5 = `${date5} ${month5[month05]}  at ${year5} ${(formattedHour5 < 10 ? '0' : '') + formattedHour5}:${(mint5 < 10 ? '0' : '') + mint5}:${(sec5 < 10 ? '0' : '') + sec5} ${ampm5} `
dateTime5.innerHTML = result5;

// -------------------------------------******************************---------------------------------------------------
