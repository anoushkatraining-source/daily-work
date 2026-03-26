
const addAsArrow=(numbers)=>{
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        const element=numbers[i];
        sum+=element;
    }
    
    return sum;
}
console.log(addAsArrow([1,2,3]));