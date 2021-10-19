require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind modify good clip success truck'; 
let testAccounts = [
"0xb5c5a9c5fd62780165ec2818895740bac999d6b9e0e5de27658d11859fb5edd3",
"0x10327c724d65e65adac209ddeeac1878de83d3b18658b0d9e4fd5088d912708a",
"0x1990bcf23407c35ceef6871698bf4bf75d3dc6a79d2c97d58f5b11dcce53e992",
"0x228434ac0b5a0b8e1d86945865f53af359674f36a3d63af29d78fc3fee1ff2b7",
"0x552093a131a64e4774953a52f9e92f17a08e6edd0f00d5a708db81661b6458e9",
"0xf82e2060cef70ecc2492d8cfa80ecdee32202568ce20a5a75b71b800b2e403ee",
"0x4f70aa3d1fc1e5fdf445f3ed84bc18c1b0a73384a016b0fe09dc10a3fe3bcbac",
"0x7185323d7499cba412b4910c02ff60568a24569f1d869edb0fc74d584eacc148",
"0xfe1999ab96f4b83a6abfff6081c83ee5b460d6ff6ed5625ad8b16513a79af007",
"0xa2cf7e9349d5da0c3958f37212a5ed6755d061205f4a519380e7f3e24bc117b9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

