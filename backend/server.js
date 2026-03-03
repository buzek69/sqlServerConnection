const sql = require("mssql");
const config = require("./dbconfig");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let pool;

async function connect() {
  try {
    pool = await sql.connect(config);
    console.log("Connected to SQL Server");
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}

connect();

app.get("/users", async (req, res) => {
  try {
    console.log("got a request");
    const result = await pool.request().query("select * from users");
    console.log(result);
    res.send(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
