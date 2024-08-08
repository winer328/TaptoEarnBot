// Ethereum javascript libraries needed
var Web3 = require("web3");
var Tx = require("ethereumjs-tx").Transaction;

const Common = require("ethereumjs-common");

//KLUV Contract Address KLUV - BSC
const _ContractAddress_ = "0x3A68A9Cd188C324a45c06866eFD1C79605B66827";
const AMAR_CONTRACT_ADDRESS = "0x5ee91759f20155c953f29284b7e96d2b05679f95";
const AMAR_TOKEN_ADDRESS = "0x07c8ea3109e458dc2379488fb58b3ceb5a626cb1";
const CONTRACT_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getunlockedAfter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockedPeriodOver",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawLockedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
const _ContractABI_ = JSON.parse(
  '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getunlockedAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockedPeriodOver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawLockedTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
);

//To Wallet Address
const _ToWalletAddress_ = "0x76D52CF51D9a4B8C84Bf01b7AA3f801c52A328D8";

//My MetaMask Wallet
const _FromWalletAddress_ = "0xDeBCBca7f21aB70DA4e7860a112FEB3d8Fd04db5";

//My MetaMask Private Key
const _FromWalletPrivateKey_ =
  "f777980edfc1c92446XXXXXXXXXXXXXXXe615ffcccc0744f0a4054c8f924773d";

//Node URL
const BSCNode = "https://binance.llamarpc.com/";

const web3 = new Web3(new Web3.providers.HttpProvider(BSCNode));

const main = async () => {
  console.log(`web3 version: ${web3.version}`);

  // Who holds the token now?
  var senderWalletAddress = _FromWalletAddress_;

  // Who are we trying to send this token to?
  var receiverWalletAddress = _ToWalletAddress_;

  // The address of the contract which created MFIL
  var contractAddress = _ContractAddress_;
  var contract = new web3.eth.Contract(_ContractABI_, contractAddress, {
    from: senderWalletAddress,
  });

  // How many tokens do I have before sending?
  var balance = await contract.methods.balanceOf(senderWalletAddress).call();
  console.log(
    `Balance before send: ${balance} sKLUV\n------------------------`
  );

  // Use Gwei for the unit of gas price
  var gasPriceGwei = 5;
  var gasLimit = 5000000;

  // .00000001 KLUV
  var transferAmount = 1;

  // Determine the nonce - This isn't always good, you need to keep track of it
  var count = await web3.eth.getTransactionCount(senderWalletAddress);
  console.log(`num transactions so far: ${count}`);

  /* Override count - especially if testing */
  count = 77;

  var rawTransaction = {
    from: senderWalletAddress,
    nonce: "0x" + count.toString(16),
    gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
    gasLimit: web3.utils.toHex(gasLimit),
    to: contractAddress,
    value: "0x0",
    chainId: web3.utils.toHex(56),
    data: contract.methods
      .transfer(receiverWalletAddress, transferAmount)
      .encodeABI(),
  };

  console.log(
    `Raw of Transaction: \n${JSON.stringify(
      rawTransaction,
      null,
      "\t"
    )}\n------------------------`
  );

  // Create Buffer containing hex of private key
  var privKey = new Buffer.from(_FromWalletPrivateKey_, "hex");

  /* Define What Block Chain we're using */
  const chain = Common.default.forCustomChain(
    "mainnet",
    {
      name: "bnb",
      networkId: 56,
      chainId: 56,
    },
    "petersburg"
  );

  /* generate transaction including my block chain */
  var tx = new Tx(rawTransaction, { common: chain });

  /* sign the transaction with my buffered private key */
  tx.sign(privKey);

  /* Serialize the result */
  var serializedTx = tx.serialize();

  /* Get Ready to send */
  console.log(
    `Attempting to send signed tx:  ${serializedTx.toString(
      "hex"
    )}\n------------------------`
  );

  /* Limit the number of confirms we're looking for */
  let numberOfConfirms = 5;
  web3.eth.transactionConfirmationBlocks = numberOfConfirms;

  /* Use Event Method so we can see where things are hanging up */

  web3.eth
    .sendSignedTransaction("0x" + serializedTx.toString("hex"))
    .on("sending", (payload) => {
      console.log("sending ");
      console.log(payload);
    })
    .on("sent", (payload) => {
      console.log("Sent Payload");
      console.log(payload);
    })
    .on("transactionHash", (transactionHash) => {
      console.log("Received Transaction hash");
      console.log(transactionHash);
    })
    .on("receipt", (receipt) => {
      console.log("Received Receipt");
      console.log(
        `Receipt info: \n${JSON.stringify(
          receipt,
          null,
          "\t"
        )}\n------------------------`
      );
    })
    .on("confirmation", (confNumber, receipt, latestBlockHash) => {
      console.log("Received Confirmation ", confNumber);
      if (confNumber == numberOfConfirms) {
        // The balance may not be updated yet, but let's check
        contract.methods
          .balanceOf(senderWalletAddress)
          .call()
          .then((balance) => {
            console.log(`Balance after send: ${balance} sKLUV`);
          });
      }
      console.log(confNumber, receipt, latestBlockHash);
    })
    .on("error", (err) => {
      console.log("Error Sending Transaction");
      console.log(err.message);
    })
    .catch((reason) => {
      console.log("Promise failed in catch");
      console.log(reason);
    });
};
