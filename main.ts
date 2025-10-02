import express from "npm:express@4";

const app = express();

// Add CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const jokes = [
    "Why don’t skeletons fight? They don’t have the guts!",
    "I told my computer I needed a break... it froze.",
    "Why do programmers prefer dark mode? Because light attracts bugs!"
];

app.get("/jokes", (req, res) => {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke: random });
});

app.use(express.static("public"));
app.listen(8000, () => console.log("Server on http://localhost:8000"));
