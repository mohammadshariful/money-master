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

// error msg function
function errorMsg(errId, state) {
  getElement(errId).style.display = state;
}

// form added addEventListener
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const income = getInputValue("input-income");
  const foodCost = getInputValue("input-food");
  const rentCost = getInputValue("input-rent");
  const clothesCost = getInputValue("input-clothes");
  // conditional checking
  if (income < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
    errorMsg("error-one", "block");
    errorMsg("error-two", "none");
  } else if (
    isNaN(income) ||
    isNaN(foodCost) ||
    isNaN(rentCost) ||
    isNaN(clothesCost)
  ) {
    errorMsg("error-one", "none");
    errorMsg("error-two", "block");
  } else {
    errorMsg("error-one", "none");
    errorMsg("error-two", "none");
    const totalCost = foodCost + rentCost + clothesCost;
    updateBalance(income, totalCost);
  }
});
// update balance
function updateBalance(income, totalCost) {
  const balance = getElement("total-balance");
  const expenses = getElement("total-expenses");
  // conditional checking
  if (totalCost > income) {
    errorMsg("error-three", "block");
  } else {
    errorMsg("error-three", "none");
    expenses.innerText = totalCost;
    balance.innerText = income - totalCost;
  }
}
//
const savingBtn = getElement("saving-btn");
// addEventListener for saving buttons
savingBtn.addEventListener("click", savingBalance);
function savingBalance() {
  const savingInput = getInputValue("persantage-number");
  const totalBalance = getElement("total-balance");
  const numberOfBalance = parseInt(totalBalance.innerText);
  const persantage = savingInput / 100;
  // conditional checking

  if (Number.isNaN(savingInput)) {
    errorMsg("error-four", "block");
    errorMsg("error-five", "none");
  } else if (savingInput < 0 || savingInput > 100) {
    errorMsg("error-four", "none");
    errorMsg("error-five", "block");
  } else {
    errorMsg("error-four", "none");
    errorMsg("error-five", "none");
    savingAmount(numberOfBalance, persantage);
  }
}
// saving ammout function
function savingAmount(balance, persantage) {
  const savingAmount = getElement("saving-amount");
  const ramainingBalance = getElement("remaing-balance");
  const persantageBalance = balance * persantage;
  // conditional checking
  if (persantageBalance >= balance) {
    errorMsg("error-six", "block");
  } else {
    errorMsg("error-six", "none");
    savingAmount.innerText = persantageBalance.toFixed(2);
    ramainingBalance.innerText = balance - persantageBalance;
  }
}
