import axios from "axios";

export const handler = async (event, context) => {
    console.log("EVENT", JSON.parse(event.body))
    const city = JSON.parse(event.body)
    console.log('City', city.city)
    
    const API_KEY = process.env.API_KEY

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${API_KEY}&units=metric`

    try {
        const response = await axios.get(API_URL);
        
        return response.data.json()
    } catch (error) {
        console.log(error.code)
        // return {
        //     statusCode: 400,
        //     body: JSON.stringify({
        //         data: error.message.json()
        //     })
        // }
    }
    // const data = await response.json()
    // console.log(data)
}