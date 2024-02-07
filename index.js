document.getElementById("smallWindow").style.visibility = "hidden";
document.getElementById("smallWindow").style.height = "0";

function windowPop() {
  const smallWindow = document.getElementById("smallWindow");
  const side = document.getElementById("side");

  if (smallWindow.style.visibility == "visible") {
    // hiddenで非表示
    smallWindow.style.visibility = "hidden";
    smallWindow.style.height = "0";
    side.style.visibility = "visible";
  } else {
    // visibleで表示
    smallWindow.style.visibility = "visible";
    smallWindow.style.height = "auto";
    side.style.visibility = "hidden";
  }
}
