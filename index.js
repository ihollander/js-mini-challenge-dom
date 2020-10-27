/***** Deliverable 1 *****/
// const header = document.getElementById("header")
const header = document.querySelector("#header")
header.innerHTML = "Welcome to Ian's Shiverpool PC Fan Club"
console.log(`Here's your header:, ${header}`)

/***** Deliverable 2 *****/
header.style.color = "red"
header.style.backgroundColor = "black"
header.style.textDecoration = "underline"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

function createPlayer(playerObj) {
    const card = document.createElement("div")
    card.className = "player"
    card.dataset.number = `(${playerObj.number})`
    card.innerHTML = `
    <h3>
        ${playerObj.name} (<em>${playerObj.nickname}</em>)
    </h3>
    <img src="${playerObj.photo}" alt="${playerObj.name}">
    `
    const container = document.querySelector("div.player-container")
    container.append(card)
}

function addPlayers(players) {
    players.forEach(createPlayer)
}
addPlayers(PLAYERS)

/***** Deliverable 4 *****/

const dataNum = document.querySelector("[data-number='(7)']").remove()
