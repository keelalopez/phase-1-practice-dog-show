document.addEventListener('DOMContentLoaded', () => {
    fetchFunction()
    
})

// tab for yes, backarrow for no
// DELIVERABLE 1
function fetchFunction () {
    fetch('http://localhost:3000/dogs')
    .then (response => response.json())
    .then (dogListArray => dogListArray.forEach(dogObj => {
        renderDog(dogObj)
    }))
}


function renderDog (dogObj) {
    const registeredDogsTable = document.querySelector('table')

    const dogRow = document.createElement('tr')

    const dogCell = document.createElement('td')
    const breedCell = document.createElement('td')
    const sexCell = document.createElement('td')
    const editDogCell = document.createElement('td')
    
    dogCell.textContent = dogObj.name
    breedCell.textContent = dogObj.breed
    sexCell.textContent = dogObj.sex
    editDogCell.innerHTML = `<button>Edit Dog</button>`
    
    registeredDogsTable.append(dogRow)
    dogRow.append(dogCell, breedCell, sexCell, editDogCell) 

}