import React, { useEffect, useState } from 'react';
import { Container , Row, Col, Form} from 'react-bootstrap';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Charts.module.css';

const Charts = ({data:{cases, deaths, recovered}, country})=>{

  const [dates, setDates] = useState([]);
  const [dailyData, setDailyData] = useState({});
  useEffect(() =>{
    const fetchApi = async () =>{
      const {data} = await fetchDailyData(country)
    // console.log(data);
      if( country.length < 2){
        var timeline = {...data};
      }
     else{
        var {timeline} = data;
      }
      
      const {cases:dailyCases} = timeline;
      const {deaths:dailyDeaths} = timeline;
      const {recovered:dailyRecovered} = timeline;
      // console.log(timeline);

      // setDailyData();
      // console.log("DAILYYYYYYY "+country);
      // const d = Object.keys(timeline).map(key => key);
      setDates (Object.keys(dailyCases).map(key => new Date(key).toDateString()));
      const getDailyCases = Object.values(dailyCases).map(val => val);
      const getDailyDeaths = Object.values(dailyDeaths).map(val => val);
      const getDailyRecovered = Object.values(dailyRecovered).map(val => val);
      // setDailyData(previousState => ({
      //   ...previousState, [cases] : getDailyCases
      // }))
      setDailyData({
        cases : getDailyCases,
        deaths: getDailyDeaths,
        recovered: getDailyRecovered
      })

      // console.log(getDailyRecovered);
    }
    // console.log(dailyData);
    // console.log(country);
    fetchApi();
  }, [setDailyData, country])

  const [selectedChart, setSelectedChart] = useState("line");

  const handleChartChange = (chartType) =>{
    setSelectedChart(chartType)
  }

    const doughnut = (
      cases ? <Doughnut 
        data={
          {
            labels: ['Deaths', 'Infected', 'Recovered' ],
            datasets: [
              {
                label: "Some Label by DOJ",
                data: [deaths, cases, recovered],
                backgroundColor: [
                  'rgba(255, 0, 0, 0.6)',
                  'rgba(0, 0, 255, 0.6)',
                  'rgba(0, 255, 0, 0.6)'
                ],
                borderColor: [
                  'rgba(0, 0, 255, 0.5)',
                  'rgba(255, 0, 0, 0.5)',
                  'rgba(0, 255, 0, 0.5)' 
                ],
                borderWidth: 1
              }
            ],
          }
        } 
      /> : <h1 className="mt-5"><i class="fas fa-spinner fa-spin fa-5x "></i></h1>
    )
    
    const lineChart = (
      dailyData.deaths ?<Line
        data ={
          {
            labels: dates,
            datasets: [
              {
                data: dailyData.deaths,
                label: 'Deaths',
                borderColor: '#900',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                // fill: true
              },
              {
                data: dailyData.cases,
                label: 'Infected',
                borderColor: '#009',
                backgroundColor: 'rgba(0, 0, 255, .5)',
                // fill: true
              },
              {
                data: dailyData.recovered,
                label: 'Recovered',
                borderColor: '#090',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true
              }
            ]
          }
        }
      /> : <h1 className="mt-5"><i class="fas fa-spinner fa-spin fa-5x "></i></h1>
    )
    
    const barChart = (
      cases ? <Bar
        data={
          {
            labels: ['Deaths', "Infected", 'Recovered'],
            datasets: [
              {
                label: 'People',
                backgroundColor: [
                    'rgba(255, 0, 0, 0.5)',
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                ],
                data: [deaths, cases, recovered]
              }
            ]
          }
        }
        options = {
          {
            // legend: {display: true},
            // title: { display: true, text: `Current State in ${country}`}
          }
        }
      /> : <h1 className="mt-5"><i class="fas fa-spinner fa-spin fa-5x "></i></h1>
    )

    return(
       <Container className={styles.containerSmall}>
           <Row className={styles.rowSmall}>
               <Col md={12} className={styles.chartColumn}>
                <Form.Select onChange={(e)=>handleChartChange(e.target.value)} className={styles.chartSelect}>
                  <option value="line">LineChart</option>
                  <option value="bar">BarChart</option>
                </Form.Select>
               </Col>
               <Col md={8} sm={12} className={styles.chartColumnSmall}>
                 { (selectedChart === "line") ? lineChart : barChart}
                  {/* {lineChart} */}
                  {/* {barChart} */}
                  {/* {dailyData.map(c => `<h1>${c.country}</h1>`)} */}
               </Col>
               <Col md={4} sm={12}>
                  {doughnut}
               </Col>
           </Row>
       </Container>
    )
}

export default Charts;