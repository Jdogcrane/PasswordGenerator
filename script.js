// password criteria obj
var password = {
 length: 8,
 numeric: false,
 special: false,
 uppercase: false,
 lowercase: false,
 generatedPassword: [],
};
// Puts everything that has been set to true based off confirms into one array
var container = [];

// all letters the generator will use
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// all special characters the generator will use

uniques = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", " ? ", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// all numbers the generator will use
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var passwordFinal = createPassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = passwordFinal;
}


 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

// Password Generator Function
function createPassword() {
 // if user does not input anything sets length to 8
 // rounds number if number is decimal
 // ask for character range
 password.length = Math.round(prompt("Please insert the password length you desire between 8-128. If you do not wish to choose 8 will be set as the length.")) || 8;

 console.log(password.length)
// prevents password from being too small or big
 if (password.length < 8 || password.length > 128) {
  password.length = alert("That number was too big or too small. Please Choose a number between 8-128 next time. Thanks!");

 } else {
  // if user wants numeric then password.numeric is switched to true
  password.numeric = confirm("Do you want numbers in the password?");
  // if user wants special then password.special is switched to true
  password.special = confirm("Do you want special characters in the password?");
  // if user wants special then password.uppercase is switched to true
  password.uppercase = confirm("Do you want uppercase in the password?");
  // if user wants special then password.lowercase is switched to true
  password.lowercase = confirm("Do you want lowercase in the password?");

  console.log(password.numeric);
  console.log(password.special);
  console.log(password.uppercase);
  console.log(password.lowercase);
  // Any other actions would leave it as false. since false && false = False
 };

 // if true throw it in the container
 if (password.numeric) {
  container = container.concat(numbers);
  // Grabs 1 random if statement is true
  password.generatedPassword.push(numbers[Math.floor(Math.random() * numbers.length)]);
  // removes 1 from length if statement is true to make room for guaranteed
  password.length--;
 }

 console.log(container);
 // if true throw it in the container
 if (password.special) {
  container = container.concat(uniques);
  // Grabs 1 random guaranteed special if statement is true
  password.generatedPassword.push(uniques[Math.floor(Math.random() * uniques.length)]);
  // removes 1 from length if statement is true to make room for guaranteed
  password.length--;
 }

 console.log(container);
 // if true throw it in the container
 if (password.uppercase) {
  container = container.concat(capLetters);
  // Grabs 1 random guaranteed capletter if statement is true
  password.generatedPassword.push(capLetters[Math.floor(Math.random() * capLetters.length)]);
  // removes 1 from length if statement is true to make room for guaranteed
  password.length--;
 }
 console.log(container);


 if (password.lowercase) {
  container = container.concat(letters);
  // Grabs 1 random guaranteed letter if statement is true
  password.generatedPassword.push(letters[Math.floor(Math.random() * letters.length)]);
  // removes 1 from length if statement is true to make room for guaranteed
  password.length--;
 }

 if (!password.lowercase && !password.uppercase && !password.numeric && !password.special) {
  alert("You selected no on all options. No password will be generated. Have a nice day!")

 }

 // grabs at random from the container into the generated password array
 for (var i = 0; i < password.length; i++) {
  var randomIndex = Math.floor(Math.random() * container.length);
  password.generatedPassword.push(container[randomIndex])
 }
// clears containers for next generator
 container = [];
 return password.generatedPassword.join("");
}