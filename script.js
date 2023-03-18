let counter = document.getElementById('counter')
let count = 0;

function btn(button){
    if(button == 'btnIncrement'){
        count += 1;
    }
    if(button == 'btnDecrement'){
        count -= 1;
    }
    if (button == 'reset'){
        count = 0;
    }
    counter.innerHTML=count;
}