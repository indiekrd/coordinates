const inputEl = document.getElementById('text-input');
const resultEl = document.getElementById('result');

inputEl.addEventListener('input', function() {
  const inputString = inputEl.value;
  const processedString = inputString.replace(/(\d+\.\d+)\s+(\d+\.\d+)/g, '$1,$2').replace(/, /g, ' ');

  resultEl.textContent = `<polygon points="${processedString}"></polygon>`
});