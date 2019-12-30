// Define Baseline Arrays for Sample Data
var names = []
var metadata = []
var information = []
  
// Import Sample Data from JSON File
d3.json("https://raw.githubusercontent.com/mjknj18/Belly-Button-Biodiversity-Analysis/master/data/samples.json").then(function(data) {
  
  // Create Arrays of Sample Names/MetaData/Information
  data["names"].forEach(item => names.push(item))
  data["metadata"].forEach(item => metadata.push(item))
  data["samples"].forEach(item => information.push(item))

  var dropdown_list = document.getElementById("selDataset")

  for (var i = 0; i < names.length; i++) {
    var option = document.createElement("option");
    option.value = names[i];
    option.text = names[i];
    dropdown_list.appendChild(option);}

  var data_panel = document.getElementById("sample-metadata")
  
  for (var i = 0; i < metadata.length; i++) {
    if (names[0] === metadata[i].id) {console.log(metadata[i])}
  }
})

function optionChanged(value) {
  console.log(value)}