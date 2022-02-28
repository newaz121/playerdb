const allPlayer = () => {
    const searchValur = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValur}`;
    searchValur.innerHTML = '';
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player));
}
const showPlayerDetails = (players) => {
    for (const player of players) {
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="card border p-5 mx-auto">
                        <div class="pro-pic">
                            <img class="w-50" src="${player.strRender}" alt="">
                        </div>
                        <h2>Name:${player.strPlayer}</h2>
                        <h5>Country:${player.strNationality}</h5>
                        <p></p>
                        <div class="allbutton">
                            <button class="btn btn-danger">Delete</button>
                            <button onclick='details("${player.idPlayer}")'class="btn btn-primary">Details</button>
                        </div>
                    </div>
    
    `;
        parent.appendChild(div);
        // console.log(player)

    }

}

const details = (info) => {

    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    // console.log(info)
}