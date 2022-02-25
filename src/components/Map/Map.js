import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
import useStyles from './style.js';

const Map = ( {GetsetCoordinates ,GetsetBoundarries ,theCoordinated} ) => {

    const matches = useMediaQuery('(min-width:600px)'); // this means that the matches will set to false if the width is larger than 600px
    const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key : "AIzaSyBSamNSBJS5Jf7plaK3sd0WYimxT9L6ZA0" }}
        defaultCenter= {theCoordinated} //center of the map
        center= {theCoordinated}
        defaultZoom= {11}
        margin= {[50, 50, 50, 50]}
        options={''}
        onChange= {(e) => {
          GetsetCoordinates({lat: e.center.lat, lng: e.center.lng})
          GetsetBoundarries({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }} //checking if there is any changes in the coordinated then we change the props 
        onChildClick= {''} //when click on a resturant on a map
      >

      </GoogleMapReact>
    </div> 
  );
};

export default Map;