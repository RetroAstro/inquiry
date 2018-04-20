
var fs = require('fs');

var postcss = require('postcss');

var pxToViewport = require('postcss-px-to-viewport');

var css = fs.readFileSync('index.css', 'utf-8');

var options = {
    viewportWidth: 750,
    viewportHeight: 1334,
    unitPrecision: 5,
    viewportUnit: 'vw',
    selectorBlackList: [],
    minPixelValue: 1,
    mediaQuery: false,
    replace: false
}

var processed_CSS = postcss(pxToViewport(options)).process(css).css;

fs.writeFile('index-vw.css', processed_CSS, function(err) {
    if ( err ) {
        console.log(err);
    } else {
        console.log('File with viewport units written.');
    }
})
