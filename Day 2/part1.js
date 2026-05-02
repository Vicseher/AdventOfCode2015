import fs from 'node:fs/promises'

let data

try {
    data = await fs.readFile('data.txt', 'utf8')
    const presents = data.split(/\r?\n/i)

    const wrapPaper = presents.reduce((wrapPaper, present) => wrapPaper + wrapPaperCalculator(present), 0)

    console.log("The wrap paper needed is: ", wrapPaper)

} catch(err){
    console.error("Error reading the file", err)
}

function wrapPaperCalculator(present){
    let dimensions = present.split('x')
    
    return 2 * dimensions[0] * dimensions[1] +  2 * dimensions[1] * dimensions[2] + 2 * dimensions[2] * dimensions[0] +
     Math.min(dimensions[0] * dimensions[1],dimensions[1] * dimensions[2], dimensions[2] * dimensions[0])
}