<script>

import ProductMiddlewares from "./productMiddlewares.vue";
import AuthMiddlewares from "./authMiddlewares.vue";


export default {
    mixins:[ProductMiddlewares,AuthMiddlewares],

    methods:{

       async CartHandler(action="Cart",productId=0){
           console.log('In CartHandler init')

            // this.$store.dispatch('auth/setAuthForCheckout',false)
            let result = {
                cartObj:{},
                errorMsg:""
            }

            try{
                switch(action){
                    case "Add": 
                        // Add 1 into cart 
                        await this.addtoCart(productId);
                        break;
                    case "Deduct":
                        // Deduct 1 from the cart
                        await this.deductfromCart(productId);
                        break;
                    case "Remove":
                        // Remove item from the cart
                        await this.removefromCart(productId);
                        break;
                    case "Clear":
                        // Clear the whole cart
                        await this.clearCart();
                        break;
                    case "Cart":
                        // return cart object only
                        if (this.ifAuthForCheckout()){                  // if the page is direct from checkout login
                            await this.synchoniseCartInDB()             // it upload the current cart to DB but not download the cart from DB
                            this.unsetAuthForCheckout()                 // unset the auth for checkout status
                        } else {
                            await this.loadCartFromDB();                //ifAuthForCheckout() is false load cart from DB"
                        }
                       break;
                    default:
                        // return cart object only
                      throw new Error("Wrong Action Input");
                }

                result.cartObj = await this.constructCartObject();
                console.log(result.cartObj)
         
            } catch(error) {
                console.log(error)
                result.errorMsg  = error.message || "Cannot perform cart action";
                
            }
            return result
        },
    
        async addtoCart(p){
            try{
                await this.$store.dispatch('cart/addtoCart',{id : p});
            } catch(error){
                throw new Error(error.message);
            }
        },
   
        async removefromCart(p){
            try{
                await this.$store.dispatch('cart/removeCart',{id : p});   
            } catch(error){
                throw new Error(error.message);
            }
        },

        async deductfromCart(p){
            try{
                await this.$store.dispatch('cart/deductCart',{ id : p});
            } catch(error){
                throw new Error(error.message);
            }
        },

        async clearCart(){
            try{
                await this.$store.dispatch('cart/clearCart');
            } catch(error){
                throw new Error(error.message);
            }
        },

        getCartFromVUEX(){
            return this.$store.getters['cart/getCart'];
        },

        async loadCartFromDB(){
            try{
                await this.$store.dispatch('cart/loadCartFromDB');
            } catch(error){
                throw new Error(error.message);
            }
        },

        async constructCartObject(errorMsg){
                const cartItems = await this.constructCartItems();
                const productTotalAmount = this.calculateProductTotalAmount(cartItems);
                const vat = this.calculateVatAmount(productTotalAmount);
                const shipping = this.calculateShippingAmount();
                const totalAmount = shipping + vat + productTotalAmount;
                const noOfItems = this.calulateNoOfItem();

                return {
                    cartItems : cartItems,
                    vat : vat.toFixed(2) ,
                    shipping : shipping.toFixed(2),
                    productTotalAmount: productTotalAmount.toFixed(2),
                    totalAmount: totalAmount.toFixed(2),
                    noOfItems : noOfItems,
                    errorMsg: errorMsg,
                }
        },

        async constructCartItems(){
            const productObj = await this.ProductLoader();
            const cartObj = this.getCartFromVUEX();
            return cartObj.map((c) => {
                let a = productObj.products.find((p) => p._id == c.productId)   
                    return {
                        ...c,
                        price: +a.price.$numberDecimal,
                        name: a.name,
                        product : a,
                        subtotal: +c.quantity * +a.price.$numberDecimal
                    }
            });
        },

        calulateNoOfItem(){
            const cart = this.getCartFromVUEX();
            let itemNo = 0;
            if (cart.length > 0){
                cart.forEach((c)=>{
                    itemNo += c.quantity;
                });
            }
            return itemNo
        },


        calculateShippingAmount(){
            let cost = 0;
            const cart = this.getCartFromVUEX();
            if (cart.length <= 0){
                cost =  0
            } else {
                cost = 50
            }
            return cost 
            
        },

        calculateVatAmount(productTotal){
            return (productTotal * 0.15)
        },

        calculateProductTotalAmount(cartItems){
            let total = 0;
            cartItems.forEach((item)=>{
                total += item.subtotal
            });
            return total
        },
        unsetAuthForCheckout(){
            console.log('in cart handler - unsetAuthForCheckout')
            this.$store.dispatch('auth/setAuthForCheckout',false)
        },

        ifAuthForCheckout(){
            console.log('in cart handler - ifAuthForCheckout')
            // ifAuthForCheckout = the page is leaded from user log in due to checkout 
            // user want to checkout but does not login / no account
            // User is required to login perior to checking out
            // After user does so, cart will display items that are added before logging in.
            // Those pre-added items  will replaced the cart in DB by replaceMainCart()
            //  AuthForCheckout will set to false after that
            return this.$store.getters['auth/isAuthForCheckout'];
        },

        async synchoniseCartInDB(){
            console.log('in cart handler - synchoniseCartInDB')
            try{
                await this.$store.dispatch('cart/synchoniseCartInDB');
            } catch(error){
                throw new Error(error.message);
            }
        }
    }
}
</script>