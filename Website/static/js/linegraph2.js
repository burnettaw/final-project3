anychart.onDocumentReady(function () {

	// create a data set
	var data = anychart.data.set([
		["Winter", 12000, 13000, 14000],
		["Spring", 13000, 15000, 17000],
		["Summer", 25000, 35000, 36000],
		["Autumn", 16000, 17000, 28000] 
	]);

	// map the data
	var seriesData_1 = data.mapAs({x: 0, value: 1});
	var seriesData_2 = data.mapAs({x: 0, value: 2});
	var seriesData_3 = data.mapAs({x: 0, value: 3});

	// create a 3d line chart
	var chart = anychart.line3d();

	// create line series and set the data
	var series1 = chart.line(seriesData_1);
	var series2 = chart.line(seriesData_2);
	var series3 = chart.line(seriesData_3);

	// set the chart title
	chart.title("3D Line Chart");

	// set the container id
	chart.container("container");

	// initiate drawing the chart
	chart.draw();
});