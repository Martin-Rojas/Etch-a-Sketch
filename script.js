const grid = document.querySelector(".grid");
const div = document.createElement("div");
const userColorChoiceElement = document.querySelector("#color");
const gridSizeInput = document.getElementById("grid-size");
const resetBntElement = document.getElementById("reset");
const btnBlackElement = document.getElementById("black");
const btnRGBElement = document.getElementById("rgb");

let userColor = "black";
const defaultValue = 16;

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

// Get random color
const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const typeOfBackgroundColor = (id) => {
  let val = document.getElementById("grid-size").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      if (id === "rgb") {
        event.target.style.backgroundColor = getRandomColor();
      } else if (id === "black") {
        event.target.style.backgroundColor = `black`;
      } else {
        event.target.style.backgroundColor = userColorChoiceElement.value;
      }
    });
  }
};

btnRGBElement.addEventListener("click", (event) => {
  typeOfBackgroundColor(event.target.id);
});

/* reset background color to it original color*/
resetBntElement.addEventListener("click", () => {
  //delete grid
  let allDivs = document.querySelectorAll(".single-div");
  allDivs.forEach((div) => {
    div.remove();
  });

  let resetGridSize = 16;
  createGrid(resetGridSize);
});

/* btn will change userColor to black*/
btnBlackElement.addEventListener("click", (event) => {
  typeOfBackgroundColor(event.target.id);
});

/* User change a color for background-color*/
userColorChoiceElement.addEventListener("change", (event) => {
  console.log(userColorChoiceElement.value);
  typeOfBackgroundColor(event.target.id);
});

/* User chose the size of a grid*/
gridSizeInput.addEventListener("change", (e) => {
  //delete grid
  let allDivs = document.querySelectorAll(".single-div");
  allDivs.forEach((div) => {
    div.remove();
  });

  let userSizeGrid = e.target.value;
  createGrid(userSizeGrid);
});

createGrid(defaultValue);
