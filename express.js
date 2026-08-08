const express = require("express");

const app = express();

const PORT = 3001;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to my Express.js application!");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



