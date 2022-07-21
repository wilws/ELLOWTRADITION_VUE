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
                    await this.checkout()
                }catch(error){
                    throw new Error(error)
                }
            }else{   
                console.log('not login')                   // If not login
                
                this.openLoginPage()                  // if it is not login, ask the user to login first
                this.setAuthForCheckout(true);
            } 
        },


        async checkout(){
            console.log("in checkout function")
            this.$store.dispatch('cart/checkout');
        },

        openLoginPage(){
            document.getElementById("login-btn").click();
        },

        setAuthForCheckout(b){
            console.log('set authForchecout to :', b)
            this.$store.dispatch('cart/setAuthForCheckout',b)
        },


        setCartForCheckout(cartItems){
            this.$store.dispatch('cart/save',cartItems);
        }

        


    }
}
</script>