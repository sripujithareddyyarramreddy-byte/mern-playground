const express = require("express");

const app = express();
const PORT = 3000;

// Parse JSON from Postman
app.use(express.json());

// Log every request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to My Express Server!");
});

// About Route
app.get("/about", (req, res) => {
    res.send("This is the About Page.");
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send("Contact us at contact@example.com");
});

// POST Route
app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("User data received successfully!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});