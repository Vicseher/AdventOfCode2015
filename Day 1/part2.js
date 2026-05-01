import fs from 'node:fs/promises'

try {
    const data = await fs.readFile('data.txt', 'utf8')
    let floor = 0
    let position = 0

    for (const char of data ) {
        if (char === '(' )
            floor++
        else if (char === ')')
            floor--

        position++

        if (floor === -1 )
            break
    }

    console.log("The position where Santa first enters the basement is " + position)

} catch(err){
    console.log("Error reading the file ", err)
}

