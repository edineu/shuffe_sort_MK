let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  gridWrapper = document.getElementById("grid-container");

arrNum.forEach((item, i) => {
  gridWrapper.innerHTML += "<div grid-item=" + item + ">" + item + "</div>";
});

let arrayShuffe = (numbersArrayItems) => {
  let i = 0,
    arrNum = numbersArrayItems;
  gridWrapper.innerHTML = "";
  for (let i = array.length - 1; i > 0; i--) {
    const newPos = Math.floor(Math.random() * (i + 1));
    [array] = arrNum[i];
    arrNum[i] = arrNum[newPos];
    arrNum[newPos] = temp;
  }
  return array;
};

let newArray = arrayShuffe(array);
console.log(newArray);
