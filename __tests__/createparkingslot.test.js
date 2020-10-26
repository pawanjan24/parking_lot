const parkingLot = require('./../src/parking-lot');

test('should create parking slots', async() => {
    const expectedResult = `Created parking lot with 6 slots`;
    let result = await parkingLot.createParkingLot(6);
    console.log(result);
    expect(result).toBe(expectedResult);
})