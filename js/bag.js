async function bagData(){

    let data = await allData()
    const {category} = data;
    const cards = document.getElementById('cards')
    cards.innerHTML=''

    data.map(data=>{
        // console.log(data);
        if (data.category == "Bag") {
            // console.log(category);
        sharedCardFunction(data)
        }
    })
}