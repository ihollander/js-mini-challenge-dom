const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"


/***** Deliverable 3 *****/
console.log("the player object looks like this:", player.name)
document.querySelector("h2").textContent = player.name
document.querySelector("img").src = player.photo
document.querySelector("em").textContent = player.nickname
document.querySelector("img").alt = player.photo


/***** Deliverable 4 *****/
const soccer = document.querySelector('ul#goals');

player.goals.forEach(goal => {
    const li = document.createElement("li")
    li.dataset.id = goal.id

    const p = document.createElement("p")
    p.textContent = goal.description

    const a = document.createElement("a")
    a.href = goal.link
    a.textContent = goal.link

    li.append(p, a)
    soccer.append(li)
}
)
/***** Deliverable 5 *****/
document.querySelector(`[data-id='3']`).remove()
