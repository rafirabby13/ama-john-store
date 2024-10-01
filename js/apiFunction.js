const allData = async()=>{
    const api = await fetch('../products.json')
    const data = await api.json()
    // console.log(data);
    
    return data;
}
allData()


