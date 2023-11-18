const grid = document.querySelector(".grid");
const div = document.createElement("div");
const userColorChoiceElement = document.querySelector("#color");

let userColor = 'black';

userColorChoiceElement.addEventListener("change", (event) => {
  userColor = event.target.value;
  return userColor;
});

const defaultValue = 16;

const createGrid = (sizeGrid) => {
  /*Create a grid with dimensions user gave */
  for (let rows = 0; rows < sizeGrid; rows++) {
    for (let colms = 0; colms < sizeGrid; colms++) {
      const div = document.createElement("div");
      div.style.width = `${grid.clientWidth / sizeGrid}px`;
      div.style.height = `${grid.clientWidth / sizeGrid}px`;
      div.classList.add("single-div");

      div.addEventListener("mouseover", (e) => {
        div.style.backgroundColor = userColor;
      });

      grid.append(div);
    }
  }
};

createGrid(defaultValue);
