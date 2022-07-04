// https://eth-ropsten.alchemyapi.io/v2/UCOGV4uR2OwpMnlXkjCzV5iOeSN6cV_l

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten : {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UCOGV4uR2OwpMnlXkjCzV5iOeSN6cV_l',
      accounts : ['29414f2754669460e6cb905286dd05cf510546c17a3d2e6af44d2bfbe0e195e8']
    }
  }
}

