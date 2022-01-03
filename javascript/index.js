document.addEventListener("DOMContentLoaded", function() {
    const baseURL = 'https://api.sampleapis.com/coffee/hot';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => addSelections(data));

})

function addSelections(coffees) {
    coffees.splice(-3)
    coffees.forEach(coffee => {
        const select = document.querySelector('#coffees')
        const option = document.createElement('option')
        option.innerText = coffee.title
        select.appendChild(option)
    })
}