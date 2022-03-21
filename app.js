const Username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;

Username.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([a-z0-9A-Z]){2,10}$/;
  let string = Username.value;
  //console.log(regex, string);
  if (regex.test(string)) {
    Username.classList.remove("is-invalid");
    validUser = true;
  } else {
    Username.classList.add("is-invalid");
    validUser = false;
  }
});

email.addEventListener("blur", () => {
  let regex = /^([_\-\.a-z0-9A-Z]+)@([_\-\.a-z0-9A-Z]+)\.([a-zA-Z]){2,7}$/;
  let string = email.value;
  if (regex.test(string)) {
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  let regex = /^([0-9]){9,11}$/;
  let string = phone.value;
  if (regex.test(string)) {
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let msgBox = document.getElementById("msgBox");
  if (validUser && validEmail && validPhone) {
    msgBox.innerHTML = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success! </strong> your form has been submitted!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
  } else {
    msgBox.innerHTML = `<div id="failure" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Failure! </strong> some error occurred!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
  }
  setTimeout(() => {
    msgBox.innerHTML = ``;
  }, 2000);
});
