const form = document.getElementById("form");
const usuario = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usuarioValue = usuario.value.trim();

  if (usuarioValue === "") {
    setErrorFor(usuario, "No puede dejar el usuairo en blanco");
  } else {
    setSuccessFor(usuario);
  }
}

const validAge = () => {
  const userAge = document.querySelector("#date").value;
  const currentDate = new Date().getFullYear();
  const dateEntered = new Date(userAge).getFullYear();
  const subtract = Math.abs(currentDate - dateEntered);
  console.log(subtract);
  if (subtract >= 18) {
    setSuccessFor(document.querySelector("#date"));
  } else {
    setErrorFor(document.querySelector("#date"), "Debes ser mayor de 18 años");
  }
};

const workerCategory = () => {
  const A = document.querySelector("#cat-a").value;
  const B = document.querySelector("#cat-b").value;
  const C = document.querySelector("#cat-c").value;
  const D = document.querySelector("#cat-d").value;
  let basicPayment = 0;
  console.log(basicPayment);
  return basicPayment;
};

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// validAge();

submitButton.addEventListener("click", validAge);
submitButton.addEventListener("click", workerCategory);
