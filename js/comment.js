function getComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data));
}
getComment();


const displayComment = comments =>{
    const commentContainer = document.getElementById('comments');
    for(comment of comments){
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML =`
        <h2>Title: ${comment.name}</h2>
        <h4> Email: ${comment.email}</h4>
        <p> comment: ${ comment.body}</p>
        `
        commentContainer.appendChild(div);
    }
}