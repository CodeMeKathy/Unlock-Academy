// Requirements:
  // ✅ Current Day of the Week
  // ✅ Current Month
  // ✅ Current Season


// ✅ Add Year with implicit function

(function displayYear() {
  let dy = new Date();
  document.getElementById('year').innerHTML = dy.getFullYear()

}())


// ✅ Display Time with implicit function

setInterval(displayTime, 1000)

function displayTime() {
  let timeElement = document.getElementById('time')

  let currentDate = new Date()
  let timeString = currentDate.toLocaleTimeString()
  timeElement.innerHTML = timeString
}

// ✅ Display Day Number 

(function displayDayNumber() {
  let dayNumberElement = document.getElementById('dayNumber')

  let dayNum = new Date()
  let dateDayNumber = dayNum.getDay()
  dayNumberElement.innerHTML = dateDayNumber
  
}());

// ✅ Display the current day

(function displayDay() {
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
    
}());

// ✅ Display current Month

(function displayMonth() {
  let d2 = new Date()
  let dateMonthInt = d2.getMonth()

  if (dateMonthInt == 0) {
    document.getElementById('month').innerHTML = 'January'

  }
  if (dateMonthInt == 1) {
    document.getElementById('month').innerHTML = 'February'

  }
  if (dateMonthInt == 2) {
    document.getElementById('month').innerHTML = 'March'

  }
  if (dateMonthInt == 3) {
    document.getElementById('month').innerHTML = 'April'

  }
  if (dateMonthInt == 4) {
    document.getElementById('month').innerHTML = 'May'

  }
  if (dateMonthInt == 5) {
    document.getElementById('month').innerHTML = 'June'

  }
  if (dateMonthInt == 6) {
    document.getElementById('month').innerHTML = 'July'

  }
  if (dateMonthInt == 7) {
    document.getElementById('month').innerHTML = 'August'

  }
  if (dateMonthInt == 8) {
    document.getElementById('month').innerHTML = 'September'

  }
  if (dateMonthInt == 9) {
    document.getElementById('month').innerHTML = 'October'

  }
  if (dateMonthInt == 10) {
    document.getElementById('month').innerHTML = 'November'

  }
  if (dateMonthInt ==11) {
    document.getElementById('month').innerHTML = 'December'

  }
  
}());

// ✅ Display current season

(function displaySeason() {
  let d3 = new Date()
  let seasonMonthInt = d3.getMonth()

  if (seasonMonthInt == 11 || seasonMonthInt == 0 || seasonMonthInt == 1) {
    document.getElementById('season').innerHTML = 'Winter'
  }
  if (seasonMonthInt == 2 || seasonMonthInt == 3 || seasonMonthInt == 4) {
    document.getElementById('season').innerHTML = 'Spring'
  }
  if (seasonMonthInt == 5 || seasonMonthInt == 6 || seasonMonthInt == 7) {
    document.getElementById('season').innerHTML = 'Summer'
  }
  if (seasonMonthInt == 8 || seasonMonthInt == 9 || seasonMonthInt == 10) {
    document.getElementById('season').innerHTML = 'Fall'
  }
}());
