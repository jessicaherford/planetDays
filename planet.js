function planet(day){
  return planetDays[day] ? planetDays[day]: "planet not found";
}



var planetDays = {
  "Monday": "Moon",
  "Tuesday": "Mars",
  "Wednesday": "Mercury",
  "Thursday": "Jupiter",
  "Friday": "Venus",
  "Saturday": "Saturn",
  "Sunday": "Sun"
}

planet("Monday");
planet("Tuesday");

var monday = planet("Monday");
var tuesday = planet("Tuesday");
// var wednesday = planet("Wednesday");
var thursday = planet("Thursday");
// var friday = planet("Friday");
var saturday = planet("Saturday");
var sunday = planet("Sunday");


console.log(monday);
console.log(tuesday);
// console.log(wednesday);
console.log(thursday);
// console.log(friday);
console.log(saturday);
console.log(sunday);
console.log(planet("Blah"));
