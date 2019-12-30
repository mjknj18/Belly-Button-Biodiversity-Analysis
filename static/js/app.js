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
    var option = document.createElement("option")
    option.value = names[i]
    option.text = names[i]
    dropdown_list.appendChild(option)}

  var data_panel = document.getElementById("sample-metadata")

  for (var i = 0; i < metadata.length; i++) {
    if (names[0] == metadata[i].id) {
      var p1 = document.createElement("p")
      var t1 = document.createTextNode("ID Number: " + metadata[i].id)
      p1.appendChild(t1)
      data_panel.appendChild(p1)

      var p2 = document.createElement("p")
      var t2 = document.createTextNode("Ethnicity: " + metadata[i].ethnicity)
      p2.appendChild(t2)
      data_panel.appendChild(p2)

      var p3 = document.createElement("p")
      var t3 = document.createTextNode("Gender: " + metadata[i].gender)
      p3.appendChild(t3)
      data_panel.appendChild(p3)

      var p4 = document.createElement("p")
      var t4 = document.createTextNode("Age: " + metadata[i].age)
      p4.appendChild(t4)
      data_panel.appendChild(p4)

      var p5 = document.createElement("p")
      var t5 = document.createTextNode("Location: " + metadata[i].location)
      p5.appendChild(t5)
      data_panel.appendChild(p5)

      var p6 = document.createElement("p")
      var t6 = document.createTextNode("Belly Button Type: " + metadata[i].bbtype)
      p6.appendChild(t6)
      data_panel.appendChild(p6)

      var p7 = document.createElement("p")
      var t7 = document.createTextNode("Wash Frequency: " + metadata[i].wfreq)
      p7.appendChild(t7)
      data_panel.appendChild(p7)

      var bar_x = information[i].sample_values
      var bar_y = information[i].otu_ids
      console.log(typeof information[i].sample_values)
    }
  }

  var bar_data = [{
    type: 'bar',
    x: bar_x,
    y: bar_y,
    orientation: 'h'
  }];
  
  Plotly.newPlot('bar', bar_data)
})

function optionChanged(value) {
  document.getElementById('sample-metadata').innerHTML = ""

  var data_panel = document.getElementById("sample-metadata")
  
  for (var i = 0; i < metadata.length; i++) {
    if (value == metadata[i].id) {
      var p1 = document.createElement("p")
      var t1 = document.createTextNode("ID Number: " + metadata[i].id)
      p1.appendChild(t1)
      data_panel.appendChild(p1)

      var p2 = document.createElement("p")
      var t2 = document.createTextNode("Ethnicity: " + metadata[i].ethnicity)
      p2.appendChild(t2)
      data_panel.appendChild(p2)

      var p3 = document.createElement("p")
      var t3 = document.createTextNode("Gender: " + metadata[i].gender)
      p3.appendChild(t3)
      data_panel.appendChild(p3)

      var p4 = document.createElement("p")
      var t4 = document.createTextNode("Age: " + metadata[i].age)
      p4.appendChild(t4)
      data_panel.appendChild(p4)

      var p5 = document.createElement("p")
      var t5 = document.createTextNode("Location: " + metadata[i].location)
      p5.appendChild(t5)
      data_panel.appendChild(p5)

      var p6 = document.createElement("p")
      var t6 = document.createTextNode("Belly Button Type: " + metadata[i].bbtype)
      p6.appendChild(t6)
      data_panel.appendChild(p6)

      var p7 = document.createElement("p")
      var t7 = document.createTextNode("Wash Frequency: " + metadata[i].wfreq)
      p7.appendChild(t7)
      data_panel.appendChild(p7)
    }}}