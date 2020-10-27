/***** Deliverable 1 *****/
/***** Deliverable 2 *****/

const header = document.querySelector('h1').style.color = 'red'
//console.log("Here's your header:", header)


/***** Deliverable 3 *****/
const list = document.createElement('ul')
const div = document.querySelector('.player-container')

div.append(list)

function renderPlayer(playerObj){

    const player = document.createElement("li")
    player.className = "playerObj"

    player.innerHTML = `
    <div class="player" data-number= "${playerObj.number}">
        <h3>
            ${playerObj.name} (<em>${playerObj.nickname}</em>)
        </h3>
        <img src="${playerObj.photo}" alt="${playerObj.name}">
    </div>

    `
 //console.log("PLAYERS array looks like this:", PLAYERS)

    list.append(player)
}

function renderAllPlayers (players) {
    players.forEach(function(playerObj){
        renderPlayer(playerObj)
    })
}

renderAllPlayers(PLAYERS);


/***** Deliverable 4 *****/

document.querySelector(`[data-number="7"]`).remove()