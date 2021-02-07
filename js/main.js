document.getElementById("button").addEventListener("click",function(){
    const inputValue = document.getElementById("input-area").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then (data => displayFood(data.meals))
    
    
    
  

});

const displayFood = meals =>{
    const items = document.querySelector(".items");
    // for (let i = 0; i < meals.length; i++) {
    //     const item = meals[i];
    meals.map (item => console.log(item.strMealThumb));
        const mealDiv = document.createElement("div");
        //const mealImg = document.createElement("img");
        const foodTitle = document.createElement("h3");
        foodTitle.innerText = item.strMeal;
        items.appendChild (foodTitle);
    
}





















