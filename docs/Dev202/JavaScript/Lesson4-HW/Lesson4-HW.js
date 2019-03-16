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

  function validateInfo(e) {

    // Initialize each input field.
    let firstNameInput = document.getElementById('firstNameInputField').value
    let lastNameInput = document.getElementById('lastNameInputField').value
    let add1Input = document.getElementById('add1InputField').value
    let add2Input = document.getElementById('add2InputField').value
    let cityInput = document.getElementById('cityInputField').value
    let stateInput = document.getElementById('stateInputField').value
    let zipInput = (document.getElementById('zipInputField').value)
    let ageInput = (document.getElementById('ageInputField').value)


    // Get value of each in

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
      document.getElementById('firstNameErrorMessage').innerHTML = 'Enter valid first name.';
      return;

    } else {
      document.getElementById('firstNameErrorMessage').innerHTML = '';
    }    
    if (lastNameInput.length < 5) {
      alert('Alert: Last names require a minimum of 5 characters.');
      document.getElementById('lastNameInputField').scrollIntoView(true);
      document.getElementById('lastNameErrorMessage').innerHTML = 'Enter a valid last name.';
      return;

    } else {
      document.getElementById('lastNameErrorMessage').innerHTML = '';
    }    
    if (add1Input.length < 10) {
      alert('Alert: Address 1 responses require a minimum of 10 characters.');
      document.getElementById('add1InputField').scrollIntoView(true);
      document.getElementById('add1ErrorMessage').innerHTML = 'Enter a valid street address.';
      return;

    } else {
      document.getElementById('add1ErrorMessage').innerHTML = '';
    }
    if (cityInput.length < 5) {
      alert('Alert: The City name requires a minimum of 5 characters.');
      document.getElementById('cityInputField').scrollIntoView(true);
      document.getElementById('cityErrorMessage').innerHTML = 'Enter a valid city name.' ;     

      return;

    }else {
      document.getElementById('cityErrorMessage').innerHTML = '';
    }
    if (stateInput.length < 2) {
      alert('Alert: The State name requires a minimum of 2 characters.');
      document.getElementById('stateInputField').scrollIntoView(true);
      document.getElementById('stateErrorMessage').innerHTML = 'Enter a valid state abbreviation.';
      return;

    } else {
      document.getElementById('stateErrorMessage').innerHTML = '';
    }
    if (zipInput.length < 5 || !Number.isInteger(parseInt(zipInput))) {
      alert('Alert: The Zip Code responses requires a minimum of 5 integers.');
      document.getElementById('zipInputField').scrollIntoView(true);
      document.getElementById('zipErrorMessage').innerHTML = 'Enter a zip code.';
      return;

    } else {
      document.getElementById('zipErrorMessage').innerHTML = '';
    }
    if (ageInput.length != 2 || !Number.isInteger(parseInt(ageInput))) {
      alert('Alert: The Age responses requires a minimum of 2 integers.');
      document.getElementById('ageInputField').scrollIntoView(true);
      document.getElementById('ageErrorMessage').innerHTML = 'Enter a valid age.';
      // e.preventDefault();  
      

    } else {
      document.getElementById('ageErrorMessage').innerHTML = '';
      alert('Thank you! Your shipping information was submitted successfully');
    }

  }
