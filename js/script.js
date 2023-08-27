let loadData = async (searchValue) =>{
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    let data = await res.json();
    let phones = data.data;
    // console.log(phones);
    ShowPhone(phones);

}


function ShowPhone(phones){
    let container = document.getElementById("container")
    container.textContent = '';
    phones = phones.slice(0,10);


    container.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    phones.forEach(phones => {
        let phoneCard = document.createElement("div")
        phoneCard.classList = "card bg-gray-400 shadow-xl";
        phoneCard.innerHTML =`
        <figure class="px-10 pt-10">
            <img src="${phones.image}" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phones.brand}</h2>
            <p>${phones.phone_name}</p>
            <p>${phones.slug}</p>
            <div class="card-actions">
            <button class="btn btn-primary">Details</button>
        </div>`;
        container.appendChild(phoneCard);
    });
}

function Search(){
    let searchField = document.getElementById("searchPhones");
    let searchValue = searchField.value;
    // console.log(searchValue);
    loadData(searchValue);
    searchField.value = "";
}