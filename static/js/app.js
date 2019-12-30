// d3.json("https://github.com/mjknj18/Belly-Button-Biodiversity-Analysis/blob/master/data/samples.json", function(data){
//     console.log(data)})

// var data = fetch("https://github.com/mjknj18/Belly-Button-Biodiversity-Analysis/blob/master/data/samples.json")
// console.log(JSON.stringify(data))

fetch('https://github.com/mjknj18/Belly-Button-Biodiversity-Analysis/blob/master/data/samples.json')
  .then(response => {
    console.log(response.json())
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
    console.log('error')
  })