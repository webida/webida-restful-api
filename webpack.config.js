// this configuration file generates 'browser-only' api-bundle file

var path = require('path');

module.exports = {
    entry: './src/index.js', 
    resolve: {
        root: [
            __dirname, 
            path.resolve(__dirname , 'src') 
        ], 
        // for browser target(web), bundling superagent.js from node_modules 
        //  does not work, with many errors. As a workaround, we use pre-built one. 
        alias: {
            superagent: 'superagent/superagent.js'
        }
    },

    target: 'web', 

    output: {
        libraryTarget: 'amd',
        path: __dirname, 
        filename: 'api-bundle.js'
    },

    devtool:'#source-map', 

    module: {
        noParse: [
            /superagent\.js$/
        ]
    }, 

    node: {
        console: false, 
        global:false, 
        process:false, 
        Buffer:false,
        __filename:false, 
        __dirname:false,
        fs : "empty"
    }
    
}

