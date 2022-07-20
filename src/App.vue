
<template>
 

<div class="container">

  <!-- header -->
  <header class="header">
        <img src="@/assets/black_logo.png"  alt="logo">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div @click="MenuControl" class="close-menu-btn">
          <div class="cross-line-1"></div>
          <div class="cross-line-2"></div>
        </div>
          
        <nav>
          <ul @click="MenuControl">
            <li>
              <router-link class="router-link" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="router-link" to="/aboutus">About Us</router-link>
            </li>
            <li>
              <router-link class="router-link" to="/products">Products</router-link>
            </li>
            <li v-show="isLogin">
              <router-link class="router-link" to="/invoices">Invoices</router-link>
            </li>
            <li>
              <router-link class="router-link" to="/cart">Cart</router-link>
            </li>
            <li v-show="isLogin"  @click="authAction('LogOut')">
              <p class="router-link">Logout</p>
            </li>
          </ul>
        <div class="social-media">
          <i class="fab fa-facebook fb-icon"></i>
          <i class="fab fa-instagram-square ig-icon"></i>
        </div>
      </nav>
    </header>
    <!-- End of Header -->

    <!-- Left Bar -->
    <div class="left-bar">
      <div @click="MenuControl" class="menu-btn">
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
      </div>

      <div class="slogan">
        <h3>REDISCOVER & SHARE</h3>
      </div>

      <div class="short-cut" >
        
        <div v-if="isLogin" class="isAuth" >
            <div><i class="invoice-page-icon fa-solid fa-chalkboard-user"></i></div>
            <div @click="authAction('LogOut')"><i class="logout-icon fa-solid fa-arrow-right-from-bracket"></i></div>
        </div>
        <div v-else @click="isSingUpPageOpen=true"><i class="login-icon fa-regular fa-circle-user"></i></div>
        <router-link class="router-link" to="/cart"><i class="cart-icon fa-solid fa-cart-shopping"></i></router-link>
      </div>
    </div>
    <!-- End of Left Bar -->


    <!-- RouterView -->
    <div class="routerView">
    <router-view v-slot="slotProps">
        <transition>
          <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
    </div>
    <!-- End of RouterView -->
  </div>
  <!-- End of Container -->



  <!-- login -->
  <Teleport to="body">
      <div v-if="isSingUpPageOpen" class="auth-wrapper"> 
        <auth-page @closeSignUpPage = "closeSignUpPage"></auth-page>
      </div>
  </Teleport>
  <!-- end of login  -->

</template>




<script>

import checkIndexPage from './mixins/checkIndexPage';
import AuthPage from './pages/auth/AuthPage.vue';                       // Login / Sign Up Page Open
import AuthMiddlewares from './middlewares/authMiddlewares.vue';        


export default {

  components:{AuthPage},
  
  mixins: [checkIndexPage,AuthMiddlewares],
  data(){
    return {
      isLogin :false,
      isSingUpPageOpen : false,
    }
  },
  watch: {
    '$route'() {
      this.checkIndexPage();
    }
  },
  created(){
    this.setStatus();

  },
  methods:{
    MenuControl(){
        document.querySelector(".container").classList.toggle("change");
    },
    closeSignUpPage(){
        this.isSingUpPageOpen = false;
    },
    setStatus(){
        this.isLogin = this.$store.getters['auth/isLogin'];
    },
    async authAction(action){
          try{
             await this.AuthHandler(action);
             this.setStatus();
             this.$router.go();
          } catch (error){
             this.error = error.message;
          }
      }

  }
}
</script>


<style>

/* Common Style */
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Baloo Da 2", serif;
  /* font-family: 'Josefin Slab',serif; */
}


html {
  font-size: 62.5%;
}

.container{
  width:100%;
  height:100vh;
  perspective: 100rem;
  overflow: hidden;
}

.routerView{
  width:100vw;
  height: 100vh;
  background-color:white;
  transition: transform .6s;
  box-shadow: 4.5rem 3.5rem 2rem #aaa;
}

.change .routerView{
  left: 23vw;
  transform: rotateY(-40deg);
}

/* End of Common Style */



/* header */

.close-menu-btn{
  position:absolute;
  top:10rem;
  right:0rem;
  width:3rem;
  height:3rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-radius:  50% 50%;
  transform:rotate(45deg);
  padding: .3rem;
  cursor: pointer;
}

.close-menu-btn div{
  width:100%;
  height:.1rem;
  background-color:#7D929B;;
}

.close-menu-btn .cross-line-2{
  transform:translateY(-0.05rem) rotate(90deg);
}


.header{
position: absolute;
left:-100vw;
 width:23vw;
 height:100%;
 background-color: #fff;
 z-index: 100;
 transition: left .4s .1s;
}

.change .header{
  left:0rem;
}

.header img{
  position: absolute;
  top:2rem;
  left:2rem;
  width:13rem;
}

.header .line-1{
  position: absolute;
  top:4rem;
  left:16rem;
  width:80%;
  height:0.1rem;
  background-color: black;
  
}

.header .line-2{
  position: absolute;
  top:8rem;
  left:4rem;
  width:0.1rem;
  height:85%;
  background-color: black;

}

.header nav{
  position: absolute;
  top:22rem;
  left:9rem;
  display: flex;
  flex-direction: column;
}


.header nav li {
  margin-bottom:2rem;
}

.header nav li p,
.header nav li .router-link{
  color:black;
  font-family: "Mukta Vaani";
  font-weight:lighter;
  font-size:1.9rem;
  letter-spacing: .5rem;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 0.2rem 0.4rem 3rem #555;
  position: relative;
  cursor: pointer;
}

.header nav li p::before,
.header nav li .router-link::before{
  position: absolute;
  bottom:23%;
  left:-5%;
  content:"";
  width:0%;
  height:1rem;
  border-radius: 25px;
  opacity: .5;
  background-color: #7D929B;
  transform: rotate(-5deg);
  z-index:0;
  transition: width 1s;
}

.header nav li p:hover:before,
.header nav li .router-link:hover:before {
  width:115%
}

.header .social-media{
  width:100%;
  margin-top:10rem;
  display: flex;
  justify-content: left;
}

.header .social-media i{
 font-size: 3rem;
}

.header .social-media .ig-icon{
 margin-left: 2rem;
}
/* End of header */



/* left-bar */
.left-bar{
  position:fixed;
  top:0;
  left:0rem;
  width:8rem;
  height: 100%;
  z-index: 100;
  opacity: 1;
  transition: left .1s;
}

.indexAnimation .left-bar{
  left:-100rem;
  animation: leftBarMove 3s 10s forwards;
}


@keyframes leftBarMove {
    0%{
        left:-100rem;
    }
    100%{
        left:0rem;
    }
}


.left-bar.clickedProduct,
.change .left-bar{
  left:-11rem;
  /* color:transparent; */
  visibility: hidden;
}

.left-bar div{
  visibility:visible;
  transition: visibility .1s .55s;
  /* transition: all .1s; */
}

.left-bar.clickedProduct div,
.change .left-bar div{
  visibility:hidden;
}

.notIdx .left-bar .menu-btn div{
  background-color:black;
}


.menu-btn{
  position: absolute;
  top:2rem;
  left:2rem;
  width:4rem;
  height:4rem;

  z-index: 100;
  display: flex;
  flex-direction: column;
  align-content: center; 
   cursor: pointer;
}

.menu-btn div{
 width:100%;
 height: .1rem;
 background-color: #feffff;
 margin-bottom: 1rem;
}



.slogan {
  position:absolute;
  top:47%;
  width:auto;
  white-space: nowrap;
  transform: rotate(-90deg) translateY(-50%);
  margin-left: -8rem;
  opacity: 0;

}

.slogan h3{
  font-family: 'Hubballi', cursive;;
  font-weight: 200;
  font-size: 1rem;
  letter-spacing: .8rem;
}

.notIdx .left-bar .slogan{
  opacity: 1;
}


.short-cut{
  width:100%;
  position:absolute;
  bottom:2rem;
  left:2rem;
  display: flex;
  flex-direction: column;
}
.short-cut .isAuth i,
.short-cut i{
  color: #feffff;
  margin-top:3rem;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity .5s;
}

.notIdx .left-bar .short-cut i{
 color:black;
}

.short-cut .isAuth i:hover,
.short-cut i:hover{
  opacity: 1;
}

.short-cut .isAuth {
  display: flex;
  flex-direction: column;
  color: #feffff;
}


.short-cut .isAuth .logout-icon{

  font-size: 3.5rem;
}

.short-cut .isAuth .invoice-page-icon{
  font-size: 3rem;
}

.short-cut .login-icon{

  font-size: 3.5rem;
}

.short-cut .cart-icon{

  font-size: 3rem;
  margin-left:-0.2rem;
}

.notIdx .left-bar .short-cut i.cart-icon.addCart,
.cart-icon.addCart{
  opacity: 1;
  color: #ff00a3;
  transition: all 1s 2s;
}

.short-cut .account-icon{

  font-size: 3.5rem;
  margin-left:0.2rem;
}

/* End of left-bar */



/* Responsive */
@media (max-width:1060px){
  .change .routerView{
    left: 20vw;
    transform: translateX(15rem) rotateY(-40deg);
  }
}
@media (max-width:1056px){
  .close-menu-btn {
    top: 8rem;
    right: -8rem;
  }
}


@media (max-width:860px){
  .change .routerView{
    left: 23vw;
    transform: translateX(15rem) rotateY(-40deg);
  }
}

@media (max-width:650px){
  .change .routerView{
    left: 23vw;
    transform: translateX(30rem) rotateY(0deg);
  }
    .close-menu-btn {
    top: 8rem;
    right: -13rem;
  }
    .header .line.line-1{
    width:0;
  }
}

  @media (max-width:510px){
    .change .routerView{
      left: 23vw;
      transform: translateX(30rem) rotateY(0deg);
    }


  .close-menu-btn {
    top: 8rem;
    right: -13rem;
  }
}


@media (max-height:670px){

    .header nav {
      top:14rem;
    }
    .header nav li {
        margin-bottom: 2rem;
    }

    .header .social-media {
        width: 100%;
        margin-top: 3rem;
    }
    .header .line.line-1{
       width:0;
    }
}

@media (max-height:550px){

    .header nav {
      top:10rem;
    }
    /* .header nav li {
        margin-bottom: 0rem;
    } */

    .header .social-media {
        width: 100%;
        margin-top: 3rem;
    }
    .header .line.line-1{
       width:0;
    }
}

@media (max-height:470PX){

    .header nav {
      top:10rem;
    }
    .header nav li {
        margin-bottom: 1rem;
    }
}


/* 

@media (max-height:550px) and (max-width:400px) {
     .banner{
        width: 26rem;
        height: 15.5rem;
    }

    .banner h3 {
        font-size: 1.3rem;
        margin-top: 3.2rem;
        margin-left: 0.0rem;
    }

    .banner p {
        font-weight: 500;
        font-size: 2.7rem;
        line-height: 2.8rem;
    }
} */

/* End of Responsive */
</style>