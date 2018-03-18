let web3InitializationService = require('./web3-initialization-service');
let contractSearcherService = require('./contract-searcher-service');
let addressesWriterService = require ('./addresses-writer-service');
let config = require('config');

module.exports = {
    run() {
        console.log("START: " + new Date());
        web3InitializationService.initialize().then ((web3) => {
            let lastBlock = config.blocks.lastBlock;
            let step = config.blocks.step;
            let blocksToScan = config.blocks.blocksToScan;
            let startBlock;
            while (blocksToScan > 0) {
                startBlock = lastBlock  - step;
                contractSearcherService.search(startBlock, lastBlock, web3, ((addresses) => {
                    addressesWriterService.write(addresses);
                    lastBlock = startBlock;
                    blocksToScan -= step;
            }));
            }
        console.log("FINISH: " + new Date());


        }).catch((err) => {
            throw new Error(err);
        })

    }
}