class Blockchain {
  constructor(genesisBlock, name = 'Blockchain') {
    this.name = name;
    this.chain = [genesisBlock];
    this.difficulty = 5
  }
  getLastBlock() {
    const lastIndex = this.chain.length - 1
    return this.chain[lastIndex]
  }
  addBlock(newBlock) {
    const lastBlock = this.getLastBlock()
    newBlock.previousHash = lastBlock.hash
    newBlock.startMining(this.difficulty)
    this.chain.push(newBlock)
    return this
  }
  validateChain() {
    const chain = this.chain
    for (let i = 1; i < chain.length; i++) {
      const curBlock = chain[i];
      const previousBlock = chain[i - 1];

      if (!curBlock.isValid()) {
        console.log(`${this.name} - validation error`)
        return false;
      }

      if (curBlock.previousHash !== previousBlock.hash) {
        console.log(`${this.name} - validation error`)
        return false;
      }
    }

    console.log(`${this.name} - valid`)

    return true;
  }
  log() {
    console.log(JSON.stringify(this.chain, null, 4))
    return this
  }
}

export { Blockchain }
