<script>
export default {
    methods:{

        async AuthHandler(action,email="",password="",username="",address=""){
                try{
                    switch(action){
                        case('SignUp'):
                            await this.singUpAction(username,email,password,address);
                            await this.logInAction(username,email,password,address);
                            break;
                        
                        case('LogIn'):
                            await this.logInAction(username,email,password,address);
                            break;
                        
                        case('LogOut'):
                            await this.logout()
                            break;
                        
                        default:
                            throw new Error('No action found')
                    }

                } catch(err) {
                    console.log(err)
                    const error = err
                    throw error
                } 
        },

        async singUpAction(username,email,password,address){
            try{
                if(this.checkIfLogin()){                                                // Check if User Login
                    throw new Error("Login already. Please log out and try again");     // If use is login in, ask user to log out first 
                }
                const formData = {email: email,   password: password,  username: username, address:address}
                await this.signUp(formData);     
            } catch(err){
                const error = err;
                throw error;
            }
        },

        async logInAction(username,email,password,address){
            try{
                if(this.checkIfLogin()){        // Check if User Login                                              
                        throw new Error("Login already");                                    // If use is login in, ask user to log out first 
                }
                const formData = {email: email,   password: password,  username: username, address:address}
                await this.logIn(formData);
     
            } catch(err){
                const error = err;
                throw error;                                            // Catch the error from VUEX, rethrow it to the caller
            }
        },


        async logOutAction(){
            try{
                if(!this.checkIfLogin()){                              // Check if User Logout already                                              
                    throw  new Error("Logout already");                // If use is login in, ask user to log out first 
                }
                await this.logOut();
            } catch(err){
                const error = err;
                throw error;                                                  // Catch the error from VUEX, rethrow it to the caller
            }
        },
        checkIfLogin(){
            return this.$store.getters['auth/isLogin'];
        },

        getUserInfo(){
            return this.$store.getters['auth/getUser'];
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