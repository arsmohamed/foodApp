import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
      bl_latitude: '11.847676', //Bttom left
      tr_latitude: '12.838442', // Top left
      bl_longitude: '109.095887', //Bttom left
      tr_longitude: '109.149359', // Top left
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'd21e22b6aemsh31775c1a1d8ff0cp111a5bjsned4612084d2a'
    }
  };

export const getPlacesData = async () => {

    try {
        //destructuring the data and do it again to get the restaurant
        const {data: {data}} = await axios.get(URL, options); 

        return data;

    } catch (e) {
        console.log(e )
    }

}