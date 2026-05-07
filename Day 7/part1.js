import fs from 'node:fs/promises'

let data
try{
    data = await readDataFromFile('data.txt', 'utf-8')
}catch(err){
    console.error("Error reading the file info")
}

const lines = data.split(/\r?\n/i)
let variables = {}
for(const line of lines ){
    const [instruction, variable ] = line.split(' -> ')
    variables[variable] = instruction;
}

function calculateValueOfVariable(variable){
    const instructionDeconstructed = variables[variable].split(" ")
    
    if(instructionDeconstructed[0] === "NOT"){
        return ~Number(calculateValueOfVariable())
    }
}

async function readDataFromFile(filename, encoding){
    return fs.readFile(filename, encoding)
}