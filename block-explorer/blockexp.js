/**
 * Importing BlockExplorer API to search Block Data
 */
const be = require('blockexplorer');

/**
 *  Explore Block Data function
 * @param {*} index 
 * 
 * Start by requesting the hash then request the block and use console.log()
 * 
 */
function getBlock(index) {
  	//add your code here
      be.blockIndex(index) //we get hash by height
      .then((result) => {
          let Hash = JSON.parse(result).blockHash;

          be.block(Hash) //gets block by block hash
          .then((res)=> {
              console.log(res);
          })
          .catch((error) => {
              console.log(error)
          })
      })
      .catch((err)=> {
          console.log(err);
      })
}

/**
 * Function to execute the `getBlock(index)` function
 * Nothing to implement here.
 */

(function theLoop (i) {
	setTimeout(function () {
        getBlock(i);
        i++;
		if (i < 3) theLoop(i);
	}, 3000);
  })(0);