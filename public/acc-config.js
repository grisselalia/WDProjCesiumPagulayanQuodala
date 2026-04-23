function updateField(field) {
  const currentUserEmail = localStorage.getItem("currentUser");
  let users = JSON.parse(localStorage.getItem("users")) || {};

  let newValue = document.getElementById(field).value.trim();

  if (!newValue) {
    alert("Field cannot be empty");
    return;
  }

  users[currentUserEmail][field] = newValue;

  localStorage.setItem("users", JSON.stringify(users));

  alert(field + " updated!");
}

const currentUserEmail = localStorage.getItem("currentUser");

if (window.location.pathname.includes("account-config.html")) {
  if (!currentUserEmail) {
    alert("Not logged in!");
    window.location.href = "log-in.html";
  } else {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    let user = users[currentUserEmail];

    document.getElementById("username").value = user.username;
    document.getElementById("email").value = user.email;
    document.getElementById("phone").value = user.phone;
    document.getElementById("password").value = user.password;

    document.getElementById("logoutBtn").addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      alert("Logged out!");
      window.location.href = "index.html";
    });
  }
}

// update function (global)
function updateField(field) {
  const currentUserEmail = localStorage.getItem("currentUser");
  let users = JSON.parse(localStorage.getItem("users")) || {};

  let newValue = document.getElementById(field).value.trim();

  if (!newValue) {
    alert("Field cannot be empty");
    return;
  }

  users[currentUserEmail][field] = newValue;

  localStorage.setItem("users", JSON.stringify(users));

  alert(field + " updated!");
}