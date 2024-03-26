const optionInput = document.getElementById('option-input');
const addOptionButton = document.getElementById('add-option');
const pickOptionButton = document.getElementById('pick-option');
const selectedOption = document.getElementById('selected-option');

let options = [];

addOptionButton.addEventListener('click', () => {
  const option = optionInput.value.trim();

  if (option) {
    options.push(option);
    optionInput.value = '';
    optionInput.focus();
  }
});

pickOptionButton.addEventListener('click', () => {
  const index = Math.floor(Math.random() * options.length);
  selectedOption.innerText = options[index];
});

optionInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addOptionButton.click();
  }
});
