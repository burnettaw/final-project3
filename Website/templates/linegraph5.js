//create a line graph of teams
function lineGraph(id){
    console.log("in line graph function")
    d3.csv("allCO").then(function(data){
       
        // nest function allows to group the calculation per level of a factor
    var sumstat = d3.nest() 
    .key(function(d) { return d.STATE;})
    .entries(data);
    console.log(data)
         function filterData(d) {
             return d.Date == id;
             console.log("in filterDate")
             console.log(d)
         }  
        // var yrdetails = data.filter(filterData) 
      
        // year_array = [];
        // AQI_array = [];
        // state = {};
        // data.map((row_data) => {
        //     if (year_array.indexOf(row_data.Date) === -1) {
        //         year_array.push(row_data.Date)
        //     }
        //     if (team_array.indexOf(row_data.DAILY_AQI_VALUE) === -1) {
        //         team_array.push(row_data.DAILY_AQI_VALUE)
        //     }//end if
        // });//end data.map
        
        // console.log(year_array);
        // console.log(year_array);
        
        // team_array.map((element) => {
        //     team[element] = 0
        // });
        // results = yrdetails; 
     
        // for (var i = 0; i < results.length; i++) {
        //     teamName = results[i].TEAM
        //     team[teamName] += 1
        //     console.log(teamName, "= ", team[teamName])
        // }//end for
        // y_label = [];
        // x_value = [];
        // for (teamName in team) {
        //     if (team[teamName] != 0) {
        //         y_label.push(teamName)
        //         x_value.push(team[teamName])
        //     }
        // }
        
        // // Line chart months
        // var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        // var dui = [];
        // for (var i = 0; i <= 12; i++) {
        //     dui[i.toString()] = 0
        // }
        // console.log("results.length")
        // console.log(results)
        // for (var i = 0; i < results.length; i++) {
        //     m = results[i].DATE[0]
        //     dui[m] += 1
        // }
        // console.log(month, "= ", dui)
        // var line_trace = {
        //     x: month,
        //     y: dui,
        //     type: 'scatter'
        // };

        // selected_yr = yrid
        // var line_layout = {
        //     font: { color: "darkblue", family: "Arial" },
        //     title: `NFL Teams Monthly DUI in ${selected_yr}`
        // };
        // var data = [line_trace];
        // Plotly.newPlot('scatter', data, line_layout);
  
   });
 }// end line chart