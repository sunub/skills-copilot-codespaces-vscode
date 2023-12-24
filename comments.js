// Create web server
// 1. Import Express
const express = require('express')
const app = express()

// 2. Create web server
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// 3. Run web server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })

// 4. Create POST API
app.post('/comments', (req, res) => {
    res.send('POST API')
})

// 5. Create GET API
app.get('/comments', (req, res) => {
    res.send('GET API')
})

// 6. Create PUT API
app.put('/comments', (req, res) => {
    res.send('PUT API')
})

// 7. Create DELETE API
app.delete('/comments', (req, res) => {
    res.send('DELETE API')
})

// 8. Create PATCH API
app.patch('/comments', (req, res) => {
    res.send('PATCH API')
})

// 9. Create OPTIONS API
app.options('/comments', (req, res) => {
    res.send('OPTIONS API')
})

// 10. Create HEAD API
app.head('/comments', (req, res) => {
    res.send('HEAD API')
})

// 11. Create TRACE API
app.trace('/comments', (req, res) => {
    res.send('TRACE API')
})

// 12. Create CONNECT API
app.connect('/comments', (req, res) => {
    res.send('CONNECT API')
})

// 13. Create API with parameter
app.get('/comments/:id', (req, res) => {
    res.send('GET API with parameter')
})

// 14. Create API with query
app.get('/comments', (req, res) => {
    res.send('GET API with query')
})

// 15. Create API with body
app.post('/comments', (req, res) => {
    res.send('POST API with body')
})

// 16. Create API with header
app.get('/comments', (req, res) => {
    res.send('GET API with header')
})

// 17. Create API with cookie
app.get('/comments', (req, res) => {
    res.send('GET API with cookie')
})

// 18. Create API with file