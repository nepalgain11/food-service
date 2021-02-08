document.getElementById("button").addEventListener("click",function(){
    const btn_value = document.getElementById("input-area").value;
    if(btn_value === ""){
        alert("Please Input Food Name");
    }
    else if (btn_value > 0 || btn_value < 100000  ){
        alert("Please Input Food Name");
    }
    else{
        const inputValue = document.getElementById("input-area").value;
        fetch(`https://www.themealdba.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then (data =>displayFood(data.meals)) // object to array convert
        .catch (error => displayError ("Something Went Wrong Please, Try Again!!!"))
    }
});



const displayFood = meals =>{
    const items = document.querySelector(".items");
    items.innerHTML = " ";
    meals.map (item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item-class"; 
        //thumbnail
        const foodInfo = `
            <img onclick = "popUp('${item.strMeal}','${item.strCategory}','${item.strArea}','${item.strIngredient1}','${item.strIngredient3}','${item.strIngredient4}','${item.strIngredient5}')" id="more_details" class="image-size" data-bs-toggle="modal" data-bs-target="#exampleModal" src = "${item.strMealThumb}"> 
            <h5>${item.strMeal}</h5>
        `
        itemDiv.innerHTML = foodInfo;
       items.appendChild(itemDiv);
    });

}

 const popUp = (foodName, category, foodArea, details1, details2, details3 , details4) => {

    const modelDiv = document.querySelector(".modal-body");
    const createDiv = document.createElement("div");
    modelDiv.innerHTML = " ";
                    //food details 
    const popUpDetails = `
        <h4>Name : ${foodName}</h4>
        <h5>Category : ${category}</h5>
        <h5>Area : ${foodArea}</h5>
        <li>${details1}</li>
        <li>${details2}</li>
        <li>${details3}</li>
        <li>${details4}</li>
    `
    createDiv.innerHTML = popUpDetails;
    modelDiv.appendChild(createDiv);
    
 }

const displayError = error =>{
    const errorMsg = document.getElementById("error");
    errorMsg.innerText = error;
}



