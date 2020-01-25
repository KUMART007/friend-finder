const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080;
const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlroutes = require('./app/routing/htmlroutes.js');

app.use(express.urlencoded({extended:true}))
app.use(express.json())

apiRoutes(app);
htmlroutes(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
