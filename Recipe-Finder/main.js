const inputBox = document.querySelector("#input-box");
const searchBtn = document.querySelector("#btn");
const result = document.querySelector(".result");
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



searchBtn.addEventListener("click", () => {
    let inputVal = inputBox.value;
    console.log(inputVal);
    Meal(inputVal);
});


const Meal = (inputVal) => {
    if (inputVal == 0) {
        result.innerText = "Input box is empty";
    }
    else {
        fetch(url + `${inputVal}`)
            .then((response) => response.json())
            .then((data) => {
                let myMeal = data.meals[0];

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

                result.innerHTML = `
            <img src=${myMeal.strMealThumb}>
            <div class="details">
            <h2>${myMeal.strMeal}</h2>
            <h3>${myMeal.strArea}</h3>
            </div>
            <h3>INGREDIENTS</h3>
            <div id="ingredient-con"></div>
            <button id="next-btn">Next</button>

            <div class="recipe-con">
            <h2>Recipe</h2>
            <div class="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instruction">${myMeal.strInstructions}</pre>
            </div>
            
        `;
                let ingredientCon = document.querySelector("#ingredient-con");
                let parent = document.createElement("ul");
                let recipe = document.querySelector(".recipe-con");
                let hideRecipe = document.querySelector("#hide-recipe");
                let showRecipe = document.querySelector("#next-btn");

                ingredients.forEach((i) => {
                    let child = document.createElement("li");
                    child.innerText = i;
                    parent.appendChild(child);
                    ingredientCon.appendChild(parent);
                })

                hideRecipe.addEventListener("click", () => {
                    recipe.style.display = "none";
                });

                showRecipe.addEventListener("click", () => {
                    recipe.style.display = "flex";
                });

            });

    }
};