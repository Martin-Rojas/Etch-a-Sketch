const grid = document.querySelector(".grid");
const div = document.createElement("div");

/*Create a grid with dimensions user gave */
for (let rows = 0; rows < 9; rows++) {
  for (let colms = 0; colms < 9; colms++) {
    const div = document.createElement("div");
    div.style.width = `${grid.clientWidth/9}px`
    div.style.height = `${grid.clientWidth/9}px`
    div.classList.add("single-div");
    
    div.addEventListener('click', (e)=> {
        div.style.backgroundColor = "red";

    })
    grid.append(div);
    
  }
}
