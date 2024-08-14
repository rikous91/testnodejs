// Express
const express = require("express");
const app = express();
//CORS
const cors = require('cors');
app.use(cors()); //imposta Allow-Origin' su *,

var port = process.env.PORT || '3000';
  app.set('port', port);


app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(app.oauth.errorHandler());


//

app.get('/init', async (req, res) => {
return res.status(200).send('ok');
});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports.app = app;