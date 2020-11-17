/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"


/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)
const playerDiv = document.querySelector('.player')
playerDiv.innerHTML = `
<img src="${player.photo}" alt="${player.name}">
<h2>${player.name}</h2>
<em>${player.nickname}</em>
<h4>Great Goals</h4>
<ul id="goals">
</ul>
`





/***** Deliverable 4 *****/
const ul = document.querySelector('ul#goals')
player.goals.forEach(function(goal) {
    const li = document.createElement('li')
    li.dataset.id = goal.id
    li.innerHTML = `
    <p>${goal.description}</p>
    <a href="${goal.link}" target="_blank">${goal.link}</a>
    `
    ul.append(li)
    })


/***** Deliverable 5 *****/
const video = document.querySelector("[data-id='3']")
video.remove()



// const player = {
//     id: 1,
//     number: 11,
//     name: "Mo Salah",
//     nickname: "The Egyptian King",
//     photo: "https://cdn.cnn.com/cnnnext/dam/assets/190501145802-mo-salah-exlarge-169.jpg",
//     likes: 1000,
//     goals: [
//       {
//         id: 1,
//         playerId: 1,
//         link: "https://youtu.be/mKY-kheEhBo",
//         description: "A beautiful long-range goal, straight into the corner. Keeper had no chance!"
//       },
//       {
//         id: 2,
//         playerId: 1,
//         link: "https://youtu.be/mJ8XGUgvoAM",
//         description: "Fantastic strength to hold off a pair of defenders and place it beyond Pickford's reach"
//       }, 
//       {
//         id: 3,
//         playerId: 1,
//         link: "https://youtu.be/WLm-YK5Yfv0",
//         description: "What a comeback!"
//       }
//     ]
//   }