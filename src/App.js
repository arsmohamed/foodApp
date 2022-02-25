import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import {getPlacesData } from './api/index';

const App = () => {
  const [places, setPlaces] = useState([]);
  
  const [coordinated, setCoordinates] = useState({lat: 47.560539, lng: -52.712830});
  const [boundarries, setBoundarries] = useState(null);


  useEffect(() => {
    getPlacesData()
    .then((data) => {
     console.log(data) 
    })
  },
  []);

  return (
    <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{ width: '100%'}}>
          <Grid item xs={12} md={4}>
            <List/>
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              GetsetCoordinates={setCoordinates} // to change the value of the coordinates
              GetsetBoundarries={setBoundarries} // to change the value of the boundaries
              theCoordinated={coordinated} //the coordinated states
            />
          </Grid>
        </Grid>
    </>
  );
}

export default App;
