<template>
<section class="section-4">

    <!-- cart-summary -->
    <div class="cart-summary">
        <h1>Cart</h1>
        <ul>
            <li class="total-item">Total Item : <span>10</span></li>
            <li class="product-amount">Product : <span>$ 10,982</span></li>
            <li class="vat">VAT : <span>$ 19.82</span></li>
            <li class="shipping">Shipping :  <span>$ 299.8</span></li>
        </ul>
        <div class="line"></div>
        <div class="total-amount-wrapper">
            <h3>Total :</h3>
            <div class=total-amount>$ 10,423</div>
        </div>
        <button class="checkout-btn"  @click="checkout">Checkout</button>
    </div>
    <!-- End of cart-summary -->

    <!-- cart-item -->
    <div class="cart-items">
        <ul v-for="item in cart" :key="item.productId">
            <li  class="cart-item">

                <div class="delete-btn">
                    <div class="line1"></div>
                    <div class="line2"></div>
                </div>
                
                <div class="img">
                    <img :src="require(`@/assets/products/${item.product.imageUrl1}`)"/>
                </div>
                <div class="name">{{item.name}}</div>
                <div class="price">$ {{item.price}}</div>
                <div class="qtyController">
                    <div class="min">-</div>
                    <div class="qty">{{item.quantity}}</div>
                    <div class="add">+</div>
                </div>
                <div class="subtotal">$ {{item.subtotal}}</div>
            </li>
        </ul>
    </div>
    <!-- End of cart-items -->

</section>

    <!-- <h1>This is Cart page</h1>


    <ul v-for="item in cart" :key="item.productId">
        <li>{{item.productId}}</li>
        <li>{{item.name}}</li>
        <li>{{item.quantity}}</li>
        <li>{{item.subtotal}}</li>
    </ul>

    <p>Total Price : {{ totalPrice}}</p>

    <button @click="checkout">Checkout</button> -->
</template>




<script>


import checkIndexPage from '../../mixins/checkIndexPage';
export default {
    mixins: [checkIndexPage],
    data() {
        return {
            cart:[],
            products:[],
            
        }
    },
   
    async created(){
        await this.loadProducts()
        this.cartInfoConstruction();  
        this.checkIndexPage();
    },

    computed:{
        totalPrice(){
            let i = 0;
            this.cart.forEach(item =>{
                i += item.subtotal;
            })
            console.log(this.cart)

            console.log(i)
            return i
        }
    },

    methods:{
        async loadProducts(){
            try{
                // await this.$store.dispatch('products/loadProducts');    
                this.products = this.$store.getters['products/products'];
            } catch(err){
                this.error = err.message || "O..Something goes wrong"
            }
        },

        cartInfoConstruction(){
            const productObj = JSON.parse(JSON.stringify(this.products)); 
            const cartObj = this.$store.getters['cart/getCart'];
            this.cart = cartObj.map((c) => {
                let a = productObj.find((p) => p._id == c.productId)   
                    return {
                        ...c,
                        price: +a.price.$numberDecimal,
                        name: a.name,
                        product : a,
                        subtotal: +c.quantity * +a.price.$numberDecimal
                    }
            });
            console.log(this.cart)       
        },

        checkout(){
            console.log('click checkout')
            this.$store.dispatch('cart/checkout');
        }
    }
}
</script>



<style scoped>
/* Section 4 - Cart */
.section-4{
    width:calc( 100% - 8rem);
    height:100vh;
    position: relative;
    display: flex;
    perspective: 100rem;
    /* justify-content: space-around;
    align-items: center; */
    padding-top: 2rem;
    padding-left: 2rem;
    margin-left:8rem;
}

/* cart-summary */
.cart-summary{
    position: relative;
    width:40rem;
    height:95vh;
    background-color: #7D929B;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-transform: uppercase;
    box-shadow: .2rem .2rem 1rem #000000;
    border-radius: 1rem;
    padding: 2rem;
}

.cart-summary h1{
    font-size: 5rem;
    font-weight: 200;
    letter-spacing: 1rem;
    margin: 1rem auto;
    color:#FFFCFC;
    text-align: center;
}

.cart-summary ul{
    
}

.cart-summary ul li{
    width:100%;
    color:#FFFCFC;
    font-size: 1.3rem;
    font-weight: 100;
    margin:3rem 0rem;
    text-align: left;
    letter-spacing: 0.8rem;
}

.cart-summary ul li span{
    position: absolute;
    right:2rem;
    text-align: right;
    /* letter-spacing: 0.5rem; */
}

.cart-summary .line{
    width:80%;
    height: .1rem;
    margin: 0 auto;
    background-color:#707070;
}

.cart-summary .total-amount-wrapper{

    letter-spacing: 1rem;
    font-size: 3rem;
    margin-top: 0.5rem;
}

.cart-summary .total-amount-wrapper h3{
    color:#FFFCFC;
    font-size: 3rem;
    margin:4rem 0rem;
    text-align: left;
    font-weight:200;
    letter-spacing: .4rem;
}

.cart-summary .total-amount-wrapper .total-amount{
    position: relative;
    padding-top: 3rem;
    width:100%;
    height: 100%;
    font-family: 'Srisakdi', cursive;
    font-size: 4rem;
    font-weight:500;
    text-align: center;
    font-size: 6rem;
    color: azure;
}

.total-amount::after{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:1rem;
    z-index: 8;
    background-color: rgba(255, 255, 255, 0.5);
}

.total-amount::before{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:1rem;
    background-color: rgba(211, 81, 81, 0.5);
}

.total-amount::before{}

.cart-summary .checkout-btn{
    /* position: absolute;
    bottom: 1rem; */
    position: relative;
    margin-top:10rem;
    width: 100%;
    height: 5.6rem;
    letter-spacing: 2rem;
    font-weight: 500;
    font-size: 2rem;
    color: rgb(250, 250, 250);
    background-color: lightsteelblue;
    box-shadow: 0.2rem 0.4rem 0.5rem rgb(106 106 106);
    cursor: pointer;
    border-radius: 5rem;
    border: #868282 0.2rem solid;
    transition: transform .5s;
    overflow: hidden;
    text-align: center;
    line-height: 5.6rem;
    text-transform: uppercase;
}



.cart-summary .checkout-btn::before{
    content:"";
    width: 95%;
    height: 5rem;
    height:5.6rem;
    position: absolute;
    top:0;
    left:-11%;
        background: 
  linear-gradient(
        to right, 
        rgba(255, 255, 255, 0.13) 0%,
        rgba(255, 255, 255, 0.13) 77%,
        rgba(255, 255, 255, 0.5) 92%,
        rgba(255, 255, 255, 0.0) 100%
    );
    opacity: 0.6;
    transform:skewX(20deg);
    /* transition: transform .5s; */
    /* animation: shinning 3s infinite; */
}


.checkout-btn:hover:before {
    animation: shinningCheckoutBtn 4s infinite;
}

@keyframes shinningCheckoutBtn {
    0%{
        transform:skewX(20deg) translate(-11rem) ;
    }
    90%{
        transform:skewX(20deg) translate(200rem);
    }
    100%{
        transform:skewX(20deg) translate(200rem);
    }
}

/* End of cart-sumary */


/* cart-item */
.cart-items{
    width:calc(100% - 40rem);
    height:95vh;
    margin-left:1.5rem;
    overflow: scroll;
    padding: .7rem 2rem 0rem 1rem;
    perspective: 100rem;

}

.cart-item{
    width: 100%;
    background-color: #FAFAFA;
    box-shadow: 1rem 1rem 1rem rgba(0,0,0, .3);
    border: rgba(112,112,112,.2) 0.1rem solid;
    border-radius: 1rem;
    height: 10rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #707070;
     /* animation:frontSwing 1s forwards; */
     transform-style: preserve-3d;
     /* overflow: hidden; */
}

.delete-btn{
    position:absolute;
    top:-0.4rem;
    z-index: 3;
    right:-0.6rem;
    width:2rem;
    height:2rem;
    background:white;
    border:thin solid rgba(0,0,0, .2);
    border-radius: 50%;
    box-shadow: rgba(0,0,0, .3);
    cursor: pointer;
   
    opacity: .7;
    transform:rotate(45deg);
     transition: all .5s;
}

.delete-btn div{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50% ,-50%);
    width:80%;
    height:0.05rem;
    border:#707070 0.01rem solid;
    border-radius: 15rem;
    background-color: rgba(0,0,0, rgba(0,0,0, .3));
}

.delete-btn .line1{
    transform:rotate(90deg) translate(-50%);
    transform-origin: left;
}

.delete-btn:hover{
    opacity:1;
    /* transform:scale(1.5); */
    background-color: rgb(245, 118, 118)
}


.cart-item .img{
    position: relative;
    width:8rem;
    height:8rem;
    min-width: 8rem;
    border: solid .05rem #707070;
    border-radius: 5rem 5rem;
    overflow: hidden;
    cursor: pointer;
}

.cart-item .img img{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit:cover;
}

.cart-item .name{
    width:30rem;
    font-size: 1.43rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}

.cart-item .price{
    width:8rem;
    font-size: 1.43rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}

.cart-item .qtyController{

    display: flex;
    align-items: center;
    justify-content: space-around;
    width:12.8rem;
    height:2.8rem;
    border: #707070 solid thin;
    border-radius:1.5rem;
    background-color: #797979;
    color:white;
    font-size:1.2rem;
    transition: background-color .5s;
}

.cart-item .qtyController:hover{
 background-color: #7D929B;
}

.cart-item .qtyController .min{
    width:2rem;
    text-align: center;
    cursor: pointer;
}

.cart-item .qtyController .qty{
    font-weight: 500;
}

.cart-item .qtyController .add{
    width:2rem;
    text-align: center;
    cursor: pointer;
}

.cart-item .qtyController .add:hover,
.cart-item .qtyController .min:hover {
    font-size:2rem;
    font-weight: 300;
}

.cart-item .subtotal{
    width:8rem;
    text-align: center;
    font-size: 1.5rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}
/* End of cart-item */

/* End of Section 4 */

</style>