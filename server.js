const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/auth")
// const generateRoutes = require("./routes/generate")
// const historyRoutes = require("./routes/history")

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.get('/', (req, res) => res.send("API is working fine"));
app.use("/auth",authRoutes)
// app.use("/generate",generateRoutes)
// app.use("/history",historyRoutes)

app.listen(process.env.PORT,()=>{

console.log("Server running on port "+process.env.PORT)

})
