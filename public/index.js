const button = document.getElementById('tossBtn');
const resultText = document.getElementById('result');
const coin = document.getElementById('coin');

button.addEventListener('click', async () => {
  coin.classList.remove('spin'); 
  void coin.offsetWidth; 
  coin.classList.add('spin');
  resultText.textContent = 'Tossing...';

  setTimeout(async () => {
    try {
      const response = await fetch('/toss');
      const data = await response.json();
      resultText.textContent = data.result;
    } catch (err) {
      resultText.textContent = 'Error tossing coin';
      console.error(err);
    }
  }, 1000);
});
