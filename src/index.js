import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import jsondata from './generated.json';

Charts(FusionCharts);
 
 console.log('json data', jsondata);

 

const chartData =[];

jsondata.map(e => {
	const data = {} ;
	data["label"] = e.day;
	data["value"] = e.value;
console.log('dataarray',data);
	chartData.push(data);
})

const myDataSource = {
  chart: {
    caption: 'PFA',
    subCaption: '% days and values of week',
    numberPrefix: '',
  },
   data: chartData,
};

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource,
};

ReactDOM.render(
  <ReactFC {...chartConfigs} />,
  document.getElementById('root'),
  
);



/*ReactDOM.render(
           <App />, document.getElementById('root')
	);*/