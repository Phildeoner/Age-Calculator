let firstInput = document.getElementById('first-input');
let secondInput = document.getElementById('second-input');
const btn = document.querySelector('button');
const ageResult = document.querySelector('p');

function calculateAge() {
  let currentYear = firstInput.value;
  let birthYear = secondInput.value;
  let age = currentYear - birthYear;
  ageResult.textContent = `You are ${age} Years Old!`;
  return age;
}