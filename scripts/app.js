const cityForm = document.querySelector('.change-location');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('.time');
const icon=document.querySelector('.icon img');

const updateUI=(data)=>{

    

    const city=data.cityName;
    const weather=data.weather;
    //destructing
    //const {cityName, weather}=data;
    console.log(data, weather.LocalObservationDateTime);
    
    details.innerHTML=`
        <h5 class="my-3">${city.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update the night/day/icon images
    const timeSrc = weather.IsDayTime ? './img/day.svg' :'./img/night.svg';
    //let timeSrc=null;
    // if(weather.IsDayTime){
    //     timeSrc = '/weather_app/img/day.svg';
    // }else{
    //     timeSrc = '/weather_app/img/night.svg';
    // }
    time.setAttribute('src',timeSrc);

    const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);



    //remove the d-none class if present
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}



const updateCity= async(city)=>{
    // console.log(city);
    const cityName=await getCity(city);
    const weather=await getWeather(cityName.Key);

    // return {
    //     city:cityName,
    //     weather:weather
    // };
    return {cityName, weather} //object shorthand notation
};



//get value from the form input
cityForm.addEventListener('submit', e=>{
    //prevent default action
    e.preventDefault();

    //get city value from the form
    const city=cityForm.city.value.trim();
    cityForm.reset();


    updateCity(city)
        .then(data=>updateUI(data))
        .catch(err=>console.log(err));
    
    


});


