import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
import useStyles from './style.js';

const Map = ( {GetsetCoordinates ,GetsetBoundarries ,thecoordinates, places, setchildClicked} ) => {

    const isMobile = useMediaQuery('(min-width:600px)'); // this means that the matches will set to false if the width is larger than 600px
    const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key : "AIzaSyBSamNSBJS5Jf7plaK3sd0WYimxT9L6ZA0" }}
        defaultCenter= {thecoordinates} //center of the map
        center= {thecoordinates}
        defaultZoom= {11}
        margin= {[50, 50, 50, 50]}
        options={''}
        onChange= {(e) => {
          GetsetCoordinates({lat: e.center.lat, lng: e.center.lng})
          GetsetBoundarries({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }} //checking if there is any changes in the coordinated then we change the props 
        onChildClick= {(child) => {
          setchildClicked(child)
        }} //when click on a resturant on a map
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)} //Number constructor to change the sting to number 
            lng={Number(place.longitude)} //Number constructor to change the sting to number 
            key={i}
          >
            {
              !isMobile
                ? (<LocationOnOutlinedIcon color="primary" fontSize="large" />)
                : (<Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                    <img
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                      alt={[place.name]}
                    />
                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                  </Paper>)
            }}
          </div>
        ))}
      </GoogleMapReact>
    </div> 
  );
};

export default Map;