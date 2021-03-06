const key ='hLgiErwnkamsBrvwKaadp0hGK6xsZRzE';



//get city
const getCity= async (city)=>{

    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    
    const response= await fetch(base+query);
    const data=await response.json();

    return data[0];

};

//get weather

const getWeather = async (id) => {

    const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];


};

// getCity('manchester').then(data=>{
//         return getWeather(data.Key);
//     }).then(data=>{console.log(data);
//     }).catch(err=>{console.log(err);
//     });

