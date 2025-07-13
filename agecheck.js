
function confirmAge() {
  sessionStorage.setItem("isAdult", "true");
  document.getElementById("age-check").style.display = "none";
}
window.onload = function() {
  if (sessionStorage.getItem("isAdult") !== "true") {
    document.getElementById("age-check").style.display = "flex";
  } else {
    document.getElementById("age-check").style.display = "none";
  }
};
