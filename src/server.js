import mysql from 'mysql'

var connection = mysql.createConnection({
	host: '123.56.25.254',
	user: 'root',
	password: 'database963210',
	database: 'w7677'
});

connection.connect();