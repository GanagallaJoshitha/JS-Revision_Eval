function createCountdown(seconds, onTick, onComplete){
    let remainingSeconds = seconds;
    let intervalId = null;
    let isRunning = false;
    function tick(){
        if(remainingSeconds > 0){
            onTick(remainingSeconds);
            remainingSeconds--;
        }
        else{
            clearInterval(intervalId);
            onComplete();
        }
    }
    function start(){
        if(!isRunning){
            intervalId = setInterval(tick, 1000);
            isRunning = true;
            tick();
        }
    }
    start();
    return{
        pause(){
            clearInterval(intervalId);
            isRunning = false;
        },
        resume(){
            if(!isRunning){
                intervalId = setInterval(tick, 1000);
                isRunning = true;
            }
        }
    };
}