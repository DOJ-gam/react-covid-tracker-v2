import React from 'react';
import { Card , Row, Col, Container} from 'react-bootstrap';
// import { PersonPlus } from 'react-bootstrap-icons';

import styles from './Cards.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';

const Cards = ({data:{active, cases, deaths, todayCases, todayDeaths, recovered, todayRecovered, tests, critical, population, updated, }})=>{

    return(
        <Container>
            <Row className={  cx('', styles.container, styles.dojRow) }>
                <Col md={3} className={styles.smaal}>
                    <Card className={cx('shadow-sm px-1', styles.dojCard, styles.deaths)}>
                        <Card.Body>
                            <Card.Title>Deaths</Card.Title>
                            <Card.Subtitle className={cx('text-muted', styles.cardSubtitle)}>
                                <p>
                                    <CountUp
                                        start={0}
                                        end={deaths}
                                        duration={3.2}
                                        separator=","
                                    />
                                </p>
                                <h6>
                                    +
                                    <CountUp
                                        start={0}
                                        end={todayDeaths}
                                        duration={3.2}
                                        separator=","
                                    />
                                    <span> New</span>
                                </h6>
                            </Card.Subtitle>
                            <Card.Text className="text-muted">
                                <p>Number of death cases of Covid-19</p>
                                <h6>as at {new Date(updated).toDateString()}</h6>
                                <p>
                                    <CountUp
                                        start={0}
                                        end={critical}
                                        duration={3.2}
                                        separator=","
                                    />
                                    <span> critical cases</span>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className={styles.smaal}>
                    <Card className={cx('shadow-sm px-1', styles.dojCard, styles.infected)}>
                        <Card.Body>
                            <Card.Title className="">Infected</Card.Title>
                            <Card.Subtitle className={cx('text-muted', styles.cardSubtitle)}>
                                <p>
                                    <CountUp
                                        start={0}
                                        end={cases}
                                        duration={3.2}
                                        separator=","
                                    />
                                </p>
                                <h6>
                                {/* <GroupAdd fontSize="small" /> */}
                                    {/* <PersonPlus fontSize=""/> */}
                                    +
                                    <CountUp
                                        start={0}
                                        end={todayCases}
                                        duration={3.2}
                                        separator=","
                                    /> <span> New</span>
                                </h6>
                            </Card.Subtitle>
                            <Card.Text className="text-muted">
                                <p>Number of active cases of Covid-19</p>
                                <h6>as at {new Date(updated).toDateString()}</h6>
                                <p>
                                    <CountUp
                                        start={0}
                                        end={active}
                                        duration={3.2}
                                        separator=","
                                    />
                                    <span> active cases</span>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className={styles.smaal}>
                    <Card className={cx('shadow-sm px-1', styles.dojCard, styles.recovered)}>
                        <Card.Body>
                            <Card.Title className="">Recovered</Card.Title>
                            <Card.Subtitle className={cx('text-muted', styles.cardSubtitle)}>
                            <p>
                                <CountUp
                                    start={0}
                                    end={recovered}
                                    duration={3.2}
                                    separator=","
                                />
                            </p>
                            <h6>
                                +
                                <CountUp
                                    start={0}
                                    end={todayRecovered}
                                    duration={3.2}
                                    separator=","
                                />
                                <span> New</span>
                            </h6>
                            </Card.Subtitle>
                            <Card.Text className="text-muted">
                                <p>Number of recovered cases of Covid-19</p>
                                <h6>as at {new Date(updated).toDateString()}</h6>
                                <p>
                                <span>Population: </span>
                                <CountUp
                                    start={0}
                                    end={population}
                                    duration={3.2}
                                    separator=","
                                />
                            </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                
            </Row>
            
        </Container>
    )
}

export default Cards;