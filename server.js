const express = require('express');
const server = express();
const PORT = 3000;
//const pg = require('pg');


//pool.connect(function(err, client, done) {
//	client.query(/* etc, etc */)
//	done()
  //})
  
  // pool shutdown
  //pool.end()



  const { Pool, Client } = require('pg')
const connectionString = 'postgresql://dbuser:pgdbpass@127.0.0.1:5432/practicedocker'

const pool = new Pool({
  connectionString: connectionString,
})



const client = new Client({
  connectionString: connectionString,
})
client.connect()

//client.query('SELECT NOW()', (err, res) => {
  //console.log(err, res)
 // client.end()
//})



//pg.connect('postgres://postgres:pgdbpass@localhost:5432/practicedocker');
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));