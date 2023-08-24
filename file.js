const fs = require('fs')

// read from file
fs.readFile('./text/blog.txt', (err, res) => {
    if (err) {
        console.log(err)
    }
    console.log(res.toString());
})

// fs.readFile('./text/dr.doc', (err, res) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(res.toString());
// })

// write to file

fs.writeFile('./text/blog1.txt', 'I love nodejs ,I can code anything am A badest dev', (err, res) => {
    console.log('written')
})


// directory
// created folder
if (!fs.existsSync('./img')) {
    fs.mkdir('./img', (err, res) => {
        if (err) console.log(err)
        console.log('folder created')
    })
}


// deleted folder
if (fs.existsSync('./img')) {
    fs.rmdir('./img', (err, res) => {
        if (err) console.log(err)
        console.log('folder deleted')
    })
}

// deleted file
if (fs.existsSync('./text/blog.txt')) {
    fs.unlink('./text/blog.txt', err => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}