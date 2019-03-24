var knex = require('knex')({
  client: 'mysql',
  connection: {
  	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    host     : 'localhost',
    user     : 'root',
    password : "root",
    database : 'demo_db',
    charset  : 'utf8'
  }
});
 
module.exports = require('bookshelf')(knex);