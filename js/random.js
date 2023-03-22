const getUser = () =>{
        const url = 'https://randomuser.me/api/'
        fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data)) 
}
getUser()



const displayUser = data =>{
    const users = data.results;
    const userDiv = document.getElementById("random-user");
    users.forEach( user => {
        console.log(user)
        const div = document.createElement('div');
        div.classList.add('card"');
        div.innerHTML = `
        <img src="${user.picture.large}" class="card-img-top rounded" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name: ${user.name.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        `
        userDiv.appendChild(div)
        
    });
}


