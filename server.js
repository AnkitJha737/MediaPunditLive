const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets from the dist folder
app.use(express.static(path.join(__dirname, "dist")));

// All other requests should return index.html (for React Router)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`✅ Media Pundit site is live at http://localhost:${port}`);
});