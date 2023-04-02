//password genration function

function generatePassword(){
// ask user for length 8 - 128
  let passwordLength = parseInt(prompt("How long should the password be"));
  if (passwordLength < 8 || passwordLength > 128){
    alert("error, invalid password length \n between 8 and 128")
    return "";
  } 

// ask the user for which characters to include
  var includelowercase = confirm("Would you like lowercase?");
  var includeuppercase = confirm("Would you like uppercase?");
  var includenumbers = confirm("would you like numbers?"); 
  var includespecialchar = confirm("Would you like special characters?");

// validate types of characters
if (!includelowercase && !includeuppercase && !includenumbers && !includespecialchar){
  alert("error include at least one feild")
  return "";
}

// genrate a random password
let passwordchar = [];
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "1234567890";
const specialchar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// add all other character types depending if they are selected 
//TODO make this a function it is DRY
if (includelowercase){
  passwordchar = passwordchar.concat(lowercase.split(""));
} if (includeuppercase) {
  passwordchar = passwordchar.concat(uppercase.split(""));
} if (includenumbers){
  passwordchar = passwordchar.concat(num.split(""))
} if (includespecialchar){
  passwordchar = passwordchar.concat(specialchar.split(""));
}

//TODO add to the results depending on what the passwordchar has included
var result = "";
for(var i = 0; i < passwordLength; i++){
  var index = Math.floor(Math.random() * passwordchar.length);
  var newletter = passwordchar[index]; 
  result += newletter;
}
 
return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
