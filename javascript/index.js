const baseURL = 'https://api.sampleapis.com/coffee/hot';


document.addEventListener("DOMContentLoaded", function() {
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => {
    const coffeesArr = createNewArr(data)
    addSelections(coffeesArr)
    const btn = document.getElementById("details")
    btn.addEventListener('click', addingDetails)
  });
});

function addSelections(coffeesArr) {
    coffeesArr.forEach(coffee => {
        const select = document.querySelector('#coffees');
        const option = document.createElement('option')
        option.innerText = coffee.title
        select.appendChild(option)

    });
};

function createNewArr(coffees){
const latte = {
    "title": "Latte",
    "description": "A latte or caffè latte is a milk coffee that boasts a silky layer of foam as a real highlight to the drink. A true latte will be made up of one or two shots of espresso, lots of steamed milk and a final, thin layer of frothed milk on top.",
    "ingredients": [
      "Espresso",
      "Steamed Milk",
      "Foam"
    ],
    "id": 2
  };
const modifiedCoffees = [...coffees];
modifiedCoffees.splice(1, 0, latte);
modifiedCoffees.splice(-3);
modifiedCoffees[0].title = "Black Coffee";
return modifiedCoffees;
};

function addingDetails() {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(data => {
        const coffeesArr = createNewArr(data)
        const select = document.querySelector('#coffees');
        let obj = coffeesArr.find(obj => obj.title === select.value)
        console.log(obj)
        let summary = document.querySelector('#description')
        summary.innerText = obj.description
  });
}