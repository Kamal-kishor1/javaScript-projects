const inputBox = document.querySelector("#input-box");
const searchBtn = document.querySelector("#btn");
const result = document.querySelector(".result");
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



searchBtn.addEventListener("click", () => {
    let inputVal = inputBox.value;

    console.log(inputVal);

    fetch(url + `${inputVal}`)
        .then((response) => response.json())
        .then((data) => {
            let myMeal = data.meals[0];
            console.log(myMeal);
            console.log(myMeal.strMeal);
            console.log(myMeal.strArea);
            console.log(myMeal.strInstructions);

            let count = 1;
            let ingredients = [];
            for (let i in myMeal) {
                let ingredient = "";
                let measure = "";
                if (i.startsWith("strIngredient") && myMeal[i]) {
                    ingredient = myMeal[i];
                    measure = myMeal['strMeasure' + count];
                    count += 1;
                    ingredients.push(`${measure}${ingredient}`);
                }
            }
            console.log(ingredients);
            result.innerText = ingredients;
        });
})

