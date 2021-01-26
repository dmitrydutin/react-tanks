import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'ba05d6fa63374e',
    password: '37f014a0',
    database: 'heroku_1116a75283d2a81'
});

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'coursework'
// });

export default pool;
