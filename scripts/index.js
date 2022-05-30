// Add the coffee to local storage with key "coffee"

const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

let bucketdata = JSON.parse(localStorage.getItem('coffee')) ||[];
let counter = document.querySelector('#coffee_count');
counter.innerText = bucketdata.length;

fetch(url)
.then((res)=>{
    return res.json();
}) .then((res)=>{
    console.log(res)
    displayData(res.menu.data);
}).catch((err)=>{
    console.log(err)
})

function displayData(data){
    data.map((el,i)=>{

        let box = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.image;
        img.setAttribute('class', 'images')

        let description = document.createElement('p');
        description.innerText = el.description;

        let price = document.createElement('p');
        price.innerText = 'Rs. '+el.price;

        let title = document.createElement('p');
        title.innerText = el.title;
       
        let btn = document.createElement('button');
        btn.innerText = "Add to Bucket";
        btn.setAttribute = ('id', 'add_to_bucket')
        btn.addEventListener('click', function(){
            addTobucket(el);
        })
    
        
    box.append(img, description, price, btn);
    document.querySelector('#menu').append(box);
});
}

function addTobucket(el){
    bucketdata.push(el);
    localStorage.setItem('coffee', JSON.stringify(bucketdata));
    counter.innerText = bucketdata.length;
}