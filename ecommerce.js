const carticon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartclose = document.querySelector("#cart-close");

carticon.addEventListener("click", () => {
  cart.classList.add("active");
});
cartclose.addEventListener("click", () => {
  cart.classList.remove("active");
});
//while clicking on icon that will move to cart

const addcartbutton = document.querySelectorAll(".add-cart");
addcartbutton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productbox = e.target.closest(".product-box");
    addtoCart(productbox);
   
  });
});
// provideus deails of carts like name and price
const cartcontent=document.querySelector(".cart-content");
const addtoCart = (productbox) => {
  const productimgaddress = productbox.querySelector("img").src;
  const producttitle = productbox.querySelector(".produc-title").textContent;
  const productprice = productbox.querySelector(".price").textContent;
  const cartitem=document.querySelectorAll(".cart-product-title");
  for(let item of cartitem)
    if(item.textContent===producttitle){
      alert("this item is already in the cart.");
      return;
    };
  const cartbox = document.createElement("div");
  cartbox.classList.add("cart-box");
  cartbox.innerHTML = `
    <img src="${productimgaddress}" alt="" class="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title">${producttitle}</h2>
                    <span class="cart-price">${productprice}</span>
                    <div class="cart-quantity">
                        <button id="decrement">-</button>
                        <span  class="number">1</span>
                        <button id="increment">+</button>
                    </div>
                </div>
                 <i class="fa-solid fa-trash cart-remove"></i>`;
    cartcontent.appendChild(cartbox);
    cartbox.querySelector(".cart-remove").addEventListener("click",()=>{
      cartbox.remove();
      updatetotalprice();
    });

    cartbox.querySelector(".cart-quantity").addEventListener("click",(e)=>{
      const Numbershow=cartbox.querySelector(".number");
      const decrement=cartbox.querySelector("#decrement");
      let quantity=Numbershow.textContent;
      if(e.target.id==="decrement" && quantity>1){
        quantity--;
      }
      if(quantity===1){decrement.style.color="#999";

      }else if(e.target.id === "increment"){
        quantity++ 
      };
      Numbershow.textContent=quantity;
      sessionStorage.setItem("number",quantity)
      updatetotalprice()
    });
    sessionStorage.setItem("name",producttitle)
 updatetotalprice()
 
};
const updatetotalprice=()=>{
  const totalpriceelement=document.querySelector(".total-price");
  const cartboxes=document.querySelectorAll(".cart-box");
  let total=0;
  cartboxes.forEach((cartbox)=>{
    const pricelement=cartbox.querySelector(".cart-price");
    const quantityelement=cartbox.querySelector(".number");
    const price=pricelement.textContent.replace("$","");
    const quantity= quantityelement.textContent;
    total += price*quantity;
  });
  totalpriceelement.textContent=`$${total}`;
  sessionStorage.setItem("total",total)
};
const buy=document.querySelector(".btn-buy");
buy.addEventListener("click",()=>{
  const cartitem=document.querySelectorAll(".cart-box")
  console.log(cartitem)
if(cartitem.length ===0){ alert("your cart is empty please shome some of the items");}
   else{
    alert("thsnks for your shopping");
    cartcontent.remove();
   updatetotalprice(0)}
});


