/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)


const statsH2 = document.querySelector(".player h2")
statsH2.textContent = player.name

const statsEm = document.querySelector(".player em")
statsEm.textContent = player.nickname

const statsImg = document.quereySelector(".player img")
statsImg.src = player.photo

/***** Deliverable 4 *****/

function playerGoals(){

    player.goals.forEach(function(goal){
        const liGoal = document.createElement("li")
        liGoal.dataset.id = goal.id
        const pGoal = documment.createElement("p")
        pGoal.textContent = goal.desceription
        const aGoal = document.createElement("a")
        aGoal.target = "_balnk"
        aGoal.href = goal.link
        liGoal.append(pGoal, aGoal)
        aGoal.textContent = goal.linkliGoal.append(pGoal, aGoal)
        const ulGoal = document.quertySelector("#goals")
        ulGoal.append(liGoal)
    })
}

playerGoals()


/***** Deliverable 5 *****/

const sneakyData = document.querySelectorAll("#goals li")[2]

sneakyData.remove()