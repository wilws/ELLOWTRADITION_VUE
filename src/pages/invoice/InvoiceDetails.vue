<template>
<section class="section-4">

    <!-- cart-summary -->
    <div class="cart-summary">
        <h1>Invoice</h1>
        <ul>
            <li>{{ invoice._id }}</li>
            <li class="total-item">Total Item : <span>10</span></li>
            <li class="product-amount">Product : <span>$ 10,982</span></li>
            <li class="vat">VAT : <span>$ 19.82</span></li>
            <li class="shipping">Shipping :  <span>$ 299.8</span></li>
        </ul>
        <div class="line"></div>
        <div class="total-amount-wrapper">
            <h3>Total :</h3>
            <div class=total-amount>$ {{ invoice.total }}</div>
        </div>
        <!-- <button class="checkout-btn"  @click="checkout"> -->
            <!-- div<i class="fa-solid fa-money-check-dollar"></i> -->
            <!-- <p>Checkout ></p>
        </button> -->
    </div>
    <!-- End of cart-summary -->

    <!-- cart-item -->
    <div class="cart-items">
        <ul v-for="product in invoice.products" :key="product._Id">
            <li  class="cart-item">
                <div class="img">
                    <img :src="require(`@/assets/products/${product.imageUrl1}`)"/>
                </div>
                <div class="name">{{product.name}}</div>
                <div class="price">$ {{product.price.$numberDecimal}}</div>
                <div class="qty">Qty : {{product.quantity}}</div>
                <div class="subtotal">$ {{product.subtotal}}</div>
            </li>
        </ul>
    </div>
    <!-- End of cart-items -->

</section>
</template>



























<!-- 
<p>Invoice no: {{ invoice._id }}</p>
    <p>{{ invoice.createdAt }}</p>
    <ul v-for="product in invoice.products" :key="product.productId">
        <li> Product: {{product.name}}</li>
        <li> Price: {{product.price}}</li>
        <li> Quantity: {{product.quantity}}</li>
        <li> Subtotal: {{product.subtotal}}</li>
    </ul>
    <p>Total Amount: {{ invoice.total}}</p> -->




<script>


export default {
    
    data(){
        return {
            invoice:"",
            previousPath :null,
        }
    },




    async created(){

        
        if (this.$route.query.checkout){
            this.$store.dispatch('cart/clearCart')
            try{
                await this.$store.dispatch('orders/loadInvoices');
            } catch (err){
                console.log(err)
            }
        }
       
        const InvoiceId = this.$route.params.invoiceId;                // Get invoice id from the URl param
        let invoices = this.$store.getters['orders/getInvoices'];      // Get all the invoices from vuex
        const idx = invoices.findIndex(invoice =>{                     // Get the targeted invoice's index in the invoices array
            return invoice._id.toString() == InvoiceId                  
        });
        this.invoice = invoices[idx];                                  
      
    },

    methods:{

        // getInvoiceId(){
        //     this.invoideId = this.$route.query.invoideId;
        //     console.log(this.$route.query)
        // }

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
    perspective: 100rem;
}

.cart-summary h1{
    font-size: 4rem;
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
    font-size: 2rem;
    font-weight: 100;
    margin:3rem 0rem;
    text-align: left;
    letter-spacing: 0.8rem;
    font-family: 'IBM Plex Sans', sans-serif;
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
    font-size: 2rem;
    margin:4rem 0rem;
    text-align: left;
    font-weight:200;
    letter-spacing: 0.8rem;
    font-family: 'IBM Plex Sans', sans-serif;
}

.cart-summary .total-amount-wrapper .total-amount{
    position: relative;
    padding-top: 5rem;
    width:100%;
    height: 100%;
    font-family: 'Srisakdi', cursive;
    font-weight:500;
    text-align: center;
    font-size: 4rem;
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
    position: relative;
    margin-top: 13rem;
    width: 100%;
    height: 6rem;
    letter-spacing: 1rem;
    font-weight: 300;
    font-size: 1.8rem;
    color: gray;
      background-color: ivory;
    box-shadow: 0.2rem 0.4rem 0.5rem rgb(106 106 106);
    cursor: pointer;
    border-radius: 1rem;
    border: #868282 0.2rem solid;
    transition: transform .5s;
    overflow: hidden;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 2%;
    transition: transform 1s;
    
}

/* .cart-summary .checkout-btn p{
    position:absolute;
    width:100%;
    height: 100%;
    text-align: left;  
    z-index: 1;
    background-color: ivory;
} */

.cart-summary .checkout-btn i{
    position:absolute;
    width:100%;
    height: 100%;
    font-size: 5rem;
    color: gray;
    text-align: center;
    z-index: 3;
    background-color: ivory;
   
}



.cart-summary .checkout-btn::before{
    content:"";
    width: 33rem;
    height: 6rem;
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
}

.checkout-btn:hover {
    background-color: black;
    color:ivory
}

.checkout-btn:hover:before {
    animation:checkouthover 2s infinite;
}

@keyframes checkouthover {
    0%{
        transform:translateX(-15rem) skewX(20deg);
    }
    100%{
        transform:translateX(100rem) skewX(20deg);
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
    margin: 0 1rem;
    border: solid .2rem #80835f;
    border-radius: 1rem 1rem;
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

/* .cart-item .qtyController{

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
} */

/* .cart-item .qtyController:hover{
 background-color: #7D929B;
} */

/* .cart-item .qtyController .min{
    width:2rem;
    text-align: center;
    cursor: pointer;
} */

/* .cart-item .qtyController .qty{
    font-weight: 500;
} */

.cart-item .qty{
    font-size: 1.5rem;
}

/* .cart-item .qtyController .add{
    width:2rem;
    text-align: center;
    cursor: pointer;
} */

/* .cart-item .qtyController .add:hover,
.cart-item .qtyController .min:hover {
    font-size:2rem;
    font-weight: 300;
} */

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