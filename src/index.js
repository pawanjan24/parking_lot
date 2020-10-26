const fs = require('fs');
const { argv } = require('process');

const readline = require('readline');
const parking_lot = require('./parking-lot');
console.log(`reading argv`)
console.log(argv[2])
const rl = readline.createInterface({
    // input: process.stdin,
    input: fs.createReadStream(argv[2]),
    output: process.stdout
})

const initialize = () => {
    rl.on('line', async(input) => {
        
        input = input.split(" ")
        switch(input[0]) {
            case 'create_parking_lot':
                try {
                    const response = await parking_lot.createParkingLot(input[1]);
                    console.log(response);
                }catch(e){
                    console.log(`error! ${e}`)
                }
                break;
            
            case 'park':
                try {
                    const response = await parking_lot.park(input[1], input[2]);
                    console.log(response);
                }catch(e){
                    console.log(`error occurred in parking: ${e}`)
                }
                break;

            case 'leave':
                try {
                    const response = await parking_lot.leaveParking(input[1].trim(), input[2].trim());
                    console.log(response)
                }catch(e){
                    console.log(`error occurred in leave parking: ${e}`)
                }
                break;

            case 'status':
                try {
                    const response = await parking_lot.status();
                    console.log(response);
                }catch(error){
                    console.log(`error occurred: ${error}`)
                }
                break;
        }

    })
}

initialize();