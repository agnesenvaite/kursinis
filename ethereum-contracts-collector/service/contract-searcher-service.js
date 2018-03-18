

module.exports = {
    //TODO CHANGE TO PROMISES
    search (startBlock, lastBlock, web3, callback) {
            var addresses = [];
            for(var i = startBlock; i < lastBlock; i++) {
                var block = web3.eth.getBlock(i, true);
                for(var j in block.transactions) {
                    if(!block.transactions[j].to) {
                        let receipt = web3.eth.getTransactionReceipt((block.transactions[j]).hash);
                        addresses.push(receipt.contractAddress);
                    }

                }
            }
            callback(addresses);
    }
}