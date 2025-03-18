//----------------------------------------------javascript strings---------------------------------------------------------------------

// let s1 = 'abcd';
// console.log(s1)

// let s1 = 'johncena';
// let s2 = "farewell tour";
// let s3 = `is live`;

// console.log(s1,s2,s3)


//------------------------------------------using string constructor-----------------------------------------------------------------


// let s = new String('hello');
// console.log(s)

//output:[String: 'hello']

//----------------------------------------Template Literals (String Interpolation)
//Template literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.

// let s1 = 'gfg';
// let s2 = `You are learning from ${s1}`;

// console.log(s2);


//------------------------------------------Empty String---------------------------------------------

// let s1 = 'gfg';
// let s2 = `You are learning from ${s1}`;

// console.log(s2);

//-------------------------------------------Multiline Strings--------------------------------------------

// let s = `
//     This is a
//     multiline
//     string`;

// console.log(s);

//-----------------------------------------operations--------------------------------------------------------
//finding the length of striing------------------------------

// let s = "randyorton";
// let len = s.length;

// console.log("length of string is: "+len);


//string concatenation------------------------------------------------------

// let s1 = "randy";
// let s2 = "orton";

// let res = s1  + s2;

// console.log(res)

//escape charcters----------------------------------------------

// \' - Inserts a single quote
// \" - Inserts a double quote 
// \\ - Inserts a backslash

// const s1 = "\'gfg\' is learning portalo";
// const s2 = "\"gfg\" is a learning portal"; 
// const s3 = "\\gfg\\ is a learning portal";

// console.log(s1);
// console.log(s2);
// console.log(s3);


//4. Breaking Long Strings----------------------------------------------

// const s = "'GeeksforGeeks' is \
// a learning portal";

// console.log(s);


// const s = "'GeeksforGeeks' is a"
//     + " learning portal";

// console.log(s);


//--------------------------------. Find Substring of a String---------------------------------


// let s1 = 'JavaScript Tutorial';
// let s2 = s1.substring(0, 10);

// console.log(s2);


//Convert String to Uppercase and Lowercase----------------------------------

// let s = 'JavaScript';
// let uCase = s.toUpperCase();
// let lCase = s.toLowerCase();

// console.log(uCase);
// console.log(lCase);

//String Search in JavaScript----------------------------------------------------

// let s1 = 'def abc abc';
// let i = s1.indexOf('abc');

// console.log(i);

//String Replace in JavaScript------------------------------------------------------

//let s1 = 'Learn HTML at GfG and HTML is useful';
// let s2 = s1.replace(/HTML/g, 'JavaScript');

// console.log(s2);


//Trimming Whitespace from String----------------------------------------------------------

// let s1 = '    Learn JavaScript       ';
// let s2 = s1.trim();

// console.log(s2);


//Access Characters from String--------------------------------------------------------------

// let s1 = 'Learn JavaScript';
// let s2 = s1[6];
// console.log(s2);

// s2 = s1.charAt(6);
// console.log(s2);


//11. String Comparison in JavaScript--------------------------------------------

// let s1 = "Ajay"
// let s2 = new String("Ajay");

// console.log(s1 == s2);  // true (type coercion)
// console.log(s1 === s2); // false (strict comparison)
// console.log(s1.localeCompare(s2)); // 0 (means they are equal lexicographically)


//12. Passing JavaScript String as Objects

// const str = new String("GeeksforGeeks");

// console.log(str);


//---------------------------------------JavaScript String Methods--------------------------------------------------------------

// slice() extracts a part of the string based on the given starting-index and ending-index and returns a new string.
// substring() returns the part of the given string from the start index to the end index. Please see String.slice and String.substring for details.
// substr() This method returns the specified number of characters from the specified index from the given string. It extracts a part of the original string.
// replace() replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.
// replaceAll() returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.
// toUpperCase() converts all the characters present in the String to upper case and returns a new String with all characters in upper case. This method accepts a single parameter stringVariable string that you want to convert in upper case.
// toLowerCase() converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase.
// trim() is used to remove either white spaces from the given string. This method returns a new string with removed white spaces. This method is called on a String object. This method doesn’t accept any parameter.
// trimStart() removes whitespace from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string.
// trimEnd() removes white space from the end of a string. The value of the string is not modified in any manner, including any white-space present before the string.
// padStart() pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.
// padEnd() pad a string with another string until it reaches the given length. The padding is applied from the right end of the string.
// charAt() returns the character at the specified index.
// charCodeAt() returns a number that represents the Unicode value of the character at the specified index. This method accepts one argument.
// split() splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.



//slice--------------------------------

// Define a string variable 
// let A = 'Geeks for Geeks';

// Use the slice() method to extract a substring
// let b = A.slice(0, 5);
// let c = A.slice(6, 9);
// let d = A.slice(10);

// Output the value of variable
// console.log(b);
// console.log(c);
// console.log(d);


//replace()------------------------------------------------------------------

// Define a string variable 'str' 
// let str = "Mind, Power, Soul";

// Use the replace() method to replace the substring
// let part = str.replace("Power", "Space");

// Output the resulting string after replacement
// console.log(part);

//replaceAll()
// replaceAll() returns a new string after replacing all the matches 
// of a string with a specified string or a regular expression. The original string is left unchanged after this operation.


// Define a string variable 'str'
// let str = "Mind, Power, Power, Soul";

// // Use the replaceAll() method to replace all occurrences
// //of "Power" with "Space" in the string 'str'
// let part = str.replaceAll("Power", "Space");

// // Output the resulting string after replacement
// console.log(part);


//5.3 Padding Strings
// .padStart() and .padEnd() add padding to the beginning or end of a string.
// javascript
// Copy
// let str = "5";
// console.log(str.padStart(3, "0")); // "005"
// console.log(str.padEnd(3, "0")); // "500"



// //. Displaying Text Content in HTML
// Real-time example: A website displaying a welcome message.
// Use Case:

// HTML elements use strings to represent visible content on the page.
// html
// Copy
// <h1>Welcome to My Website!</h1>
// <p>Your one-stop destination for learning web development.</p>
// In JavaScript, strings can dynamically change this text.
// javascript
// Copy
// document.getElementById("welcomeMessage").innerText = "Hello, Alice!";
// 2. User Input Handling and Form Validation
// Real-time example: A form where a user enters their email.
// Use Case:

// The user input is captured as a string and validated using JavaScript.
// html
// Copy
// <input type="email" id="userEmail" placeholder="Enter your email">
// <button onclick="validateEmail()">Submit</button>
// javascript
// Copy
// function validateEmail() {
//   const email = document.getElementById("userEmail").value;
//   if (!email.includes('@')) {
//     alert("Invalid email address!");
//   } else {
//     alert("Email is valid!");
//   }
// }
// 3. Manipulating Content Dynamically with JavaScript
// Real-time example: Changing the text of a button or displaying personalized content after user login.
// Use Case:

// Strings are used to change the content dynamically, like updating a user’s name after they log in.
// html
// Copy
// <button id="loginButton">Login</button>
// <p id="welcomeText"></p>
// javascript
// Copy
// let username = "John";
// document.getElementById("loginButton").addEventListener("click", function() {
//   document.getElementById("welcomeText").innerText = `Welcome, ${username}!`;
// });
// 4. Building Dynamic URLs
// Real-time example: Fetching data from an API based on user selection.
// Use Case:

// Constructing a dynamic URL to fetch user-specific data or posts.
// javascript
// Copy
// let userId = 123;
// let apiUrl = `https://api.example.com/users/${userId}`;
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data));
// 5. Working with JSON Data (APIs)
// Real-time example: Fetching JSON data from a server and using strings to parse or display it.
// Use Case:

// JSON responses from an API are often in string format, which need to be parsed into objects.
// javascript
// Copy
// fetch('https://api.example.com/products')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data[0].name); // Accessing product name (a string) from the response
//   });
// 6. Changing CSS Classes Dynamically
// Real-time example: Toggling a theme on a website (light/dark mode).
// Use Case:

// Use strings to manipulate CSS classes dynamically based on user interaction.
// html
// Copy
// <button onclick="toggleTheme()">Toggle Theme</button>
// javascript
// Copy
// function toggleTheme() {
//   document.body.classList.toggle("dark-theme"); // 'dark-theme' is a string
// }
// 7. URL Parameters and Navigation
// Real-time example: Tracking user data or navigating between pages with parameters.
// Use Case:

// Using strings to pass data in the URL and retrieve it for specific content.
// javascript
// Copy
// let userId = 42;
// let profileUrl = `profile.html?userId=${userId}`;
// window.location.href = profileUrl;
// Later, you can get the user ID from the URL using strings.
// javascript
// Copy
// let params = new URLSearchParams(window.location.search);
// let userId = params.get("userId");
// console.log(userId); // 42
// 8. Error Handling and Logging
// Real-time example: Displaying error messages when an API request fails.
// Use Case:

// Using strings for error messages when something goes wrong in the application.
// javascript
// Copy
// fetch('https://api.example.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to fetch data!");
//     }
//     return response.json();
//   })
//   .catch(error => {
//     console.log(error.message); // "Failed to fetch data!"
//   });
// 9. String Interpolation with Template Literals
// Real-time example: Displaying a personalized greeting on a webpage.
// Use Case:

// Template literals allow embedding variables or expressions inside strings.
// javascript
// Copy
// let userName = "Alice";
// let greeting = `Hello, ${userName}! Welcome back.`;
// document.getElementById("greetingMessage").innerText = greeting;
// 10. Internationalization (i18n) for Multilingual Sites
// Real-time example: Displaying different text based on user-selected language.
// Use Case:

// Strings are used to manage translations and dynamically display text in different languages.
// javascript
// Copy
// let language = "en"; // Or "fr", "de", etc.

// let messages = {
//   en: { greeting: "Hello!" },
//   fr: { greeting: "Bonjour!" },
//   de: { greeting: "Hallo!" }
// };

// document.getElementById("greetingMessage").innerText = messages[language].greeting;
// 11. String Padding (Formatting Content)
// Real-time example: Formatting numerical values for display.
// Use Case:

// Strings are used to add padding or format data (e.g., formatting a date or price).
// javascript
// Copy
// let price = 5;
// let formattedPrice = price.toString().padStart(5, "0"); // "00005"
// console.log(formattedPrice);
// 12. Database Queries
// Real-time example: Using strings in backend systems to query a database for specific records.
// Use Case:

// Dynamically generating SQL queries or search strings for a database based on user input.
// javascript
// Copy
// let searchTerm = "web development";
// let query = `SELECT * FROM courses WHERE name LIKE '%${searchTerm}%'`;
// db.query(query, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });