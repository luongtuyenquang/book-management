const Db = require('./dboprations')
const Book = require('./book')
const dboprations = require('./dboprations')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/server', router)

// List Book
app.get('/book', async(request, responsive) => {
    try {
        const data = await dboprations.getOrders();
        responsive.send(data); 
    } catch (error) {
        console.log(error);
    }
})

// Get ID
app.get('/book/:id', async(request, responsive) => {
    dboprations.getOrder(request.params.id).then(result => {
        responsive.json(result[0])
    })
})

// Create Book
app.post('/book', async(request, responsive) => {
    let body = {...request.body}
    await dboprations.createBook(body).then(result => {
        responsive.json(result)
    })
})

// Delete Book
app.delete('/book/:id', async(request, responsive) => {
    await dboprations.deleteBook(request.params.id)
    
})

// Update Book
app.put('/book/:id', async(request, responsive) => {
    let id = request.params.id
    let data = request.body
    await dboprations.updateEvent(id, data).then(result => {
        responsive.json(result)
    })
    
})

const port = process.env.PORT || 8000
app.listen(port)
console.log('running at: http://localhost:/'+port);
