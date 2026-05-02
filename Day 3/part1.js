import fs from 'node:fs/promises'

let housesVisited = {}

try {
    const data = await fs.readFile('data.txt', 'utf8')
    let x = 0, y = 0

    addHouse(0,0)
    for(const movement of data){
        switch(movement){
            case '<':
                x--
                break
            case '>':
                x++
                break
            case '^':
                y++
                break
            case 'v':
                y--
                break
        }
        addHouse(x,y)
    }

    console.log("The amount of houses visited is: ", countHouses())
} catch(err){
    console.error("Error reading file: ", err)
}

function addHouse(x,y){
    if(!housesVisited[x])
        housesVisited[x] = {}
    housesVisited[x][y] = true
}

function countHouses(){
    let houses = 0

    for(const x in housesVisited){
        houses += Object.keys(housesVisited[x]).length
    }

    return houses
}