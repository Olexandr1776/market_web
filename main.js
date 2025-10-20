let cart = JSON.parse(localStorage.getItem('cart') || '[]');

const products = [
    { name: "Phone X200", price: 200, img: "/Magasin/images/3215461.png"},
    { name: "Hoodi", price: 50, img: "/Magasin/images/6s23j303_7946_b.png"},
    { name: "Headphone", price: 200, img: "/Magasin/images/416ZUxb5TiL._UF1000,1000_QL80_.png"},
    { name: "Coffee Mug", price: 40, img: "/Magasin/images/51PTu8kBSJL._UF894,1000_QL80_.png"},
    { name: "Smart Watch", price: 200, img: "/Magasin/images/GW59.0153-1-518x518.jpg" },
    { name: "Headphone", price: 200, img: "/Magasin/images/GW59.0153-1-518x518.jpg"}
];

const cartnum = document.querySelector(".cart-count");

function updateCartCount() {
    cartnum.innerText = cart.length;
}

document.querySelectorAll('.button_main').forEach((button, index) => {
    button.addEventListener('click', () => {
        cart.push(products[index]);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    });
});

updateCartCount();
