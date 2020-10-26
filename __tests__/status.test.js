const parkingLot = require('./../src/parking-lot');

test('should create parking slots', async() => {
    const expectedResult = `Sorry, parking lot is full`;
    let result = await parkingLot.status();
    console.log(result);
    expect(result).toBe(expectedResult);
})