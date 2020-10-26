const parkingLot = require('./../src/parking-lot');

// beforeAll(async() => {

// })

beforeAll(async() => {
    await parkingLot.createParkingLot(6);
})
// test('park KA-01-HH-1234 white', async() => {
//     const expectedResult = `Sorry, parking lot is full`;
//     let result = await parkingLot.park('KA-01-HH-1234', 'white')
//     console.log(result);
//     expect(result).toBe(expectedResult);
// })

test('park KA-01-HH-1234 white', async() => {
    const expectedResult = `Allocated slot number: 1`;
    let result = await parkingLot.park('KA-01-HH-1234', 'white')
    console.log(result);
    expect(result).toBe(expectedResult);
})

test('park KA-01-HH-9999 black', async() => {
    const expectedResult = `Allocated slot number: 2`;
    let result = await parkingLot.park('park KA-01-HH-9999', 'black')
    console.log(result);
    expect(result).toBe(expectedResult);
})

test('park KA-01-BB-0001 silver', async() => {
    const expectedResult = `Allocated slot number: 3`;
    let result = await parkingLot.park('park KA-01-BB-0001', 'silver')
    console.log(result);
    expect(result).toBe(expectedResult);
})

test('park KA-01-HH-7777 red', async() => {
    const expectedResult = `Allocated slot number: 4`;
    let result = await parkingLot.park('park KA-01-HH-7777', 'red')
    console.log(result);
    expect(result).toBe(expectedResult);
})

test('park KA-01-HH-2701 white', async() => {
    const expectedResult = `Allocated slot number: 5`;
    let result = await parkingLot.park('park KA-01-HH-2701', 'white')
    console.log(result);
    expect(result).toBe(expectedResult);
})

test('park KA-01-HH-3141 white', async() => {
    const expectedResult = `Allocated slot number: 6`;
    let result = await parkingLot.park('park KA-01-HH-3141', 'white')
    console.log(result);
    expect(result).toBe(expectedResult);
})