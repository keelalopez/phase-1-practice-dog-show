document.addEventListener('DOMContentLoaded', () => {
  fetchFunction()

  const form = document.querySelector('#dog-form')
  const registeredDogsTable = document.querySelector('table')


  let dogId

  // tab for yes, backarrow for no
  // DELIVERABLE 1
  function fetchFunction() {
    fetch('http://localhost:3000/dogs')
      .then((response) => response.json())
      .then((dogListArray) => {
        dogListArray.forEach((dogObj) => {
          renderDog(dogObj)
        })

      })
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const dogInputObject = {
      name: form.name.value,
      breed: form.breed.value,
      sex: form.sex.value,
    }
    patchEvent(dogInputObject)
    form.reset()
  })

  function patchEvent(dogInputObject) {
    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dogInputObject),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res)
        registeredDogsTable.innerHTML = ''
        fetchFunction()
        // renderDog(dogInputObject)
      })
  }


  function renderDog(dogObj) {

    const dogRow = document.createElement('tr')

    const dogCell = document.createElement('td')
    const breedCell = document.createElement('td')
    const sexCell = document.createElement('td')
    const editDogCell = document.createElement('td')
    const editDogButton = document.createElement('button')

    dogCell.textContent = dogObj.name
    breedCell.textContent = dogObj.breed
    sexCell.textContent = dogObj.sex
    editDogButton.textContent = 'Edit Dog'
    editDogCell.append(editDogButton)

    registeredDogsTable.append(dogRow)
    dogRow.append(dogCell, breedCell, sexCell, editDogCell)

    // let form = document.querySelector("#dog-form");

    editDogButton.addEventListener('click', () => {
        dogId = dogObj.id
        console.log(dogId)
      // dogCell.value
      form.name.value = dogObj.name
      form.breed.value = dogObj.breed
      form.sex.value = dogObj.sex

      // editingDogInfo ();
    })
  }

  //Make a dog editable. Clicking on the edit button next to a dog should populate the top
  //form with that dog's current information.
})
