import express, { json, response } from "express"
import mysql2, { Connection } from "mysql2"

const app = express()


const pool = mysql2.createPool(
    {
        host: ` localhost`,
        user: `root`,
        password: ``,
        database: `konyvtar_db`,
        port: 3307
    }

)

app.use(express,json)


app.get('/szolgaltatasok', (req, res) =>{
    const sql = ""

    pool.query(sql, (err,result) =>{
        if (err){
            return res.status(500).json({
                error: "szerverhiba"
            });
        }

        res.status(200).json(result);
    })

})

app.get('/szolgaltatasok/elerheto', (req, res) =>{
    const sql = "SELECT megnevezes FROM szolgaltatasok WHERE aktiv =1 AND munkaido_perc >= 60;"

    pool.query(sql, (err,result) =>{
        if (err){
            return res.status(500).json({
                error: "szerverhiba"
            });
        }

        res.status(200).json(result);
    })

})


app.get('/szolgaltatasok/dragak', (req, res) =>{
    const sql = "SELECT megnevezes FROM szolgaltatasok WHERE alapar > 25000 ORDER BY munkaido_perc DESC; "

    pool.query(sql, (err,result) =>{
        if (err){
            return res.status(500).json({
                error: "szerverhiba"
            });
        }

        res.status(200).json(result);
    })

})





app.listen((3000), ()=>{
    console.log("http://localhost:3000")
});



