// Programs - Anonymous function & IIFE
// 1.Print odd numbers in an array

// let arr = [1,2,3,4,5,6,7,8,9,10];
// // Anonymous function
// let printOddNumbers = function()
// {
// let arr_1 = [];
// for (let i = 0; i < arr.length; i++) 
// { if (a[i] % 2 != 0) 
// { c.push(a[i]);}}
// console.log(arr_1);
// };

// printOddNumbers();

// //IIFE Function
// (function() {
// let c = [];
// for (let i = 0; i < a.length; i++) 
// {if (a[i] % 2 != 0) 
// { c.push(a[i]);}}
// console.log(c);})
// ();

// 2.Convert all the strings to title caps in a string array

// // Anonymous function
//let stringToTitleCaps = function(str) 
// { 
//  var sentence = str.toLowerCase().split(“ “);
//  for (let i = 0; i < sentence.length; i++) 
// {
// sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// console.log(sentence.join(“ “));
// return sentence;
// }
// stringToTitleCaps(“king kholi”);

// //IIFE function
// (function(str)
// {
// var sentence = str.toLowerCase().split(“ “);
// for (let i = 0; i < sentence.length; i++)
// {  
// sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// console.log(sentence.join(“ “));
// return sentence;
// })(“king kholi”);

// 3.Sum of all numbers in an array
// //Anonymous Function

// let arr = [11,12,13,14,15];

// let sumOfAllNumbers = function() 
// {
// let sum = 0;
// for (let i = 0; i < a.length; i++) 
// {
// sum = sum + a[i];
// }
// return sum;
// }
// console.log(sumOfAllNumbers());

// //IIFE function
// (function()
// {
// let sum = 0;
// for (let i = 0; i < a.length; i++) 
// {
// sum = sum + a[i];
// }
// console.log(sum);
// })();

// 4.Return all the prime numbers in an array

// Solution:

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// //anonymous function

// let arr_1 = function(…arr) 
// {
// for (let i = 0; i < arr.length; i++) 
// {
// for (let j = 2; j <= arr[i] — 1; j++) 
// {
// if (arr[i] % j == 0)
// {
// return false;
// }}
// return arr[i] > 1;
// }};
// console.log(arr.filter(arr_1));

// //IIFE Function

// (prime = function(arr) 
// {
// for (let j = 2; j <= arr — 1; j++) 
// {
// if (arr % j == 0) 
// {
// return false;
// }}
// return arr > 1
// })();
// console.log(arr.filter(prime))

// 5.Return all the palindromes in an array

// let arr = [‘aha’, ‘raghu’, ‘gaag’, ‘hello’, ‘jooj’, ‘kook’];
// //anonymous function
// let palin = function(arr) 
// {
// let c = [];
// for (let i = 0; i < arr.length; i++) 
// {
// let strarr = arr[i]
// //Using reverse() method to reverse the string
// let revstr = strarr.split(‘’).reverse().join(‘’);
// //comparing the 2 strings and adding the string to array using push if condition satisfies
// if (strarr == revstr) 
// {
// c.push(strarr);
// }}
// console.log(c);
// } palin(arr);

// //IIFE function

// (function(arr) 
// {
// let c = [];
// for (let i = 0; i < arr.length; i++) 
// {
// let strarr = arr[i]
// let revstr = strarr.split(‘’).reverse().join(‘’);
// if (strarr == revstr) 
// {
// c.push(strarr);
// }}
// console.log(c);
// })(arr);

// 6.Return median of two sorted arrays of same size

// let arr1 = [45, 56, 23, 78, 89, 57, 70];
// let arr2 = [23, 56, 78, 90, 80, 32, 67];

// //anonymous function
// let med = function(arr1,arr2)
// {
// let l = arr1.length;
// //sorting the arr in ascending order
// arr1.sort(function(a,b) { return a — b });
// arr2.sort(function(a,b) { return a — b });
// console.log(arr1, arr2);
// //if array length is even then the avg of middle elements in the array is median
// if (arr1.length % 2 === 0) 
// {
// console.log((arr1[l/2] + arr1[l / 2–1])/2)
// console.log((arr2[l/2] + arr2[l / 2–1])/2)
// }
// //if lenght is odd then middle term is the median
// else 
// {
// console.log((arr1[(l — 1)/2]))
// console.log((arr2[(l — 1)/2]))
// }};
// med(arr1,arr2);

// //IIFE function

// (function(arr1, arr2) 
// {
// let l = arr1.length;
// arr1.sort(function(a,b) { return a — b });
// arr2.sort(function(a,b) { return a — b });
// console.log(arr1, arr2);
// if (arr1.length % 2 === 0) 
// {
// console.log((arr1[l/2] + arr1[l / 2–1])/2)
// console.log((arr2[l/2] + arr2[l / 2–1])/2)
// }
// else 
// {
// console.log((arr1[(l — 1)/2]))
// console.log((arr2[(l — 1)/2]))
// }};
// (arr1,arr2);


// 7.Remove duplicates from an array

// let arr = [1,1,2,2,2,3,3,4,6,6,7,5,5,8,9,9,22,4,4];
// //anonymous function
// let dup = function(arr) 
// {
// //using set property to remove duplicates
// let newarr = […new Set(arr)];
// console.log(newarr);
// }
// dup(arr);

// //IIFE function

// (function(arr) 
// {
// let newarr = […new Set(arr)];
// console.log(newarr);
// })(arr);

// 8.Rotate an array by k times
// let arr = [11,12,13,14,15,16,17,18,19,20];
// let m = 4;
// //anonymous function
// let rotate = function(arr) 
// {
// for (let i = 0; i < k; i++) 
// {
// //using unshift method for adding element at first
// //using pop method to remove element at last position
// arr.unshift(arr.pop());
// }
// console.log(arr);
// }
// rotate(arr);

// //IIFE function
// (function(arr) 
// {
// for (let i = 0; i < k; i++) 
// {
// arr.unshift(arr.pop());
// }
// console.log(arr);
// })(arr);

// -----------------------> ARROW FUNCTIONS <----------------------
// 1.Print odd numbers in an array

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let odd = (arr) => {
// let res = [];
// for (let i = 0; i < arr.length; i++) 
// {
// if (arr[i] % 2 !== 0) 
// {
// res.push(arr[i]);
// }
// }
// return res;
// }
// console.log(odd(arr));

// 2.Convert all the strings to title caps in a string array

// let toCap = (str) => {
// var sentence = str.toLowerCase().split(“ “);
// for (let i = 0; i < sentence.length; i++) 
// {
// sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// console.log(sentence.join(“ “));
// }
// toCap("virat kholi is the best batsman");

// 3.Sum of all numbers in an array

// let arr = [101,102,103,104,105];
// let sum = (arr) => {
// let s = 0;
// for (let i = 0; i < a.length; i++) 
// {
// s = s + arr[i];
// }
// return s;
// }
// console.log(sum(arr));

// 4.Return all the prime numbers in an array

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// let primeNumber = (num) => 
// {
// for (let j = 2; j < num — 1; j++) 
// {
// if (num % j === 0)
// {
// return false;
// }
// }
// return num > 1;
// }
// console.log(arr.filter(primeNumber));

// 5.Return all the palindromes in an array

// let arr = [‘aha’, ‘raghu’, ‘gaag’, ‘hello’, ‘jooj’, ‘kook’];
// let palindrome = (str) => 
// {
// revstr = str.split(‘’).reverse().join(‘’);
// if (str == revstr) 
// {
// return str;
// } 
// else
// {
// return false;
// }
// }
// console.log(arr.filter(palindrome));


