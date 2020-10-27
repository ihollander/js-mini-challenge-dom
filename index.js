/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)

function singlePlayer(playerObj) {
    const player = document.createElement("div")
    player.className = "player"
    player.dataset.number = playerObj.number
    player.innerHTML = `
        <h3>
            ${playerObj.name} (<em>${playerObj.nickname}</em>)
        </h3>
        <img src="${playerObj.photo}" alt="${playerObj.name}"></img>`
    document.querySelector(".player-container").append(player)
}

function allPlayers(playersArray) {
    playersArray.forEach(singlePlayer)
}

allPlayers(PLAYERS)


/***** Deliverable 4 *****/
document.querySelector("[data-number='7']").remove()
