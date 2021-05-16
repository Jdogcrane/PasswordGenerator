// password criteria obj
var password = {
length: 8,
numeric: false,
special: false,
uppercase: false,
lowercase: false,
generatedPassword: ("")
};

// all letters the generator will use
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// all special characters the generator will use
uniques = ["`","~","!", "@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",",","<",".",">","?","/",];
// all numbers the generator will use
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Password Generator Function
window.onload = function createPassword() {
// if user does not input anything sets length to 8
// ask for character range
password.length = Math.round(prompt("Please insert the password length you desire between 8-128. If you do not wish to choose 8 will be set as the length.")) || 8;

console.log(password.length)

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

// throws everything that has been set to true based off confirms into one big container full of arrays
container = [];

if (password.numeric) {
container.push(numbers);
}

console.log(container);

if (password.special) {
container.push(uniques);
}

console.log(container);

if (password.uppercase) {
 container.push(capLetters);
}
console.log(container);

// this is always true
if (letters) {
 container.push(letters);
}

console.log(container);
// extract each array from container randomly = to the length set by user.

}








// if user wants password with numeric and special and uppercase then do = grab list of numbers and special characters and uppercase. 
//Then add 1 from selected lists into a new list called generatedPassword until the length amount is equal to the requested amount.

// if user wants password with numeric and special and no uppercase then do =
//Then add 1 from selected lists into a new list called generatedPassword until the length amount is equal to the requested length.

// if user wants password with numeric and no special and no uppercase then do =
//Then add 1 from selected lists into a new list called generatedPassword until the length amount is equal to the requested length.

// if user wants password with no numeric and no special and no uppercase then do =
//Then add 1 from selected lists into a new list called generatedPassword until the length amount is equal to the requested length.

// if user does not want any. then add letters randomly from the list into a new list called generatedPassword until the length amount is equal to the requested length.

