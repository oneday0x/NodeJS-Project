const express = require('express')
const app = express()
const PORT = 8383

let data = ['james']

//Middleware
app.use(express.json())


//console.log('This is an extra line')

//Type-1 ,, website endpoints:
app.get('/', (req, res) => {
    console.log('User requested the Home page')
    //res.send('<h1>homepage</h1>')
    res.send(`
        <body
            style="background: pink;
            color: blue">
            <h1>DATA::</h1>
                <p>${JSON.stringify(data)}</p>
                <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is my script')</script>
        `)
    })

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>dashboard</h1>
        <a href="/">Homepage</a>
        </body>
        `)

})


//Type-2 ,, API endpoints
//CRUD = CREATE-post,  READ-get,  UPDATE-put,  DELETE-delete
app.get('/api/data', (req, res) => {
    console.log('This one is fro data ')
    res.send(data)
})


app.post('/api/data', (req, res) => {
    //For example, someone wants to craete a new user
    //click the sign up button
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)

})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})




app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))

