class Calculator{
    constructor(a,b,operation){
        this.a=a;
        this.b=b;
        this.operation=operation;
    }
    calculate(){
        switch(this.operation.toLowerCase()){
            case 'addition':
                return this.a+this.b;
            case 'subtraction':
                return this.a - this.b;
            case 'multiplication':
                return this.a * this.b;
            case 'division':
                if(this.b!==0){
                    return this.a / this.b;
                }else{
                    return 'Error: Division by Zero';
                }
            default:
                return 'Invalid operation';
        }
    }
}

const calc1=new Calculator(10,5,'addition');
console.log(calc1.calculate());
const calc2=new Calculator(10,5,'subtraction');
console.log(calc2.calculate());
const calc3=new Calculator(10,5,'multiplication');
console.log(calc3.calculate());
const calc4=new Calculator(10,5,'division');
console.log(calc4.calculate());
