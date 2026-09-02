
function counterUpdate(start){
    let count = start;
     function increment(){
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count);
    }
    return{increment,decrement};
    
}

let counter = counterUpdate(10);

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();


