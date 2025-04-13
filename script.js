
function showCard(id) {
  document.querySelectorAll('.course-card').forEach(c => c.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
function login() {
  alert("Login simulado.");
  document.getElementById("login-modal").style.display = "none";
}
function signup() {
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  if (pass !== confirm) {
    alert("Senhas diferentes!");
    return;
  }
  alert("Conta criada!");
  document.getElementById("login-modal").style.display = "none";
}
function changeTheme(theme) {
  document.body.className = "theme-" + theme;
}
window.onload = () => {
  changeTheme("pink");
  document.getElementById("login-modal").style.display = "flex";
}
