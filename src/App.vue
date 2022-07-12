
<template>
<!-- <the-header></the-header> -->

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
          <!-- <li>
            <router-link class="router-link" to="/story">Story</router-link>
          </li> -->
          <li>
            <router-link class="router-link" to="/products">Products</router-link>
          </li>
          <li>
            <router-link class="router-link" to="/invoices">Invoices</router-link>
          </li>
          <li>
            <router-link class="router-link" to="/cart">Cart</router-link>
          </li>
          <li>
            <router-link class="router-link" to="/auth">Login</router-link>
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

    <div class="short-cut">
      <i class="login-icon fa-regular fa-circle-user"></i>
      <i class="cart-icon fa-solid fa-cart-shopping"></i>
      <i class="account-icon fa-solid fa-receipt"></i>  
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

</template>




<script>
// import TheHeader from './components/layout/TheHeader.vue';


export default {


 
  // components: {
  //   TheHeader
  // }
  

  methods:{
    MenuControl(){
      document.querySelector(".container").classList.toggle("change");
    },
    notIndex(){
      if (!document.querySelector(".container").classList.contains('notIdx')){
        document.querySelector(".container").classList.add("notIdx");
      }
    },
    removeIndex(){
      if (document.querySelector(".container").classList.contains('notIdx')){
            document.querySelector(".container").classList.remove("notIdx");
      }
    }
  },

  created(){

        //  this.checkIndexPage();
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
left:-50vw;
 width:23vw;
 height:100%;
 background-color: #fff;
 z-index: 100;
 transition: left .5s;
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
}

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
  left:0;
  width:10rem;
  height: 100%;
  z-index: 100;
  opacity: 1;
  transition: opacity 10s 5s;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}

.change .left-bar{
  opacity: 0;
  visibility: hidden;
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
  /* justify-content: center; */
 
}

/* .change .menu-btn{
  opacity: 0;
  visibility: hidden;
} */

.menu-btn div{
 width:100%;
 height: .1rem;
 background-color: #feffff;
 margin-bottom: 1rem;

}

.change .menu-btn .line-1{
  transform:rotate(90deg) translatex(1rem);
}

.change .menu-btn .line-2{
  /* visibility: hidden;
  opacity: 0; */
}

.change .menu-btn .line-3{
  visibility: hidden;
  opacity: 0;
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
  /* background-color: rosybrown; */
}
.short-cut i{
  /* color: #feffff; */
  margin-top:3rem;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity .5s;
}

.notIdx .left-bar .short-cut i{
 color:black;
}

.short-cut i:hover{
  opacity: 1;
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



/* 
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
} */
</style>