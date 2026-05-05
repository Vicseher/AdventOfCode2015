import fs from 'node:fs/promises'

let data
try{
    data = await readDataFromFile('data.txt','utf-8')
}catch(err){
    console.error("Error reading the data from the file ", err)
    process.exit(1)
}

let lights = initializeLights(1000)
const phrases = data.split(/\r?\n/i)

for(const phrase of phrases){
    const words = phrase.split(" ")

    if(words[0] === "toggle"){
        const [initialX,initialY] = words[1].split(',')
        const [finalX, finalY] = words[3].split(',')
        
        changeLights(lights,"toggle", initialX, initialY, finalX, finalY)
    }
    else if(words[0] === "turn"){
        const [initialX,initialY] = words[2].split(',')
        const [finalX, finalY] = words[4].split(',')
        
        changeLights(lights, words[1], initialX, initialY, finalX, finalY)
    }
}

console.log("The amount of lights turned on are: ", countLights(lights))
async function readDataFromFile(filename, encoding){
    return fs.readFile(filename, encoding)
}

function initializeLights(size){
    let lights = []

    for (let i = 0; i < size; i++){
        lights[i] = []
        for(let j = 0; j < size; j++)
            lights[i][j] = false
    }
    
    return lights
}


function changeLights(lights, instruction, initialX, initialY, finalX, finalY) {
    const instructionMap = {
        "toggle": light => !light,
        "on": light => true,
        "off": light => false
    };

    for (let i =  Number(initialX); i <= Number(finalX); i++) {
        for (let j = Number(initialY); j <= Number(finalY); j++) {
                lights[i][j] = instructionMap[instruction](lights[i][j]);
        }
    }
}

function countLights(lights){
    return lights.reduce(
        (currentCount, currentValue) => currentCount + currentValue.reduce(
            (currentCount, currentValue) => Number(currentValue) + currentCount, 0
        ), 0
    )
}