const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Endpoint to save contact form data
app.post("/save-contact", (req, res) => {
  const { name, email, message } = req.body;

  // Format the data to save in the text file
  const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

  // Append the data to a file named "contact-info.txt"
  fs.appendFile("contact-info.txt", data, (err) => {
    if (err) {
      console.error("Error saving contact info:", err);
      return res.status(500).send("Failed to save contact info.");
    }
    res.status(200).send("Contact info saved successfully!");
  });
});

// Catch-all handler for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});