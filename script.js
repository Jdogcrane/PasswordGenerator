
var verify;
// password criteria obj
var password = {
length: 8,
numeric: false,
special: false,
uppercase: false,
};

// all letters the generator will use
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// all special characters the generator will use
uniques = ["`","~","!", "@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",",","<",".",">","?","/",];
// all numbers the generator will use
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function createPassword() {

// ask for character range
verify = prompt("Please insert the password length you desire between 8-128. If you do not wish to choose 8 will be the default number");

// if user does not specify sets length to 8
if (!verify) {
 alert("you need a value. I have not figured out how to default yet");

 // if the number does not fit the allowed criteria then prompt will be repeated
} else if (verify < 8 || verify > 128) {
verify = prompt("Please insert the password length you desire between 8-128. If you do not wish to choose 8 will be the default number");


} else {
password.numeric = confirm("Want numbers in the password?");
password.special = confirm("Want special characters in the password?");
password.uppercase = confirm("Want uppercase in the password?");
};
}
