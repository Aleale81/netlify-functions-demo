import fetch from 'node-fetch'

export const handler = async (event, context) => {
    
    const cityName = "amsterdam";
    const API_KEY = process.env.API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

    const response = await fetch(API_URL);
    const data = await response.json()
    console.log(data)

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: data
        })
    }
}