import axios from "axios";

export const handler = async (event, context) => {
    // check if receive body of req obj
    // the obj will be in json, need to use parse before pass data in API
    console.log("EVENT", JSON.parse(event.body))
    const { city } = JSON.parse(event.body)

    // Netlify env variable
    const API_KEY = process.env.API_KEY

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    try {
        const response = await axios.get(API_URL);
        // console.log(response.data)
        return {
            statusCode: 200,
            // return only response.data to not expose API_URL with API_KEY 
            body: JSON.stringify(response.data)
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: error.code
            })
        }
    }

}