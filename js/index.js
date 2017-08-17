var open = 0;
function toggleMenu() {
  if (open == 0) {
    document.getElementById("mainNav").className = "open";
    document.getElementById("mainNav").style.zIndex = "10";

    open = 1;
  }
  else if (open == 1) {
    document.getElementById("mainNav").className = "closed";
    open = 0;
  }
}