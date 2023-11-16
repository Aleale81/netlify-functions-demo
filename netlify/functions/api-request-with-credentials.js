import axios from 'axios';

export const handler = async (event, context) => {
    
    const cityName = "amsterdam";
    const API_KEY = 'c0e61b09ce3783df76abc904136f7ab8' //process.env.API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

    const response = await axios.get(API_URL);

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: response
        })
    }
}