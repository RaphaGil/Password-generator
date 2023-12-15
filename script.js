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


// Function to prompt user for password options
function getPasswordOptions() {
  let length = (prompt('Choose a password at least 8 characters but no more than 128')); // The function displays a prompt to the user asking them to choose a password length. The entered value is stored in the length variable.

  // Check if the length entered is less than 8 or greater than 128
  if (length < 8 || length > 128 || isNaN(length)) {
    alert('The length is not within the range or invalid.'); // Give an alert if the length is not between the range specificated
   
    return null; //If the length is not within the specified range or is not a number, it displays an alert notifying the user about the invalid length and returns null.
  }

  return length; //return the length 
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length); //Chose a random character on the array and store it in the variable 'randomIndex'
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword(length) {
  let password = ''; // Initialize an empty string to store the generated password

  if (length !== null) { // Check if the provided length is not null
    const characters = [].concat(specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters); // concat() method is used to merge two or more arrays or values together, creating a new array without modifying the existing arrays. It doesn't change the original arrays; instead, it returns a new array containing the combined elements.

    // Concatenate arrays of special characters, numeric characters, lowercase characters, and uppercase characters into one 'characters' array
    for (let i = 0; i < length; i++) {
      const randomChar = getRandom(characters);
      // Get a random character from the combined 'characters' array and store it in the variable 'ramdomChar'
      password += randomChar;
      // Append the random character to the 'password' string
    }
    return password; // Return the generated password
  } else {
    return 'Invalid password length. Please try again.';
    // Return an error message if the provided length is null
  }
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