import fs from 'node:fs/promises'

let housesVisited = {}

let santa = {
    'x' : 0,
    'y' : 0
}

let roboSanta = {
    'x' : 0,
    'y' : 0
}

try {
    const data = await fs.readFile('data.txt', 'utf-8')
    addHouse(santa)
    let odd = false
    for ( const movement of data) {
        odd = !odd
        if (odd){
            moveSanta(movement, santa)
        }
        else {
            moveSanta(movement,roboSanta)
        }
    }

    console.log("The amount of houses visited by both Santas are: " + countHouses())
}catch(err){
    console.error("Error reading file: ", err)
}


function addHouse(santa){
    if(!housesVisited[santa.x])
        housesVisited[santa.x] = {}
    housesVisited[santa.x][santa.y] = true
}

function countHouses(){
    let houses = 0

    for(const x in housesVisited){
        houses += Object.keys(housesVisited[x]).length
    }

    return houses
}

function moveSanta(movement, santa) {
    const movementMap = {
        '<' : () => santa.x--,
        '>' : () => santa.x++,
        'v' : () => santa.y--,
        '^' : () => santa.y++,
    }
    const move = movementMap[movement]
    if(move) move()
    addHouse(santa)
}