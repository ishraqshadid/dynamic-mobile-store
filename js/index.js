const phones = [
    { brand: "Samsung S24", price: 120000, camera: "200MP" },
    { brand: "iPhone 15", price: 135000, camera: "48MP" },
    { brand: "Xiaomi Note 13", price: 25000, camera: "108MP" },
    { brand: "Pixel 8", price: 85000, camera: "50MP" },
    { brand: "Honor", price: 55000, camera: "50MP" },
    { brand: "OnePlus 12", price: 70000, camera: "64MP" }
];

const container = document.getElementById('phone-container');

let cartCount = 0; 
let cartTotal = 0;

const addToCart = (price) =>{
     cartCount++;
     cartTotal+=price;

     document.getElementById('count').innerText = cartCount;
     document.getElementById('total').innerText = cartTotal;

     console.log("Added product with prrice:", price);
}

const clearCart = () => {
    cartCount = 0;
    cartTotal = 0;
     
    document.getElementById('count').innerText = cartCount;
    document.getElementById('total').innerText = cartTotal;

    console.log("cart cleared successfully!");
}

const placeOrder = ()=>{
    if (cartCount === 0) {
        alert ("Your cart is empty. Please Buy first..!")
    } else {
        alert ("Congratulations, order successfull! Total bill is:" + cartTotal +"Taka")
    }
}

for ( const phone of phones) {

    const div = document.createElement('div');
    div.classList.add('phone-card');

    div.innerHTML = `
    
    <h3>${phone.brand}</h3>
    <p class="price">Price: <strong> ${phone.price}</strong> Taka
    <p>Camera: ${phone.camera}
    <button onClick="addToCart(${phone.price})" >Buy Now</button>

    `;

    container.appendChild(div);
}