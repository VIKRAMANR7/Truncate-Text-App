let inputText = document.getElementById("input-para");
let outputText = document.getElementById("output-para");
let noOfWords = document.querySelector(".noOfWords");
let truncateBtn = document.querySelector(".truncate");
let copyBtn = document.querySelector(".copy");

truncateBtn.addEventListener("click", truncatedText);

function truncatedText() {
  let inputTextVal = inputText.value;
  let words = noOfWords.value;
  let splitWords = inputTextVal;
  let truncatedWords = splitWords.substring(0, words);
  outputText.innerHTML = truncatedWords;
}

copyBtn.addEventListener("click", () => {
  let text = outputText.innerHTML;
  copyText(text);
});

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert("Text copied to clipboard");
  } catch (err) {
    alert("Error in copying text: ", err);
  }
}
