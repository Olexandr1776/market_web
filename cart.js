let cart = JSON.parse(localStorage.getItem('cart') || '[]');


const message = document.getElementById("message");
const clearButton = document.getElementById("clear_cart_button");



function checkCart() {

    const existingButton = document.querySelector(".button_buy");
    const container = document.getElementById("produkt_container");

    if (cart.length === 0) {
        message.innerText = "Your cart is empty";
        if(existingButton){
            existingButton.remove();
        }
    } else {
        message.innerText = "";

        if(!existingButton){
            const button_buy = document.createElement("button");
            button_buy.classList.add("button_buy");
            button_buy.innerText = "Buy Now"; 
            container.appendChild(button_buy);
        }

    }
}

function clearCart() {
    clearButton.addEventListener('click', () => {
        cart.length = 0;
        localStorage.setItem('cart', JSON.stringify(cart));


        const container = document.getElementById("produkt_container");
        container.innerHTML = ""; 

        checkCart();
    });
}

function ShowProdukts(){
    for(let i = 0; i < cart.length; i++){
        const div = document.createElement("div");
        div.classList.add("my-block");

        const name = document.createElement("p");
        name.textContent = `${cart[i].name}`;
 
        const img = document.createElement("img");
        img.src = cart[i].img;
        img.classList.add("product-image");


        const price = document.createElement("p");
        price.textContent = `${cart[i].price} $`;
        

        const container = document.getElementById("produkt_container");
        console.log(div);

        const left = document.createElement("div");
        left.classList.add("left-part");

        
        left.appendChild(img);
        left.appendChild(name);
        div.appendChild(left);
        div.appendChild(price);

        container.appendChild(div); 
    }
}
function showSum() {
    let sum_text = document.querySelector(".summ_text");
    const container = document.getElementById("produkt_container");
    let sum = 0;


    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price;
    }


    if (cart.length === 0) {
        if (sum_text) sum_text.remove();
        return;
    }

    if (!sum_text) {
        sum_text = document.createElement("p");
        sum_text.classList.add("summ_text");
        container.appendChild(sum_text);
    }


    sum_text.textContent = `AMOUNT SUM OF GOODS ${sum} $`;
}


showSum();
ShowProdukts();
checkCart();
clearCart();
