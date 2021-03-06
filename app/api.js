import {completeElements} from "./elements.js";

function fetchWeather(station) {
    const apiBase = `https://api.weather.gov/stations/${station}/`;
    const apiLatest = "observations/latest?require_qc=false";
    const apiUrl = `${apiBase}${apiLatest}`;

    fetch(apiUrl).then(function (response) {
        if (!response.ok) {
            window.console.log(`HTTP error! status: ${response.status}`);
            throw completeElements();
        }
        return response.json();
    }).then(function (data) {
        const temperature = data.properties.temperature.value;
        const condition = data.properties.textDescription;
        completeElements(station, temperature, condition);
    }).catch(function () {
        completeElements(station, "error");
    });
}

export {fetchWeather};