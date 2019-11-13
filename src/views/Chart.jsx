import React, {useState, useEffect} from 'react';
import ApexCharts from 'react-apexcharts';

function random(){
    return [0,0,0,0,0].map(each => Math.round(Math.random() * 100));
}

function generateSeries(){
    return seriesName.map((sName) => {
        return {
            "name": sName,
            "data": random()
        }
    });
}

const seriesName = ['Android', 'iPhone OS', 'iPad OS', 'watch Os']
const types = ['line', 'bar', 'area', 'scatter', 'heatmap'];

/*
const series = [
    {
        name: 'Android',
        //data: [Math.round(Math.random() * 100), 22, 30]
        //data: [0,0,0,0,0].map(each => Math.round(Math.random() * 100))
        data: random()
    },
    {
        name: 'IOS',
        data: [11, 19, 33, 45, 88]
    }
]
*/

/* const series = seriesName.map((sName) => {
    return {
        "name": sName,
        "data": random()
    }
}); */

const options = {
    xaxis: {
        categories: ['2015', '2016', '2017', '2018', '2019']
    }
}

export default function Chart(props){

    const [type, setType] = useState('line');
    const [series, setSeries] = useState([]);

    useEffect(() => {
        setSeries(generateSeries());
    }, []);

    function handleClick(type){
        setType(type)
    }

    function refreshData(){
        setSeries(generateSeries());
    }

    return (
        <div className="title">
            <h1>Chart: {type}</h1>
            <hr />
            {types.map((btn) => {
                return <button className="button" key={btn} onClick={() => handleClick(btn)} >{btn}</button>
            })}
            <hr />
            <button className="button is-success" onClick={refreshData}>Refresh</button>
            <hr />
            <ApexCharts key={type} type={type} series={series} options={options} /> {/* add props key for re render */}
        </div>
    )
}