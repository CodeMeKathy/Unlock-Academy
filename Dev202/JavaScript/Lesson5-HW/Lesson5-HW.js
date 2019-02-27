// Requirements:
  // Current Day of the Week
  // Current Month
  // Current Season


  // Display the current day


  function displayDay(e) {
    let d1 = new Date()
    let dateDayInt = d1.getDay()

    if (dateDayInt == 0) {
      document.getElementById('day').innerHTML = 'Sunday'
    }
    
    if (dateDayInt == 1) {
      document.getElementById('day').innerHTML = 'Monday'
    }
    
    if (dateDayInt == 2) {
      document.getElementById('day').innerHTML = 'Tuesday'
    }
    
    if (dateDayInt == 3) {
      document.getElementById('day').innerHTML = 'Wednesday'

    }

    if (dateDayInt == 4) {
      document.getElementById('day').innerHTML = 'Thursday'

    }

    if (dateDayInt == 5) {
      document.getElementById('day').innerHTML = 'Friday'

    }

    if (dateDayInt == 6) {
      document.getElementById('day').innerHTML = 'Saturday'

    }
    
  }

  // Display current Month


