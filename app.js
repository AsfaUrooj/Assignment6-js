//  CHAPTER 17 TO 20

// QUESTION 01
// arr=[];

// QUESTION 02
// var arr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];
// console.log(arr[0],arr[1],arr[2])

// QUESTION 03
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// QUESTION 04
// var number = prompt("Enter the number for the multiplication table");
// length = prompt("Enter the length of the multiplication table");
// for (let i = 1; i <= length; i++) {
//   console.log(number + "x" + i + " = " + number*i);
// }

// QUESTION 05
// var arr= ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// QUESTION 06
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// userInput = prompt("Welcome to ABC Bakery! What do you want to order?").toLowerCase();
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].toLowerCase() === userInput) {
//     found = true;
//     alert(`${userInput} is available at index ${i} in our bakery.`);
//     break;
//   }
// }
// if (!found) {
//   alert(`We are sorry. ${userInput} is not available in our bakery.`);
// }


//CHAPTER 21 TO 25

// QUESTION 01
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome.")

// QUESTION 02
// userInput = prompt("Enter your favorite mobile phone model:");
// document.write("My favorite phone is: " + userInput + "<br>");
// document.write("Length of input: " + userInput.length);

// QUESTION 03
//  word = "Pakistani";
// let index = word.indexOf("n");

// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);

// QUESTION 04
// word = "Hello World";
// lastIndex = word.lastIndexOf("l");
// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + lastIndex);

// QUESTION 05
// word = "Pakistani";
// charAtIndex3 = word.charAt(3);
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + charAtIndex3);

// QUESTION 06
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// alert(firstName+lastName)

// QUESTION 07
// city = "Hyderabad";
//  replacedCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + replacedCity);

// QUESTION 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
//  var updatedMessage = message.replace(/and/g, "&");

// document.write("Original Message: " + message + "<br><br>");
// document.write("Updated Message: " + updatedMessage);

// QUESTION 09
// var str = "472";
// var num = Number(str);

// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br><br>");

// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);

// QUESTION 10
// userInput = prompt("Enter any text:");
// upperCaseInput = userInput.toUpperCase();
// console.log(userInput);
// console.log(upperCaseInput);

// QUESTION 11
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// userInput = prompt("Welcome to ABC Bakery! What do you want to order?").toLowerCase();
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].toLowerCase() === userInput) {
//     found = true;
//     alert(`${userInput} is available at index ${i} in our bakery.`);
//     break;
//   }
// }
// if (!found) {
//   alert(`We are sorry. ${userInput} is not available in our bakery.`);
// }

// QUESTION 12
// university = "University of Karachi";
// universityArray = university.split("");
// for (let i = 0; i < universityArray.length; i++) {
//   document.write(universityArray[i] + "<br>");
// }

// QUESTION 13
// userInput = prompt("Enter any text:");
// let lastChar = userInput.charAt(userInput.length - 1);
// document.write("User Input: " + userInput + "<br>");
// document.write("Last Character: " + lastChar);