let sum = document.getElementById("sum");
let backg = document.getElementById("backg");
let multi = document.getElementById("multi");

let worker = new Worker("worker.js");
let worker1 = new Worker("worker1.js");

sum.onclick = function(){
    worker.postMessage("");
}

worker.onmessage = function (message){
    alert(message.data);
}

multi.onclick = function(){
    worker1.postMessage("");
}

worker1.onmessage = function (message){
    alert(message.data);
}

backg.onclick = function(){
    if(document.body.style.background !== 'green'){
        document.body.style.background = 'green';
    }else{
        document.body.style.background = 'blue';
    }
}



