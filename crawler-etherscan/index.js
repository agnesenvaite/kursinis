const CrawlerService = require ('./service/crawler-service');
const AddressesToCodeService = require ('./service/addresses-to-code-service');

// module.exports = AddressesToCodeService.convert('./addresses.txt');

module.exports = CrawlerService.crawEtherscan();