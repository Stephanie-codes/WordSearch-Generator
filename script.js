//Hello message
const text = "Create your own Custom Word Search!";
let index = 0;

function type() {
  const element = document.getElementById("text");
  element.innerHTML = text.slice(0, index++);
  if (index > text.length) index = 0;
}

setInterval(type, 100);


const input = document.getElementById('inputbox');
const screen = document.getElementById('screen');
const grid = document.getElementById('grid');

const numRows = 15;
const numCols = 15;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let inputArray;

document.getElementById('start').onclick = function() {
  getNames();

  listNames()

  generateGrid();

  putNamesInGrid();

  fillEmptyCells();
}


function getNames() {
  inputArray = input.value.split(" ");
}

function listNames() {
  for(let i = 0; i < inputArray.length; i++) {
    screen.innerHTML += "<li>" + inputArray[i] + "</li>";
  }
}

function generateGrid() {
    for(let row = 0; row < numRows; row++) {
      const currentRow = grid.insertRow();
   
      for(let col = 0; col < numCols; col++) {
        const cell = currentRow.insertCell();
        cell.textContent = ' ';
      }
    }
}

function putNamesInGrid() {
  let i = 0;
  while(i < inputArray.length) {
    const name = inputArray[i];
    if(Math.floor(Math.random() * 2) === 0) {
      // do horizontal 
      const randomRow = Math.floor(Math.random() * numRows);
      const randomCol = Math.floor(Math.random() * numCols);
      const cell = grid.childNodes[0].childNodes[randomRow].childNodes[randomCol];
      if(name.length + randomCol < numCols) {
        
        let allTheCellsAreEmptyOrTheRightLetter = true;
        for(let j = 0; j < name.length; j++) {
          const cellThatWeAreWritingTo = grid.childNodes[0].childNodes[randomRow].childNodes[randomCol + j];

          if(cellThatWeAreWritingTo.textContent !== ' ' && cellThatWeAreWritingTo.textContent !== name[j]) {
            allTheCellsAreEmptyOrTheRightLetter = false;
          }
        }

        if(allTheCellsAreEmptyOrTheRightLetter === true) {
          i++;
          for(let j = 0; j < name.length; j++) {
            const cellThatWeAreWritingTo = grid.childNodes[0].childNodes[randomRow].childNodes[randomCol + j];
            cellThatWeAreWritingTo.textContent = name[j];
          }
        }

      }
    } else {
      // do vertical
      const randomRow = Math.floor(Math.random() * numRows);
      const randomCol = Math.floor(Math.random() * numCols);
      const cell = grid.childNodes[0].childNodes[randomRow].childNodes[randomCol];
      if(name.length + randomRow < numRows) {

        let allTheCellsAreEmptyOrTheRightLetter = true;
        for(let j = 0; j < name.length; j++) {
          const cellThatWeAreWritingTo = grid.childNodes[0].childNodes[randomRow + j].childNodes[randomCol];

          if(cellThatWeAreWritingTo.textContent !== ' ' && cellThatWeAreWritingTo.textContent !== name[j]) {
            allTheCellsAreEmptyOrTheRightLetter = false;
          }
        }

        if(allTheCellsAreEmptyOrTheRightLetter === true) {
          i++;
          for(let j = 0; j < name.length; j++) {
            const cellThatWeAreWritingTo = grid.childNodes[0].childNodes[randomRow + j].childNodes[randomCol];
            cellThatWeAreWritingTo.textContent = name[j];
          }
        }

      }
    }
  }

}

function fillEmptyCells() {
  for(let row = 0; row < numRows; row++) {
    for(let col = 0; col < numCols; col++) {
      const cell = grid.childNodes[0].childNodes[row].childNodes[col];
      if(cell.textContent === ' ') {
        cell.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }
  }
}