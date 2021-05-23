const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const passport = require('passport')
const path = require('path')

const app = express()

// Body parser middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//DB CONFIG
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('💾 :: MongoDB Connected'))
  .catch((err) => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport.js')(passport)

// Use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`🔌 :: Sever running on port: ${port}`))
