const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'defense ready lady corn other ride rapid collect avocado tongue price nut'; // 12 word mnemonic 
const mainnetProviderUrl = 'https://mainnet.infura.io/v3/e811479f4c414e219e7673b6671c2aba'; 
const rinkebyProviderUrl = 'https://rinkeby.infura.io/v3/e811479f4c414e219e7673b6671c2aba';
const kovanProviderUrl = 'https://kovan.infura.io/v3/d460ac4e71f24d869c8b75119ebe4213';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  plugins: [ "truffle-security" ],
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    kovan: {
      network_id: 42,
      provider: new HDWalletProvider(mnemonic, kovanProviderUrl, 0),
      gas: 10000000,
      gasPrice: 1000000000, // 1 gwei
      skipDryRun: true,
    },
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gasPrice: 1000000000, // 1 gwei
    },
    proxy: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gasPrice: 0, // 1 gwei
    },
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    enableTimeouts: false,
    reporterOptions: {
      currency: 'USD',
      gasPrice: 5, //in gwei
    },
  },
};
