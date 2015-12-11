/* Sync */
function add(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addClient(x,y){
    console.log("[SC] triggering add with ", x," and ", y);
    var result = add(x,y);
    console.log("[SC] result = ", result);
}
/* Async */

/*function addAsync(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        return result;
    },0)
    
}

function addAsyncClient(x,y){
    console.log("[SC] triggering add with ", x," and ", y);
    var result = addAsync(x,y);
    console.log("[SC] result = ", result);
}*/

function addAsyncCallback(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        if (typeof onResult === 'function')
            onResult(result);
    },0)
    
}

function addAsyncCallbackClient(x,y){
    console.log("[SC] triggering add with ", x," and ", y);
    addAsync(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

/* Events */
var addAsyncEvents = (function(){
    var _callbacks = [];
    function add(x,y){
        console.log("[SP] processing ", x , " and ", y);
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            _callbacks.forEach(function(callback){
                callback(result);
            })
        },3000);
    }
    function subscribeForResult(callbackFn){
        _callbacks.push(callbackFn);
    }
    return {
        add : add,
        subscribeForResult : subscribeForResult
    };
})();

/* Promises */
function addAsyncPromise(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result);
        },3000);
    });
    return promise;
}






