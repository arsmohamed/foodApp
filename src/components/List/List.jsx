import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './style.js';

const places= [
    {name: 'cool place'},
    {name: 'Hagward'},
    {name: 'Cairo'},
    {name: 'cool place'},
    {name: 'Hagward'},
    {name: 'Cairo'}
];

const List = () => {
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Typography variant="h4">Resturant, Hotels & Attractions around you </Typography>
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
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List;