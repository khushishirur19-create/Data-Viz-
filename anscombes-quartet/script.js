d3.csv("anscombe.csv").then(function(data) {

  // Convert x and y values from text into numbers
  data.forEach(function(d) {
    d.x = +d.x;
    d.y = +d.y;
  });

  // Get each dataset
  const dataset1 = data.filter(function(d) {
    return d.dataset === "I";
  });

  const dataset2 = data.filter(function(d) {
    return d.dataset === "II";
  });

  const dataset3 = data.filter(function(d) {
    return d.dataset === "III";
  });

  const dataset4 = data.filter(function(d) {
    return d.dataset === "IV";
  });


  // Function to draw a complete scatterplot
  // Added "color" as a parameter
  function drawScatterplot(dataset, color) {

    const width = 500;
    const height = 500;

    // Create SVG
    const svg = d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // X scale
    const xScale = d3.scaleLinear()
      .domain([0, 20])
      .range([50, 450]);

    // Y scale
    const yScale = d3.scaleLinear()
      .domain([0, 12])
      .range([450, 50]);

    // Draw circles
    svg.selectAll("circle")
      .data(dataset)
      .join("circle")
      .attr("cx", function(d) {
        return xScale(d.x);
      })
      .attr("cy", function(d) {
        return yScale(d.y);
      })
      .attr("r", 5)
      .attr("fill", color);   // Use the color parameter

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Add x-axis
    svg.append("g")
      .attr("transform", "translate(0, 450)")
      .call(xAxis);

    // Add y-axis
    svg.append("g")
      .attr("transform", "translate(50, 0)")
      .call(yAxis);
  }


  // Call the function four times with different colors
  drawScatterplot(dataset1, "red");
  drawScatterplot(dataset2, "blue");
  drawScatterplot(dataset3, "green");
  drawScatterplot(dataset4, "purple");

});