const fetchData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

        if(!response.ok) {
            throw new Error(response.status)
        }
        const result = await response.json();
        return result;
    }
    catch(e){
        console.log(e);
    }
};

fetchData().then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('Request Finised...')
})