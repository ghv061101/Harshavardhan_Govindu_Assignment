function generateSeries(a){
    let count=(a%2 === 0) ? a - 1 : a;
    let result=[];
    
    for(let i=0;i<count;i++){
        result.push(2*i+1);
    }
    console.log(result.join(', '));
}

generateSeries(1);
generateSeries(2);
generateSeries(3);
generateSeries(4);
generateSeries(5);
