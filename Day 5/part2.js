import fs from 'node:fs/promises'

try {
    const data = await fs.readFile('data.txt','utf-8')
    const words = data.split(/\r?\n/i)
    let previousLetter = ""
    let wordAux =""
    let position = 0
    let goodWords = 0
    let letterRepeatsItself = false
    for (const word of words ){

        previousLetter = word[0]
        wordAux = word.substring(1)
        
        position = 0
        for (const letter of word){

            if(position + 2 < word.length)
                if(word[position] === word[position+2])
                    letterRepeatsItself = true
            position++
        }

        if(letterRepeatsItself)
            goodWords += 1
        
        letterRepeatsItself = false
    }

    console.log("The amount of nice strings are: ", goodWords)
}catch(err){
    console.error("Error reading the file, ", err)
}