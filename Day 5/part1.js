import fs from 'node:fs/promises'

try {
    const badStrings = ['ab', 'cd', 'pq', 'xy']
    const data = await fs.readFile('data.txt','utf-8')
    const words = data.split(/\r?\n/i)
    let niceStrings = 0
    let previousLetter = ""
    let vowels = 0
    let letterTwiceInARow = false

    for (const word of words ){
        if (badStrings.some((badString) => word.includes(badString))){
            continue
        }
        
        for (const letter of word){
            if ("aeiou".includes(letter))
                vowels++
            if(previousLetter === letter)
                letterTwiceInARow = true
            previousLetter = letter
        }

        if(vowels >= 3 && letterTwiceInARow)
            niceStrings++
        vowels = 0
        letterTwiceInARow = false
        previousLetter = ""
    }

    console.log("The amount of nice strings are: ", niceStrings)
}catch(err){
    console.error("Error reading the file, ", err)
}