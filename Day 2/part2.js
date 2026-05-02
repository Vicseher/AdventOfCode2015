import fs from 'node:fs/promises'

try {
    const data = await fs.readFile('data.txt', 'utf8')
    const presents = data.split(/\r?\n/i)
    const ribbonLength = presents.reduce((ribbonLength, present) => ribbonLength + calculateRibbonNeeded(present), 0)

    console.log("The amount of ribbon needed is: ", ribbonLength)
} catch(err) {
    console.log("Error reading file: ", err)
}

function calculateRibbonNeeded(present){
    let dimensions = present.split("x").map(Number)
    dimensions.sort((a, b) => a - b)

    return 2 * dimensions[0] + 2 * dimensions[1] + dimensions[0] * dimensions[1] * dimensions[2]
} 