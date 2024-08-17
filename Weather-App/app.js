const apiKey = "4d87f67e851be11e2130f708554e28c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";


let btn = document.querySelector(".btn");
let msg1 = document.querySelector(".location");
let msg2 = document.querySelector(".temperature");
let msg3 = document.querySelector(".descrip");
let searchBox = document.querySelector("#data");

btn.addEventListener("click", () => {
    let inputVal = searchBox.value;

    // if (inputVal != "") {
    //     console.log("here is search value is ", inputVal);
    // }
    if (inputVal) {
        wetHer(inputVal);
    }
    searchBox.value = "";
});


const wetHer = (inputVal) => {
    try {
        let url = `${apiUrl}?q=${inputVal}&appid=${apiKey}&units=metric`;
        fetch(url).then((response) => response.json()).then((data) => {
            // console.log(data);
            msg1.innerText = data.name;
            msg2.innerText = `${Math.round(data.main.temp)}°C`;
            msg3.innerText = data.weather[0].description;
        })
    }
    catch (error) {
        console.error("Error fetching the weather data:", error);
    }
}






