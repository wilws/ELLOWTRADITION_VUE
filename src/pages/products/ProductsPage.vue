<template>
    <section class="section-3">
        <div class="cart-diamond"><i class="fa-solid fa-gem"></i></div>
        
        <!-- roll (left part) -->
        <div class="roll">
            <ul>
                <li v-for="(product,index) in products" :key="product._id" class="product" @click="viewProduct(index, $event)" :ref="'li'+ index">
                    <img :src="require(`@/assets/products/${product.imageUrl1}`)" alt=""/>
                    <h3>{{ product.name }}</h3>
                </li>
            </ul>
        </div>
        <!-- End of roll -->
    


        <!-- showcase (right part) -->
        <div class="showcase">

            <!-- v-if : display logo -->
            <div v-if="!clickedProduct.isSet" class="logo">
                <div class="box">
                    <div class="front">
                        <img src="@/assets/black_logo.png" alt="">
                    </div>
                    <div class="back">
                        <img src="@/assets/black_logo.png" alt="">
                    </div>
                </div>
            </div>
            <!-- End of v-if -->
        
            <!-- v-else : display pitcture -->
            <div v-else class="display-product">
            
            <!-- <div class="display-product"> -->
            
                <!-- images-wrapper -->
                <div class="images-wrapper">

                    <div class="picture-frame">    
                        <div class="img-1-wrapper" v-bind:style="{ transform: `scale(${imagesStyle[0].scale}` }"><img v-bind:style="{ left: imagesStyle[0].left}" class="img-1" :src="require(`@/assets/products/${clickedProduct.imageUrl1}`)" alt=""/></div>
                        <div class="img-2-wrapper" v-bind:style="{ transform: `scale(${imagesStyle[1].scale}` }"><img v-bind:style="{ left: imagesStyle[1].left }" class="img-2" :src="require(`@/assets/products/${clickedProduct.imageUrl2}`)" alt=""/></div>
                        <div class="img-3-wrapper" v-bind:style="{ transform: `scale(${imagesStyle[2].scale}` }"><img v-bind:style="{ left: imagesStyle[2].left }" class="img-3" :src="require(`@/assets/products/${clickedProduct.imageUrl3}`)" alt=""/></div>
                        <div class="img-4-wrapper" v-bind:style="{ transform: `scale(${imagesStyle[3].scale}` }"><img v-bind:style="{ left: imagesStyle[3].left }" class="img-4" :src="require(`@/assets/products/${clickedProduct.imageUrl4}`)" alt=""/></div>
                        <div class="img-5-wrapper" v-bind:style="{ transform: `scale(${imagesStyle[4].scale}` }"><img v-bind:style="{ left: imagesStyle[4].left }" class="img-5" :src="require(`@/assets/products/${clickedProduct.imageUrl5}`)" alt=""/></div>
                    </div>

                    <button class="btn backward-btn" @click="showPreviousImage"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="btn forward-btn" @click="showNextImage"><i class="fa-solid fa-arrow-right"></i></button>

                    <button @click="addtoCart(clickedProduct._id)" class="cart-btn">add to cart</button>
                    
                    <div class="progress-wrapper">
                        <!-- <h2 class="progress"></h2> -->
                        <!-- <div class="circles-wrapper"> -->
                            <span class="circle-1"></span>
                            <span class="circle-2"></span>
                            <span class="circle-3"></span>
                            <span class="circle-4"></span>
                            <span class="circle-5"></span>
                        <!-- </div> -->
                    </div>

                    <div class="price-tag-wrapper">
                        <div class="rope-left"></div>
                        <div class="rope-right"></div>
                        <div class="knob"></div>
                        <div class="board">
                            <span class="price">USD $ {{ clickedProduct.price }}</span>
                        </div>
                    </div>
                </div>
                <!-- End of images-wrapper -->

                <!-- description -->
                <div class="description">
                    <h2>{{ clickedProduct.name }}</h2>
                    <p>{{ clickedProduct.description }}</p>

                </div>
                <!-- End of description -->
            </div>
            <!-- End of v-else -->
        </div>
        <!-- End of showcase -->

        
    </section>

    <!-- <button @click="clearCart()">Clear cart</button> -->


<!-- 
    <ul>
        <li v-for="(product, index ) in products" :key="product._id" >
            <h3>{{ product.name }}</h3>
            <h4>${{ product.price.$numberDecimal }}</h4>
            
            
          
            <div>
                <button @click="viewProduct(index)">View</button>
                <button @click="addtoCart(product)"> + </button>
                <button @click="deductfromCart(product)">  - </button>
                <button @click="removefromCart(product)"> Remove </button>
            </div>
        
       
        </li>
     
    </ul> -->
<!--
    <Teleport to="body">
        <div v-if="open" class="modal">
            <h3>{{ clickedProduct.name }}</h3>
            <h4>${{ clickedProduct.price }}</h4>
            <h4>{{ clickedProduct.description }}</h4>
            <button @click="open = false">Close</button>
        </div>
    </Teleport> -->

   
</template>



<script>
// import { defineComponent } from '@vue/composition-api'
import checkIndexPage from '../../mixins/checkIndexPage';
export default {
    mixins: [checkIndexPage],
    data() {
        return{
            error:"",
            productIsSet : false,
            clickedProduct : {
                isSet : false,
                name : String,
                id:String,
                price : Number,
                description : String,
                imageUrl1 : String,
                imageUrl2 : String,
                imageUrl3 : String,
                imageUrl4 : String,
                imageUrl5 : String,
            },
            imgNo : 0,
            img5 : "",
            img1 : "",
            images :[],
            products:[],
            imagesStyle:[
                {
                    scale:1.5,
                    left:"0vw"
                },
                {
                    scale:1.5,
                    left:"0vw"
                },
                {
                    scale:1.5,
                    left:"0vw"
                },
                {
                    scale:1.5,
                    left:"0vw"
                },
                {
                    scale:1.5,
                    left:"0vw"
                }
                
            ],

            cartAnimationinProgress : false
        }
    },

    mounted(){
        // Pre set the landing page
        this.viewProduct(1,false);
    },



    async created(){

        // await this.$store.dispatch('auth/LoginValidation')          // check if login valid. If not valid. will reset user data in veux 
        // await this.loadProducts()                                   // Load Products from database and store in veux
        this.products = this.$store.getters['products/products'];   // Get products from veux
        this.checkIndexPage();
    },

    methods:{
        async loadProducts(){
            try{
                await this.$store.dispatch('products/loadProducts');
            } catch(err){
                this.error = err.message || "O..Something goes wrong"
            }
        },


        async viewProduct(i, event){

            // When click the pic in roll area, show product in the right hand side.
            // If event is "False" meaning this function is not triggered by clicking but during mounted 

            const products = await document.querySelectorAll(".product");   
            products.forEach((product)=>{
                if (product.classList.contains("clicked")){                 // remove all ".clicked" class, so as to un-select the image
                    product.classList.remove("clicked")
                }
            });
            if (!event){                                                    
                products[0].classList.add("clicked");               
            }else{
                event.target.parentNode.classList.add("clicked");           // Add ".clicked" to the selected product in the roll area
            }
        

            this.imagesStyle.forEach((style)=>{                             // Reset the images's div and img  style 
                style.scale = 1.5;
                style.left = "0vw";
            })

            this.imgNo = 0;                                                 // Set the current display image as 0 (ready to show the first img)
            this.clickedProduct = {
                    isSet:true,
                    name : this.products[i].name,
                    id : this.products[i]._id,
                    price : this.products[i].price.$numberDecimal,
                    description : this.products[i].description,
                    imageUrl1 : this.products[i].imageUrl1,
                    imageUrl2 : this.products[i].imageUrl2,
                    imageUrl3 : this.products[i].imageUrl3,
                    imageUrl4 : this.products[i].imageUrl4,
                    imageUrl5 : this.products[i].imageUrl5,
            },
              
            
            this.$nextTick(() => {                                                  // After setting the clicked product :
                this.progressCircleController(0);                                   // Animation : Fill the first progress circle

                const img1 = document.querySelector(".img-1-wrapper");              // Animation : Rescale the first image
                img1.style.transition = "transform 1s";
                this.imagesStyle[0].scale = 1;

                
                const priceTag = document.querySelector(".price-tag-wrapper");      // Animation : swing the price tag
                if (!priceTag.classList.contains("animated")){                      // if class "animated" not attached
                    priceTag.classList.add("animated");                             // add it
                } 
                setTimeout(()=>{                                                    // Remove class "animated" after .31s
                    priceTag.classList.remove("animated");
                },3100)
            })    
        },

        progressCircleController(i){
            // Coloring the circle representating the current image
            document.querySelectorAll(".progress-wrapper span").forEach((circle)=>{
                circle.style.backgroundColor ="transparent";
            });
            document.querySelector(`.circle-${i+1}`).style.backgroundColor =  "#000";
        },


        showPreviousImage(){
            this.imgNo--;
            if(!this.firstAndlastImageControl(this.imgNo)){
                this.imagesStyle[this.imgNo].left = "0vw";       // display in-coming section
                this.imagesStyle[this.imgNo].scale =1;           // scale back in-coming section
                this.imagesStyle[this.imgNo + 1].scale =1.5;     // scale up the out-going section
            }
        },

        showNextImage(){
            this.imgNo++;
            if(!this.firstAndlastImageControl(this.imgNo)){
                this.imagesStyle[this.imgNo - 1].left = "-100vw";   // remove out-going section
                this.imagesStyle[this.imgNo].scale = 1;             // Scale back in-coming section
                this.imagesStyle[this.imgNo - 1].scale = 1.5;       // Re - Scale back out-going section
            }
        },

        firstAndlastImageControl(i){
            // Check if:
            // 1) is going to move forward beyond the last image (>4)
            // 2) is ging to move backward beyong the first imgae (<0)
            // if yes, return True

            let bool = false;
            
            if (i<0) {        
                let counter = 0
                this.imagesStyle.forEach((image)=>{
                    counter++;
                    console.log(counter)
                    if (counter > 4){
                        return
                    }
                    image.left="-100vw";
                });
                this.imgNo = 4;
                this.imagesStyle[0].scale = 1.5;
                this.imagesStyle[4].scale = 1;
                bool = true;
            }
            if (i>4) {
                this.imagesStyle.forEach((image)=>{
                    image.left="0vw";
                });
                this.imgNo = 0;
                console.log('reset imgNo:', this.imgNo);
                this.imagesStyle[4].scale = 1.5;
                this.imagesStyle[0].scale = 1;
                bool = true;
            } 
            this.progressCircleController(this.imgNo);
            return bool
            
        },

        addtoCartAnimation(){

            this.cartAnimationinProgress = true;                        // Prevent over trigger the function while the function is still in progress

            // Add rotation effect on "add to cart" button
            const cartBtn = document.querySelector(".cart-btn");
            cartBtn.classList.add("clicked");


            // Get cart icon's viewport
            const cartIcon = document.querySelector(".cart-icon");
            const cartIcon_viewport = cartIcon.getBoundingClientRect();
            const cartIcon_top = cartIcon_viewport.top;
            const cartIcon_left = cartIcon_viewport.left;
   
   
            // Get cart button's viewport
            const cartBtn_Viewport = cartBtn.getBoundingClientRect();
            const cartBtn_left = cartBtn_Viewport.left;
            const cartBtn_top = cartBtn_Viewport.top;


            // Set diamond moving path
            const originTop = `${cartBtn_top}px`;
            const originLeft =  `${cartBtn_left}px`;
            const distTop = `${cartIcon_top}px`;
            const distLeft =  `${cartIcon_left - 80}px`;
    
            document.documentElement.style.setProperty('--diamond-origin-top', originTop);
            document.documentElement.style.setProperty('--diamond-origin-left', originLeft);
            document.documentElement.style.setProperty('--diamond-dist-top', distTop);
            document.documentElement.style.setProperty('--diamond-dist-left', distLeft);

            // Add diamond effect 
            const diamond = document.querySelector(".cart-diamond");
            diamond.classList.add('move');
            cartIcon.classList.add('addCart');

            setTimeout(()=>{                                            // Finish all animation
                diamond.classList.remove('move');
                cartBtn.classList.remove("clicked");
                this.cartAnimationinProgress = false;
            },2000);
            setTimeout(()=>{
                cartIcon.classList.remove("addCart");
            },4000);
        },


        async addtoCart(p){

            if (this.cartAnimationinProgress){                           // If animation is still in progress, quite the function to stop further triggering
                return
            } 

            this.addtoCartAnimation()


            const a = this.$store.getters['cart/getCart']
            console.log("before add",JSON.parse(JSON.stringify(a)))
            try {
                 await this.$store.dispatch('cart/addtoCart',{
                    id : p._id,
                })

                const b = this.$store.getters['cart/getCart']
                console.log("after add",JSON.parse(JSON.stringify(b)))

              
                

            }catch(err){

                this.error = err.message || "Cannot add product into cart";
            }
        },
   
        async removefromCart(p){
            const a = this.$store.getters['cart/getCart']
            console.log("before remove",JSON.parse(JSON.stringify(a)))
            try {
                await this.$store.dispatch('cart/removeCart',{
                    id : p._id,
                });

                const b = this.$store.getters['cart/getCart']
                console.log("after remove",JSON.parse(JSON.stringify(b)))

            }catch(err){

                this.error = err.message || "Cannot add product into cart";
            }
        },

        async deductfromCart(p){
            const a = this.$store.getters['cart/getCart']
            console.log("before remove",JSON.parse(JSON.stringify(a)))
            try {
                await this.$store.dispatch('cart/deductCart',{
                    id : p._id,
                });

                const b = this.$store.getters['cart/getCart']
                console.log("after remove",JSON.parse(JSON.stringify(b)))

            }catch(err){

                this.error = err.message || "Cannot add product into cart";
            }

        },


        async clearCart(){
            const a = this.$store.getters['cart/getCart']
            console.log("before clear",JSON.parse(JSON.stringify(a)))
            try {
                await this.$store.dispatch('cart/clearCart')

                const b = this.$store.getters['cart/getCart']
                console.log("after clear",JSON.parse(JSON.stringify(b)))

            }catch(err){

                this.error = err.message || "Cannot add product into cart";
            }
        },

        
        
    }
}
</script>


<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: blanchedalmond;
}

/* Section 3 - Products */
.section-3{
    width:calc( 100% - 8rem);
    height:100vh;
    position: relative;
    display: flex;
    perspective: 100rem;
    margin-left:8rem;
}


/* roll (left side) */

.roll{
    position: relative;
    width:40rem;
    height:100%;
    background-color:rgba(125,146,155,.4) ;
    overflow: scroll;
}

.roll ul{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product {
    position: relative;
    width:90%;
    height: 26vh;
    background-color: white;
    border-radius: 1rem;
    margin-bottom:2rem;
    cursor: pointer;
    overflow: hidden;
    transition: all .1s;

}

.product.clicked{
    border: solid 0.5rem rgba(106,106,106,.8);
    transform:scale(1.05); 
}


.product h3 {
    position: absolute;
    bottom: 0;
    z-index: 10;
    align-items: center;
    width: 100%;
    height: 2rem;
    background-color: rgba(255,255, 255, 0.6);
    /* border-radius: 0 0 1rem 1rem; */
    font-weight: 200;
    text-align: left;
    line-height: 2rem;
    justify-content: end;
    font-size: 1;
    letter-spacing: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 1.1rem;
}

.product img {
    position: absolute;
    width:100%;
    height: 100%;
}


/* End of roll (left side) */


/* showcase (right side) */


.showcase {
    width: calc(100vw - 48rem);
    height:100%;
    background-color: white;
}

/* v-if */
.logo{
    position: relative;
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 100rem;
    background-color: #FAFAFA
}

.logo .box{
    position:absolute;
    width:21rem;
    height: 9rem;
    transform: rotateY(-45deg) rotateZ(45deg);
    transform-style: preserve-3d;
    animation: rotate 2s forwards;

}

@keyframes rotate {
    0%{
        transform: rotateY(0) translateY(-500%);
    }
    100%{
        transform: 
            rotateY(-380deg) 
            rotateZ(360deg)  
            translateY(-50%);
    }
    /* 80%{
         transform: 
            rotateY(720deg);
    }*/
    
}

.logo .box .front{
    width:100%;
    height: 100%;
    position: absolute;
    background-color: white;
    transform: translateZ(5rem);
    transform-style: preserve-3d;
    font-family: 'Hubballi', cursive;
    font-weight: 200;
    font-size: 0.5rem;
    letter-spacing: .7rem;
    border: whitesmoke solid;
}

.logo .box .back img,
.logo .box .front img{
    width:100%;
}

.logo .box .back img{
    transform: rotateY(180deg);
}

.logo .box .front:after{
    content: "REDISCOVER & SHAR";
   background-color: white;
    width:10rem;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    transform:rotateY(90deg);
    transform-origin: left;
    border: whitesmoke solid;
}

.logo .box .front:before{
    content: "REDISCOVER & SHAR";
    background-color: white;
    width:10rem;
    height: 100%;
    position: absolute;
    top:-2px;
    right:0;
    transform-origin: right;
    transform:rotateY(-90deg);
    border: whitesmoke solid;
}



.logo .box .back{
    width:100%;
    height: 100%;
    position: absolute;
    background-color: white;
    transform: translateZ(-5rem);
    transform-style: preserve-3d;
    font-family: 'Hubballi', cursive;
    font-weight: 200;
    font-size: 0.5rem;
    letter-spacing: .7rem;
    border: whitesmoke solid;
}

.logo .box .back:before{
   content: "REDISCOVER & SHAR";
   background-color: white;
    width:100%;
    height: 10rem;
    position: absolute;
    bottom:0;
    left:0;
    transform-origin: bottom;
    transform:rotateX(-90deg); 
    border: whitesmoke solid;
}

.logo .box .back:after{
    content: "REDISCOVER & SHAR";
    background-color: white;
    width:100%;
    height: 10rem;
    position: absolute;
    top:0;
    left:0;
    transform:rotateX(90deg); 
    transform-origin: top;
    border: whitesmoke solid;
}
/* End of v-if */ 


/* v-else */
.display-product{
    position: relative;
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    perspective: 100rem;
}

.display-product::before{
    width:100%;
    height:100%;
    content: "";
    background-color: white;
    position:absolute;
    top:0;
    right:0;
    border-left: black solid ;
    z-index: 102;
    animation: displayProduct 2s .2s forwards;
}

@keyframes displayProduct {
    0%{
        width:100%;
        /* opacity:1; */
        visibility: visible;
    }
    100%{
        width:0%;
        /* opacity:0; */
        visibility: hidden;
    }
}

.display-product .images-wrapper{
    position: relative;
    width:100%;
    height: 55rem;
}

.display-product .images-wrapper .picture-frame{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
}

.display-product .images-wrapper .picture-frame div{
    position: absolute;
    width:100%;
    height: 100%;
    left:0;
    transform: scale(1.5);
    transition: transform 1s;
}

.display-product .images-wrapper .picture-frame div img{
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit:cover;

}


.picture-frame div.img-1-wrapper{
    z-index:100;
}

.picture-frame div.img-2-wrapper{
    z-index:99;
}

.picture-frame div.img-3-wrapper{
    z-index:98;
}

.picture-frame div.img-4-wrapper{
    z-index:97;
}

.picture-frame div.img-5-wrapper{
    z-index:96;
}

.display-product .images-wrapper .btn{
    position: absolute;
    width: 4rem;
    height: 4rem;
    background-color: rgb(255, 255, 255,0.1);
   border: rgb(255, 255, 255,0) .1rem solid;
    border-radius: 50% 50%;
    z-index: 101;
    cursor: pointer;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .5s;
    margin: 0 1.5rem;
}



.display-product .images-wrapper .btn:hover{
    background-color:black;
    color:white
}

.display-product .images-wrapper .cart-btn{
position: absolute;
    bottom: -1.5rem;
    color: #fff;
    left: 2rem;
    width: 16.4rem;
    height: 5rem;
    background-color: #3f638c;
    font-size: 2rem;
    border-radius: 7px;
    border: #868282 0.2rem solid;
    z-index: 101;
    text-transform: uppercase;
    box-shadow: 0.2rem 0.4rem 0.5rem rgb(106 106 106);
    cursor: pointer;
    font-weight: 100;
    transition: transform .5s;
    overflow: hidden;
    FONT-SIZE: 1.2rem;
    letter-spacing: 0.6rem;
    padding-left: 0.5rem;
}

.display-product .images-wrapper .cart-btn::before{
    content:"";
    width: 10rem;
    height: 5rem;
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



.cart-btn:hover{
    transform:scale(1.2);
}
.cart-btn:hover:before {
    animation: shinning 4s infinite;
}

.cart-btn.clicked{
    transform: scale(1.2);
    animation: cartBtnRotate 2s ;
}

.cart-diamond{
    position:fixed;
    visibility: hidden;
    z-index:101;
    width:10rem;
    height:10rem;
    left:var(--diamond-origin-left);
    top: var(--diamond-origin-top);
}

.cart-diamond i{
    position: absolute;
    top: 0;
    left:0;
    font-size: 3rem;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient( to left, rgb(248 0 0) 0%, rgb(252 9 9 / 13%) 77%, rgb(170 0 0 / 50%) 92%, rgb(162 18 18 / 0%) 100% );
    animation: diamondRotate 2s infinite;
}

.cart-diamond.move {
    visibility: visible;
    animation: x 2s linear forwards,y 2s forwards cubic-bezier(0,-1.7,1,-1.7);
}


:root {
    --diamond-origin-top: 0;
    --diamond-origin-left: 0;
    --diamond-dist-top: 0;
    --diamond-dist-left: 0;
}

@keyframes x {
   to {
     left: var(--diamond-dist-left);
   }
}
@keyframes y {
   to {
     top:var(--diamond-dist-top);
   }
}


@keyframes diamondRotate {
    0%{
        transform:rotate(0) scale(1);
    }
    50%{
         transform:rotate(360deg) scale(1);
    }
    100%{
         transform:rotate(720deg) scale(1);
    }
}



@keyframes cartBtnRotate {
    0%{
        transform:rotate(0) scale(1.2);
    }
    50%{
         transform:rotate(720deg) scale(1.2);
    }
    70%{
         transform:rotate(720deg) scale(1.2);
    }
    100%{
         transform:rotate(720deg) scale(1.2);
    }
}

@keyframes shinning {
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


.display-product .images-wrapper button.backward-btn {
    left:0;
}



.display-product .images-wrapper button.forward-btn {
    right:0;
}


.display-product .images-wrapper .picture-frame img.img-1.resize {
     transform: scale(1);
}

.display-product .description{
    width:100%;
    height:calc(100vh - 55rem);
    background-color: #FAFAFA;
    padding: 2rem;
}


.display-product .images-wrapper .price-tag-wrapper{
    position: absolute;
    bottom: -6rem;
    right: 6rem;
    width: 12rem;
    height: 13rem;
    z-index: 100;
    transform: rotate(0deg);
    transform-origin: top;
    /* animation: swing 3s 2s forwards; */
}

.price-tag-wrapper.animated{
    animation: swing 3s forwards;
}

.price-tag-wrapper:hover{
    animation: swing 3s forwards;
}

.display-product .images-wrapper .progress-wrapper{
    position:absolute;
    top:2rem;
    left:2rem;;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width:2rem;
    height: 13rem;
    /* background-color: royalblue; */
    z-index: 101;
}

.progress-wrapper span{
    border: thin solid #707070;
    border-radius: 50%;
    width:1rem;
    height:1rem;
    /* margin-top:1rem; */
}


@keyframes swing {
    0%{
        transform: rotate(0deg);
    }
    10%{
        transform: rotate(-20deg);
    }
    25%{
        transform: rotate(20deg);
    }
    50%{
        transform: rotate(-10deg);
    }
    75%{
        transform: rotate(10deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.price-tag-wrapper .rope-left{
    width: 0.1rem;
    height: 3.43rem;
    background-color: #A5A0A0;
    z-index: 9;
    position: absolute;
    top: 0.7rem;
    left: 6rem;
    height: 7rem;
    transform: rotate(45deg);
    transform-origin: top;
    box-shadow: 0.5rem 0.5rem 0.4rem rgb(106 106 106 / 80%);
}

.price-tag-wrapper .rope-right{
     width: 0.1rem;
    height: 3.43rem;
    background-color: #A5A0A0;
    z-index: 9;
    position: absolute;
    top: 0.7rem;
    right: 6rem;
    height: 7rem;
    transform: rotate(-45deg);
    transform-origin: top;
    box-shadow: 0.5rem 0.5rem 0.4rem rgb(106 106 106 / 80%);
}

.price-tag-wrapper .knob{
    width: 1rem;
    height: 1rem;
    border-radius: 50% 50%;
    background-color: #77776A;
    z-index: 11;
    position: absolute;
    top: 0.4rem;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0.5rem 0.5rem 0.4rem rgb(106 106 106 / 80%);

}

.price-tag-wrapper .board {
position: absolute;
    bottom: 0;
    width: 12rem;
    height: 8rem;
    background-color: #EBE9C7;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0.5rem 0.5rem 0.4rem rgb(106 106 106 / 80%);
    border-radius: 5%;
}



.price-tag-wrapper .board .price{
    font-size: 2.25rem;
    z-index: 11;
    font-weight: 900;
    text-shadow: rgb(255, 255, 255);

    /* font-family: Arial, Helvetica, sans-serif; */
}



.display-product .description h2{
    font-weight: 700;
    font-size:3rem;
    letter-spacing: .2rem;
    margin: 2rem 0
}

.display-product .description p{
    font-size: 1.9rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 100;
    color: #000;
    line-height: 2.3rem;
}



/* End of v-else*/




/* End of showcase (right side) */



/* End Products */


</style>