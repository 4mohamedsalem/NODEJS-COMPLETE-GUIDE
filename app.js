const path = require("path")

const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")

const errorController = require("./controllers/error")
const User = require("./models/user")

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const authRoutes = require("./routes/auth")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))
app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
)

app.use((req, res, next) => {
  User.findById("6413b5ed1eec4114a4872918")
    .then((user) => {
      req.user = user
      next()
    })
    .catch((err) => console.log(err))
})

app.use("/admin", adminRoutes)
app.use(shopRoutes)
app.use(authRoutes)

app.use(errorController.get404)

mongoose
  .connect(
    "mongodb+srv://maxsalem:8bOpKt8LHkTfClzy@cluster0.whgqi1j.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Salem",
          email: "salem@test.com",
          cart: {
            items: [],
          },
        })
        user.save()
      }
    })
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err)
  })
