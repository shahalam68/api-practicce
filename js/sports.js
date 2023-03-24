const searchPlayer = () =>{
    const searchField = document.getElementById("Search-field");
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.player))
}

const displaySearch = players =>{
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    players.forEach(player => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${player.strThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Name:${player.strPlayer}</h5>
              <p class="card-text">${player.strDescriptionEN.slice(0, 200)}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
               <button onclick="loadPlayerDetail(${player.idPlayer})" type="button" class="btn btn-info">More details</button>
            </div>
          </div>
    
        `
        searchResult.appendChild(div);
    });
}



const loadPlayerDetail =  playerId =>{
    console.log(playerId)
    const url = ` https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.players[0]))
}

const displayDetails = player =>{
    const playerDetails = document.getElementById('player-details');
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML =`
    <img src="${player.strThumb}" class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title"> Team: ${player.strTeam}</h5>
    <p class="card-text">${player.strDescriptionEN}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
    `
    playerDetails.appendChild(div);
}