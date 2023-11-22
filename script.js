const grid = document.querySelector(".grid");
const div = document.createElement("div");
const userColorChoiceElement = document.querySelector("#color");
const gridSizeInput = document.getElementById("grid-size");
const resetBntElement = document.getElementById("reset");
const btnBlackElement = document.getElementById("black");
const btnRGBElement = document.getElementById("rgb");

let userColor = "black";
const defaultValue = 16;

// Get random color
const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

btnRGBElement.addEventListener("click", () => {
  let val = document.getElementById("grid-size").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = getRandomColor();
    });
  }
});

/* reset background color to it original color*/
resetBntElement.addEventListener("click", () => {
  let allDivs = document.querySelectorAll(".single-div");
  allDivs.forEach((div) => {
    div.style.backgroundColor = `white`;
  });
});

/* btn will change userColor to black*/
btnBlackElement.addEventListener("click", () => {
  let val = document.getElementById("grid-size").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = `black`;
    });
  }
});

/* User change a color for background-color*/
userColorChoiceElement.addEventListener("change", (event) => {
  userColor = event.target.value;
  let val = document.getElementById("grid-size").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = userColor;
    });
  }
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

      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = userColor;
      });

      grid.append(div);
    }
  }
};

createGrid(defaultValue);
