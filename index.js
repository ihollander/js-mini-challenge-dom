/***** Deliverable 1 *****/
const header = document.querySelector("#header")
header.innerHTML = "Welcome to Ian's Liverpool Fan club"
console.log("Here's your header:", header)

/***** Deliverable 2 3*****/
header.style.color = "red"
// header.style.backgroundColor = "black"


/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)

const playerImg = document.querySelector(".player img")
const playerName = document.querySelector(".player h2")
const playerNick = document.querySelector(".player em")

playerImg.src = player.photo
playerImg.alt = player.name
playerName.textContent = player.name
playerNick.textContent = player.nickname

/***** Deliverable 4 *****/

const goals = document.querySelector("#goals")

player.goals.forEach(function (player)  {
    const li = document.createElement("li")
    const p = document.createElement("p")
    const a = document.createElement("a")
    
    li.setAttribute('data-id', player.id)
    p.textContent = player.description
    a.href = player.link
    a.textContent = player.link
    a.target = "_blank" 

    li.append(p, a)
    goals.append(li)
})
// const arr = player.goals
// const ul = document.querySelector("ul")
// arr.forEach(function(goal){
//     const li = document.createElement("li")
//     li.dataset.id = goal.id
//     li.innerHTML = `<p> ${goal.description} </p>`
//     ul.append(li)
// })

/***** Deliverable 5 *****/

document.querySelector('[data-id="3"]').remove()
