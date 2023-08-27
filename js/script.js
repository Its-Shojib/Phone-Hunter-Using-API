let loadData = async () =>{
    let res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    let data = await res.json();
    let phones = data.data;
    console.log(phones);

}
loadData();