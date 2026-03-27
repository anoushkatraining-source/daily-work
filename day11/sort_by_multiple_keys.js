const user=[
    {name:"A",age:20},
    {name:"B",age:30},
    {name:"C",age:18}
];

user.sort((a,b)=>{
if(a.age!==b.age)return a.age-b.age;
return a.name.localeCompare(b.name);
});
console.log(user);