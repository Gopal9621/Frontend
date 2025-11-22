const textBox = document.getElementById("textBox");
const count = document.getElementById("count");
const LIMIT = 100;

textBox.addEventListener("input", () => {
  let text = textBox.value;

  if(text.length > LIMIT){
    textBox.value = text.slice(0, LIMIT);
  }

  let left = LIMIT - textBox.value.length;
  count.textContent = "Characters left: " + left;

  count.className =
    left <= 20 ? "red" :
    left <= 50 ? "orange" :
    "green";
});
