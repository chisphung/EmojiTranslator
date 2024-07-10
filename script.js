const emojiAlphabet = {
    'a': '🪜', 'b': '🪟', 'c': '🌜', 'd': '🎤', 'e': '3️⃣', 'f': '🎏', 'g': '🪝',
    'h': '🪑', 'i': '🍭', 'j': '🎷', 'k': '🎋', 'l': '🛴', 'm': 'Ⓜ️', 'n': '♑️',
    'o': '🛟', 'p': '🚩', 'q': '🍭', 'r': '®️', 's': '💲', 't': '✝️', 'u': '♈️',
    'v': '✅', 'w': '🔱', 'x': '❎', 'y': '🍸', 'z': '💤',
    'A': '🪜', 'B': '🪟', 'C': '🌜', 'D': '🎤', 'E': '3️⃣', 'F': '🎏', 'G': '🪝',
    'H': '🪑', 'I': '🍭', 'J': '🎷', 'K': '🎋', 'L': '🛴', 'M': 'Ⓜ️', 'N': '♑️',
    'O': '🛟', 'P': '🚩', 'Q': '🍭', 'R': '®️', 'S': '💲', 'T': '✝️', 'U': '♈️',
    'V': '✅', 'W': '🔱', 'X': '❎', 'Y': '🍸', 'Z': '💤'
};

// Create a reverse mapping from emojis to letters
const reverseEmojiAlphabet = {};
for (const [key, value] of Object.entries(emojiAlphabet)) {
    reverseEmojiAlphabet[value] = key;
}

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function translateToEmojis() {
    const inputText = removeAccents(document.getElementById('inputText').value);
    let outputText = '';

    for (let char of inputText) {
        outputText += emojiAlphabet[char] || char;
    }

    document.getElementById('outputText').innerText = outputText;
}

function translateToText() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';
    let i = 0;

    while (i < inputText.length) {
        let found = false;
        for (const [emoji, letter] of Object.entries(reverseEmojiAlphabet)) {
            if (inputText.startsWith(emoji, i)) {
                outputText += letter;
                i += emoji.length;
                found = true;
                break;
            }
        }
        if (!found) {
            outputText += inputText[i];
            i++;
        }
    }

    document.getElementById('outputText').innerText = outputText;
}
