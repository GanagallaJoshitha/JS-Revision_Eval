const timers = new Map();
let lastId = 0;
function mySetInterval(callback, delay){
    const id = ++lastId;
    function repeat(){
        callback();
        const timeoutId = setTimeout(repeat, delay);
        timers.set(id, timeoutId);
    }
    const initialTimeoutId = setTimeout(repeat, delay);
    timers.set(id, initialTimeoutId);
    return id;
}
function myClearInterval(id){
    if(timers.has(id)){
        clearTimeout(timers.get(id));
        timers.delete(id);
    }
}
