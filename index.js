/***** Deliverable 1 *****/

const header = document.querySelector("#header")
console.log("Here's your header: ", header)

/***** Deliverable 2 *****/

header.style.color = "red"

/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)

const name = document.querySelector("h2")
name.textContent = player.name 

const nickname = document.querySelector("em")
nickname.textContent = player.nickname

const photo = document.querySelector("img")
photo.src = player.photo
photo.alt = player.name

/***** Deliverable 4 *****/
const array = player.goals
const ul = document.querySelector("ul")
array.forEach(function(goal){
    const li = document.createElement("li")
    li.dataset.id = goal.id
    li.innerHTML = `<p>${goal.description}</p>
    <a href=${goal.link} target="_blank">${goal.link}</a>`
    ul.append(li)
})

/***** Deliverable 5 *****/

const removeGoal = document.querySelector("ul").lastElementChild.remove()
querySelector(`[data-id=“3”]`).remove()