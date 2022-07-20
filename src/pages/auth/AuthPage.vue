<template>


<!-- login -->
        <div class="auth-card-wrapper">

        <!-- Sign Up -->
        <div class="auth-card sign-up-card">
        
        <button @click="$emit('closeSignUpPage');" class="close-menu-btn">
            <div class="cross-line-1"></div>
            <div class="cross-line-2"></div>
        </button>

        <h1 class="auth-header">sign up</h1>
        <img class="auth-img" src="~@/assets/simpLogo.jpg" alt="logo">
        <p class="auth-para1" >We are happy to have you to join us !</p>
        <form @submit.prevent="authAction('SignUp')">
            <input class="auth-username" type="text" placeholder=" User Name"  v-model.trim="username.val">
            <input class="auth-email" type="email" placeholder=" E-mail" v-model.trim="email.val">
            <input class="auth-password" type="password" placeholder=" Password" v-model.trim="password.val">
            <input class="auth-re-password" type="password" placeholder=" Password" v-model.trim="repassword.val">
            <button class="auth-btn" type="submit">sign up</button>
        </form>
        <p class="auth-para2">Already has an account?</p>
        <button class="auth-switch to-login" @click="switchBtn">log in</button>
        </div>
        <!-- End of Sign up -->

        <!-- Login -->
        <div class="auth-card log-in-card" @submit.prevent="authAction('LogIn')">

        <button @click="$emit('closeSignUpPage');" class="close-menu-btn">
            <div class="cross-line-1"></div>
            <div class="cross-line-2"></div>
        </button>

            <h1 class="auth-header">Log in</h1>
            <img class="auth-img" src="~@/assets/simpLogo.jpg" alt="logo">
            <p  class="auth-para1">Welcome Back !</p>
            <form>
            <input class="auth-e-mail" type="email" placeholder=" E-mail" v-model.trim="email.val">
            <input class="auth-password" type="password" placeholder=" Password" v-model.trim="password.val">
            <button class="auth-btn" type="submit" >log in</button>
            </form>
            <p class="auth-para2">Not yet has an account?</p>
            <button  class="auth-switch" @click="switchBtn">sign up</button>
        </div>
        </div>
        <!-- End of login -->
        
<!-- end of login  -->
</template>


<script>

import AuthMiddlewares from "../../middlewares/authMiddlewares.vue";
export default {


  mixins:[AuthMiddlewares],
 
    data(){
        return{
            error:"",
            email: {
                val: '',
                isValid: true,
            },
            password: {
                val: '',
                isValid: true,
            },
            repassword: {
                val: '',
                isValid: true,
            },
            username: {
                val: '',
                isValid: true,
            },
 
        }
    },
     

    methods:{

        switchBtn(){
            // flip the login card to sign up
            const cardWrapper = document.querySelector(".auth-card-wrapper");
            cardWrapper.classList.toggle('leftTurn');
        },

        async authAction(action){
          try{  
            await this.AuthHandler(action,this.email,this.password,this. username);
            // this.$router.go();
            window.location.reload()
          } catch (error){
             this.error = error.message;
          }
        }
    }
}


</script>



<style >


/* Sign Up / Login  */

.auth-wrapper{
  position:absolute;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.5);
  width:100vw;
  height:100vh;

}

.auth-card-wrapper{
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  width:34rem;
  height:57.7rem;
  perspective: 100rem;
  transform-style: preserve-3d;
  transition: transform .5s 
}

.auth-card{
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background:white;
  border-radius: 2rem;
  perspective: 100rem;
}

.auth-card-wrapper.leftTurn{
  transform: translateX(-50%) translateY(-50%) rotateY(-180deg);
}


/* .auth-card-wrapper .rightTurn{
  transform:rotateY(-180deg)
} */


.auth-card.sign-up-card{
    background-color:rgb(255, 255, 255);
    transform: translateZ(-.01rem) rotateY(180deg);
}


.auth-card.log-in-card{
  background-color:rgb(255, 255, 255);
  transform: translateZ(0rem);
}


.auth-card .close-menu-btn{
  position:absolute;
  top:1rem;
  right:1rem;
  transform:scale(0.8) rotate(45deg); 
  border: none;
}


.auth-header{
  margin-top: 2rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color:#707070;
}

.auth-img{
  margin-top: 2rem;
  width:7.5rem;
  height:7.5rem;
  object-fit: contain;
}

.auth-para1{
  padding: 1rem;
    width:100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    font-size:1.4rem;
    text-align: center;
    color:#707070;
}

.auth-card form{
  margin-top:-2rem;
  width:100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
}

.auth-card form input {
  border:thin solid rgba(112,112,112,0.2);
  height: 4rem;
  margin-bottom:2rem;
  border-radius: .8rem;
}

.auth-card form input:focus{
  border: .2rem solid rgba(110, 173, 255, 0.966);
}

::placeholder{
  color:rgba(112,112,112,0.5);
  font-size: 1.5rem;
  font-weight: 100;
}

.auth-username{
  
}

.auth-email{}

.auth-password{}

.auth-re-password{}

.auth-btn{
  background-color: #7D929B;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 200;
  color:white;
  height:5rem;
  border:thin solid rgba(112,112,112,0.2);
  border-radius: 1rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: .4rem;
  cursor: pointer;
}

.auth-btn:hover{
   border:thick solid rgba(158, 37, 37, 0.2);
}

.auth-para2{
    width:100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    font-size:1.5rem;
    text-align: center;
    color:#707070;
}

.auth-switch{
  border:none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
}

.log-in-card .auth-para2{
  margin-top:10rem;
}

/* responsive */
@media (max-width:352px){
  .auth-wrapper .auth-card-wrapper{
    width:90%;
  }
}
/* End of responsive */
</style>