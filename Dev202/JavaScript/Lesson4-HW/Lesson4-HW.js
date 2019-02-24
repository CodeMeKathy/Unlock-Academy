// Requirements:

// Write a series of if/else statements. Check to see if the user input validates. If the user input does NOT validate, alert a message show a error message next to each invalid input.

  // First name should be at least 5 characters
  // Last name should be at least 5 characters

  // Address1 should be at least 10 characters
  // Address2 not required

  // City should be at least 5 characters
  // State should be 2 characters

  // zip should be at least 5 characters (extra credit, validate that zip is a number)
  // Age should be at least 2 characters (extra credit, validate that zip is a number)

  function validateInfo() {

    // Initialize each input field.
    let firstNameInput = document.getElementById('firstNameInputField').value
    let lastNameInput = document.getElementById('lastNameInputField').value
    let add1Input = document.getElementById('add1InputField').value
    let add2Input = document.getElementById('add2InputField').value
    let cityInput = document.getElementById('cityInputField').value
    let stateInput = document.getElementById('stateInputField').value
    let zipInput = parseInt(document.getElementById('zipInputField').value)
    let ageInput = parseInt(document.getElementById('ageInputField').value)

    // Add if statements:
      // Verify if firstNameInput.length < 5; if not alert <error.
      // Verify if lastNameInput.length < 5; if not alert error.
      // Verify if add1Input.length < 10; if not alert error.
      // Verify if cityInput.length === 5; if not alert error.
      // Verify if stateInput.length === 2; if not alert error.
      // Verify if zipInput.length === 5; if not alert error.
      // Verify if ageInput.length === 2 && integer; if not alert error.

    if (firstNameInput.length < 5) {
      alert('Alert: First names require a minimum of 5 characters.');
      document.getElementById('firstNameInputField').scrollIntoView(true);
      document.getElementById('firstNameErrorMessage').innerHTML = 'Please enter a name with at least a minimum of 5 characters.';

    } if (lastNameInput.length < 5) {
      alert('Alert: Last names require a minimum of 5 characters.')
    } 
    if (add1Input.length < 10) {
      alert('Alert: Address 1 responses require a minimum of 10 characters.')
    }
    if (cityInput.length < 5) {
      alert('Alert: The City name requires a minimum of 5 characters.')
    }
    if (stateInput.length < 2) {
      alert('Alert: The State name requires a minimum of 2 characters.')
    }
    if (zipInput.length < 5 && Number.isInteger(zipInput)) {
      alert('Alert: The Zip Code responses requires a minimum of 5 integers.')
    }
    if (ageInput.length == 2 && Number.isInteger(ageInput)) {
      alert('Alert: The Age responses requires a minimum of 2 integers.')
    } else
      // (firstNameInput.length > 5 && 
      // lastNameInput.length > 5 &&
      // add1Input.length > 10 &&
      // cityInput.length > 5 &&
      // stateInput.length > 2 &&
      // (zipInput.length > 5 && Number.isInteger(zipInput)) && (ageInput.length < 2 && Number.isInteger(ageInput)))
      {
      alert('Thank you!  Your shipping information was submitted successfully')
    }
    console.log(firstNameInput)
    console.log(firstNameInput.length)
    console.log(lastNameInput)
    console.log(lastNameInput.length)
    console.log(add1Input)
    console.log(add1Input.length)
    console.log(add2Input)
    console.log(cityInput)
    console.log(stateInput)
    console.log(zipInput)
    console.log(zipInput.length)
    console.log(Number.isInteger(zipInput))
    console.log(ageInput)
    console.log(ageInput.length)
    console.log(Number.isInteger(ageInput));

  }
