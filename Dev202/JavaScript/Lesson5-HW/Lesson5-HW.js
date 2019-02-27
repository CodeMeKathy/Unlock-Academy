// Requirements:
  // Current Day of the Week
  // Current Month
  // Current Season


  // DayOfWeek


  function displayDay(e) {
    let d1 = new Date()
    let dateDayInt = d1.getDay()

    if (dateDayInt == 3) {
      document.getElementById('day').innerHTML = 'Wednesday'

    } else {
      document.getElementById('day').innerHTML = ''
    }

    
    // console.log(dateDayInt)
  }
