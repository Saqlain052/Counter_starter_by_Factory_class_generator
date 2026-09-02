
class CounterUpdate{

    constructor (start){
        this.count = start;
    }
    increment(){
        this.count++;
        console.log(this.count);
    }
    decrement(){
        this.count--;
        console.log(this.count);
    }
}

let counter = new CounterUpdate(10);

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();



