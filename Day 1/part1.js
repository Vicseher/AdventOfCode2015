import fs from 'node:fs/promises'

try {
    const data = await fs.readFile('data.txt', 'utf8')
    let floor = 0

    for (const char of data )
        if (char === '(' )
            floor++
        else if (char === ')')
            floor--
    
    console.log("The floor is " + floor)

} catch(err){
    console.log("Error reading the file ", err)
}

