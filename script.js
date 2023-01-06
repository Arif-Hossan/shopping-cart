let itemOnePrice = 1219;
let addItemOne = document.getElementById("addItemOne");
addItemOne.addEventListener("click", function () {
  let itemOneValue = increment("itemOne");
  let itemOneTotalPrice = itemOnePrice * itemOneValue;
  document.getElementById("itemOnePrice").innerText = itemOneTotalPrice;
});

let removeItemOne = document.getElementById("removeItemOne");
removeItemOne.addEventListener("click", function () {
  let itemOneValue = getInputValue("itemOne");
  if (itemOneValue > 1) {
    itemOneValue--;
    document.getElementById("itemOne").value = itemOneValue;

    updateSingleItemPrice("itemOnePrice", itemOnePrice, itemOneValue);
  } else {
    alert("Item's quantity should be positive");
  }
});

function getInputValue(id) {
  let item = document.getElementById(id).value;
  let itemValue = parseInt(item);
  return itemValue;
}

function increment(id) {
  let itemValue = getInputValue(id);
  itemValue++;
  document.getElementById(id).value = itemValue; //set value to the input field
  return itemValue;
}

function updateSingleItemPrice(id, price, value) {
  let singleItemlPrice = price * value;
  document.getElementById(id).innerText = singleItemlPrice;
}
