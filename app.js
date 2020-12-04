const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

let items =["Buy Food", "Cook Food", "Workout"]

app.get("/", (req,res)=>{
  let date = new Date()
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  let day = date.toLocaleDateString("en-US", options)

  res.render("index", {day:day, items:items})
})

app.post("/",(req,res)=>{
  var item = req.body.newItem
  items.push(item)
  res.redirect("/")
})

app.listen(3000, ()=>{
  console.log("Server connected on port 3000")
})
