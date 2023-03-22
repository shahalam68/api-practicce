const getUser = () =>{
        const url = 'https://randomuser.me/api/'
        fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data)) 
}
getUser()


const displayUser = users =>{
    users.forEach(user => {
        const userDiv = document.getElementById('test');
    const div = document.createElement('div');
    div.innerHTML =`
    <h2>${user.name}</h2>
    `
    userDiv.appendChild(div)
    });
}