const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const btn = document.querySelector("form button");
let msg = document.querySelector("form msg");
const currFrom = document.querySelector(".from select");
const currTo = document.querySelector(".to select");


const dropDown = document.querySelectorAll(".dropDown select");

// for(code in countryList){
//     console.log(code);
// };

for(let select of dropDown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlage(evt.target);
    });
};

const updateFlage = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    // console.log(currCode,countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector("form input");
    let amtVal = amount.value;
    if(amtVal === "" && amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    
    console.log(currFrom.value.toLowerCase(),currTo.value.toLowerCase());
    const URL = `${BASE_URL}/${currFrom.value.toLowerCase()}/${currTo.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = response.json();
    // console.log(data);
    let rate = data[currTo.value.toLowerCase()];
    // console.log(rate);

    let finalValue = amtVal * rate;
    msg.innerText = `${amtVal} ${currFrom.value} = ${finalValue} ${currTo.value}`;
});