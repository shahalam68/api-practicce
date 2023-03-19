function getComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data));
}
getComment();


const displayComment = data =>{
    document.getElementById('comments')
}