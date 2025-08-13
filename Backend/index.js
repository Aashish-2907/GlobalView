require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const PORT = 5000;

app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Backend is running!');
// });


app.get('/api/weather/:city', async (req, res) => {
    const country = req.params.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    console.log("Fetching weather for:",country)
    try {
        const geoRes = await axios.get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=1&appid=${apiKey}`
        );

        console.log("Geo Response:",geoRes.data);

        if (geoRes.data.length === 0) {
            return res.status(404).json({ error: 'Country not found' });
        }

        const { lat, lon } = geoRes.data[0];
        console.log("Latitude:", lat, "Longitude:", lon);
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        console.log("Weather Response:", weatherRes.data);
        res.json(weatherRes.data);
    } catch (err) {
        console.error("ERROR:",err.message);
        if(err.response){
            console.error("Response Error:", err.response.data);
            console.error("Response Status:",err.response.status);
        }
        res.status(500).json({ error: 'failed to fetch weather data'})
    }
});

app.listen(PORT,() =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

console.log("Loaded API KEY:", process.env.OPENWEATHER_API_KEY);
// res.status(404).json({ error: 'Country not found' });res.status(404).json({ error: 'Country not found' });