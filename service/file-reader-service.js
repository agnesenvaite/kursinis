'use strict';

const fs = require ('fs');
const readLine = require ('readline');
const streamer = require ('streamer');

module.exports = {
    read (txtFile) {
        return new Promise ((resolve, reject) => {
        let instream = fs.createReadStream(txtFile);
        let rl = readLine.createInterface(instream, streamer);

        let arr = [];

        rl.on('line', function(line) {
            // process line here
            arr.push(line);
        });

        rl.on('close', function() {
            // do something on finish here
            resolve (arr);
        });
        });


    }
};