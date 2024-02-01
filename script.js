function checkPasswordMatch() {
  const userPassword = document.getElementById("user-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const mismatchMessage = document.getElementById("passwordMismatch");

  if (userPassword === confirmPassword) {
    mismatchMessage.innerHTML = "";
  } else {
    mismatchMessage.innerHTML = "*Passwords do not match";
  }
}
