document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const thankYouContent = document.getElementById("thankyou-content");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const dateInput = document.getElementById("date");
    const genderSelect = document.getElementById("gender");

    const [fullname, email, password, date, gender] = [
      fullnameInput,
      emailInput,
      passwordInput,
      dateInput,
      genderSelect
    ].map((input) => input.value.trim());

    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    document
      .querySelectorAll(".form-group .error")
      .forEach((field) => field.classList.remove("error"));

    document
      .querySelectorAll(".error-text")
      .forEach((errorText) => errorText.remove());

    if (fullname === "") showError(fullnameInput, "Enter your full name");
    if (!emailPattern.test(email))
      showError(emailInput, "Enter a valid email address");
    validatePassword(password);
    if (date === "") showError(dateInput, "Select your date of birth");
    if (gender === "") showError(genderSelect, "Select your gender");

    if (!document.querySelectorAll(".form-group .error").length) {
      // Redirect to the thank-you page
      window.location.href = "thankyou.html";
      // Alternatively, using the variable:
      thankYouContent.style.display = "block";
    }
  });

  // Toggle Password Visibility
  const passToggleBtn = document.getElementById("pass-toggle-btn");
  const passwordInput = document.getElementById("password");

  passToggleBtn.addEventListener("click", function () {
    passToggleBtn.classList.toggle("fa-eye");
    passToggleBtn.classList.toggle("fa-eye-slash");
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });
});
