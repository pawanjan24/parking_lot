const { calculateCharge } = require('./util/util');
let cars = [];
let maxParkingSize = 0;
let availableSlots = [];

const createParkingLot = async(lot) => {
    try {
        maxParkingSize = parseInt(lot);

        for(let i = 1; i <= maxParkingSize; i++){
            availableSlots.push(i)
        }
        let parkingLength = availableSlots.length;
        return `Created parking lot with ${parkingLength} slots`;
    }catch(error){
        return 'problem in lot number';
    }
}

const park = async(registrationNumber, color) => {
    if(maxParkingSize === cars.length){
        return 'Sorry, parking lot is full';
    }else {
        let ticketNumber = availableSlots[0];
        cars.push({
            'slot': ticketNumber,
            'registrationNo': registrationNumber,
            'color': color
        })

        availableSlots.shift();

        return `Allocated slot number: ${ticketNumber}`;
    }
}

const leaveParking = async(registrationNo, hours) => {
    if(maxParkingSize === 0){
        return `parking not initiated`;
    }else if(cars.length > 0){
        const slot = await getSlotNumberFromRegistrationNumber(registrationNo);

        availableSlots.push(slot);
        availableSlots.sort();

        const charge = await calculateCharge(hours);
        
        return `registration number ${registrationNo} 
                with slot number ${slot} is free with charge ${charge}`;
    }
}

const status = async() => {
    if(maxParkingSize === 0){
        return `Sorry, parking lot is full`;
    }else if(cars.length > 0){
        console.log('Slot No. \t Registration No.')
        cars.forEach((row) =>{
            console.log(row.slot + "\t  "+ row.registrationNo);
        })
    }else {
        console.log(`parking lot is empty`);
    }
}

const getSlotNumberFromRegistrationNumber = async(registrationNo) => {
    if(maxParkingSize === 0){
        return `parking size not initialized`;
    }else if(cars.length > 0){
        let result;
        cars.forEach(function(row) {
            if(row.registrationNo === registrationNo){
                result = row.slot;
            }
        });
        if(result === undefined){
            return `Registration number ${registrationNo} not found`;
        }
        return result
    }else{
        return `Registration number ${registrationNo} found`;
    }
}
module.exports = {
    createParkingLot,
    park,
    leaveParking,
    status
}