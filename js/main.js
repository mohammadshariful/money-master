// selects element
const inputIncomeField = document.getElementById("input-income");
const inputFoodField = document.getElementById("input-food");
const inputRentField = document.getElementById("input-rent");
const inputClothesField = document.getElementById("input-clothes");
const inputPersantageField = document.getElementById("persantage-number");
// common function

// get any element
function getElement(elementName) {
  return document.getElementById(elementName);
}

// get input value
function getInputValue(element) {
  const inputField = document.getElementById(element);
  const inputValue = parseInt(inputField.value);
  inputField.value = "";
  return inputValue;
}
// total const
function costCalc() {
  const foodCost = getInputValue("input-food");
  const rentCost = getInputValue("input-rent");
  const clothesCost = getInputValue("input-clothes");
  const totalCost = foodCost + rentCost + clothesCost;
  return totalCost;
}

// form added addEventListener
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const totalCost = costCalc();
  updateBalance(totalCost);
});
// update balance

function updateBalance(totalCost) {
  const addIncome = getInputValue("input-income");
  const balance = getElement("total-balance");
  const expenses = getElement("total-expenses");
  expenses.innerText = totalCost;
  balance.innerText = addIncome - totalCost;
}
