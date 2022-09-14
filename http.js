const express = require('express')
const path = require("path")
const app = express()
const port = 4000

const userRoutes = require("./routes/user")

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

app.use(userRoutes.routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})