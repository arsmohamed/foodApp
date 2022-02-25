const axios = require('axios');

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    //destructuring the data and do it again to get the restaurant
    const {data: {data}} = await axios.get(URL, {
            url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
            params: {
              bl_latitude: sw.lat, //Bttom left
              tr_latitude: ne.lat, // Top left
              bl_longitude: sw.lng, //Bttom left
              tr_longitude: ne.lng, // Top left
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'd21e22b6aemsh31775c1a1d8ff0cp111a5bjsned4612084d2a'
            }
          }); 

        return data;

    } catch (e) {
        console.log(e )
    }

}