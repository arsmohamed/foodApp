import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
import useStyles from './style.js';

const Map = () => {

    const matches = useMediaQuery('(min-width:600px)'); // this means that the matches will set to false if the width is larger than 600px
    const classes = useStyles();
    const defaultProps = {
        center: {lat: 47.560539, lng: -52.712830},
        zoom: 11
    }
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key : "AIzaSyBSamNSBJS5Jf7plaK3sd0WYimxT9L6ZA0" }}
        defaultCenter= {defaultProps.center} //center of the map
        center= {defaultProps.center}
        defaultZoom= {defaultProps.zoom}
        margin= {[50, 50, 50, 50]}
        options={''}
        onChange= {''}
        onChildClick= {''} //when click on a resturant on a map
      >

      </GoogleMapReact>
    </div> 
  );
};

export default Map;