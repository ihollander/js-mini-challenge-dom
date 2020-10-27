/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)


PLAYERS.forEach(function (player) {  
    const newDiv = document.createElement("div");
    newDiv.classList.add("player")
    newDiv.setAttribute("data-number", player.number)
    document.body.appendChild(newDiv);
    const h3 = document.createElement("h3")
    h3.innerHTML = `${player.name} (<em>${player.nickname}</em>)`
    newDiv.appendChild(h3)
    newDiv.innerHTML = `<img src="${player.photo}" alt="${player.name}">`

});


/***** Deliverable 4 *****/
const dataNum = document.querySelector("[data-number='7']")

dataNum.remove()