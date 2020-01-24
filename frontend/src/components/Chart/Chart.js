import React,{useState,useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Chart.css';

function Chart(props) {
    const [series,setSeries] = useState([])
    const data = props.data;

    useEffect(()=>{
        function formatData() {
            let series = [{name:"Dados",data:[]}]
            for(let index in data){
                let object = {
                    name:data[index]['_id'],
                    y:data[index]['count']
                }
                series[0].data.push(object)
            }
            setSeries(series)
        }
        formatData();

    },[data])

    console.log(series)

    const options = {
        chart: {
            type: 'pie'
          },
          title: {
            text: 'Distribuição de gastos'
          },
          series: series
        }
    
    return(
        <>
        <div className="chart">
        <HighchartsReact className="highchart" highcharts={Highcharts} options = {options}/>
        </div>
        </>
    )
}

export default Chart;