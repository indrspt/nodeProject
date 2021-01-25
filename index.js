const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000

var data = {
        'status': 200,
        'result': "Learn Node JS with Kiddy"
};

app.get('/', (req, res) => {
        res.json(data);
});

server.listen(port, () => {
        console.log(`Server running at port ${port}`);
});
