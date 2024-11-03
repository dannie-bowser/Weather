

const apiKey= "7d93e372ed241655cd8d3f93e631b41c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');



async function checkWeather(city){
  const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  let data= await response.json();
  console.log(data);

if(response.status==404){
    error.style.display="block";
    weather.style.display="none";
  }else{
    error.style.display="none";
    
  document.querySelector('.city').innerHTML=data.name;
  document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "&deg;C";
  document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
  document.querySelector('.wind').innerHTML=data.wind.speed + " km/h";
  
  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="https://drive.google.com/thumbnail?id=1U-xF6pTZifRfB7f5NfvebuafEuRAcez1&sz=w1000";
  }else if(data.weather[0].main=="Clear"){
    weatherIcon.src="https://drive.google.com/thumbnail?id=1TSD6koiQ0BwaWB-Y3T6upxbF2t1vpUFu&sz=w1000";
  }else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="https://drive.google.com/thumbnail?id=1TyOvfWTE8CIEkv4CtDEdcxvorPoGguLn&sz=w1000";
  }else if(data.weather[0].main=="Mist"){
    weatherIcon.src="https://drive.google.com/thumbnail?id=1Treg7_vkVOzWDTEEwkay0luwMqUBJFch&sz=w1000";
  }else if(data.weather[0].main=="Rain"){
    weatherIcon.src="https://drive.google.com/thumbnail?id=1TtJsUfUs9pi6-nGQAuYHAxznYB-1RPrR&sz=w1000";
  }
  weather.style.display="block";
  }
};
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
  searchBox.value="";
});
