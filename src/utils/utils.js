export default myGet = (url)=>{
    fetch(url)
        .then((res)=>{
            return  res.json()
        })
}