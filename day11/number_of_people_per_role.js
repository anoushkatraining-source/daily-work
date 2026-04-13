const user=[
    {name:"A",role:"admin"},
    {name:"B",role:"user"},
    {name:"C",role:"admin"}
];

const freq=user.reduce((result,user)=>{
    result[user.role]=(result[user.role]||0)+1;
    return result;
}, {});
console.log(freq);