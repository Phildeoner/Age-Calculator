const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const btn = document.querySelector('button');
const ageResult = document.querySelector('p');

function resetInput() {
  firstInput.value = '';
  secondInput.value = '';
}

function calculateAge() {
  const currentYear = firstInput.value;
  const birthYear = secondInput.value;
  const age = currentYear - birthYear;
  ageResult.textContent = `You are ${age} Years Old!`;
  setTimeout(() => {
    ageResult.textContent = '';
    resetInput();
  }, 5000);
  return age;
}

btn.addEventListener('click', calculateAge);