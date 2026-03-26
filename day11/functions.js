let v=0;
function add(){
    console.log(arguments);
    for(let i=0;i<arguments.length;i++){
        v+=arguments[i];
    }
    
    return v;
}
const result=add(2,3,6,6);
console.log(result);