
const mysql = require('mysql');

const opts = require('./db_config');

let store = require('./db_store');

let retrieve = require('./db_retrieve');

// store(mysql, opts);

function delivery() {

    return retrieve(mysql, opts);
    
}

module.exports = delivery;


