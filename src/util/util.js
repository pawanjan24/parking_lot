const calculateCharge = async(hour) => {
    let totalCharge = 10;
    if(hour > 2){
        let extraTime = hour - 2;
        let extraCharge = 10 * extraTime;
        totalCharge = totalCharge + extraCharge;
    }
    console.log(`totalcharge: ${totalCharge}`);
    return totalCharge;
}

module.exports = {
    calculateCharge
}