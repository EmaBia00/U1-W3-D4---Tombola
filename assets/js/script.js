// TASK:

// 1) Creare 90 celle

// 2) Bottone che seleziona un numero random da 1 a 90.

// 3) Cambiare il colore dello sfondo della cella contenente il numero estratto

// 4) Mantenere accese le celle dei numeri precedentemente estratti.
const tmbPositions = [];

const changeCellBackg = (randomNum) => {
  const tombCellDivs = document.querySelectorAll("div.tmb");
  tombCellDivs[randomNum - 1].classList.add("selectedNum");
};

const generateRandomNum = () => {
  let randomNum = 0;
  if (tmbPositions[0] === undefined) {
    randomNum = Math.floor(Math.random() * 90);
    tmbPositions.push(randomNum);
    console.log("Primo numero", tmbPositions[0]);
  } else {
    randomNum = Math.floor(Math.random() * 90);
    for (let i = 0; i < tmbPositions.length; i++) {
      if (tmbPositions[i] === randomNum) {
        randomNum = Math.floor(Math.random() * 90);
        i = 0;
      }
    }
    tmbPositions.push(randomNum);
  }
  return randomNum;
};

const crateTable = (tmbNum) => {
  const tombola = document.getElementById("tombola");

  for (let i = 0; i < tmbNum; i++) {
    const tombCellDiv = document.createElement("div");
    tombCellDiv.className = "tmb";

    const tombCellH3 = document.createElement("H3");
    tombCellH3.innerText = i + 1;

    tombCellDiv.appendChild(tombCellH3);
    tombola.appendChild(tombCellDiv);
  }
  const tmbButton = document.getElementById("button");
  tmbButton.onclick = () => {
    changeCellBackg(generateRandomNum());
  };
};

window.onload = () => {
  crateTable(90);
};
