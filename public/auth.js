document.addEventListener("DOMContentLoaded", function() {

  // sign up

  const signupForm = document.querySelector(".signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[email]) {
        alert("User already exists!");
        return;
      }

      users[email] = password;
      localStorage.setItem("users", JSON.stringify(users));

      alert("Sign up successful!");
      window.location.href = "log-in.html";
    });
  }

  // log in

  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      let users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[email] && users[email] === password) {
        localStorage.setItem("currentUser", email); // mark logged in
        alert("Login successful!");
        window.location.href = "../index.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  // logged in alr

  const authArea = document.getElementById("authArea");
  const currentUser = localStorage.getItem("currentUser");

  if (authArea && currentUser) {
    authArea.innerHTML = `
      <span>Welcome, ${currentUser}</span>
      <span> | </span>
      <a href="#" id="logoutBtn">Logout</a>
    `;

    document.getElementById("logoutBtn").addEventListener("click", function() {
      localStorage.removeItem("currentUser");
      alert("Logged out!");
      window.location.href = "../index.html";
    });
  }

});
