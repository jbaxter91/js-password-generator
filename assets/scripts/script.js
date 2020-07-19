// Assignment Code

// --------- Constants --------------
const DEFAULT_MESSAGE = "Your Secure Password";
  // Array of usable characters for both upper and lower case
const BASE_GLYPHS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // Array of usable characters for 'special' characters
const SPECIAL_GLYPHS = ["!","@","#","$","%","^","&","*",];
  // minimum password length
const MIN_PASSWORD_LENGTH = 8;
  // maximum password length
const MAX_PASSWORD_LENGTH = 128;
// --------- End Constants -----------


// --------- HTML Elements -----------
var generateBtn = document.querySelector("#generate");
var passwordTextField = document.querySelector("#password");
// --------- End HTML Elements -----------


// --------- Public variables ------------
var passwordLength;

// --------- End Public variables --------

// --------- Event Listeners -------------
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// --------- End Event Listeners ---------

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordTextField.value = password;
  console.log("Generating password");

}

function randomCharacter()
{
  var randomSelection = BASE_GLYPHS[Math.floor( Math.random() * BASE_GLYPHS.length)]
  console.log(" Random Character: " + randomSelection)
  return randomSelection;
}

function randomSpecial()
{
  var randomSelection = SPECIAL_GLYPHS[Math.floor( Math.random() * SPECIAL_GLYPHS.length)]
  console.log(" Random Special: " + randomSelection)
  return randomSelection;
}

function randomNumber()
{
  var randomSelection = Math.round( Math.random() * 9);
  console.log(" Random Number: " + randomSelection)
  return randomSelection;
}

function generatePassword()
{
    // Welcome the user and ask for how many characters they want the password to be
  var passwordLength = prompt("How long would you like the password to be? Pick a number between " + MIN_PASSWORD_LENGTH + " and " + MAX_PASSWORD_LENGTH);
  if(passwordLength == "")
  {
    // Input was null
    alert("You didnt select an option, try again!");
    return DEFAULT_MESSAGE;
  }
  else if(isNaN( passwordLength))
  {
    // Input was not a number
    alert("You didnt enter a number, try again!");
    return DEFAULT_MESSAGE;
  }
  else
  {
    // If we got here then input was a number and now we need to verify length fits within our range
    if(passwordLength < MIN_PASSWORD_LENGTH)
    {
      // Password length was to short
      alert("Your number was to low, try again!");
      return DEFAULT_MESSAGE;
    }
    else if(passwordLength > MAX_PASSWORD_LENGTH)
    {
      // Password length was to long
      alert("Your number was to high, try again!");
      return DEFAULT_MESSAGE;
    }
  } 
  // ---- End Verify Password Length ---

    // Ask if user wants to use lowercase
  var useLowerCase = confirm("Would you like your password to contain lowercase?");
    // Ask if user wants uppercase
  var useUpperCase = confirm("Would you like your password to contain uppercase?");
    // Ask if user wants special characters
  var useSpecialChars = confirm("Would you like your password to contain special characters?");
    // Ask if user wants to use numbers
  var useNumbers = confirm("Would you like your password to contain numbers?");

    // Verify at least one option was selected
  if(!useLowerCase && !useUpperCase && !useSpecialChars && !useNumbers)
  {
    // User never selected any case / character options
    alert("You never selected any character options!");
    return DEFAULT_MESSAGE;
  }

  // Start an array for the values selected
  var characterOptions = [];
  if(useLowerCase)  { characterOptions.push("lower"); } //Lower was selected
  if(useUpperCase)  { characterOptions.push("upper"); } //Upper case was selected
  if(useNumbers)    { characterOptions.push("number"); } //Number was selected
  if(useSpecialChars){ characterOptions.push("special"); } //Special was selected

  var returnPassword = "";
  for(var i =0; i < passwordLength; i++)
  {
    console.log(passwordLength);
    var randomSelection = Math.floor( Math.random() * characterOptions.length);
    console.log("Selected " + characterOptions[randomSelection])
    switch(characterOptions[randomSelection])
    {
      case "lower":
        returnPassword += randomCharacter().toLowerCase();
        break;
      case "upper":
        returnPassword += randomCharacter().toUpperCase();
        break;
      case "number":
        returnPassword += randomNumber();
        break;
      case "special":
        returnPassword += randomSpecial();
        break;
    }
  }

    console.log("Return Password: " + returnPassword);
    return returnPassword;

    //Generate password based on selection

    //Return good password
}

