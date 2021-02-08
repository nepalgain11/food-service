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
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then (data =>{
            if( data.meals == null){
                const emptyMessage = document.getElementById("empty-msg"); // 
                emptyMessage.style.display = "block";
                emptyMessage.innerHTML = "No food available";
                const items = document.querySelector(".items");
                items.innerHTML = " ";
            }
            else{
                displayFood(data.meals); // pass food details
                const emptyMessage = document.getElementById("empty-msg"); 
                emptyMessage.style.display = "none";
            }
           
        }) // object to array convert
    }
});


//show all meals after search
const displayFood = meals =>{
    const items = document.querySelector(".items");
    
    items.innerHTML = " ";
    meals.map (item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item-class"; 
                                     //thumbnail + popup 
        const foodInfo = `
            <img onclick = "popUp('${item.strMealThumb}','${item.strMeal}','${item.strCategory}','${item.strArea}','${item.strIngredient1}','${item.strIngredient3}','${item.strIngredient4}','${item.strIngredient5}')" id="more_details" class="image-size" data-bs-toggle="modal" data-bs-target="#exampleModal" src = "${item.strMealThumb}"> 
            <h5>${item.strMeal}</h5>
        `
        itemDiv.innerHTML = foodInfo;
        items.appendChild(itemDiv);
    });

}
              //show all details  after food item click
 const popUp = (popupImg, foodName, category, foodArea, details1, details2, details3 , details4) => {

    const modelDiv = document.querySelector(".modal-body");
    const createDiv = document.createElement("div");
    modelDiv.innerHTML = " ";
                                                   // pop up food details 
    const popUpDetails = `
        <img class ="popup-img" src = "${popupImg}">
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

