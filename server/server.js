require('dotenv').config()
const express = require('express')
const axios = require('axios')
const session = require('express-session')
const massive = require('massive')

const ctrl = require('./controller')

const app = express()

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env

//middleware
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(express.static(__dirname + '/../build'))

//endpoints
app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/auth/me', ctrl.getSession)
app.post('/api/auth/logout', ctrl.logout)

app.get('/api/posts/:userid', ctrl.search)
app.get('/api/post/:postid', ctrl.getPost)
app.post('/api/post/:userid', ctrl.newPost)



massive(CONNECTION_STRING).then(db => {
    app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))
    app.set('db', db)
})



