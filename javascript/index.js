const baseURL = 'https://api.sampleapis.com/coffee/hot';

//Get data on document load, modify data and iterate through array
document.addEventListener("DOMContentLoaded", function() {
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => {
    const coffeesArr = createNewArr(data);
    addSelections(coffeesArr);
    const btn = document.getElementById("details");
    btn.addEventListener('click', renderDetails);
  });
});

//Function to iterate through array and append coffee title's to select dropdown.
function addSelections(coffeesArr) {
    coffeesArr.forEach(coffee => {
        const select = document.querySelector('#coffees');
        const option = document.createElement('option')
        option.innerText = coffee.title
        select.appendChild(option)
    });
 //console.log(coffeesArr)
};

//Function to modify array. Elminate 3 last objects and add an additional one with index of 1.
function createNewArr(coffees){

const modifiedCoffees = [...coffees];
modifiedCoffees.splice(-3);
modifiedCoffees[0].title = "Black Coffee";
return modifiedCoffees;
};

//Getting data and modifying it to append the description.
function renderDetails() {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(data => {
        const coffeesArr = createNewArr(data);
        const select = document.querySelector('#coffees');
        let obj = coffeesArr.find(obj => obj.title === select.value);
        appendDescription(obj)

  });
}

//Function to append coffee details including favorite button
function appendDescription(obj){
    const summary = document.querySelector('#description');
    const ul = document.createElement('ul');
    ul.innerText = "Ingredients";
    ul.classList.add('ingredients');
    summary.innerText = obj.description;
    summary.appendChild(ul);

    obj.ingredients.forEach(ingredient => {
        const li = document.createElement('li')
        li.innerText = ingredient
        ul.appendChild(li)
    })

    const div = document.querySelector('.container')
    div.innerHTML = ''
    const i = document.createElement('i')
    i.classList.add("far", "fa-heart")
    i.setAttribute('id', 'heart-btn')
    const p = document.createElement('p')
    p.innerText = "My Favorite"
    div.appendChild(p)
    div.appendChild(i)

    const heart = document.querySelector('#heart-btn')
    heart.addEventListener('click', toggleHeart)
}

//Function to favorite a coffee.
function toggleHeart(heart){
    const btn = heart.target
    if(btn.classList.contains("far")){
        btn.classList.remove("far")
        btn.classList.add("fas")
        console.log(btn)
    }else{
        btn.classList.remove("fas")
        btn.classList.add("far")
    }

}
 
