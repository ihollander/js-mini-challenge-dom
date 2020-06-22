/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
const container = document.querySelector('.player-container');
PLAYERS.forEach(player => {
  const playerContainer = document.createElement("div");
  playerContainer.setAttribute("class", "player");
  playerContainer.setAttribute("data-number", `${player.number}`);
  const playerDetails = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
  `;
  playerContainer.innerHTML = playerDetails;
  container.appendChild(playerContainer);
});

/***** Deliverable 4 *****/
const playerToRemove = document.querySelector("[data-number='7']")
container.removeChild(playerToRemove);
