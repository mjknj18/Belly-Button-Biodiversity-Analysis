// Define Variable for Sample Names
var names = []

// Import Sample Names from JSON File
d3.json("https://raw.githubusercontent.com/mjknj18/Belly-Button-Biodiversity-Analysis/master/data/samples.json").then(function(data) {
  data["names"].forEach(item => names.push(item));
});

console.log(names)

// Define Variable for Sample MetaData
var metadata = []

// Import Sample MetaData from JSON File
d3.json("https://raw.githubusercontent.com/mjknj18/Belly-Button-Biodiversity-Analysis/master/data/samples.json").then(function(data) {
  data["metadata"].forEach(item => metadata.push(item));
});

console.log(metadata)

// Define Variable for Sample Information
var information = []

// Import Sample Information from JSON File
d3.json("https://raw.githubusercontent.com/mjknj18/Belly-Button-Biodiversity-Analysis/master/data/samples.json").then(function(data) {
  data["samples"].forEach(item => information.push(item));
});

console.log(information)