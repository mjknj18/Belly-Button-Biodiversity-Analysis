// Define Variable for Sample Names
var names = []

// Import Sample Names from JSON File
d3.json("https://raw.githubusercontent.com/mjknj18/Belly-Button-Biodiversity-Analysis/master/data/samples.json").then(function(data) {
  data["names"].forEach(item => names.push(item));
});

console.log(names)

