const express = require("express")
const app = express()
app.get("/",(req,resp)=>{
    resp.json("hey")
})
app.listen(3000)


