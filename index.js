// fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => console.log(data))
// fetch('http://hn.algolia.com/api/v1/search?query=react&tags=story').then(res => res.json()).then(data => console.log(data))
const apiKey = '919e5e36fb6c4976a92665bad143e6d2'
const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
fetch(url).then(res => res.json()).then(data => console.log(data))