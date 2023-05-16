/*let result = '';
let history = '';

function addToResult(value) {
  result += value;
  document.getElementById('result').innerHTML = result;
}

function setOperator(operator) {
  result += operator;
  document.getElementById('result').innerHTML = result;
}

function clearResult() {
  result = '';
  document.getElementById('result').innerHTML = result;
}

function clearHistory() {
  history = '';
  document.getElementById('history').innerHTML = history;
}

function calculate() {
  try {
    let evaluated = eval(result);
    history += result + ' = ' + evaluated + '<br>';
    document.getElementById('history').innerHTML = history;
    result = evaluated.toString();
    document.getElementById('result').innerHTML = result;
  } catch (error) {
    result = '';
    document.getElementById('result').innerHTML = 'Erro!';
  }
}*/

// variáveis
let currentOperation = "";
let currentResult = "";
let history = [];

// elementos HTML
const operationElement = document.getElementById("operation");
const resultElement = document.getElementById("result");
const historyElement = document.querySelector("#history p");

// adicionar valor ao resultado
function addToResult(value) {
  currentOperation += value;
  operationElement.innerHTML = currentOperation;
}

// definir operador
function setOperator(operator) {
  if (currentOperation === "") return;
  if (currentOperation[currentOperation.length - 1] === "+" ||
      currentOperation[currentOperation.length - 1] === "-" ||
      currentOperation[currentOperation.length - 1] === "*" ||
      currentOperation[currentOperation.length - 1] === "/") {
    currentOperation = currentOperation.substring(0, currentOperation.length - 1);
  }
  currentOperation += operator;
  operationElement.innerHTML = currentOperation;
}

// limpar resultado e operação
function clearResult() {
  currentOperation = "";
  currentResult = "";
  operationElement.innerHTML = currentOperation;
  resultElement.innerHTML = currentResult;
}

// calcular resultado
function calculate() {
  if (currentOperation === "") return;
  if (currentOperation[currentOperation.length - 1] === "+" ||
      currentOperation[currentOperation.length - 1] === "-" ||
      currentOperation[currentOperation.length - 1] === "*" ||
      currentOperation[currentOperation.length - 1] === "/") {
    currentOperation = currentOperation.substring(0, currentOperation.length - 1);
  }
  currentResult = eval(currentOperation).toString();
  resultElement.innerHTML = currentResult;
  history.push(currentOperation + " = " + currentResult);
  historyElement.innerHTML = history.join("<br>");
  currentOperation = "";
}

// limpar histórico
function clearHistory() {
  history = [];
  historyElement.innerHTML = "";
}

// deletar o último número digitado
function deleteNumber() {
  currentOperation = currentOperation.slice(0, -1);
  operationElement.innerHTML = currentOperation;
}



