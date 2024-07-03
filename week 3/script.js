// For Count
const textBox = document.querySelector(".write-box > textarea");
const charCount = document.querySelector("#char-count");
const wordCount = document.querySelector("#word-count");
const sentencesCount = document.querySelector("#sen-count");
const paragraphCount = document.querySelector("#parg-count");
const spacesCount = document.querySelector("#sp-count");
const letterCount = document.querySelector("#lt-count");
const digitCount = document.querySelector("#dig-count");
const specialCharCount = document.querySelector("#sc-count");

textBox.addEventListener("change", () => {
    const regexText = textBox.value;
    let regexMatches;

    regexMatches = regexText.match(/./g);
    charCount.textContent = regexMatches ? regexMatches.length : 0;

    regexMatches = regexText.match(/\b\w+\b/g);
    wordCount.textContent = regexMatches ? regexMatches.length: 0;

    regexMatches = regexText.match(/[^.!?]+[.!?]+/g);
    sentencesCount.textContent = regexMatches ? regexMatches.length: 0;

    regexMatches = regexText.match(/[^.\n]+(?:\n(?!\n)[^.\n]*)*/g);
    paragraphCount.textContent = regexMatches ? regexMatches.length: 0;

    regexMatches = regexText.match(/\s/g);
    spacesCount.textContent = regexMatches ? regexMatches.length: 0;

    regexMatches = regexText.match(/[a-zA-Z]/g);
    letterCount.textContent = regexMatches ? regexMatches.length: 0;

    regexMatches = regexText.match(/\d/g);
    digitCount.textContent = regexMatches ? regexMatches.length: 0;

    regexMatches = regexText.match(/[^\w\s]/g);
    specialCharCount.textContent = regexMatches ? regexMatches.length: 0;
});

document.addEventListener("keypress", e => {
    if (e.key == 'Enter' && !e.shiftKey) {
        textBox.blur();
    }
});

// For Theme Settings
const settingsBtn = document.querySelector(".theme-settings > button");
const themeBoxCloseBtn = document.querySelector(".theme-box > button");
const themeBox = document.querySelector(".theme-box");

settingsBtn.addEventListener("click", () => {
    themeBox.classList.remove("hidden");
});

themeBoxCloseBtn.addEventListener("click", () => {
    themeBox.classList.add("hidden");
});

const lightModeBtn = document.querySelector("#light");
const darkModeBtn = document.querySelector("#dark");
const root = document.documentElement;


darkModeBtn.addEventListener("change", () => {
    if (darkModeBtn.checked) {
        root.style.setProperty("--font-color", "white");
        root.style.setProperty("--container-color", "#151515");
        root.style.setProperty("--sub-box-color", "#222222");

    }
});

lightModeBtn.addEventListener("change", () => {
    if (lightModeBtn.checked) {
        root.style.setProperty("--font-color", "black");
        root.style.setProperty("--container-color", "white");
        root.style.setProperty("--sub-box-color", "#d8d7d7");
    }
});