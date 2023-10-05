// Model
const app = document.getElementById('app');
let longitude = null;
let latitude = null;

// View
updateView();
function updateView(){
    html = /*html*/ `
        <button onclick="getWeatherForecast()">Hent været</button>
    `;
    app.innerHTML = html;
}

// Controller
function getLocation() {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const longitude = position.coords.longitude;
                    const latitude = position.coords.latitude;
                    resolve({ longitude, latitude });
                },
                function (error) {
                    reject(`Error getting location: ${error.message}`);
                }
            );
        } else {
            reject("Error: Geolocation is not available in this browser.");
        }
    });
}

function getWeatherForecast() {
    getLocation()
        .then((coordinates) => {
            const { latitude, longitude } = coordinates;
            return axios.get(
                `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`
            );
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}