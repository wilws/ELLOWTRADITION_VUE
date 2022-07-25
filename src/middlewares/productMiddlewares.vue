<script>
//  import CartMiddlewares from "./cartMiddlewaresCartMiddlewares.";

export default {

    // mixins:[CartMiddlewares],
    
    methods:{

        // Trigger Point: //products
        async ProductLoader(){

            let productsObj = {                                                // Default setting the productsObj which will be returned to caller
                error: "",
                products: this.extractProductsFromVUEX()
            };

            if (!this.checkProductSet() || !this.checkProductUpdated()) {       // If product is not set in VUEX or it is not updated
                try{
                    await this.$store.dispatch('products/loadProducts');        // pull product from DB to update the products in VUEX,
                    productsObj.products = this.extractProductsFromVUEX();      // then extract product from VUEX                
                    return productsObj
            } catch(err){
                const error = err;
                throw error;
            }                                     
            }

        },


        // Actions of VUEX
        checkProductSet(){
            // Check products is set in VUEX
            return this.$store.getters['products/isSet'];
        },

        checkProductUpdated(){        
            // Check if the product in VUEX is the updated version.          
            return false                                
        },

        pullProductsFromDB(){        
            // Get Product from DB and store in VUEX. 
            this.$store.dispatch('products/loadProducts');
        },

        extractProductsFromVUEX(){      
            // Extract Product from VUEX
            return this.$store.getters['products/products'];
        },
    }
}
</script>