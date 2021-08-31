import React, { useEffect, useState } from 'react';

import styles from './TopBar.module.css';
import { Container, Nav, Navbar, Form} from 'react-bootstrap';
import cx from 'classnames';
import { fetchData } from '../../api';


const TopBar = ({handleCountryChange})=>{

    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchCountries = async () => {
         const countries = await fetchData('countries')
          setFetchedCountries(countries.map(coun => coun.country))
      }
      fetchCountries();
      // console.log(fetchedCountries);
    }, [setFetchedCountries])

    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container className={cx(styles.smallScreen)}>
                <Navbar.Brand href="#home">
                    <h6 className="display-6">
                        D<i className="fas fa-virus fa-spin"></i>J's Covid-19 Tracker    
                    </h6>
                </Navbar.Brand>
                <Nav className="ms-auto w-" >
                    <Nav.Link href="#home" className="w-">
                    <Form.Select aria-label="Default select example " className={cx("", styles.w30)} onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="">Global</option>
                        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}   
                    </Form.Select>
                    </Nav.Link>
                    {/* <button onClick={()=>console.log(countries)}>Test</button> */}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopBar;