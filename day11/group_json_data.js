const users=[
    {name:"A",role:"admin",salary:4000},
    {name:"B",role:"user",salary:3000}
];
function groupByRole(users){
const grouped=users.reduce((acc,user)=>{
    if(!acc[user.role]) acc[user.role]=[];
    acc[user.role].push(user);
    return acc;
},{});
console.log(grouped);
}

function groupBySalary(users){
const grp=users.reduce((arr,user)=>{
    if(!arr[user.salary]) arr[user.salary]=[];
    arr[user.salary].push(user);
    return arr;
},{});
console.log(grp);     
}
groupBySalary(users);
