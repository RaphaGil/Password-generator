// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
    // * Length of password
//       * At least 8 characters but no more than 128.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
//   * Code should validate for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Sample pseudocode for Password Generator:
// const charOptions = [];
// const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
// function getPasswordOptions() {
  // Prompt for password length
  // At least 8 characters, no more than 128 characters
  // Conditional to check that the number that was entered is in range
  // Prompts store data as strings, so need to parse into a number
  // If the user's input is out of range, either return out of the function or call the function again

  // Confirm which character sets to use
  // If the user answers false for all, either return out of the function or call the function again
  
  // Once they select a character set:
  // Generate a random character for each selected character set
  // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
  
  // Once character sets are selected, move on to generating random characters


// Function for getting a random element from an array
// function getRandom(arr) {
  // Need a variable to hold the password as it's being generated
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password
// }

/// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(prompt('Choose a password length (between 8 and 128 characters)'));
  
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Invalid length. Please choose a length between 8 and 128 characters.');
    return null;
  }
    //These properties correspond to the user's selections regarding including specific character types in the generated password. Each of these properties holds a boolean value (true or false) based on the user's choice to include or exclude that particular character type.
  let userspecialCharacters = confirm('Include special characters in the password?');
  let usernumericCharacters = confirm('Include numeric characters in the password?');
  let userlowerCasedCharacters = confirm('Include lowercase characters in the password?');
  let userupperCasedCharacters = confirm('Include uppercase characters in the password?');

  if (!(userspecialCharacters || usernumericCharacters || userlowerCasedCharacters || userupperCasedCharacters)) {
    alert('Please select at least one character type.');
    return null;
  }

  return {
    length: length,
    //Here, a property named userspecialCharacters is created in the returned object, which receives the value of the variable userspecialCharacters. This property indicates whether the user opted to include special characters in the password.
    userspecialCharacters: userspecialCharacters, //returning all the let as otherwise it will return the first return and stop on it
    usernumericCharacters: usernumericCharacters,
    userlowerCasedCharacters: userlowerCasedCharacters,
    userupperCasedCharacters: userupperCasedCharacters,
  };
}

function generatePassword(options) {
  let characters = ''; // Initializes an empty string variable named characters to store all the characters that can be used to generate the password.
  
  //If the user chooses to include special characters (true), it concatenates the specialCharacters array elements into the characters string using join(''). This means that all special characters are concatenated together without any separator.
  if (options.userspecialCharacters) { 
    characters += specialCharacters.join('');
  }
  if (options.usernumericCharacters) {
    characters += numericCharacters.join('');
  }
  if (options.userlowerCasedCharacters) {
    characters += lowerCasedCharacters.join('');
  }
  if (options.userupperCasedCharacters) {
    characters += upperCasedCharacters.join('');
  }

  let password = '';
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Function to write password to the #password input
function writePassword() {
  var passwordLength = getPasswordOptions(); // create a variable to store the function on it and then I get my length to use in my password variable below
  if (passwordLength !== null) {
    var password = generatePassword(passwordLength); 
    
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
}

// Get reference to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);