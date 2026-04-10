//without async
console.log("start");
let data=fetchdata();
console.log(data);
console.log("end");

////////////////////////////////////////

//with async
console.log("start"); 
fetchdata().then((data)=>{  //start end data 
    console.log(data);
});
console.log("end");

////////////////////////////////////////

//witout promise
console.log("start");
let promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("data fetched successfully");
    }
    else{
        reject("failed to fetch data");
    }
});

///////////////////////////////////////////////////////

//with promise
console.log("start"); 
let newPromise =new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("data fetched successfully");
    }
    else{
        reject("failed to fetch data");
    }
});
promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

///////////////////////////////////////////////////////

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data fetched successfully");
        }, 2000);
    });
}
async function main(){
    console.log("start");
    let data=await getData();
    console.log(data);
    console.log("end");
}
main();

