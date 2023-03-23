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
        <h4 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <h5 class="card-title">Age: ${user.dob.age}</h5>
        <p class="card-text">Email: ${user.email}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Location: ${user.location.street.number} , ${user.location.street.name} </small>
      </div>
      `
      userDiv.appendChild(div)
      
  });
}

