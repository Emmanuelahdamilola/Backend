import express from "express";

const app = express();
const PORT = 3050;


// app.get('/', (req, res) => {
//     res.send("Hello world!")
// });
app.get('/name/:user_name', (req, res) => {
    res.status(200)
    res.set('Content-type', 'text/html');
    res.end(`
        <html>
        <body>` + 
        '<h1> Hello ' + req.params.user_name + '</h1>'+ 
    '</body></html>');
})

app.get('/', (req, res) => {
    res.send("Hello world!")
});



// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});