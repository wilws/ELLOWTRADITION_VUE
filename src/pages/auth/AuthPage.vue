<template>
    <h1>This is auth page</h1>

<!-- 
    <form @submit.prevent="signup">
    <div>
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" v-model.trim="email.val" >
    </div>

    <div>
        <label for="username">username</label>
        <input type="text" id="username" name="username" v-model.trim="username.val" >
    </div>

    <div>
        <label for="password">Password</label>
        <input type="text" id="passoword" name="passoword" v-model.trim="password.val" >
    </div>

    <button>Sign UP</button>
    </form> -->


    <form @submit.prevent="login">
    <div>
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" v-model.trim="email.val" >
    </div>

    <div>
        <label for="password">Password</label>
        <input type="text" id="passoword" name="passoword" v-model.trim="password.val" >
    </div>

    <button>Log In</button>
    </form>



    <form @submit.prevent="logout">
    <button>Log Out</button>
    </form>


</template>


<script>
export default {
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
            username: {
                val: '',
                isValid: true,
            },
        }
    },
    created(){
        const a = this.$store.getters['auth/getUser'];
        console.log("when app create:", a)

    },
    methods:{

        async signup(){
            const formData = {email: this.email,password: this.password,username: this. username}
            try {
                await this.$store.dispatch('auth/signup',formData);
            }catch(err){
                 this.error = err.message || "O..Something goes wrong"
            }
        },


        async login(){
            const formData = { email: this.email, password: this.password,username: this. username }
            try {
                await this.$store.dispatch('auth/login',formData);

            const a = this.$store.getters['auth/getUser'];
            console.log("after login :", a)



           
            }catch(err){
                 this.error = err.message || "O..Something goes wrong"
            }
        },

        async logout(){
            try {  
                await this.$store.dispatch('auth/logout');
                console.log(this.$store.getters['auth/getUser']);
            }catch(err){
                 this.error = err.message || "O..Something goes wrong"
            }
        }
    }
}


</script>