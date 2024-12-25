const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const digitToLetters = {
    "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
    "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
};

const getCombinations = (digits) => {
    if (!digits.length) return [""];
    const currentLetters = digitToLetters[digits[0]] || "";
    const restCombinations = getCombinations(digits.slice(1));
    const combinations = [];
    for (const letter of currentLetters) {
        for (const combo of restCombinations) {
            combinations.push(letter + combo);
        }
    }
    return combinations;
};

app.post('/combinations', (req, res) => {
    const { phoneNumber } = req.body;
    if (!phoneNumber || !/^[2-9]+$/.test(phoneNumber)) {
        return res.status(400).json({ error: "Invalid phone number" });
    }
    const combinations = getCombinations(phoneNumber);
    res.json({ combinations });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
