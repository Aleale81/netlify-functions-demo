import fetch from 'node-fetch'
const API_KEY = process.env.API_KEY

export const handler = async (event, context) => {
    console.log(API_KEY)
    const cityName = "amsterdam";
   //const API_KEY = process.env.API_KEY

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a1bed3af7d71b323ab4af9036fcd943d&units=metric`

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