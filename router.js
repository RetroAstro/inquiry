
function route(pathname, request, response, ...middlewares) {

    let [template, fetcher] = middlewares;

    if ( request.method == 'GET' ) {

        if ( pathname == '/' ) {
            pathname += 'index.html';
        }
    
        if ( pathname == '/favicon.ico' ) return;
    
        template(pathname, response);

    } else if ( request.method == 'POST' && pathname == '/loadData' ) {

        fetcher(response);

    } 

}

module.exports = route;