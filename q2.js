function rateLimiter(limit, interval){
    let calls = 0;
    let timeoutId = null;
    return function(){
        if(calls >= limit){
            console.log("Blocked: Rate limit exceeded.");
            return false;
}
calls++;
if(calls === 1){
    timeoutId = setTimeout(()=>{
        calls = 0;
        timeoutId = null;
        console.log("Rate limit reset.");
    }, interval);
}
console.log("Allowed: Function executed.");
return true;
    };
}