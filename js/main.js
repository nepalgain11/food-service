document.getElementById("button").addEventListener("click",function(){
    const inputValue = document.getElementById("input-area").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then (data =>displayFood(data.meals)) // object to array convert
});

const displayFood = meals =>{
    const items = document.querySelector(".items");
    meals.map (item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item-class"; 
        //thumbnail
        const foodInfo = `
            <img id="more_details" class="image-size" data-bs-toggle="modal" data-bs-target="#exampleModal" src = "${item.strMealThumb}"> 
            <h5>${item.strMeal}</h5>
        `
        const modelDiv = document.querySelector(".modal-body");
                    //food details 
        const foodDetails = ` 
            <li>${item.strIngredient1}</li>
            <li>${item.strIngredient2}</li>
            <li>${item.strIngredient3}</li>
             <li>${item.strIngredient4}</li>
             <li>${item.strIngredient5}</li>
             <li>${item.strIngredient7}</li>
        
        `
        modelDiv.innerHTML = foodDetails;
        itemDiv.innerHTML = foodInfo;
       items.appendChild(itemDiv);
    });

}

 





