document.getElementById("button").addEventListener("click",function(){
    const inputValue = document.getElementById("input-area").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then (data =>displayFood(data.meals))
});

const displayFood = meals =>{
    
    const items = document.querySelector(".items");
    // const refresh = document.querySelector("#input-area");
    // refresh.innerHTML = "";
    meals.map (item => {
       
        const itemDiv = document.createElement("div");
        itemDiv.className = "item-class"; 
        //const foodImg = meal.strMealThumb;
        const foodInfo = `
            <img class="image-size"  src = "${item.strMealThumb}">
            <h5>${item.strMeal}</h5>   
        `
        //<button onclick="itemDetails('${item.idMeal}')">Show More</button>
        itemDiv.innerHTML = foodInfo;
       items.appendChild(itemDiv);
    });
    
}

    const itemDetails = details => {
        //const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`
        //const foodImg = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
        console.log(details);
    }







// <img src ="${foodImg}" >









