/***** Deliverable 1 *****/
const header = document.querySelector("h1#header") 
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'red'

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)



var parentElm = document.querySelector(".player-container")

PLAYERS.forEach((player) => {
    let divPlayer = document.createElement('div')
    divPlayer.innerHTML = `
                    <div class='player' data-number="${player.number}"> 
                    <h3>
                        ${player.name} (<em>${player.nickname}</em>)
                    </h3>
                    <img width = 300px src=${player.photo} alt="${player.name}"/>
                    </div>
                    `
    parentElm.appendChild(divPlayer)

    
})


/***** Deliverable 4 *****/

// [attr=value]
document.querySelector(".player-container [data-number='7']").remove()