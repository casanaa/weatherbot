


// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '0ae0ef9a70a305f19a10c6944c863c30';
const city = 'dallas'; // Replace with your city name or coordinates

const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.status === 200) {
            const weatherList = data.list;

            let weatherHtml = '';
            for (let i = 0; i < weatherList.length; i++) {
                const date = new Date(weatherList[i].dt * 1000);
                const temperature = weatherList[i].main.temp;
                const description = weatherList[i].weather[0].description;

                weatherHtml += `
                    <div>
                        <p>Date: ${date.toLocaleDateString()}</p>
                        <p>Temperature: ${temperature}°C</p>
                        <p>Description: ${description}</p>
                    </div>
                `;
            }

            document.getElementById('weather').innerHTML = weatherHtml;
        } else {
            console.error(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('An error occurred while fetching weather data:', error);
    }
}

getWeatherData();