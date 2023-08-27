let loadData = async (searchValue, isShowAll) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    let data = await res.json();
    let phones = data.data;
    // console.log(phones);
    ShowPhone(phones, isShowAll);

}


function ShowPhone(phones, isShowAll) {
    let container = document.getElementById("container")
    container.textContent = '';
    if (phones.length > 12 && !isShowAll) {
        document.getElementById("showAll").classList.remove("hidden");
    }
    else {
        document.getElementById("showAll").classList.add("hidden");
    }

    console.log(isShowAll);
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }


    container.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    phones.forEach(phones => {
        let phoneCard = document.createElement("div")
        phoneCard.classList = "card bg-gray-400 shadow-xl";
        phoneCard.innerHTML = `
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
    toggleLoadingSpinner(false)
}

function Search(isShowAll) {
    toggleLoadingSpinner(true);
    let searchField = document.getElementById("searchPhones");
    let searchValue = searchField.value;
    loadData(searchValue, isShowAll);
}
let toggleLoadingSpinner = (loading) => {
    let loadingSpinner = document.getElementById("loading-spinner");
    if (loading) {
        loadingSpinner.classList.remove("hidden");
    }
    else {
        loadingSpinner.classList.add("hidden");
    }
}

let ShowAll = () => {
    Search(true);
}

// loadData();