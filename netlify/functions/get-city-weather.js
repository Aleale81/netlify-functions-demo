import axios from "axios";

export const handler = async (event, context) => {

    const cityName = event.body;
    console.log('City', cityName)
    const API_KEY = process.env.API_KEY

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

    try {
        const response = await axios.get(API_URL);

        return {
            statusCode: 200,
            body: JSON.stringify({
                data: response
            })
        }
    } catch (error) {
        console.log(error)
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