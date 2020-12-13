import SHA256 from 'crypto-js/sha256.js'

class Block {
  constructor(index, data, timestamp, previousHash = "") {
    this.index = index;
    this.data = data;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = this.generateHash()
    this.nonce = 0
  }

  generateHash() {
    const dataForHash = this.index
      + JSON.stringify(this.data)
      + this.timestamp
      + this.previousHash
      + this.nonce

    return SHA256(dataForHash).toString()
  }

  isValid() {
    const newHash = this.generateHash();
    return newHash === this.hash;
  }

  startMining(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.generateHash();
    }
    console.log(`Block finish mining ${this.hash}`)
  }
}

export { Block }
