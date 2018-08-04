/**
 * Demonstrate that in Solidity using a string as a map key makes gas usage data dependent.
 */
const Maps = artifacts.require("./Maps.sol");


contract('Mappings: Gas Usage with String key', function(accounts) {
    //                         1                                2                                3
    const definitelyOneWord = "1";
    const oneWord32Bytes    = "123456789012345678900123456789012";
    const twoWords64Bytes   = "123456789012345678900123456789012123456789012345678900123456789012";
    const threeWords96Bytes = "123456789012345678900123456789012123456789012345678900123456789012123456789012345678900123456789012";


    const zero = "0x0";
    const one = "0x1";


    it("setStringUint256: definitelyOneWord, zero", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(definitelyOneWord, zero);
        console.log("Gas Used (setStringUint256, definitelyOneWord, zero): " + transactionResult.receipt.gasUsed);


    });
    it("setStringUint256: definitelyOneWord, one", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(definitelyOneWord, one);
        console.log("Gas Used (setStringUint256, definitelyOneWord, one): " + transactionResult.receipt.gasUsed);
    });

    it("setStringUint256: oneWord32Bytes, zero", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(oneWord32Bytes, zero);
        console.log("Gas Used (setStringUint256, oneWord32Bytes, zero): " + transactionResult.receipt.gasUsed);


    });
    it("setStringUint256: oneWord32Bytes, one", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(oneWord32Bytes, one);
        console.log("Gas Used (setStringUint256, oneWord32Bytes, one): " + transactionResult.receipt.gasUsed);
    });

    it("setStringUint256: twoWords64Bytes, zero", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(twoWords64Bytes, zero);
        console.log("Gas Used (setStringUint256, twoWords64Bytes, zero): " + transactionResult.receipt.gasUsed);


    });
    it("setStringUint256: twoWords64Bytes, one", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(twoWords64Bytes, one);
        console.log("Gas Used (setStringUint256, twoWords64Bytes, one): " + transactionResult.receipt.gasUsed);
    });

    it("setStringUint256: threeWords96Bytes, zero", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(threeWords96Bytes, zero);
        console.log("Gas Used (setStringUint256, threeWords96Bytes, zero): " + transactionResult.receipt.gasUsed);


    });
    it("setStringUint256: threeWords96Bytes, one", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(threeWords96Bytes, one);
        console.log("Gas Used (setStringUint256, threeWords96Bytes, one): " + transactionResult.receipt.gasUsed);
    });

    it("setStringUint256: one word multiple times, same location, one", async function() {
        let maps = await Maps.deployed();

        let transactionResult = await maps.setStringUint256(definitelyOneWord, one);
        console.log("Gas Used (setStringUint256, definitelyOneWord, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setStringUint256(definitelyOneWord, one);
        console.log("Gas Used (setStringUint256, definitelyOneWord, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setStringUint256(definitelyOneWord, one);
        console.log("Gas Used (setStringUint256, definitelyOneWord, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setStringUint256(definitelyOneWord, one);
        console.log("Gas Used (setStringUint256, definitelyOneWord, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setStringUint256(definitelyOneWord, one);
        console.log("Gas Used (setStringUint256, definitelyOneWord, one): " + transactionResult.receipt.gasUsed);
    });

    it("setStringUint256: one word multiple times, different locations, one", async function() {
        let maps = await Maps.deployed();
        const keyOne = "2";
        const keyTwo = "3";
        const keyThree = "4";
        const keyFour = "5";
        const keyFive = "6";


        let transactionResult = await maps.setStringUint256(keyOne, one);
        console.log("Gas Used (setStringUint256, keyOne, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setStringUint256(keyTwo, one);
        console.log("Gas Used (setStringUint256, keyTwo, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setStringUint256(keyThree, one);
        console.log("Gas Used (setStringUint256, keyThree, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setStringUint256(keyFour, one);
        console.log("Gas Used (setStringUint256, keyFour, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setStringUint256(keyFive, one);
        console.log("Gas Used (setStringUint256, keyFive, one): " + transactionResult.receipt.gasUsed);
    });


    it("setUint256Uint256: multiple times, different locations, one", async function() {
        let maps = await Maps.deployed();
        const keyOne = "1";
        const keyTwo = "2";
        const keyThree = "3";
        const keyFour = "4";
        const keyFive = "5";


        let transactionResult = await maps.setUint256Uint256(keyOne, one);
        console.log("Gas Used (setUint256Uint256, keyOne, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setUint256Uint256(keyTwo, one);
        console.log("Gas Used (setUint256Uint256, keyTwo, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setUint256Uint256(keyThree, one);
        console.log("Gas Used (setUint256Uint256, keyThree, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setUint256Uint256(keyFour, one);
        console.log("Gas Used (setUint256Uint256, keyFour, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setUint256Uint256(keyFive, one);
        console.log("Gas Used (setUint256Uint256, keyFive, one): " + transactionResult.receipt.gasUsed);
    });

    it("setUint256Uint256: multiple times, same location, one", async function() {
        let maps = await Maps.deployed();
        const keyOne = "1";
        const keyTwo = "1";
        const keyThree = "1";
        const keyFour = "1";
        const keyFive = "1";


        let transactionResult = await maps.setUint256Uint256(keyOne, one);
        console.log("Gas Used (setUint256Uint256, keyOne, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setUint256Uint256(keyTwo, one);
        console.log("Gas Used (setUint256Uint256, keyTwo, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setUint256Uint256(keyThree, one);
        console.log("Gas Used (setUint256Uint256, keyThree, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setUint256Uint256(keyFour, one);
        console.log("Gas Used (setUint256Uint256, keyFour, one): " + transactionResult.receipt.gasUsed);
        transactionResult = await maps.setUint256Uint256(keyFive, one);
        console.log("Gas Used (setUint256Uint256, keyFive, one): " + transactionResult.receipt.gasUsed);
    });

    it("getStringUint256: one word, existing location", async function() {
        let maps = await Maps.deployed();
        let transactionResult = await maps.getStringUint256NotView(definitelyOneWord);
        console.log("Gas Used (getStringUint256, keyOne): " + transactionResult.receipt.gasUsed);
    });
    it("getStringUint256: one word, zeroed location", async function() {
        let maps = await Maps.deployed();
        const keyOne = "99";
        let transactionResult = await maps.getStringUint256NotView(keyOne);
        console.log("Gas Used (getStringUint256): " + transactionResult.receipt.gasUsed);
    });
    it("getStringUint256: two words, existing location", async function() {
        let maps = await Maps.deployed();
        let transactionResult = await maps.getStringUint256NotView(twoWords64Bytes);
        console.log("Gas Used (getStringUint256): " + transactionResult.receipt.gasUsed);
    });
    it("getStringUint256: three words, existing location", async function() {
        let maps = await Maps.deployed();
        let transactionResult = await maps.getStringUint256NotView(threeWords96Bytes);
        console.log("Gas Used (getStringUint256): " + transactionResult.receipt.gasUsed);
    });

    it("getUint256Uint256: existing location", async function() {
        let maps = await Maps.deployed();
        const keyOne = "1";
        let transactionResult = await maps.getUint256Uint256NotView(keyOne);
        console.log("Gas Used (getUint256Uint256): " + transactionResult.receipt.gasUsed);
    });

    it("getUint256Uint256: existing location", async function() {
        let maps = await Maps.deployed();
        const keyOne = "99";
        let transactionResult = await maps.getUint256Uint256NotView(keyOne);
        console.log("Gas Used (getUint256Uint256): " + transactionResult.receipt.gasUsed);
    });


});
