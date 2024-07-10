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

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function translateText() {
    const inputText = removeAccents(document.getElementById('inputText').value);
    let outputText = '';

    for (let char of inputText) {
        outputText += emojiAlphabet[char] || char;
    }

    document.getElementById('outputText').innerText = outputText;
}
