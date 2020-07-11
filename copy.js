let fs = require('fs')
let file = 'demo.mp4'

fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    read.on('data', (chunk) => {
        progress += chunk.length
        console.log(" j'ai lu " + Math.round(100 * progress / total) + "%")
    })
    read.on('end', () => {
        console.log("j'ai fini de lire le fichier")
    })
})


/*
fs.readFile('demo.mp4', (err, data) => {
    if (err) throw err
    fs.writeFile('copy.mp4', data, (err) => {
        if (err) throw err
        console.log('Le fichier a bien été copié')
    })
})
*/