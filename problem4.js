function getMultiplesCount(numbers){
    
    let result={};
    
    for(let i=1;i<=9;i++){
        result[i]=0;
    }
    numbers.forEach(num =>{
        for(let i=1;i<=9;i++){
            if(num % i=== 0){
                result[i]++;
            }
        }
    });
    console.log(result);
}

let numbers=[1,2,8,9,12,46,76,82,15,20,30]
getMultiplesCount(numbers);
