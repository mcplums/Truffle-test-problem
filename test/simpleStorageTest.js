var SimpleStorage = artifacts.require('SimpleStorage')



contract('SimpleStorage', async (accounts) => {

	console.log(accounts[0]);
    
    it('Calling set(x) should set storedData in storage to x', async() => {
    	console.log(accounts[0]);
        // let newValue = 2;
        // let instance = await SimpleStorage.deployed()
    
        // instance.set(newValue, {from: accounts[0]})
        // let returnedValue = await instance.storedData.call()
    
        // assert.equal(newValue, returnedValue, "The returned value should equal the new value.")
    })

})