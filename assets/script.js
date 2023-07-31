// Assignment Code
// The Reference to the #generate element
console.log(window)
var generateBtn = document.querySelector("#generate");
function generatePassword() {

//Added main variables
var main = [];
var specialCharacters = "!@#$%^&*()_?";
var uppercaseletters = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var randomMain = "";

  //Opening prompt, length
  var lengthPassword = prompt("State how long you would like your password to be. 8 to 128 charcters");
  if (lengthPassword < 8 || lengthPassword > 128 || isNaN(lengthPassword)){
    alert("Invalid. You must state a length that fits the criteria for the generator")
  return generatePassword();
  }
  //Password confirm Uppercase. Boolean
  var addUppercaseletters = confirm("Would you like UPPERCASE characters?");
    if (addUppercaseletters === true) {
      criteria.push(uppercaseletters);
    }

  //Password confirm Lowercase. Boolean
  var addLowercaseletters = confirm("Would you like LOWERCASE characters?");
    if (addLowercaseletters === true) {
      criteria.push(lowercaseletters);
    }

  //Password confirm special. Boolean
  var addSpecialcharacters = confirm("Would you like SPECIAL ('!@#$%^&*()') characters?");
  if (addSpecialcharacters === true) {
    criteria.push(specialCharacters);
  }
  //Password confirm numbers. Boolean
  var addNumbers = confirm("Would you like NUMBER characters?")
  if (addNumbers === true) {
    criteria.push(numbers);
  }

//If user doesnt type a value it goes back to starting prompt
if (addSpecialcharacters == false && addUppercaseletters == false && addLowercaseletters == false && addNumbers == false) {
  alert ("Invalid. You must state either yes or no")
  return generatePassword();
}

//The for method to getting the random characters
for (let i= 0; i < lengthPassword; i++){
  var randomMain = main[Math.floor(Math.random() * main.length)];
  var randomCharacter = randomMain[Math.floor(Math.random() * randomMain.length)];
 }
return randomMain;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);