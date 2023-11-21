const grid = document.querySelector(".grid");
const div = document.createElement("div");
const userColorChoiceElement = document.querySelector("#color");
const gridSizeInput = document.getElementById("grid-size");
const resetBntElement = document.getElementById("reset");

let userColor = "black";
const defaultValue = 16;

/* reset background color to it original color*/
resetBntElement.addEventListener("click", () => {
  let allDivs = document.querySelectorAll(".single-div");
  allDivs.forEach((div) => {
    div.style.backgroundColor = `white`;
  });
});

/* User change a color for background-color*/
userColorChoiceElement.addEventListener("change", (event) => {
  userColor = event.target.value;
  return userColor;
});

/* User chose the size of a grid*/
gridSizeInput.addEventListener("change", (e) => {
  //delete grid
  let allDivs = document.querySelectorAll(".single-div");
  allDivs.forEach((div) => {
    div.remove();
  });

  let userSizeGrid = e.target.value;
  /*Create a grid with dimensions user gave */
  for (let rows = 0; rows < userSizeGrid; rows++) {
    for (let colms = 0; colms < userSizeGrid; colms++) {
      const div = document.createElement("div");
      div.style.width = `${grid.clientWidth / userSizeGrid}px`;
      div.style.height = `${grid.clientWidth / userSizeGrid}px`;
      div.classList.add("single-div");
      div.classList.add("cells");
      div.addEventListener("mouseover", (e) => {
        div.style.backgroundColor = userColor;
      });

      grid.append(div);
    }
  }
});

const createGrid = (sizeGrid) => {
  /*Create a grid with dimensions user gave */
  for (let rows = 0; rows < sizeGrid; rows++) {
    for (let colms = 0; colms < sizeGrid; colms++) {
      const div = document.createElement("div");
      div.style.width = `${grid.clientWidth / sizeGrid}px`;
      div.style.height = `${grid.clientWidth / sizeGrid}px`;
      div.classList.add("single-div");
      div.classList.add("cells");
      div.addEventListener("mouseover", (e) => {
        div.style.backgroundColor = userColor;
      });

      grid.append(div);
    }
  }
};

createGrid(defaultValue);
