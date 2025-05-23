/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    if (!sw || !ne) return [];
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data || [];
  } catch (error) {
    console.error('Error fetching places data:', error);
    return [];
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (!lat || !lng) return null;
    const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
      params: { lat, lon: lng },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
        'x-rapidapi-host': 'open-weather-map27.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
