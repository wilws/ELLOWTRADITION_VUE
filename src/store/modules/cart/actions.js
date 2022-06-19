export default {
    addtoCart(context,data) {

        //  The interface of the data
        // interface data  {
        //      id : String,
        // }

 
        const cart = context.getters['getCart'];
        const updatedCartItems = [...cart];                             // Deep clone the cart

        const cartProductIndex = cart.findIndex(cp => {                 // find the index of the same product in the current cart          
            return cp.productId === data.id;
        });

        if (cartProductIndex >= 0){                                         // If ame product is found in the cart
            // newQuantity = cart[cartProductIndex].quantity + 1;              // add 1 to the current quantity
            updatedCartItems[cartProductIndex].quantity += 1;      // update the quantity
        } else {
            updatedCartItems.push({                                 // If no same product in cart
                productId: data.id,                                 // create one
                quantity: 1,
            });
        }

        context.commit('updateCart',updatedCartItems);  
    },

    deductCart(context,data) {

        const cart = context.getters['getCart'];
        const updatedCartItems = [...cart];                             // Deep clone the cart
        const cartProductIndex = cart.findIndex(cp => {                 // find the index of the same product in the current cart          
            return cp.productId === data.id;
        });

        if (cartProductIndex >= 0){      
            const qty =  updatedCartItems[cartProductIndex].quantity    

            if (qty > 1) {                                                   // if more than 1 qty
                updatedCartItems[cartProductIndex].quantity = qty -1
                context.commit('updateCart',updatedCartItems);               // update the quantity

            } else {                                                         // if less than 1 qty
                context.dispatch('removeCart',{                             // it means after deduction of 1, it will become <= 0
                    id : data.id,                                           // remove from cart if qty < 1
                });  
            }
            
        }
    },


    removeCart(context,data){
        const cart = context.getters['getCart'];
        const updatedCart = cart.filter(cp => {
            return cp.productId !== data.id
        });
        context.commit('updateCart',updatedCart);
    },


    clearCart(context){
        context.commit('updateCart',[]); 
    },


    // updateCartToDB(context,data){
    //     console.log(context,data)
    // },


    // loadCartFromDB(context,data){
    //     console.log(context,data)
    // },

}