const allPlayer = () => {
    const searchValur = document.getElementById('search-box').value;
    document.getElementById('player-container').innerHTML = "";
    document.getElementById('search-box').value = "";

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
        .then(data => seeDetails(data.players[0]));
    // 
};

const seeDetails = (info) => {

    if (info.strGender == 'Male') {
        document.getElementById('male').style.display = 'block';
        document.getElementById('female').style.display = 'none';
    }
    else {
        document.getElementById('male').style.display = 'none';
        document.getElementById('female').style.display = 'block';
    }

    document.getElementById('details-container').innerHTML = `
    <div>
    <img class="w-50" src="${info.strThumb}" alt="">
    <h1>Name:${info.strPlayer}</h1>
    <p>Description:${info.strDescriptionEN}</P>
</div>
    `
}