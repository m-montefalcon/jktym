import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));


app.get('/', (req, res)=>{
    const setup = "Get a joke";
    const delivery = " ";
    res.render("index.ejs", {setup, delivery});
});


app.get('/joke', async (req, res)=>{
    try{
        const result = await axios.get('https://v2.jokeapi.dev/joke/Any');
        const setup = result.data.setup;
        const delivery = result.data.delivery;
        
        res.render("index.ejs", {setup, delivery});


    }
    catch(error){
        const setup = error.response.data
        res.render("index.ejs", {setup})

    }
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
