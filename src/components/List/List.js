import React, {useState, useEffect, createRef} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './style.js';

const List = ({places, childClicked, isLoading}) => {
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')
    const classes = useStyles();

    const [elementRef, setelementRef] = useState([]);
    // console.log({elementRef})
    // console.log({childClicked})
    // useEffect(() => {
    //     //using the arry construcator and fill it will the index and refurn either refernce if it exist or create reference 
    //     // setelementRef((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    //     const refs =  Array(places?.length).fill().map((_,i) => (elementRef[i] || createRef()))
    //     setelementRef(refs)
    // }, [places])

    return(
        <div className={classes.container}>
            <Typography variant="h4">Resturant, Hotels & Attractions around you </Typography>
            {isLoading 
                ?( <div className={classes.loading}>
                    <CircularProgress size={5} />
                </div>)
                :
                //this is react fragmant 
                <>
                    <FormControl className={classes.FormControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attraction</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.FormControl} style={{width: "15%"}}>
                        <InputLabel >Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i )=> (
                            <Grid item key={i} xs={12}>
                                //passing down the index of each element of the array
                                <PlaceDetails
                                    // checking if the selected card on the map is shown on the list by matching the index number 
                                    place={place}
                                    selected={Number(childClicked) === i}
                                    refProp={elementRef[i]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </> 
            }
        </div>
    )
}

export default List;