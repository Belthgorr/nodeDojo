const exxpress = require("express")
const app = exxpress();
const cors = require("cors")
const mongoose = require("mongoose");
const uri = require('./app/config/db.config.js');
require('./app/routes/spoti.router.js')(app);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(uri, (err, res) => {
 
    if (err) throw err;
    console.log("Base de datos online")
 }); 
const corsOption = {

    origin: "http://localhost:3000"
};
app.use(cors(corsOption));

const PORT = 3000;

app.get('/', async function (req,res){

res.send('Espoti fi')

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
   });