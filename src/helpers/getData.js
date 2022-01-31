export const getData = (setData) => {
    fetch('https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json')
        .then(res=> res.json())
        .then(data=> data.results)
        .then(results => setData(results))
}