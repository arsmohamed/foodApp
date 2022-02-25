import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import {getPlacesData } from './api/index';

const App = () => {
  const [places, setPlaces] = useState([]);
  
  const [coordinates, setCoordinates] = useState({});
  const [boundarries, setBoundarries] = useState({});
  const [childClicked, setchildClicked] = useState(null )
  const [isLoading, setIsLoading ] = useState(false)
  // getting the user location once open the web app and no need to rerender the useeffect
  //use coordinate use the bluid in browser G-location API
  //using the empty prases in case we dont need the useEffect to reload 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(( {coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  },[]); 

  useEffect(() => {
    setIsLoading(true)
    getPlacesData(boundarries.ne, boundarries.sw)
      .then((data) => {
        setPlaces(data)
        setIsLoading(false)
      })

  },[coordinates, boundarries]);

  return (
    <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{ width: '100%'}}>
          <Grid item xs={12} md={4}>
            <List places={places} childClicked={childClicked} isLoading={isLoading}/>
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              GetsetCoordinates={setCoordinates} // to change the value of the coordinates
              GetsetBoundarries={setBoundarries} // to change the value of the boundaries
              thecoordinates={coordinates} //the coordinates states
              places={places}
              setchildClicked={setchildClicked}
            />
          </Grid>
        </Grid>
    </>
  );
}

export default App;
