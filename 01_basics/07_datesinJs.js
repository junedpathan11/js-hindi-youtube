// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleTimeString());

//console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 24);
//console.log(myCreatedDate.toDateString());


//let myCreatedDate = new Date(2024, 0, 24, 8, 3);
//console.log(myCreatedDate.toLocaleString());
//let myCreatedDate = new Date("2024-01-03");
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-9-2024");
//console.log(myCreatedDate.toLocaleString());


let myStamp = Date.now()

//console.log(myStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
//`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})