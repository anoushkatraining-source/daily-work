const user={name:"john",age:20};
let jsonStr=JSON.stringify(user);
let temp=JSON.parse(jsonStr);
temp.isAdult=temp.age>=18;
let finalObj=temp;
console.log(finalObj);