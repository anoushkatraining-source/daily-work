// class user{
//     name="Anoushka";
// }
// const u1=new user();
// console.log(u1.name);
// let i=true;
// let str=i.toString();

/********************** */

// const user1 = {
//     name: 'Anoushka',
//     age: 22,
//     address: {
//         house: 25,
//         street: "Radharani Para"
//     }
// };
// console.log(user1.name)

/**************** */


// const users=[
//     {"id":1,"user":'A', "active":true},
//     {"id":2,"user":'B', "active":false},
//     {"id":3,"user":'C', "active":true}
// ];
// let count=0;
// console.log(users[0].name);
// function CountActive(){
// for(let i=0;i<users.length;i++){
//     if(users[i].active==true)
//         {
//             count+=1;
//         }
// }
// return count;
// }
// console.log(CountActive());



/**** */

const users=[
    {"id":1,"user":'A', "active":true},
    {"id":2,"user":'B', "active":false},
    {"id":3,"user":'C', "active":true}
];
user.array.forEach(element => {
    users.active=!users.active;

    }
);