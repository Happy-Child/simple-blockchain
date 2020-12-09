import { Blockchain } from './src/components/blockchain.js'
import { Block } from './src/components/block.js'

const genesisBlock = new Block(0, {}, Date.now())
const FuckingCoin = new Blockchain(genesisBlock, "FuckingCoin");

FuckingCoin
  .addBlock(new Block(1, {from: 'Alina1', to: 'Egor1', amount: '100$'}, Date.now()))
  .addBlock(new Block(2, {from: 'Alina2', to: 'Egor2', amount: '120$'}, Date.now()))
  .addBlock(new Block(3, {from: 'Alina3', to: 'Egor3', amount: '140$'}, Date.now()))
  .addBlock(new Block(4, {from: 'Alina4', to: 'Egor4', amount: '160$'}, Date.now()))
  .validateChain()

FuckingCoin
  .addBlock(new Block(5, {from: 'Alina4', to: 'Egor4', amount: '160$'}, Date.now()))
  .validateChain()