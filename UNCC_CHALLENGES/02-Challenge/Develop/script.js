// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  //var window.prompt('Choose password length')
  var password = ''
  var passwordLength = window.prompt('password length (8 to 128 characters)')
  if (passwordLength > 8 && passwordLength < 128) {
    window.alert('this is valid')
    var shouldHaveLowercase = window.confirm('Do you wish to have lowercase')
    var shouldHaveSPecialCharacters = window.confirm('Do you wish to have speciall characters')
    var shouldHaveUppercase = window.confirm('Do you wish to have uppercase')
    password = pickRandomCharacters(shouldHaveLowercase, shouldHaveSPecialCharacters, shouldHaveUppercase, passwordLength)
    console.log('generateassword ' + password)
  }
  else {
    window.alert('not valid')
  }
  return password
 
}

function pickRandomCharacters(shouldHaveLowercase, shouldHaveSPecialCharacters, shouldHaveUppercase, passwordLength) {
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var specialCharacter = '!@#$%^&*()_+=-`}]{['
  var characterList = ''
  var random = ''
  if (shouldHaveLowercase) {
    characterList += lowercase;
  }
  if (shouldHaveSPecialCharacters) {
    characterList += specialCharacter
  }
  if (shouldHaveUppercase) {
    characterList += uppercase
  }
  for(var i=0; i < passwordLength; i++) {
    random += characterList.charAt(Math.floor(Math.random()* characterList.length)); 
    console.log('pickRandomCharacters ' +  random)
  }
  return random
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
