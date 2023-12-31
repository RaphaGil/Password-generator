// For detailed pseudocode, refer to pseudocode.txt

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/// Function to prompt user for password options
function getPasswordOptions() {
  let length = prompt("Choose a password length (between 8 and 128 characters)"); //Prompt the user to choose the length of the password

  if (isNaN(length) || length < 8 || length > 128) {
    alert(
      "Invalid length. Please choose a length between 8 and 128 characters."
    ); //Show an alert if the length is not within the specified range or is not a number.
    return null;
  }
  //These properties correspond to the user's selections regarding including specific character types in the generated password. Each of these properties holds a boolean value (true or false) based on the user's choice to include or exclude that particular character type.
  let userspecialCharacters = confirm(
    "Would you like to include special characters in the password?"
  );
  let usernumericCharacters = confirm(
    "Would you like to include numeric characters in the password?"
  );
  let userlowerCasedCharacters = confirm(
    "Would you like to include lowercase characters in the password?"
  );
  let userupperCasedCharacters = confirm(
    "Would you like to include uppercase characters in the password?"
  );

  // If the user doesn't select any option, an alert will be shown.
  if (
    !(
      userspecialCharacters ||
      usernumericCharacters ||
      userlowerCasedCharacters ||
      userupperCasedCharacters
    )
  ) {
    alert("Please select at least one character type.");
    return null;
  }

  //user can confirm all his option chosen
  if (
    // If the chosen length falls within the specified range and at least one character type is selected, it displays this confirmation.
    userspecialCharacters ||
    usernumericCharacters ||
    userlowerCasedCharacters ||
    userupperCasedCharacters
  ) {
    const message =
      "Confirm: " +
      "\n" +
      "You chose length: " +
      length +
      "\n" +
      "You inclued special characters: " +
      userspecialCharacters +
      "\n" +
      "You inclued numeric characters: " +
      usernumericCharacters +
      "\n" +
      "You inclued lowerCase characters: " +
      userlowerCasedCharacters +
      "\n" +
      "You inclued upperCase characters: " +
      userupperCasedCharacters +
      "\n";
    confirm(message);
  }

  return {
    //Here, a property named userspecialCharacters is created in the returned object, which receives the value of the variable userspecialCharacters. This property indicates whether the user opted to include special characters in the password.
    passwordlength: length,
    userspecialCharacters: userspecialCharacters, //returning all the let as otherwise it will return the first return and stop on it
    usernumericCharacters: usernumericCharacters,
    userlowerCasedCharacters: userlowerCasedCharacters,
    userupperCasedCharacters: userupperCasedCharacters,
  };
}

// Function for getting a random element from an array
function generatePassword(useroption) {
  let characters = ""; // Initializes an empty string variable named characters to store all the characters that can be used to generate the password.

  //If the user chooses to include special characters (true), it concatenates the specialCharacters array elements into the characters string using join(''). This means that all special characters are concatenated together without any separator.
  if (useroption.userspecialCharacters) {
    characters += specialCharacters.join("");
    console.log(characters);
  }
  if (useroption.usernumericCharacters) {
    characters += numericCharacters.join("");
  }
  if (useroption.userlowerCasedCharacters) {
    characters += lowerCasedCharacters.join("");
  }
  if (useroption.userupperCasedCharacters) {
    characters += upperCasedCharacters.join("");
  }

  let password = ""; // create a variable to store the random password on it
  for (let i = 0; i < useroption.passwordlength; i++) {
    //Perform the looping process until it reaches the size chosen by the user for the 'password length'
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex); //Get a random character from the array - charArt
  }
  return password;
}

// Function to write password to the #password input
function writePassword() {
  var passwordOptions = getPasswordOptions(); // create a variable to store the function on it and then I get my Options to use in my password variable below
  if (passwordOptions !== null) {
    //It means that the user has selected at least one type of character and the chosen Options for the password falls within the specified range
    var password = generatePassword(passwordOptions); //f the user provided valid options (i.e., passwordLength is not null), it calls the generatePassword() function to create a password using the provided options.
    var passwordText = document.querySelector("#password"); //It then selects the HTML element with the ID #password (<input> element, presumably) using document.querySelector('#password').
    passwordText.value = password; //The generated password is assigned to the value property of this HTML element, making it visible in the input field on the webpage.
  }
  return password;
}

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate"); //selects an HTML element with the ID #generate.
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When the btn is clicked triggers the 'writePassword()' function and shows the password
// Show the custom alert

function copyPassword() {
  var passwordEl = document.querySelector("#password");
  var password = passwordEl.value;

  if (password) {
    // Verifica se a senha foi gerada
    alert("Password copied: " + password); // Exibe um alerta com a senha gerada
    // Aqui você pode adicionar a lógica para copiar a senha para a área de transferência
  } else {
    alert("You need to generate a password first"); // Exibe um alerta se a senha não foi gerada
  }
}
// Adiciona um evento de clique ao botão de cópia de senha
var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyPassword);
