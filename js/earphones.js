async function earphoneData(){

    let data = await allData()
    const {category} = data;
    const cards = document.getElementById('cards')
    cards.innerHTML=''

    data.map(data=>{
        // console.log(data);
        if (data.category == "Earphones") {
            // console.log(category);
        sharedCardFunction(data)
        }
    })
}