
const data = require('./data');

let { grade, restart, arrange } = data;

function Store(mysql, opts) {

    var connection = mysql.createConnection(opts);

    connection.connect();

    for ( let single of grade ) {
        let sql = 'INSERT INTO grade(id, score, name, type) VALUES(0,?,?,?)';
        let params = Object.values(single);
        query(sql, params);
    }
    
    for ( let single of restart ) {
        let sql = 'INSERT INTO restart(id, date, seat, name, time, place) VALUES(0,?,?,?,?,?)';
        let params = Object.values(single);
        query(sql, params);
    }
    
    for ( let single of arrange ) {
        let sql = 'INSERT INTO arrange(id, date, seat, name, place, time) VALUES(0,?,?,?,?,?)';
        let params = Object.values(single);
        query(sql, params);
    }

    function query(sql, params) { 

        connection.query(sql, params, (err, result) => {
            if (err) {
                console.log('insert error', err.message);
                return;
            } else {
                console.log('insert: ', result);
            }
        })
    
    }

    connection.end();

}

module.exports = Store;