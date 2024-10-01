async function allData2(){
    let data = await allData()
    data.map(data=>{
        sharedCardFunction(data)
    })

}
allData2()