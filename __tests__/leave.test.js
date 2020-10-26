const parkingLot = require('./../src/parking-lot');

test('no car parked', async() => {
    const expectedResult = `parking not initiated`;
    let result = await parkingLot.leaveParking('KA-01-HH-3141', 4)
    console.log(result);
    expect(result).toBe(expectedResult);
})

// test('leave KA-01-HH-3141 4', async() => {
//     const expectedResult = `Registration number KA-01-HH-
//     3141 with Slot Number 6 is free with Charge 30`;
//     let result = await parkingLot.leaveParking('KA-01-HH-3141', 4)
//     console.log(result);
//     expect(result).toBe(expectedResult);
// })