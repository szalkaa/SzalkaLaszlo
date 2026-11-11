import express, { json } from "express"
import mysql2, { Connection } from "mysql2"

const app = express()
const PORT = 3000

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
            return res.
        }
    })

})






