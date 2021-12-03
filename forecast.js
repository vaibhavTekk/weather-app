const apikey = 'LcsuMBKyptFGdpfCGIw9iLmhlGg1e00G';

const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apikey}&q=${city}/`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

const getWeather = async (data) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1';
    const query = `/${data.Key}?apikey=${apikey}/`
    const response = await fetch(base + query);
    const weatherdata = await response.json();
    return weatherdata[0];
};

/*
getCity('chennai')
.then((data)=>{
    console.log(data);
    return getWeather(data);
})
.then((weatherdata)=>{
    console.log(weatherdata)
})
.catch((err)=>{
    console.log(err);
});
*/