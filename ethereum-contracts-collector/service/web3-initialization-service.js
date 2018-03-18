
let web3_extended = require('web3_extended');

module.exports = {
    initialize () {
        return new Promise ((resolve, reject) => {
            let options = {
                host: 'https://mainnet.infura.io/rrxnp1NRsgjYIlVcp8nO',
                personal: true,
                admin: true,
                debug: false
            };
        let web3 = web3_extended.create(options);

            if (web3.isConnected()) {
                resolve(web3);
            } else {
                reject ("ERROR: web3 is not connected");
            }
        });
    }
};