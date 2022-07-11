

export default {
    async addtoCart(context,data) {

        //  The interface of the data
        // interface data  {
        //      id : String,
        // }

 
        const cart = context.getters['getCart'];
        const updatedCartItems = [...cart];                             // Deep clone the cart
        const cartProductIndex = cart.findIndex(cp => {                 // find the index of the same product in the current cart          
            return cp.productId === data.id;
        });


        if (cartProductIndex >= 0){                                       // If ame product is found in the cart
            updatedCartItems[cartProductIndex].quantity += 1;             // update the quantity
        } else {
            updatedCartItems.push({                                       // If no same product in cart
                productId: data.id,                                       // create one
                quantity: 1,
            });
        }
        await context.dispatch('save',updatedCartItems)
    },

    async deductCart(context,data) {

        const cart = context.getters['getCart'];
        let updatedCartItems = [...cart];                             // Deep clone the cart
        const cartProductIndex = cart.findIndex(cp => {                 // find the index of the same product in the current cart          
            return cp.productId === data.id;
        });

        if (cartProductIndex >= 0){      
            const qty =  updatedCartItems[cartProductIndex].quantity    

            if (qty > 1) {                                                   // if more than 1 qty
                updatedCartItems[cartProductIndex].quantity = qty -1         // deduct 1 qty
            } else {                                                         
                updatedCartItems = cart.filter(cp => {                      // if less than 1 qty
                    return cp.productId !== data.id                         // it means after deduction of 1, it will become <= 0
                });                                                         // remove from cart if qty < 1
            }
        }
        await context.dispatch('save',updatedCartItems)
    },


    async removeCart(context,data){
        const cart = context.getters['getCart'];
        const updatedCartItems = cart.filter(cp => {
            return cp.productId !== data.id
        });
        await context.dispatch('save',updatedCartItems)
    },


    async clearCart(context){
        const updatedCartItems = [];
        await context.dispatch('save',updatedCartItems)
    },


    async save(context,data){
        try {
            if (context.rootGetters['auth/isLogin']){                          // if user is logged in. Update cart in datacase first
                await context.dispatch('updateCartToDB',data);     //wait for the success update Database before update the local state                              
            }
            context.commit('updateCart',data);                     // update the local state
        } catch(err) {
            const error = new Error('cannot update cart in Database');
            throw error;
        }
    },


    async updateCartToDB(_,data){

        const cart = {
            cart: JSON.parse(JSON.stringify(data))
        }

        try{   
            const resData = await fetch(
                'http://localhost:8080/update-cart',{
                    method: "PUT",                              
                    headers:{
                        'Content-Type':'application/json'         
                    },
                    body:JSON.stringify(cart),
                    credentials: 'include'
            });
            
            const res = await resData.json();  

            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                throw error
            } 

        } catch(err){
            console.log(err)
            const error = new Error("Fail to Update Cart in Database");
            throw error;
        }
    },


    async checkout(){

        try {
            const resData = await fetch('http://localhost:8080/checkout',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                credentials: 'include'
            })

            const res = await resData.json(); 


            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                throw error
            } 
   
            window.location.href = res.session.url

        }catch(err){
            const error = new Error("Fail to checkout");
            throw error
        }

    }


    // loadCartFromDB(context,data){
    //     console.log(context,data)
    // },

}