
const delivery = require('./db/db_fetch');

const data = require('./db/data');

function fetch(response) {

    var json = JSON.stringify(data);
    response.writeHead('200', { "Content-Type": "application/json" });
    response.end(json);

    /* ------------- 从数据库中取数据 --------------- */

    // let p = delivery();

    // p.then((data) => {
    //     response.writeHead('200', { "Content-Type": "application/json" });
    //     response.end(data);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

}

module.exports = fetch;
