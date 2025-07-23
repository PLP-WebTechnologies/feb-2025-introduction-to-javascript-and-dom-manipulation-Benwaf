// Change text and style
document.getElementById("changeBtn").addEventListener("click", function () {
  const infoText = document.getElementById("info-text");
  infoText.textContent = "You changed the text and style using JavaScript!";
  infoText.style.color = "blue";
  infoText.style.fontWeight = "bold";
  infoText.style.fontSize = "1.2rem";
});

// Add or remove a box
document.getElementById("toggleBtn").addEventListener("click", function () {
  const boxContainer = document.getElementById("box-container");
  const existingBox = document.getElementById("dynamic-box");

  if (existingBox) {
    existingBox.remove(); // remove box if it exists
  } else {
    const box = document.createElement("div");
    box.id = "dynamic-box";
    box.textContent = "I'm a new box!";
    box.style.width = "200px";
    box.style.height = "100px";
    box.style.backgroundColor = "lightgreen";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.marginTop = "10px";
    boxContainer.appendChild(box);
  }
});
