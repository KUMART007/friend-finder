const express = require("express")
const app = express()
const PORT = process.env.PORT
const htmlRoutes = require('./app/routing/htmlRoutes.js')
const apiRoutes = require('./app/routing/apiRoutes.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('css'))

app.use('/api',apiRoutes)
app.use('/',htmlRoutes)


app.listen(PORT,function(){
    console.log('App listening localhost:'+ PORT)
})
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
