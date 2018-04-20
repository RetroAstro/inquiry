
function Retrieve(mysql, opts) { 

    let json = {
        'grade': [],
        'restart': [],
        'arrange': []
    }

    var connection = mysql.createConnection(opts);

    connection.connect();

    function query() { 

        return new Promise((resolve, reject) => {

            var tables = ['grade', 'restart', 'arrange'];

            for ( let tab of tables ) {
    
                let sql = `SELECT * FROM ${tab}`;
        
                connection.query(sql, (err, result) => {
                    if (err) {
                        console.log('insert error', err.message);
                        reject();
                    } else {
                        for ( let row of result ) {
                            let obj = {};
                            for ( let enrs of Object.entries(row) ) {
                                if ( enrs[0] == 'id' ) {
                                    continue;
                                }
                                obj[enrs[0]] = enrs[1];
                            }
                            json[tab].push(obj);
                        }
                        if ( tab == 'arrange' ) {
                            let data = JSON.stringify(json);
                            resolve(data);
                        }
                    }
                })
        
            }
    
        })

    }

    return query();

    connection.end();

}

module.exports = Retrieve;