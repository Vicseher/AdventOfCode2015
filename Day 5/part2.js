import fs from 'node:fs/promises'

try {
    const data = await fs.readFile('data.txt','utf-8')
    const words = data.split(/\r?\n/i)

    let goodWords = 0
    let letterRepeatsItself = false
    let pairOfLettersTwice = false
    let pairOfLetters = ""

    for (const word of words ){
        
        for(let position = 0; position < word.length - 2; position++){
            pairOfLetters = word.substring(position,position+2)
            if(word[position] === word[position+2])
                letterRepeatsItself = true

            if(word.substring(0,position).includes(pairOfLetters) || word.substring(position+2).includes(pairOfLetters))
                pairOfLettersTwice = true
        }

        if(letterRepeatsItself && pairOfLettersTwice){
            console.log("A word that has letters that repeat themselves is: ", word)
            goodWords += 1
        }
        letterRepeatsItself = false
        pairOfLettersTwice = false
        
    }

    console.log("The amount of nice strings are: ", goodWords)
}catch(err){
    console.error("Error reading the file, ", err)
}