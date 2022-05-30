// On clicking remove button the item should be removed from DOM as well as localstorage.

let storeData = JSON.parse(localStorage.getItem('coffee'));

console.log(storeData)


displayData(storeData)
function displayData(data){
    let bag = document.getElementById('bucket')
    data.map((el, i)=>{
        
        let box = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.image;

        let description = document.createElement('p');
        description.innerText = el.description;
        

        let price = document.createElement('p');
        price.innerText = 'Rs. '+el.price;
        price.style.fontWeight = 'bolder'

        let title = document.createElement('p');
        title.innerText = el.title;
       
        let btn = document.createElement('button');
        btn.innerText = "Remove";
        btn.setAttribute('id', 'remove_coffee')
        btn.addEventListener('click', function(){
            removeFromBucket(el, i);
        })
    
        box.append(img, description, price, btn);
    bag.append(box)
    
});

}


let totalcount = storeData.reduce((ac, el)=>{
    return ac+el.price;
},0);

let total = document.querySelector('#total_amount');
total.innerText = totalcount;

function removeFromBucket(el, i){
    storeData.splice(el, 1);
    localStorage.setItem('coffee', JSON.stringify(storeData));
    window.location.reload();
    displayData(storeData);
}