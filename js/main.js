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
function errorMsg(errEl1, errEl2, stateOne, stateTwo) {
  const elementOne = getElement(errEl1);
  const elementTwo = getElement(errEl2);
  elementOne.style.display = stateOne;
  elementTwo.style.display = stateTwo;
}

// form added addEventListener
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // slelect element
  const income = getInputValue("input-income");
  const foodCost = getInputValue("input-food");
  const rentCost = getInputValue("input-rent");
  const clothesCost = getInputValue("input-clothes");
  // conditional checking
  if (income < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
    // error msg
    errorMsg("error-one", "error-two", "block", "none");
  } else if (
    isNaN(income) ||
    isNaN(foodCost) ||
    isNaN(rentCost) ||
    isNaN(clothesCost)
  ) {
    // error msg
    errorMsg("error-one", "error-two", "none", "block");
  } else {
    // error msg
    errorMsg("error-one", "error-two", "none", "none");
    const totalCost = foodCost + rentCost + clothesCost;
    updateBalance(income, totalCost);
  }
});
// update balance
function updateBalance(income, totalCost) {
  // select element
  const balance = getElement("total-balance");
  const expenses = getElement("total-expenses");
  // conditional checking
  if (totalCost > income) {
    // error msg
    getElement("error-three").style.display = "block";
  } else {
    // error msg
    getElement("error-three").style.display = "none";

    expenses.innerText = totalCost;
    balance.innerText = income - totalCost;
  }
}
//
const savingBtn = getElement("saving-btn");
// addEventListener for saving buttons
savingBtn.addEventListener("click", savingBalance);
function savingBalance() {
  // slelect element
  const savingInput = getInputValue("persantage-number");
  const totalBalance = getElement("total-balance");
  const numberOfBalance = parseInt(totalBalance.innerText);
  const persantage = savingInput / 100;
  // conditional checking

  if (Number.isNaN(savingInput)) {
    // error msg
    errorMsg("error-four", "error-five", "block", "none");
  } else if (savingInput < 0 || savingInput > 100) {
    // error msg
    errorMsg("error-four", "error-five", "none", "block");
  } else {
    // error msg
    errorMsg("error-four", "error-five", "none", "none");

    savingAmount(numberOfBalance, persantage);
  }
}
// saving ammout function
function savingAmount(balance, persantage) {
  // select element
  const savingAmount = getElement("saving-amount");
  const ramainingBalance = getElement("remaing-balance");
  const persantageBalance = balance * persantage;
  // conditional checking
  if (persantageBalance >= balance) {
    // error msg
    getElement("error-six").style.display = "block";
  } else {
    // error msg
    getElement("error-six").style.display = "none";

    savingAmount.innerText = persantageBalance.toFixed(2);
    ramainingBalance.innerText = balance - persantageBalance;
  }
}
