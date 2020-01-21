const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = "";

    }
    generateHash() {
        let self = this;
        return new Promise((resolve, reject) => {
            // do a thing, possibly async, then…
            let result = SHA256(JSON.stringify(self)).toString();
            if (result) {
                self.hash = result;
                resolve(self);
            } else {
                reject(Error("It broke"));
            }
        });
    }


}

module.exports.Block = Block;