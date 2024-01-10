self.onmessage = function(){
    let x = 1;
    for(let i = 1 ; i < 100000000 ; i++){
        x *= i;
    }
    self.postMessage(x);
}