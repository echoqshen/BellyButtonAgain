// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    let samples = data.samples;
    let resultsArray = samples.filter(sampleObj=>sampleObj.id===sample);
    let result = resultsArray[0];


    let ids = result.otu_ids;
    let labels = result.otu_labels;
    let values = result.sample_values;      

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    // Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
      {x: ids,
      y: values,
      text: labels,
      mode: 'markers',
      marker: {color: ids,  size: values, colorscale: 'Picnic'}
      }   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: { title: "OTU ID" },
      hovermode: "closest",
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  });
}
