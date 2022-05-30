document.querySelector('#confirm').addEventListener('click', myFunction)
function myFunction(){
    
    orderAccept().then(prepared).then(packed).then(delivery).then(delivered);

}

function orderAccept(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            alert("Your order is accepted");
            resolve();
        },0);
    });
}
function prepared(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            alert("Your order is being Prepared");
            resolve();
        },3000);
    });
}

function packed(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            alert("Your order is being Packed");
            resolve();
        },8000);
    });
}

function delivery(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            alert("Your order is out for delivery");
            resolve();
        },10000);
    });
}
function delivered(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            alert("Order delivered");
            resolve();
        },12000);
    });
}



