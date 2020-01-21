var SHA256 = require("crypto-js/sha256");


const data1 = "Blockchain Rock!";
const dataObject = {
    id: 1,
    body: "With Object Works too",
    time: new Date().getTime().toString().slice(0, -3)
};


function generateHash(obj) {
    let a = JSON.stringify(obj) ///always a good practice to convert an object to String 
    return SHA256(a);
}

console.log(`SHA256 Hash: ${generateHash(data1)}`); //this will give a constant hash value
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`); //will generate differecnt values each time as