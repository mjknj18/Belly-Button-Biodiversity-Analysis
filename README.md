# Belly-Button-Biodiversity-Analysis

The goal of this project was to use JavaScript to present interactive visualizations of belly button biodiversity data within a web page. Since the baseline data was provided in JSON format, D3 was used to import and process the data, while Plotly was used to generate the required visualizations.

## Questions

1. What is the demographic information of the individual associated with each specific belly button sample?
2. What are the top ten Operational Taxonomic Units (OTUs) by concentration in each specific belly button sample?
3. What are the concentrations of all the Operational Taxonomic Units (OTUs) in each specific belly button sample?
4. What is the weekly wash frequency of each specific belly button sample?

## Datasets

1. https://github.com/mjknj18/Belly-Button-Biodiversity-Analysis/blob/master/data/samples.json

## Tasks

1. Import the belly button sample data from the JSON file and create a function for web page initialization.
2. Extract each sample ID number and append it to the HTML dropdown menu container.
3. Extract and process the demographic information and OTU data for the first sample.
4. Append demographic information for the first sample to the appropriate HTML container.
5. Create a bar chart of the top ten OTUs by concentration in the first sample and connect it to the appropriate HTML container.
6. Create a bubble chart of the concentrations of all of the OTUs in the first sample and connect it to the appropriate HTML container.
7. Create a gauge chart of the weekly wash frequency of the first sample and connect it to the appropriate HTML container.
8. Create a function to watch for changes in the selected sample in the HTML dropdown menu.
9. Repeat steps four through seven for the selected sample.

## Results

1. https://github.com/mjknj18/Belly-Button-Biodiversity-Analysis/blob/master/index.html (Run this file in a browser.)