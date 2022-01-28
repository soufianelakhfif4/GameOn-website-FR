function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".modal-btn-close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// ########################################################################################
// Validate input before submit
// ########################################################################################
const modalForm = document.getElementById("formReserve");
modalForm.addEventListener("submit", validateDataOnSubmit);

// Function to check if input form are validate
function validateDataOnSubmit(event) {

  // Get inputs
  var first = document.getElementById("first");
  var groupFirst = document.getElementById("groupFirst");
  var last = document.getElementById("last");
  var groupLast = document.getElementById("groupLast");
  var email = document.getElementById("email");
  var groupEmail = document.getElementById("groupEmail");

  // Stop propagation before check inputs
  event.preventDefault();

  // Boolean to know if form can be submit
  var error = false;

  // Check if first name have least 2 digits
  if(first.value.length < 2)
  {
    groupFirst.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupFirst.setAttribute('data-error-visible', false);
  }

  // Check if last name have least 2 digits
  if(last.value.length < 2)
  {
    groupLast.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupLast.setAttribute('data-error-visible', false);
  }


  // Check if email is valide
  if(!validateEmail(email.value)){
    groupEmail.setAttribute('data-error-visible', true);
    error = true;
  } else {
    groupEmail.setAttribute('data-error-visible', false);
  }

  // if no error, send form
  if(!error){
    modalForm.submit();
  }

}

// Function to check email validation
function validateEmail(email)
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true;
  }
  return false;
}

