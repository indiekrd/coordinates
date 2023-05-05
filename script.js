const inputEl = document.getElementById('text-input');
const resultEl = document.getElementById('result');

inputEl.addEventListener('input', function() {
  const inputString = inputEl.value;
  const processedString = inputString.replace(/(\d+\.\d+)\s+(\d+\.\d+)/g, '$1,$2').replace(/, /g, ' ');

  resultEl.textContent = `<polygon points="${processedString}"></polygon>`
});

const copyText = () => {
  navigator.clipboard.writeText(resultEl.textContent)
    .then(() => {
      console.log('Текст скопирован успешно');
    })
    .catch((err) => {
      console.error('Не удалось скопировать текст: ', err);
    });
};

resultEl.addEventListener('click', copyText);
