const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.round(Math.random() * 10); // cria um numero randomico 0 -10
let xAttenmpts = 1; // numero de tentativas | variavel de controle
console.log(randomNumber);

// eventos

function handleTryClick(e) {
  e.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {

    screen1.classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttenmpts} vezes`
    
    console.log(`Você acertou em ${xAttenmpts} tentativas`);
  }

  inputNumber.value = '';
  xAttenmpts++
}

function handleResetClick () {
  toglleScreen();
  xAttenmpts = 1;
  randomNumber = Math.round(Math.random() * 10)
}

function toglleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)