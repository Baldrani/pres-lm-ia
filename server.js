import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Serve the index.html file for the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
