<template>
    <section class="section-3">
        
        <!-- roll (left part) -->
        <div class="roll">
            <ul>
                <li v-for="(product,index) in products" :key="product._id" class="product" @click="viewProduct(index, $event)">
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

                    <button class="backward-btn" @click="showPreviousImage"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="forward-btn" @click="showNextImage"><i class="fa-solid fa-arrow-right"></i></button>
                    
                    <!-- <button class="add-to-card">add to card</button> -->
                    <div class="progress-wrapper">
                        <h2 class="progress"></h2>
                        <div class="circles-wrapper">
                            <span class="circle-1"></span>
                            <span class="circle-2"></span>
                            <span class="circle-3"></span>
                            <span class="circle-4"></span>
                            <span class="circle-5"></span>
                        </div>
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
                
            ]
        }
    },



    async created(){

        // await this.$store.dispatch('auth/LoginValidation')          // check if login valid. If not valid. will reset user data in veux 
        // await this.loadProducts()                                   // Load Products from database and store in veux
        this.products = this.$store.getters['products/products'];   // Get products from veux


        // For dev use:
        // this.viewProduct(0);
        
        


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

    

        viewProduct(i, event){
  

            const products = document.querySelectorAll(".product");
            console.log(products)
            products.forEach((product)=>{
                if (product.classList.contains("clicked")){
                    product.classList.remove("clicked")
                }
            });

            const clickedParent = event.target.parentNode
            clickedParent.classList.add("clicked")
            this.reSetStyle(); 
            this.imgNo = 0;
            
            this.clickedProduct = {
                    isSet:true,
                    name : this.products[i].name,
                    price : this.products[i].price.$numberDecimal,
                    description : this.products[i].description,
                    imageUrl1 : this.products[i].imageUrl1,
                    imageUrl2 : this.products[i].imageUrl2,
                    imageUrl3 : this.products[i].imageUrl3,
                    imageUrl4 : this.products[i].imageUrl4,
                    imageUrl5 : this.products[i].imageUrl5,
            },


            setTimeout(()=>{
                this.imagesStyle[0].scale = 1;

            },1000)



    
            
            // style.animation = "swing 1s forwards"



               
            this.$nextTick(() => {

                const img1 = document.querySelector(".img-1-wrapper");
                img1.style.transition = "transform 1s";
                this.imagesStyle[0].scale = 1;


                const priceTag = document.querySelector(".price-tag-wrapper");
                if (!priceTag.classList.contains("animated")){
                    priceTag.classList.add("animated");
                } 

                setTimeout(()=>{
                    priceTag.classList.remove("animated");
                },3100)



            })    
        },

        reSetStyle(){
            this.imagesStyle=[
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
                
            ]
        },


        // Images display function

        showPreviousImage(){

            console.log('from imgNo:', this.imgNo);
            
            this.imgNo--;
            console.log('back to imgNo:', this.imgNo);
            if(!this.firstAndlastImageControl(this.imgNo)){
                console.log('this is not backwarding from 0 to -1 imgNo:', this.imgNo);
                this.imagesStyle[this.imgNo].left = "0vw";                              // display in-coming section
                this.imagesStyle[this.imgNo].scale =1;           // scale back in-coming section
                this.imagesStyle[this.imgNo + 1].scale =1.5;     // scale up the out-going section
            }
        },


        showNextImage(){
            console.log('from imgNo:', this.imgNo);
            this.imgNo++;
            console.log('go to imgNo:', this.imgNo);
            if(!this.firstAndlastImageControl(this.imgNo)){
                console.log('this is not forwarding from 4 to 5 imgNo:', this.imgNo);
                this.imagesStyle[this.imgNo - 1].left = "-100vw";                   // remove out-going section
                this.imagesStyle[this.imgNo].scale = 1;      // Scale back in-coming section
                this.imagesStyle[this.imgNo - 1].scale = 1.5;  // Re - Scale back out-going section
            }
        },

        firstAndlastImageControl(i){
            // Check if:
            // 1) is going to move forward beyond the last image (>4)
            // 2) is ging to move backward beyong the first imgae (<0)
            // if yes, return True

            let bool = false;
            
            if (i<0) {
                console.log('this is backwarding from 0 to -1 imgNo:', this.imgNo);
        
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
                 console.log('reset imgNo:', this.imgNo);
                
                this.imagesStyle[0].scale = 1.5;
                this.imagesStyle[4].scale = 1;
                bool = true;
            }

            if (i>4) {
                console.log('this is forwarding from 4 to 5 imgNo:', this.imgNo);
                
                this.imagesStyle.forEach((image)=>{
                    image.left="0vw";
                });
                this.imgNo = 0;
                console.log('reset imgNo:', this.imgNo);
                this.imagesStyle[4].scale = 1.5;
                this.imagesStyle[0].scale = 1;
                bool = true;
            } 

            return bool
            
        },

        async addtoCart(p){
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

.display-product .images-wrapper button{
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
}

.display-product .images-wrapper button:hover{
    background-color:black;
    color:white
}

.display-product .images-wrapper button.backward-btn {
    left:0;
}
/* button.backward-btn i {
    transform:rotate(45deg);
} */


.display-product .images-wrapper button.forward-btn {
    right:0;
}
/* button.forward-btn i{
    transform:rotate(-45deg);
} */

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
    transform: rotate(-5deg);
    transform-origin: top;
    /* animation: swing 3s 2s forwards; */
}

.price-tag-wrapper.animated{
    animation: swing 3s forwards;
}




@keyframes swing {
    0%{
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
        transform: rotate(-5deg);
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