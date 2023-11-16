//import axios from 'axios';
import fetch from 'node-fetch'

export const handler = async (event, context) => {
    
    const cityName = "amsterdam";
    const API_KEY = process.env.API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

    const response = await fetch(API_URL);
    const data = await response.json()

    return {
        statusCode: 200,
        headers: JSON.stringify({
            'Access-Control -Allow-Origin': '*', 
            'Access-Control-Allow-Credentials': true 
          }),
        body: JSON.stringify({
            info: data
        })
    }
}