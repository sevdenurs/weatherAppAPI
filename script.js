const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = '8bb615e12a5b033d8223af14fb70ba85';

const setQuery = (event) => {
    if (event.keyCode == '13') {
        getResults(searchBar.value);
    }
};

const getResults = (cityName) => {
    let query = `${url}?q=${cityName}&appid=${key}&units=metric&lang=tr`; // Düzenlendi
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then(displayResults);
};

const displayResults = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener('keypress', setQuery);
