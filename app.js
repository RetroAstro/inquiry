
const Bat = require('./Bat');

const template = require('./template');

const fetcher = require('./fetcher');

let bat = new Bat();

bat.use(template);

bat.use(fetcher);

bat.listen(8080);







