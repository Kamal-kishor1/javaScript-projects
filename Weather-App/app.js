const apiKey ="4d87f67e851be11e2130f708554e28c4";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather";


let btn = document.querySelector("form .btn");
let msg1 = document.querySelector(".location");
let msg2 = document.querySelector(".temperature");
let msg3 = document.querySelector(".descrip");
let searchBox = document.querySelector("form #data");

btn.addEventListener("click",()=>{
    let inputVal = searchBox.innerText;
    if(inputVal != ""){
        console.log("here is search value is ",inputVal);
    }
    if(inputVal){
        fetchWeather(inputVal);
    }
});

const fetchWeather = async (inputVal)=>{
    try{
    const url =`${apiUrl}?q=${inputVal}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = response.json();

    console.log(data);
     msg1.innerText = data.name;
     msg2.innerText = `${Math.round(data.main.temp)}°C`;
     msg3.innerText = data.weather[0].description;
    }
    catch (error){
        console.error("Error fetching the weather data:",error);
    }
};