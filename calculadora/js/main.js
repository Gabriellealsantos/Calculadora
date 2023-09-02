
// Selecionar os inputs de número
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");

// Selecionar o elemento de resultado
const resultadoElement = document.getElementById("result-box");

// Selecionar o botão
const btnSoma = document.getElementById("btn-plus");
const btnVezes = document.getElementById("btn-times");
const btnClear = document.getElementById("btn-clear");

btnSoma.addEventListener("click", handleSomaClick);
btnVezes.addEventListener("click", handleVezesClick);
btnClear.addEventListener("click", handleClearClick);
input1.addEventListener('input', handleBlockinput);
input2.addEventListener('input', handleBlockinput);

function handleSomaClick() {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);

  const isValor1Valid = !isNaN(valor1);
  const isValor2Valid = !isNaN(valor2);

  // Remover todas as classes de erro
  input1.classList.remove("input-error");
  input2.classList.remove("input-error");

  if (isValor1Valid && isValor2Valid) {
    const produto = valor1 + valor2;
    resultadoElement.textContent = produto;
  } else {
    // Se valor1 for inválido
    if (!isValor1Valid) {
      input1.classList.add("input-error");
    }

    // Se valor2 for inválido
    if (!isValor2Valid) {
      input2.classList.add("input-error");
    }
  }
}

function handleVezesClick() {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);

  const isValor1Valid = !isNaN(valor1);
  const isValor2Valid = !isNaN(valor2);

  // Remover todas as classes de erro
  input1.classList.remove("input-error");
  input2.classList.remove("input-error");

  if (isValor1Valid && isValor2Valid) {
    const produto = valor1 * valor2;
    resultadoElement.textContent = produto;
  } else {
    // Se valor1 for inválido
    if (!isValor1Valid) {
      input1.classList.add("input-error");
    }

    // Se valor2 for inválido
    if (!isValor2Valid) {
      input2.classList.add("input-error");
    }
  }
}

function handleClearClick() {
  input1.value = "";
  input2.value = "";

  resultadoElement.textContent = "0";

  input1.classList.remove("input-error");
  input2.classList.remove("input-error");
}

function handleBlockinput (event) {
  const inputValue = event.target.value;
  const regex = /^[0-9]+$/;

  if (!regex.test(inputValue)) {
    // Se o valor não for um número válido, limpe o campo
    event.target.value = '';
  }
};

