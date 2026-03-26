function printPyramid(){
    for(let i=1;i<=5;i++){
        for(let j=5;j>=i;j--){
        console.log("*");
        }
        console.log("\n")
    }
}
printPyramid()