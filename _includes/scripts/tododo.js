
document.addEventListener("keydown", function (event) {
  if (event.key == "?") {
    const elem = document.getElementById("help");
    elem.innerHTML =
      'If you want the real thing <a href="https://github.com/bmarse/tododo" rel="nofollow" target="_blank">github.com/bmarse/tododo</a>';
  }

  if (event.keyCode == 32 || event.code == "KeyX") {
    toggleStatus();
  }

  if (event.code == "KeyK" || event.code == "ArrowUp") {
    updatePosition(-1);
  }

  if (event.code == "KeyJ" || event.code == "ArrowDown") {
    updatePosition(1);
  }
});

function getSelectedIndex(matches) {
  let selectedIndex = 0;
  for (let i = 0; i < matches.length; i++) {
    if (Array.from(matches[i].classList).includes("selected")) {
      selectedIndex = i;
      break;
    }
  }

  return selectedIndex;
}

function updatePosition(direction) {
  const matches = document.querySelectorAll(".todo li");
  let selectedIndex = getSelectedIndex(matches);

  matches[selectedIndex].classList.remove("selected");
  selectedIndex = selectedIndex + direction;
  if (selectedIndex < 0) {
    selectedIndex = matches.length - 1;
  }
  if (selectedIndex >= matches.length) {
    selectedIndex = 0;
  }
  matches[selectedIndex].classList.add("selected");
}

function toggleStatus() {
  const matches = document.querySelectorAll(".todo li");
  let selectedIndex = getSelectedIndex(matches);

  matches[selectedIndex].classList.toggle("checked");
}
