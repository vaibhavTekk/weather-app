const cityForm = document.querySelector('form');
const card = document.querySelector('.cards');
const updateUI = (data) => {
    const cityName = data.citykey.EnglishName;
    const weatherText = data.weather.WeatherText;
    const tempC = data.weather.Temperature.Metric.Value;
    const daytime = data.weather.IsDayTime;
    const icon = data.weather.WeatherIcon;
    let src = '';
    if (daytime === true){
        src='day';
    } else {
        src = 'night';
    }
    const htmlTemplate = `
    <img class = "layer-1" src="./img/${src}.jpg" alt="image">
                <div class="datawrapper">
                    <h1>${cityName}</h1>
                    <h5>${weatherText}</h5>
                    <h1 id = "temp"><span>${tempC}</span><span> &deg;C</span><img id="icon" src="./icons/${icon}.svg"></h1>    
                </div>
    `;
    card.innerHTML = htmlTemplate;

};

const updateCity = async (cityname) => {
    const citykey = await getCity(cityname);
    const weather = await getWeather(citykey);
    return{
        citykey,
        weather //object shorthand notation
    }
}; 

cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const citydata = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(citydata)
     .then((data)=>{updateUI(data);
        
    })
     .catch((err)=> window.alert(`An Error Occured : ${err}`));

    //update ui with city
});

