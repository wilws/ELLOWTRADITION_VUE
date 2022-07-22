<script>
export default {
    methods:{

        async AuthHandler(action,email="",password="",username=""){
                console.log('in AuthHandler')
                try{
                    switch(action){
                        case('SignUp'):
                            await this.singUpAction(username,email,password);
                            await this.logInAction(username,email,password);
                            break;
                        
                        case('LogIn'):
                            await this.logInAction(username,email,password);
                            break;
                        
                        case('LogOut'):
                            await this.logout()
                            break;
                        
                        default:
                            throw new Error('No action found')
                    }

                } catch(error) {
                    console.log('get error in handler')
                    console.log(error)
                    throw new Error(error);
                } 
                // finally {
                //     if(this.$store.getters['auth/isAuthForCheckout']){
                //         console.log('this is check for log out')
                //         this.$store.dispatch('auth/setAuthForCheckout',false)
                //         console.log('authforcheckout now is set to:', this.$store.getters['auth/isAuthForCheckout'])
                //     }
                // }
        },

        async singUpAction(username,email,password){
            try{
                if(this.checkIfLogin()){                                                // Check if User Login
                    throw new Error("Login already. Please log out and try again");     // If use is login in, ask user to log out first 
                }
                const formData = {email: email,   password: password,  username: username}
                await this.signUp(formData);     
            } catch(error){
                throw new Error(error.message || "Sign Up Failed");
            }
        },

        async logInAction(username,email,password){
            try{
                if(this.checkIfLogin()){                                                     // Check if User Login                                              
                        throw new Error("Login already");                                    // If use is login in, ask user to log out first 
                }
                const formData = {email: email,   password: password,  username: username}
                await this.logIn(formData);
     
            } catch(error){
                throw new Error(error.message || "Login Failed");                                              // Catch the error from VUEX, rethrow it to the caller
            }
        },


        async logOutAction(){
            try{
                if(!this.checkIfLogin()){                              // Check if User Logout already                                              
                    throw  new Error("Logout already");                // If use is login in, ask user to log out first 
                }
                await this.logOut();
            } catch(error){
                throw new Error(error.message || "Logout Failed");                                                     // Catch the error from VUEX, rethrow it to the caller
            }
        },
        checkIfLogin(){
            return this.$store.getters['auth/isLogin'];
        },

        async signUp(formData){       
            await this.$store.dispatch('auth/signup',formData);
        },

        async logIn(formData){
            await this.$store.dispatch('auth/login',formData);
        },

        async logout(){
            await this.$store.dispatch('auth/logout');
        }
    }
}
</script>