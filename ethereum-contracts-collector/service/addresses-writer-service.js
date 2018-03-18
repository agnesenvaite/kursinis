let fs = require ('fs');

let FILE_COUNTER = 0;

module.exports = {
    write (addresses) {
        let linkFile = fs.createWriteStream('links' + FILE_COUNTER +'.txt');
        linkFile.on('error', function(err) {
            throw new Error(err);
        });

        let codeFile = fs.createWriteStream('code' + FILE_COUNTER + '.txt');
        codeFile.on('error', function(err) {
            throw new Error(err);
        });

        addresses.forEach(function(v) {
            let link = "https://etherscan.io/address/" + v;
            let code = "crawler.queue(\'" + link + "\');";
            linkFile.write(link + '\n');
            codeFile.write(code + '\n');
        });
        linkFile.end();
        codeFile.end();

        FILE_COUNTER ++;
    }
}