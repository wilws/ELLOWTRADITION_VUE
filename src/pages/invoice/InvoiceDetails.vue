<template>

    <alert-component v-show="msg">{{msg}}</alert-component>

<section class="section-4">
    <!-- cart-summary -->
    <div class="cart-summary">
        <h1>Invoice</h1>
        <ul>
            <li class="date">Date: {{invoice.date.day}} {{invoice.date.mEng}} {{invoice.date.year}}</li>
            <!-- <li class="date">{{invoice.ddate.day}}</li> -->
            <li class="invoiceId">Invoice No:<br> <span>{{ invoice._id }}</span></li>
            
            <li class="total-item">Total Item : <span>{{ invoice.noOfItem }}</span></li>
            <li class="product-amount">Product :  <span>$ {{ invoice.productTotal }}</span></li>
            <li class="vat">VAT : <span>$ {{ invoice.vat }}</span></li>
            <li class="shipping">Shipping :  <span>$ {{ invoice.shipping }}</span></li>
        </ul>
        <div class="line"></div>
        <div class="total-amount-wrapper">
            <h3>Total :</h3>
            <div class=total-amount>$ {{ invoice.total }}</div>
        </div>
    </div>
    <!-- End of cart-summary -->

    <!-- cart-item -->
    <div class="cart-items">
        <ul v-for="product in invoice.products" :key="product._Id">
            <li  class="cart-item">
                <div class="name">{{product.name}}</div>
                <div class="price">Unit price: <br>$ {{product.price}}</div>
                <div class="qty">Qty : <br> {{product.quantity}}</div>
                <div class="subtotal">Subtotal: <br>$ {{product.subTotal}}</div>
            </li>
        </ul>
    </div>
    <!-- End of cart-items -->

</section>
</template>




<script>


import InvoiceHandler from "../../middlewares/invoiceMiddlewares.vue";
import alertComponent from '../../components/alertComponent.vue';
import AuthMiddlewares from "../../middlewares/authMiddlewares.vue";
export default {

    components: { alertComponent },
    mixins:[InvoiceHandler,AuthMiddlewares],
    
    data(){
        return {
            invoice:"",
            msg:"",
            showMsg:false
        }
    },
    Watch:{
        msg(){
            this.showMsg = true
        }
    },

    async created(){
        try{
            const InvoiceId = this.$route.params.invoiceId;
            this.invoice= await this.InvoiceHandler("View",InvoiceId);
            console.log(this.invoice)
            
        } catch(error){
            console.log(error.statusCode)
        
              if (error.statusCode == 401){                               // If the error is 401, meaing that it is about authentication. (maybe token expired)
                  
                this.msg = `Error : ${error.message}. Maybe Token is expired. Please log in again`;      
                await this.AuthHandler("LogOut");  
                await new Promise(resolve => {setTimeout(() => { resolve('') }, 1000)})   // wait 5000s to redirect website to products 
                await this.$router.push({name:"products"});                               // after finished redirect
                window.location.reload();                                                 // re load page to update DOM
            }
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
    height:625px;
    min-height: 625px;
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
    font-size: 1.5rem;
    font-weight: 300;
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


.cart-summary .invoiceId{
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    margin-bottom: 6rem;
}

.cart-summary .invoiceId span{
    letter-spacing: 0.2rem;
        text-align: left;
    width: 100%;
    padding-left: 4rem;

}

.cart-summary .date{
    font-weight: 400;
    letter-spacing: .2rem;
    margin-top: 0rem;
    font-size: 1.4rem;
        margin-bottom: 0rem;
}
.cart-summary .total-item{
        /* font-weight: 400;
    letter-spacing: .5rem;
   */
}
.cart-summary .product-amount{
      /* margin: 1.2rem 0rem; */
}
.cart-summary .vat{
      /* margin: 1.2rem 0rem; */
}
.cart-summary .shipping{
      /* margin-top: 1.2rem;
      margin-bottom: 5rem; */
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
    width:100%;
    height: 100%;
    font-family: 'Srisakdi', cursive;
    font-weight:500;
    text-align: center;
    font-size: 4rem;
    color: azure;
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
    position: relative;
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
     /* transform-style: preserve-3d; */
      /* transform-style: preserve-3d; */
     /* overflow: hidden; */
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
    padding-left: 1rem;
}

.cart-item .price{
    text-align: center;
    width:14rem;
    font-size: 1.43rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}



.cart-item .qty{
    text-align: center;
    font-size: 1.5rem;
    width:9rem;
}



.cart-item .subtotal{
    width:14rem;
    text-align: center;
    font-size: 1.5rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}
/* End of cart-item */

/* End of Section 4 */


/* Responsive */

@media(max-width: 1080px){
    .cart-item .name{
        width: 14rem;
        margin-right: 5rem;
    }
}

@media(max-width: 1000px){
    .cart-item .name{
        width: 8rem;
    }
}

@media(max-width: 940px){
    .cart-item .name{
        width: 0rem;
    }
}

@media(max-width: 900px){
    .section-4{
        flex-direction: column;
        overflow: scroll;
    }
    .cart-items {
        width: 95%;
        margin-left:0;
        /* padding: 0.7rem 2rem 2rem 1rem; */
        padding: 0;
        overflow: unset;
        height: auto;
    }
    .cart-item .name{
        width: 33rem;
        margin-right: 5rem;
    }
    .cart-summary{
        width: 95%;
        height: 99vh;
        margin-bottom: 21px;
    }
}

@media(max-width: 700px){
    .cart-item .name{
        width: 20rem;
    }
}

@media(max-width: 520px){
    .cart-item .name{
        position: absolute;
        top: 1.5rem;
        width: 85%;
        font-size: 1.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        left: 1.5rem;
        font-weight:300;
    }

    .cart-item .subtotal{
        /* position: absolute;
        right: 0;
        bottom: 0; */
        font-weight: bold;
    }

    .cart-item{
        height:12rem;
        padding-top: 4rem;
    }


    .cart-summary ul li{
        font-size: 1rem;
        letter-spacing: 0.3rem;
    }

    .cart-summary .total-amount-wrapper .total-amount{
        font-size:3rem;
    }
}


@media(max-width: 435px){
    .cart-item .name{
        left: 0.1rem;
    }
}

@media(max-height:800px){
    .cart-summary .checkout-btn{
        margin-top: 6rem;
        width: 100%;
        height: 6rem;
    }
}
/* End of Responsive */

</style>