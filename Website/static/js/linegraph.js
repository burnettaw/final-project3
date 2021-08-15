
  
// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#line_dataviz")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// //Read the data
// // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv").then(function(data) {
// d3.csv("allCO.csv").then(function(data) {

// console.log(data)
 
//   // group the data: I want to draw one line per group
//   var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
//     .key(function(d) { return d['Site Name'];})
//     .entries(data);

//   // Add X axis --> it is a date format
//   const format = d3.timeFormat('%Y');
//   //format(d.year)
//   var x = d3.scaleLinear()
//     .domain(d3.extent(data, function(d) { return format(d.Date); }))
//     .range([ 0, width ]);
//   svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x).ticks(5));

//   // Add Y axis
//   var y = d3.scaleLinear()
//     .domain([0, d3.max(data, function(d) { return +d.DAILY_AQI_VALUE; })])
//     .range([ height, 0 ]);
//   svg.append("g")
//     .call(d3.axisLeft(y));

//   // color palette
//   var res = sumstat.map(function(d){ return d.key }) // list of group names
//   var color = d3.scaleOrdinal()
//     .domain(res)
//     .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])
    
//   // Draw the line
//   svg.selectAll(".line")
//       .data(sumstat)
//       .enter()
//       .append("path")
//         .attr("fill", "none")
//         // .attr("stroke", function(d){ return color(d.key) })
//         // .attr("stroke", function(d){ return color(d.key) })
//         // .attr("stroke-width", 1.5)
//         .attr("d", function(d){
//           console.log(d)
//           return d3.line()
//             .x(function(d) { return x(format(d.year)); })
//             .y(function(d) { return y(d.DAILY_AQI_VALUE); })
//             (d.values)
//         })

// })

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers'
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines'
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers'
};

var data = [ trace1, trace2, trace3 ];

var layout = {
  title:'Line and Scatter Plot'
};

Plotly.newPlot('myDiv', data, layout);