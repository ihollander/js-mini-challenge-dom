/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header.textContent)


/***** Deliverable 2 *****/

header.style.color = 'red'

/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)

function displayPlayer(player) {
    h2 = document.querySelector('h2')
    h2.textContent = player.name
    em = document.querySelector('em')
    em.textContent = player.nickname
    img = document.querySelector('img')
    img.src = player.photo
    img.alt = player.name

    displayGoals(player)
}

displayPlayer(player)

/***** Deliverable 4 *****/

function displayGoals(player) {

    ul = document.querySelector('#goals')

    player.goals.forEach(function(info){
        liTag = document.createElement('li')
        liTag.setAttribute('data-id', `${info.id}`)
        ul.append(liTag)

        pTag = document.createElement('p')
        pTag.textContent = `${info.description}`
        liTag.append(pTag)

        aTag = document.createElement('a')
        aTag.href = `${info.link}`
        aTag.target = "_blank"
        aTag.textContent = `${info.link}`
        liTag.append(aTag)
    })
}


// <li data-id="{goal id}">
//   <p>{goal description}</p>
//   <a href="{goal link}" target="_blank">{goal link}</a>
// </li>


/***** Deliverable 5 *****/

document.querySelector(li [data-id = '3'])




