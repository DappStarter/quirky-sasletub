require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name rifle magic horn grace photo flat gather'; 
let testAccounts = [
"0x731e4d6d3e8a7a1131d3449d8462042dc19e18ab80181047dcf205a47c991267",
"0x18ab772a49949f111cb4800a7e654ad034de4b1163894467df2b8a42a8b2c0ef",
"0xc9189027a08f2b01011c73a863e9c16a500c8b73044ac7c296717f0972784bd7",
"0x74e32d0bb972f3c63dd591abac9e06de90b4bdd8b6c2a289d22b4c1b672b02bb",
"0xee03ac5f0493d9e994cb28c3d37e5f92c4d469a44f6aec0d838ada0e7f1b9855",
"0x2a00b25b845347f839bbb84d0af29c55a486b0c3390c733989bce54864406375",
"0xe9b03346b809ab445f519dcaa8353ef887e8c86b3d09eb9dae19246ab2388690",
"0x8fa42cee6853ee5c4adfed45d8e9e137caac43dae4398093af13c4f058510451",
"0x062902bace12d35c8e28c4a1dc1b68c859d4e266a088245a463ec981aafd4b08",
"0x8c980e138ead9735c658be5dc16694436a80497e757a54d2211fe5043ab756e5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
