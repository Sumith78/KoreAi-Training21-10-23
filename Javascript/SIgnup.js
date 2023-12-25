document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const thankYouContent = document.getElementById("thank-you-content");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check if the submit button was clicked
    const submitButton = document.activeElement;

    if (submitButton && submitButton.type === 'submit') {
      handleFormSubmission();
    }
  });

  // Validation as user types
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const cpasswordInput = document.getElementById("cpassword");
  const dateInput = document.getElementById("dob");
  const genderSelect = document.getElementById("gender");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

  // Full Name Validation
  nameInput.addEventListener("input", function () {
    const fullName = nameInput.value.trim();

    clearError(nameInput);

    if (fullName !== "" && /[\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(fullName)) {
      showError(nameInput, "Full name should not contain special characters or numbers");
    }
  });

  // Email Validation
  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();

    clearError(emailInput);

    if (email !== "" && !emailRegex.test(email)) {
      showError(emailInput, "Enter a valid email address");
    }
  });

  // Password Validation
  passwordInput.addEventListener("input", function () {
    const password = passwordInput.value.trim();

    clearError(passwordInput);

    if (password !== "" && !passwordPattern.test(password)) {
      showError(passwordInput, "Enter a valid password (6-12 characters, at least one uppercase, one lowercase, and one special character)");
    }
  });

  // Confirm Password Validation
  cpasswordInput.addEventListener("input", function () {
    const cpassword = cpasswordInput.value.trim();

    clearError(cpasswordInput);

    if (cpassword !== "" && !passwordPattern.test(cpassword)) {
      showError(cpasswordInput, "Enter a valid password (6-12 characters, at least one uppercase, one lowercase, and one special character)");
    }
  });

  function handleFormSubmission() {
    const [fullName, email, password, cpassword, date, gender] = [
      nameInput.value.trim(),
      emailInput.value.trim(),
      passwordInput.value.trim(),
      cpasswordInput.value.trim(),
      dateInput.value.trim(),
      genderSelect.value
    ];

    clearErrors();

    const currentDate = new Date();
    const birthDate = new Date(date);
    const age = Math.floor((currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

    if (fullName === "") {
      showError(nameInput, "Enter your full name");
      nameInput.focus();
      return;
    } else if (/[\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(fullName)) {
      showError(nameInput, "Full name should not contain special characters or numbers");
      nameInput.focus();
      return;
    }

    if (email === "" || !emailRegex.test(email)) {
      showError(emailInput, "Enter a valid email address");
      emailInput.focus();
      return;
    }

    if (password === "" || !passwordPattern.test(password)) {
      showError(passwordInput, "Enter a valid password (6-12 characters, at least one uppercase, one lowercase, and one special character)");
      passwordInput.focus();
      return;
    }

    if (cpassword === "" || !passwordPattern.test(cpassword)) {
      showError(cpasswordInput, "Enter a valid password (6-12 characters, at least one uppercase, one lowercase, and one special character)");
      cpasswordInput.focus();
      return;
    }

    if (password !== cpassword) {
      showError(cpasswordInput, "Passwords do not match");
      cpasswordInput.focus();
      return;
    }

    if (date === "") {
      showError(dateInput, "Select your date of birth");
      dateInput.focus();
      return;
    }

    if (gender === "") {
      showError(genderSelect, "Select your gender");
      genderSelect.focus();
      return;
    }

    if (age < 18) {
      showError(dateInput, "You must be above 18 years old");
      dateInput.focus();
      return;
    }

    // Display thank-you content
    form.style.display = "none";
    thankYouContent.style.display = "block";
  }

  // Toggle Password Visibility
  const passToggleBtn = document.getElementById("pass-toggle-btn");

  passToggleBtn.addEventListener("click", function () {
    passToggleBtn.classList.toggle("fa-eye");
    passToggleBtn.classList.toggle("fa-eye-slash");
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });

  // Toggle Confirm Password Visibility
  const cpassToggleBtn = document.getElementById("cpass-toggle-btn");

  cpassToggleBtn.addEventListener("click", function () {
    cpassToggleBtn.classList.toggle("fa-eye");
    cpassToggleBtn.classList.toggle("fa-eye-slash");
    cpasswordInput.type =
      cpasswordInput.type === "password" ? "text" : "password";
  });

  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorText = document.createElement("small");
    errorText.className = "error-text";
    errorText.textContent = message;
    formGroup.appendChild(errorText);
    formGroup.classList.add("error");
  }

  function clearError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("error");
    const errorText = formGroup.querySelector(".error-text");
    if (errorText) {
      errorText.remove();
    }
  }

  function clearErrors() {
    document
      .querySelectorAll(".form-group .error")
      .forEach((field) => field.classList.remove("error"));
    document
      .querySelectorAll(".error-text")
      .forEach((errorText) => errorText.remove());
  }
});

