This application is used to create a parking lot application.

# instruction to run the application

Install required dependencies, run command 

"npm install"

Run the application using below command
"node src/index.js <filename>"    

//provide the full filename path, file should contain the vehicle information.

To create parking lot, run as
create_parking_lot <capacity>

To park a vehicle, run as
park <registration_number> <color>

To leave a parking slot, run as
leave <registration_number> <hours>

To check parking status, run as 
status

Run testcases, use command
"npm run test"