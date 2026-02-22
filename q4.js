async function runSequential(tasks, delay) {
    const results = [];
    try{
        for(const [index, task] of tasks.entries()){
            const result = await task();
            results.push(result);
            if(index < tasks.length - 1){
                await sleep(delay);
        }
    }
    } catch(error){
        throw error;
    }
    return results;
}