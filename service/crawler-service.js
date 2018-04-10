'use strict';

const Crawler = require ('crawler');
const FileWriterService = require ('./file-writer-service');

module.exports = {
    crawEtherscan () {
        let counter = 0;
        let crawler = new Crawler({

            maxConnections : 10000,
            // This will be called for each crawled page
            callback : function (error, result, $) {
               if (result) {
                    let $ = result.$;
                   //deletes useless start
                   let code = ($("#dividcode").text()).substring (61);
                   if (code === "") {
                       crawler.queue(result.request.uri.href);
                       return;
                   }
                   //deletes useless end
                    code = code.split('var editor = ace.edit("editor");')[0];
                   code += "\n" + result.request.uri.href;
                   FileWriterService.write('./res/contracts/contract' + counter + ".sol", code) ;

                   counter ++;

               }
            }
        });

// Queue just one URL, with default callback
        crawler.queue('https://etherscan.io/address/0xd0a6e6c54dbc68db5db3a091b171a77407ff7ccf');
        crawler.queue('https://etherscan.io/address/0x12444b6ec62e616ebc8a23e56e61f8f4c6da610c');
        crawler.queue('https://etherscan.io/address/0x701c244b988a513c945973defa05de933b23fe1d');
        crawler.queue('https://etherscan.io/address/0xcfb98637bcae43c13323eaa1731ced2b716962fd');
        crawler.queue('https://etherscan.io/address/0xd43D09Ec1bC5e57C8F3D0c64020d403b04c7f783');
        crawler.queue('https://etherscan.io/address/0x422adcf787e49dd93ce10a583655c212e00d42ce');
        crawler.queue('https://etherscan.io/address/0x55d34b686aa8c04921397c5807db9ecedba00a4c');
        crawler.queue('https://etherscan.io/address/0x5a84969bb663fb64F6d015DcF9F622Aedc796750');
        crawler.queue('https://etherscan.io/address/0xBbc79794599b19274850492394004087cBf89710');
        crawler.queue('https://etherscan.io/address/0x4470bb87d77b963a013db939be332f927f2b992e');
        crawler.queue('https://etherscan.io/address/0x27f706edde3aD952EF647Dd67E24e38CD0803DD6');
        crawler.queue('https://etherscan.io/address/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07');
        crawler.queue('https://etherscan.io/address/0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a');
        crawler.queue('https://etherscan.io/address/0x55d34b686aa8C04921397c5807DB9ECEdba00a4c');
        crawler.queue('https://etherscan.io/address/0xd4FD252d7D2C9479a8d616F510eAC6243B5DDdf9');
        crawler.queue('https://etherscan.io/address/0x57cCeE9100dAA272b962c48543460A8e3AC6f674');
        crawler.queue('https://etherscan.io/address/0xe75509810e09b04eef4ebd0b471bacf5530b162e');
        crawler.queue('https://etherscan.io/address/0xad41548fa92921597da3ae783a330396b47cba3c');
        crawler.queue('https://etherscan.io/address/0xc4740f71323129669424d1ae06c42aee99da30e2');
        crawler.queue('https://etherscan.io/address/0x9b73D1779C41DcA36314fB7c4D3309838e20C4E7');
        crawler.queue('https://etherscan.io/address/0xda2cf810c5718135247628689d84f94c61b41d6a');
        crawler.queue('https://etherscan.io/address/0x7176a57a53a87a800a6d7ec33c8479a8deb57d8b');
        crawler.queue('https://etherscan.io/address/0xb5e5585d0057501c91c48094029a6f4fb10b5a01');
        crawler.queue('https://etherscan.io/address/0x960b236A07cf122663c4303350609A66A7B288C0');
        crawler.queue('https://etherscan.io/address/0xbdf5c4f1c1a9d7335a6a68d9aa011d5f40cf5520');
        crawler.queue('https://etherscan.io/address/0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c');
        crawler.queue('https://etherscan.io/address/0x0abdace70d3790235af448c88547603b945604ea');
        crawler.queue('https://etherscan.io/address/0xfa05A73FfE78ef8f1a739473e462c54bae6567D9');
        crawler.queue('https://etherscan.io/address/0xebbD58cD1C31c08EF7a17337c264ba502762e993');
        crawler.queue('https://etherscan.io/address/0xcbcc0f036ed4788f63fc0fee32873d6a7487b908');
        crawler.queue('https://etherscan.io/address/0x1776e1f26f98b1a5df9cd347953a26dd3cb46671');
        crawler.queue('https://etherscan.io/address/0xcfb98637bcae43C13323EAa1731cED2B716962fD');
        crawler.queue('https://etherscan.io/address/0xb9e7f8568e08d5659f5d29c4997173d84cdf2607');
        crawler.queue('https://etherscan.io/address/0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53');
        crawler.queue('https://etherscan.io/address/0x574fb6d9d090042a04d0d12a4e87217f8303a5ca');
        crawler.queue('https://etherscan.io/address/0x5f6A9a1B4587759DcfEc19f6c8e207e73eD988B8');
        crawler.queue('https://etherscan.io/address/0xee74792bd15d23a63e5357f599cbe1ec2f898bbc');
        crawler.queue('https://etherscan.io/address/0xaaab2ec23dd5dd9602e631b8399fa94c9d134b3a');
        crawler.queue('https://etherscan.io/address/0x07c7b4f49c2f549a71e3928da317a1caf86a2788');

        crawler.queue('https://etherscan.io/address/0x57ccee9100daa272b962c48543460a8e3ac6f674');
        crawler.queue('https://etherscan.io/address/0xEF68e7C694F40c8202821eDF525dE3782458639f');
        crawler.queue('https://etherscan.io/address/0x5d65d971895edc438f465c17db6992698a52318d');
        crawler.queue('https://etherscan.io/address/0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6');
        crawler.queue('https://etherscan.io/address/0x8BfE5EbB128eE82F4BA80f56bb32409CC87bC6fb');
        crawler.queue('https://etherscan.io/address/0x4a089c689894bde6a67625488c64a5e16e1cbeba');
        crawler.queue('https://etherscan.io/address/0x844e2883a0ce21718b999e459890bd16023dbca6');
        crawler.queue('https://etherscan.io/address/0x3597bfd533a99c9aa083587b074434e61eb0a258');
        crawler.queue('https://etherscan.io/address/0x29AfA3443f752eb29d814d9042Fd88A4a2dc0F1e');
        crawler.queue('https://etherscan.io/address/0x90528aeb3a2b736b780fd1b6c478bb7e1d643170');
        crawler.queue('https://etherscan.io/address/0x97208bf5dc25e6fd4719cfc2a3c1d1a59a974c3b');
        crawler.queue('https://etherscan.io/address/0xd4c435f5b09f855c3317c8524cb1f586e42795fa');
        crawler.queue('https://etherscan.io/address/0xe3818504c1b32bf1557b16c238b2e01fd3149c17');
        crawler.queue('https://etherscan.io/address/0x1844b21593262668b7248d0f57a220caaba46ab9');
        crawler.queue('https://etherscan.io/address/0xf46ede17c0bab20d87cd079a2632f71433a407b9');
        crawler.queue('https://etherscan.io/address/0x0ceb0d54a7e87dfa16ddf7656858cf7e29851fd7');
        crawler.queue('https://etherscan.io/address/0x2097175d0abb8258f2468e3487f8db776e29d076');
        crawler.queue('https://etherscan.io/address/0x1c6c8e0c6b93b81c0ab3ca4e16eac96f02175f73');
        crawler.queue('https://etherscan.io/address/0xc88c7e1aebd89187d13bd42e1ff814d32f492bf6');
        crawler.queue('https://etherscan.io/address/0x4470BB87d77b963A013DB939BE332f927f2b992e');
        crawler.queue('https://etherscan.io/address/0xf7920b0768ecb20a123fac32311d07d193381d6f');
        crawler.queue('https://etherscan.io/address/0xfc5772c279bb3A0Bed4219C0De484DeFF3ed2241');
        crawler.queue('https://etherscan.io/address/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03');
        crawler.queue('https://etherscan.io/address/0x1bdf56c9593590122fd8750555d8148da2b80be8');
        crawler.queue('https://etherscan.io/address/0x9214ec02cb71cba0ada6896b8da260736a67ab10');
        crawler.queue('https://etherscan.io/address/0xd780ae2bf04cd96e577d3d014762f831d97129d0');
        crawler.queue('https://etherscan.io/address/0x26e75307fc0c021472feb8f727839531f112f317');
        crawler.queue('https://etherscan.io/address/0x58b7056deb51ed292614f0da1e94e7e9c589828d');
        crawler.queue('https://etherscan.io/address/0x91c94bee75786fbbfdcfefba1102b68f48a002f4');
        crawler.queue('https://etherscan.io/address/0xc6c95cda7373b0b4b62bed21016057a8145d7787');
        crawler.queue('https://etherscan.io/address/0x55f93985431fc9304077687a35a1ba103dc1e081');
        crawler.queue('https://etherscan.io/address/0x5250776fad5a73707d222950de7999d3675a2722');
        crawler.queue('https://etherscan.io/address/0xb2f7eb1f2c37645be61d73953035360e768d81e6');
        crawler.queue('https://etherscan.io/address/0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f');
        crawler.queue('https://etherscan.io/address/0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e');
        crawler.queue('https://etherscan.io/address/0xc5bbae50781be1669306b9e001eff57a2957b09d');
        crawler.queue('https://etherscan.io/address/0xbd2ed3e85faa3433c068c7b3f9c8c7d839ce88d7');
        crawler.queue('https://etherscan.io/address/0x3aa5fa4fbf18d19548680a5f2bba061b18fed26b');
        crawler.queue('https://etherscan.io/address/0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0');
        crawler.queue('https://etherscan.io/address/0x96A65609a7B84E8842732DEB08f56C3E21aC6f8a');
        crawler.queue('https://etherscan.io/address/0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a');
        crawler.queue('https://etherscan.io/address/0xdf6ef343350780bf8c3410bf062e0c015b1dd671');
        crawler.queue('https://etherscan.io/address/0x741fc999f5b62c80831cf659aed04c64ac8ef24e');
        crawler.queue('https://etherscan.io/address/0xfb2f26f266fb2805a387230f2aa0a331b4d96fba');
        crawler.queue('https://etherscan.io/address/0x9e96604445ec19ffed9a5e8dd7b50a29c899a10c');
        crawler.queue('https://etherscan.io/address/0x107c4504cd79c5d2696ea0030a8dd4e92601b82e');
        crawler.queue('https://etherscan.io/address/0xba9d4199fab4f26efe3551d490e3821486f135ba');
        crawler.queue('https://etherscan.io/address/0x04f2e7221fdb1b52a68169b25793e51478ff0329');
        crawler.queue('https://etherscan.io/address/0x68AA3F232dA9bdC2343465545794ef3eEa5209BD');
        crawler.queue('https://etherscan.io/address/0xE05CeDD2838E4e1d99B539D8C768D6EF2a10F729');
        crawler.queue('https://etherscan.io/address/0xea1f346faf023f974eb5adaf088bbcdf02d761f4');
        crawler.queue('https://etherscan.io/address/0x9b60874d7bc4e4fbdd142e0f5a12002e4f7715a6');
        crawler.queue('https://etherscan.io/address/0xB70835D7822eBB9426B56543E391846C107bd32C');
        crawler.queue('https://etherscan.io/address/0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf');
        crawler.queue('https://etherscan.io/address/0x582e3d8dcd41f586fbcc6559f16476d20b2a3b95');
        crawler.queue('https://etherscan.io/address/0xe2fb6529ef566a080e6d23de0bd351311087d567');
        crawler.queue('https://etherscan.io/address/0x226bb599a12c826476e3a771454697ea52e9e220');
        crawler.queue('https://etherscan.io/address/0xac3da587eac229c9896d919abc235ca4fd7f72c1');
        crawler.queue('https://etherscan.io/address/0x13f11c9905a08ca76e3e853be63d4f0944326c72');
        crawler.queue('https://etherscan.io/address/0x2eae96e6BF99565c9d8cE978b24c3fC3b552DC7B');
        crawler.queue('https://etherscan.io/address/0xfC5de599C9fE4e5cf0744AeF3139AE53aa30A566');
        crawler.queue('https://etherscan.io/address/0xF432cEc23b2A0d6062B969467f65669De81F4653');
        crawler.queue('https://etherscan.io/address/0xa9b2d2be17f3472f9dfb626531f3821080c00159');
        crawler.queue('https://etherscan.io/address/0x53151a85ea7b82a4b43903427953efba067cde92');
        crawler.queue('https://etherscan.io/address/0x263c618480dbe35c300d8d5ecda19bbb986acaed');
        crawler.queue('https://etherscan.io/address/0xb9aac097f4dadcd6f06761eb470346415ef28d5a');
        crawler.queue('https://etherscan.io/address/0x40349a89114bb34d4e82e5bf9ae6b2ac3c78b00a');
        crawler.queue('https://etherscan.io/address/0xf487e54a41660ef17374f6ebf8340c6ef3163f30');
        crawler.queue('https://etherscan.io/address/0xf39c5f30a8c1e2e00b0b9ab3dc061b1c36a998ae');
        crawler.queue('https://etherscan.io/address/0xC22462d4bC50952B061C9E6c585Fdd9A04d0d75A');
        crawler.queue('https://etherscan.io/address/0x56ba2Ee7890461f463F7be02aAC3099f6d5811A8');
        crawler.queue('https://etherscan.io/address/0x2fa32a39fc1c399e0cc7b2935868f5165de7ce97');
        crawler.queue('https://etherscan.io/address/0xec203ddb210458df139d02a62baf49ca36a0b8d9');
        crawler.queue('https://etherscan.io/address/0x32ec2e6967687825123c5c0f30c18e2c47708df1');
        crawler.queue('https://etherscan.io/address/0x9e6b2b11542f2bc52f3029077ace37e8fd838d7f');
        crawler.queue('https://etherscan.io/address/0x999967e2ec8a74b7c8e9db19e039d920b31d39d0');
        crawler.queue('https://etherscan.io/address/0xa66d83716c7cfe425b44d0f7ef92de263468fb3d');
        crawler.queue('https://etherscan.io/address/0x5e3346444010135322268a4630d2ed5f8d09446c');
        crawler.queue('https://etherscan.io/address/0xd2d6158683aee4cc838067727209a0aaf4359de3');
        crawler.queue('https://etherscan.io/address/0x72adadb447784dd7ab1f472467750fc485e4cb2d');
        crawler.queue('https://etherscan.io/address/0xd6a81d7a8b4d1cc947138d9e4aca5d3cde33a170');
        crawler.queue('https://etherscan.io/address/0x26d08b9d227933a85e855656dc46ab889e183c88');
        crawler.queue('https://etherscan.io/address/0xf2Fbb2939981594e25d93e6226231FcC1b01718e');
        crawler.queue('https://etherscan.io/address/0x4C5651c4f59B3E92E67d993b7B969F9aF861380f');
        crawler.queue('https://etherscan.io/address/0xeb7c20027172e5d143fb030d50f91cece2d1485d');
        crawler.queue('https://etherscan.io/address/0x71e774fd3e3948cfb6fcb1aaff4bb906858fba3a');
        crawler.queue('https://etherscan.io/address/0x876359dcb1745073909cc810311ec3f119e8d5e8');
        crawler.queue('https://etherscan.io/address/0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c');
        crawler.queue('https://etherscan.io/address/0x4f4e76761eb0a5a2992a6f3ab1c90a874450ecca');
        crawler.queue('https://etherscan.io/address/0x7b22938ca841aa392c93dbb7f4c42178e3d65e88');
    }
}