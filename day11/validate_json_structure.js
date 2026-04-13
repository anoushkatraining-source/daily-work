function validate(obj, requiredKeys){
    return requiredKeys.every(key=>key in obj);
}
const data={name:"john",age:25};

console.timeLog(validate(data,["name","age","email"]));