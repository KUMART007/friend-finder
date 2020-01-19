const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080;
// const htmlRoutes = require('./app/routing/htmlRoutes.js')
// const apiRoutes = require('./app/routing/apiRoutes.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(express.static('css'))

// app.use('/api',apiRoutes)
// app.use('/',htmlRoutes)
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
