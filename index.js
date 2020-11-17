/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)
const playerName = document.querySelector("h2")
playerName.textContent = player.name 

const playerNickname = document.querySelector("em")
playerNickname.textContent = player.nickname

const img = document.querySelector("img")
img.src = player.photo
img.alt = "a Picture of MO"


/***** Deliverable 4 *****/

const array = player.goals 
const parent = document.querySelector("ul")
array.forEach(function(goal){
    const li = document.createElement("li")
    li.dataset.id = goal.id 
    li.innerHTML = `<p> ${goal.description }</p>
  <a href=" ${goal.link}" target="_blank"> ${goal.link}</a>`
  parent.append(li)
})




/***** Deliverable 5 *****/

const datagoal = document.querySelector("ul").lastElementChild.remove()