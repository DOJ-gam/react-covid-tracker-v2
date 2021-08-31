import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Navbar, Cards, Footer, Charts } from './components'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { fetchData } from './api';

function App() {

  const [fetchedData, setFetchedData] = useState([])
  const [fetchedCountry, setFetchedCountry] = useState([])
  
  useEffect(() => {
    const fetchApi = async() =>{
      setFetchedData(await fetchData())
    }
    fetchApi();
    // console.log(fetchedData)
  }, []);

  //   useEffect(() => {
  //     const fetchCountries = async () => {
  //      const countries = await fetchData('countries')
  //       setFetchedCountries(countries.map(coun => coun.country))
  //   }
  //   fetchCountries();
  //   // console.log(fetchedCountries);
  // }, [setFetchedCountries])
  // console.log(handleFetchCountries);
  const handleCountryChange = async (country) => {
    if(!country){
      setFetchedData(await fetchData());
    }
    else{
      setFetchedData(await fetchData(`countries/${country}`));
    }
    setFetchedCountry(country)
    // console.log(fetchedCountry);
  }
  return (
    <>
      <Navbar handleCountryChange={handleCountryChange}/>
      <Container className="mb-5">
        <Cards data={fetchedData} />
      </Container>
      <Container className="px-5">
        <Charts data={fetchedData} country={fetchedCountry}/>
      </Container>
      
      <Footer/>
    </>
  );
}

export default App;
