const app = require("express")();

app.get("/", (req, res) => 
res.send("using port 1111 :)"));

app.listen(1111, () => console.log('listening on 1111'))
