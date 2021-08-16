var trace1 = {
  x: ["2016", "2018", "2020"],
  y: [44, 40, 34],
  mode: 'lines+markers',
  name: "California"
};


// var trace2 = {
//   x: ["2016", "2018", "2020"],
//   y: [38, 36, 28],
//   mode: 'lines+markers',
//   name: "New Jersey"
// };

var trace3 = {
  x: ['2016', '2018', '2020'],
  y: [17, 19 , 20],
  mode: 'lines+markers',
  name: "New York"
};


var trace4 = {
  x: ['2016', '2018', '2020'],
  y: [24, 11, 14],
  mode: 'lines+markers',
  name: "North Carolina",
};


var trace5 = {
  x: ['2016', '2018', '2020'],
  y: [28, 44, 24],
  mode: 'lines+markers',
  name: "Texas",
};

var trace2 = {
  x: ['2016', '2018', '2020'],
  y: [3, 5 , 16],
  mode: 'lines+markers',
  name: "Wyoming"
};

var data = [ trace1, trace2, trace3, trace4, trace5];

var layout = {
  title:'The Highest CO2 in All Cities',
  // label
  xaxis:{
    autotick: false
  }
};

//Plotly.newPlot('myDiv', data, layout);
Plotly.newPlot('line_dataviz', data, layout);

