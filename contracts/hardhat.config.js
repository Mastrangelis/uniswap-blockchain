require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/tjYvPVPPRUiT4I_YVZiVWr2R8YNpYT7V',
      accounts: [
        '9bbe99a5e0dbba2ab06d04a66161b2a398ed73386c81db137ae69190a90a39e8'
      ]
    }
  }
};
