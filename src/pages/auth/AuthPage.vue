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
        <p class="errorMsg">{{ error}}</p>

  
      <Form ref="form1" @submit="authAction('SignUp')"  :validation-schema="schema2">
        <Field id="signUp_username" name="signUp_username" type="text"  class="auth-username" placeholder="User Name" v-model.trim="username"/>
        <ErrorMessage name="signUp_username" class="alert"/>

        <Field id="signUp_emailAddress" name="signUp_emailAddress" type="email"  class="auth-e-mail" placeholder="E-mail" v-model.trim="email"/>
        <ErrorMessage name="signUp_emailAddress" class="alert"/>

        <Field id="signUp_password" name="signUp_password" type="password" class="auth-password" placeholder="Password" v-model.trim="password"/>
        <ErrorMessage name="signUp_password" class="alert"/>

        <Field id="signUp_passwordConfirm" name="signUp_passwordConfirm" type="password" class="auth-password" placeholder="Re-Type Password" v-model.trim="repassword"/>
        <ErrorMessage name="signUp_passwordConfirm" class="alert" />

        <Field id="signUp_address" name="signUp_address" type="textarea" class="auth-address" placeholder="Delivery address" v-model="address"/>
        <ErrorMessage name="signUp_address" class="alert" />

        <button  class="auth-btn" >Singn Up</button>
      </Form>

        <p class="auth-para2">Already has an account?</p>
        <button class="auth-switch to-login" @click="switchBtn">log in</button>
        </div>
        <!-- End of Sign up -->

        <!-- Login -->
        <div class="auth-card log-in-card" >

        <button @click="$emit('closeSignUpPage');" class="close-menu-btn">
            <div class="cross-line-1"></div>
            <div class="cross-line-2"></div>
        </button>

            <h1 class="auth-header">Log in</h1>
            <img class="auth-img" src="~@/assets/simpLogo.jpg" alt="logo">
            <p  class="auth-para1">Welcome Back !</p>
            <p class="errorMsg">{{ error}}</p>

             <Form  ref="form2"  @submit="authAction('LogIn')"  :validation-schema="schema">
                <Field id="signIn_email" name="signIn_email" type="email"  class="auth-e-mail" placeholder="E-mail" v-model.trim="email"/>
                <ErrorMessage name="signIn_email" class="alert"/>
                <Field id="signIn_password" name="signIn_password" type="password" class="auth-password" placeholder="Password" v-model.trim="password"/>
                <ErrorMessage name="signIn_password" class="alert"/>
                <button class="auth-btn">log in</button>
            </Form>
            <p class="auth-para2">Not yet has an account?</p>
            <button  class="auth-switch" @click="switchBtn">sign up</button>
        </div>
        </div>
        <!-- End of login -->

        <div v-show="loading" class="auth-loading-screen"><loader-component></loader-component></div>
        
<!-- end of login  -->
</template>


<script>

import AuthMiddlewares from "../../middlewares/authMiddlewares.vue";
import LoaderComponent from "../../components/loaderComponent.vue";

import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    LoaderComponent
  },
 
  mixins:[AuthMiddlewares],
 
    data(){
      const schema = Yup.object().shape({
        signIn_email: Yup.string().email().required().label("Email Address"),
        signIn_password: Yup.string().min(6).max(30).required().label("Password"),
      
      });

      const schema2 = Yup.object().shape({
        signUp_emailAddress: Yup.string().email().required().label("Email Address"),
        signUp_username: Yup.string().required().min(6).max(30).label("User Name"),
        signUp_password: Yup.string().required().min(6).max(30).label("Password"),
        signUp_passwordConfirm: Yup.string().oneOf([Yup.ref('signUp_password'), null], 'Passwords must match').required().max(30).min(6).label("Password Confirmation"),
        signUp_address: Yup.string().required().max(250).label("Delivery Address"),

      });
      return{
        schema,
        schema2,
        error:"",
        email:"",
        password:"",
        username:"",
        repassword:"",
        address:"",
        loading:false
      }
    },

    methods:{

        switchBtn(){
          // flip the login card to sign up or login
          this.resetVariables();                // to clear the input and error message when flipping                                              
          const cardWrapper = document.querySelector(".auth-card-wrapper");
          cardWrapper.classList.toggle('leftTurn');
        },

        resetVariables(){
          console.log("rest")
          this.error = "";
          this.email = "";
          this.password = "";
          this.repassword = "";
          this.username = "";
          this.address = "";
          this.$refs.form1.resetForm();
          this.$refs.form2.resetForm();
        },


        async authAction(action){
          try{  
            this.loading = true
            await this.AuthHandler(action,this.email,this.password,this.username,this.address);
            this.$router.go();              // refresh after login / sign up

          } catch (error){
            this.loading = false
            this.error = error.message;
          }
        },
    }
}


</script>



<style >


/* Sign Up / Login  */

.auth-loading-screen{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;;
  z-index: 100000;
  background-color: rgb(255 255 255 / 81%);
}

.alert{
  color:red;
  position: relative;
  top: -1.5rem;
  }

.auth-wrapper{
  position:absolute;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.5);
  width:100vw;
  height:100vh;
  perspective: 100rem;

}

.auth-card-wrapper{
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  width:34rem;
  height:70rem;
  perspective: 100rem;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
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
  -webkit-transform: translateX(-50%) translateY(-50%) rotateY(-180deg);
}


/* .auth-card-wrapper .rightTurn{
  transform:rotateY(-180deg)
} */


.auth-card.sign-up-card{
    background-color:rgb(255, 255, 255);
    transform: translateZ(-.01rem) rotateY(180deg);
    -webkit-transform: translateZ(-.01rem) rotateY(180deg);
}


.auth-card.log-in-card{
  background-color:rgb(255, 255, 255);
  transform: translateZ(0rem);
  -webkit-transform: translateZ(0rem);
}


.auth-card .close-menu-btn{
  position:absolute;
  top:1rem;
  right:1rem;
  transform:scale(0.8) rotate(45deg); 
  -webkit-transform:scale(0.8) rotate(45deg); 
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

/* .auth-username{
}

.auth-email{}

.auth-password{}

.auth-re-password{} */

.errorMsg{
  color:red;
}

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
@media (max-width:400px){
  .auth-wrapper .auth-card-wrapper{
    width:100%;
    height:100%;
  }
  .auth-card.sign-up-card .auth-img{
    display: none;
  }
   .auth-card.sign-up-card .auth-para1{
    display: none;
  }
  .auth-card{
    border-radius:unset;
  }
}
/* End of responsive */
</style>