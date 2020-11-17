/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
 console.log("the player object looks like this:", player)
const playerContainer = document.querySelector(".player")
const playerImg = document.querySelector("img")
const playerName = document.querySelector("h2")
const playerNickname = document.querySelector("em")
playerImg.src = player.photo
playerImg.alt = player.name
playerName.textContent = player.name
playerNickname.textContent = player.nickname
/***** Deliverable 4 *****/
const goals = document.querySelector("#goals")

const playerGoals = player.goals

playerGoals.forEach(function(goal){
    
    const li = document.createElement("li")
    li.dataset.id = goal.id
    li.innerHTML = `
  
      <p>${goal.description}</p>
      <a href="${goal.link}" target="_blank">${goal.link}</a>
   
    `
goals.append(li)
})



/***** Deliverable 5 *****/

goals.querySelector('[data-id="3"]').remove()
/** other solutions */
// goals.lastElementChild.remove()
// goals.querySelectorAll("li")[2].remove()

