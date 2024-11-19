const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordcount");
const sentenceCount = document.getElementById("sentenceCount");

function updateCounts() {

  const text = textInput.value.trim();

  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordCountValue = words.length;

  const sentences = text.split(/[.!?]\s*/).filter(sentence => sentence.length > 0);
  const sentenceCountValue = sentences.length;

  wordCount.textContent = `Words: ${wordCountValue}`;
  sentenceCount.textContent = `Sentences: ${sentenceCountValue}`;
}
textInput.addEventListener("input", updateCounts);
