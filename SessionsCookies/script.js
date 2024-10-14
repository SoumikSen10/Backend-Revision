const express = require("express");

const app = express();

/*

Sessions and cookies are both used to store user data on a website, but they differ in how they store the data and when they expire:
Sessions
Store user data on the server side. Sessions are used to store data that can be used across multiple pages of a website. Sessions are more secure than cookies because the data is stored on the server. Sessions end when the user logs out or closes the browser.
Cookies
Store user data on the user's computer as small text files. Cookies expire after a specified amount of time. Cookies are used to store user-specific data on the client-side. 

*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*express.json() is specifically for handling JSON data, which is very common in APIs.
express.urlencoded() handles URL-encoded data, often used in form submissions. The { extended: true } option allows parsing of complex objects (like arrays or nested objects) from the URL-encoded data.
*/

//--------------------------------------------------------
/*

1. app.use(express.json());
Purpose: This middleware function parses incoming requests with JSON payloads.

How it works: When a client sends data in JSON format (e.g., Content-Type: application/json), this middleware will extract that JSON and make it available in req.body.

Use Case: It's commonly used when your frontend or API client sends JSON data in a POST, PUT, or PATCH request.

Example:

json :-

POST /api/user
Content-Type: application/json
{
  "name": "John",
  "email": "john@example.com"
}

After parsing, the req.body will be:

{ name: "John", email: "john@example.com" }


-------------------------------------------------------

2. app.use(express.urlencoded({ extended: true }));
Purpose: This middleware parses incoming requests with URL-encoded payloads, typically coming from HTML forms.

How it works: When a client sends data in the form of URL encoding (e.g., Content-Type: application/x-www-form-urlencoded), this middleware extracts the data and makes it available in req.body.

Use Case: It's useful when dealing with form submissions in web applications.

Example:

<form action="/submit" method="POST">
  <input type="text" name="username" value="JohnDoe">
  <input type="text" name="email" value="john@example.com">
  <button type="submit">Submit</button>
</form>
When the form is submitted, it will send data like:


[username=JohnDoe&email=john@example.com]

After parsing, the req.body will be:

{ username: "JohnDoe", email: "john@example.com" }


*/

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000);
