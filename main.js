const form = document.querySelector(".form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const container = document.querySelectorAll(".fieldset-wrapper");
const street1 = document.getElementById("street-address");
const street2 = document.getElementById("street-address-2");
const city = document.getElementById("input-city");
const state = document.getElementById("input-state");
const zipCode = document.getElementById("input-zip");
const phone = document.getElementById("input-number");
const email = document.getElementById("input-email");
const hearAbout = document.getElementById("hear-about");
const other = document.getElementById("other-hidden");
const otherInput = document.getElementById("other");


const nameError = document.getElementById("name-error");
const addressError = document.getElementById("address-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const hearAboutError = document.getElementById("feedback-error");
const otherError = document.getElementById("other-error");
const errorMsg = document.querySelectorAll(".error-msg");

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    if (firstName.value.trim().length === 0 || lastName.value.trim().length === 0) {
        // nameError.textContent = "This field is required."
        errorMsg[0].style.display = "flex";
        container[0].style.backgroundColor = "rgb(255, 237, 237)";
        firstName.classList.add("red-corner");
        lastName.classList.add("red-corner");

        valid = false;
    } else {
        container.forEach(div => {
            div.style.backgroundColor = "rgb(241, 245, 255)"
        });
    }
    if (!street1.value.trim().length || !city.value.trim().length || !state.value.trim().length || !zipCode.value.trim().length) {
        // addressError.textContent = "This field is required.";
        errorMsg[1].style.display = "flex";
        container[1].style.backgroundColor = "rgb(255, 237, 237)";
        street1.classList.add("red-corner");
        city.classList.add("red-corner");
        state.classList.add("red-corner");
        zipCode.classList.add("red-corner");

        valid = false;
    }
    const number = phone.value.trim();
    if (!number || isNaN(number)) {
        // phoneError.textContent = "This field is required.";
        errorMsg[2].style.display = "flex";
        container[2].style.backgroundColor = "rgb(255, 237, 237)";
        phone.classList.add("red-corner");

        valid = false;
    }
    if (email.value.trim() && !email.value.match(emailPattern)) {
        // emailError.textContent = "Enter a valid e-mail address";
        errorMsg[3].style.display = "flex";
        container[3].style.backgroundColor = "rgb(255, 237, 237)";
        email.classList.add("red-corner");

        valid = false;
    }

        
    if (hearAbout.value === "Other") {
        // otherError.textContent = "This field is required."
        errorMsg[4].style.display = "flex";
        container[4].style.backgroundColor = "rgb(255, 237, 237)";
        other.classList.add("red-border");
        
        valid = false;
    }

    if (valid) {
        form.reset();
    }
});

firstName.addEventListener("input", validateName);
lastName.addEventListener("input", validateName);
street1.addEventListener("input", validateAddress);
city.addEventListener("input", validateAddress);
state.addEventListener("input", validateAddress);
zipCode.addEventListener("input", validateAddress);
phone.addEventListener("input", validateNumber);
email.addEventListener("input", validateEmail);
hearAbout.addEventListener("change", () => {
    if (hearAbout.value === "Other") {
      other.style.display = "block";
      otherInput.classList.remove("red-border");
      other.style.flexDirection = "column";
      if (!other.value.trim()) {
        errorMsg[5].style.display = "none";
      }
    } else {
      other.style.display = "none";
    //   otherInput.value = ""; // clear if hidden
      otherError.textContent = "";
    }
});
// other.addEventListener("change", () => {
//     if (other.value.trim()) {}
// });


function validateName() {
    if (firstName.value.trim() && lastName.value.trim()) {
        errorMsg[0].style.display = "none";
        // nameError.textContent = "";
        container[0].style.backgroundColor = "transparent";
        firstName.classList.remove("red-corner");
        lastName.classList.remove("red-corner");
    }
}

function validateAddress() {
    if (street1.value.trim() && city.value.trim() && state.value.trim() && zipCode.value.trim()) {
        // addressError.textContent = "";
        errorMsg[1].style.display = "none";
        container[1].style.backgroundColor = "transparent";
        street1.classList.remove("red-corner");
        city.classList.remove("red-corner");
        state.classList.remove("red-corner");
        zipCode.classList.remove("red-corner");
    }
}

function validateNumber() {
    const number = phone.value.trim();
    if (number && !isNaN(number)) {
        errorMsg[2].style.display = "none";
        // phoneError.textContent = "";
        container[2].style.backgroundColor = "transparent";
        phone.classList.remove("red-corner");
    }
}

function validateEmail() {
    console.log(container);
    if (!email.value.trim() || email.value.match(emailPattern)) {
        // emailError.textContent = "";
        errorMsg[3].style.display = "none";
        container[3].style.backgroundColor = "transparent";
        email.classList.remove("red-corner");
    }
}