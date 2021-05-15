var verify;

// password criteria obj
var password = {
length: 8,
numeric: false,
special: false,
uppercase: false,
lowercase: false,
};

// all letters the generator will use
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// all special characters the generator will use
uniques = ["`","~","!", "@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",",","<",".",">","?","/",];
// all numbers the generator will use
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Password Generator Function
window.onload = function createPassword() {
// if user does not input anything sets length to 8
// ask for character range
password.length = prompt("Please insert the password length you desire between 8-128. If you do not wish to choose 8 will be the default number") || alert("length set to 8");
if (!password.length) {
 password.length = 8;

console.log(password.length)


} else if (password.length < 8 || password.length > 128) {
password.length = prompt("Please insert the password length you desire between 8-128. If you do not wish to choose 8 will be the default number");

} else {
 // if user wants numeric then password.numeric is switched to true
 password.numeric = confirm("Do you Want numbers in the password?");
 // if user wants special then password.special is switched to true
 password.special = confirm("Do you Want special characters in the password?");
 // if user wants special then password.uppercase is switched to true
 password.uppercase = confirm("Do you Want uppercase in the password?");
 // if user wants special then password.lowercase is switched to true
 password.lowercase = confirm("Do you want lowercase in the password?");
 
 console.log(password.numeric)
 console.log(password.special)
 console.log(password.uppercase)
 console.log(password.lowercase)
 // Any other actions would leave it as false. since false && false = False
};













// if user wants password with numeric and special and uppercase then do = grab list of numbers and special characters and uppercase. 
//Then add 1 from selected lists into a new list called generatedPassword until the length amount is equal to the requested amount.

// if user wants password with numeric and special and no uppercase then do =
//Then add 1 from selected lists into a new list called generatedPassword until the length amount is equal to the requested length.

// if user wants password with numeric and no special and no uppercase then do =
//Then add 1 from selected lists into a new list called generatedPassword until the length amount is equal to the requested length.

// if user wants password with no numeric and no special and no uppercase then do =
//Then add 1 from selected lists into a new list called generatedPassword until the length amount is equal to the requested length.

// if user does not want any. then add letters randomly from the list into a new list called generatedPassword until the length amount is equal to the requested length.


}
