<script>
import AuthMiddlewares from "../middlewares/authMiddlewares.vue";

export default {

    mixins:[AuthMiddlewares],

    methods:{

        async CheckoutHandler(){
            console.log('in checkoutHandler')
   
            if(this.checkIfLogin()){    // Check if login. 
                console.log('is log in, do checkout')                     // if is logined , process checkout
                try{
                    await this.checkoutAction();
                } catch(err){
                    const error = err;
                    throw error;
                }
            }else{                                    // If not login
                this.openLoginPage()                  // if it is not login, ask the user to login first
                this.setAuthForCheckout(true);        // Set this logging in process as "AuthForCheckout"
            } 
        },


        async checkoutAction(){
            console.log("in checkout function")
            try{
                this.$store.dispatch('cart/checkout');
            } catch(err){
                const error = err;
                throw error;
            }
        },

        openLoginPage(){
            // open the login page for user to login prior ro logging out
            document.getElementById("login-btn").click();
        },

        setAuthForCheckout(b){
            console.log('set authForchecout to :', b)
            this.$store.dispatch('auth/setAuthForCheckout',b)

        },

        // setCartForCheckout(cartItems){
        //     this.$store.dispatch('cart/save',cartItems);
        // }

        


    }
}
</script>