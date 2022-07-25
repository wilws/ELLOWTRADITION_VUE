// The interface of the data
// interface data  {
//      id : String,
// }

export default {
    async loadCartFromDB(context){

        if (!context.rootGetters['auth/isLogin']){             // If user not loged in. Just return 
            return
        }
        
        try {

            const api = `${context.rootGetters['getServerUrl']}get-cart/`;
            const jwt = context.rootGetters['auth/getUser'].token;
        
            const resData = await fetch(api,{
                    method: "GET",                                // change from "GET" to "POST" as cookies not allowed               
                    headers:{
                        Authorization: 'Bearer ' + jwt,
                        'Content-Type':'application/json'         
                    },
                    credentials: 'include'
            });

            const res = await resData.json();   
            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                error.statusCode = res.status;
                throw error
            } 

            const cartItems = [];
            res.cart.forEach((c) => {
                cartItems.push({
                        productId: c.productId,
                        quantity: c.quantity,
                });
            });

            context.commit('updateCart',cartItems);                 // Update VUEX

        } catch(err){
            console.log(err)
            const error = err;
            throw error;
        }
    },

    // async loadCartFromDB(context){
    // This method is muted because cookies Auth approach is not support by heroku

 
        
    //     if (!context.rootGetters['auth/isLogin']){             // If user not loged in. Just return 
    
    //         return
    //     }
    //     try{
    //         const api = `${context.rootGetters['getServerUrl']}get-cart/`;
    //         const resData = await fetch(api,{
    //                 method: "GET",                              
    //                 headers:{
    //                     'Content-Type':'application/json'         
    //                 },
    //                 credentials: 'include'
    //         });

    //         const res = await resData.json();   
    //         console.log(resData)
    //         console.log(res)
    //         if (resData.status !== 200) {                           // Check if return status 200
    //             const error = new Error(res.message)
    //             error.statusCode = res.status;
    //             throw error
    //         } 

           

    //         const cartItems = [];
    //         res.cart.forEach((c) => {
    //             cartItems.push({
    //                     productId: c.productId,
    //                     quantity: c.quantity,
    //             });
    //         });

    //         context.commit('updateCart',cartItems);                 // Update VUEX

    //     } catch(err){
    //         console.log(err)
    //         const error = err;
    //         throw error;
    //     }
    // },


    async addtoCart(context,data) {

        const cart = context.getters['getCart'];                            // Load Cart From VUEX
        const updatedCartItems = [...cart];                                 // Deep clone the cart
        const cartProductIndex = cart.findIndex(cp => {    
            return cp.productId === data.id;                                // find the index of the same product in the current cart       
        });

    
        if (cartProductIndex >= 0){                                       // If same product is found in the cart
            updatedCartItems[cartProductIndex].quantity += 1;             // update the quantity
        } else {
            updatedCartItems.push({                                       // If no same product in cart
                productId: data.id,                                       // create one
                quantity: 1,
            });
        }

        try{
            await context.dispatch('save',updatedCartItems);              // update to database
        } catch(error){
            throw new Error("Fail to add product to cart");
        }    
    },

    async deductCart(context,data) {

        const cart = context.getters['getCart'];
        let updatedCartItems = [...cart];                               // Deep clone the cart
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
        try{
            await context.dispatch('save',updatedCartItems);              // update to database
        } catch(error){
            throw new Error("Fail to delete product from cart");
        }   
    },


    async removeCart(context,data){
        const cart = context.getters['getCart'];
        const updatedCartItems = cart.filter(cp => {
            return cp.productId !== data.id
        });
        try{
            await context.dispatch('save',updatedCartItems);              // update to database
        } catch(error){
            throw new Error("Fail to remove product from cart");
        }   
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
            const error = err;
            throw error;
        }
    },



     
    async updateCartToDB(context,data){
        // This is non-Cookie approach  
        try{   
            const api = `${context.rootGetters['getServerUrl']}update-cart`;
            const jwt = context.rootGetters['auth/getUser'].token;
            const formData = {
                cart: JSON.parse(JSON.stringify(data))
            }
            
            const resData = await fetch(api,{
                    method: "PUT",                              
                    headers:{
                        Authorization: 'Bearer ' + jwt,
                        'Content-Type':'application/json'         
                    },
                    body:JSON.stringify(formData),
                    credentials: 'include'
            });
            
            const res = await resData.json();  

            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                error.statusCode = res.status;
                throw error
            } 

        } catch(err){
            const error = err;
            throw error;
        }
    },

    async checkout(context){

        try {
            const api = `${context.rootGetters['getServerUrl']}checkout`;
            console.log(api)
            const jwt = context.rootGetters['auth/getUser'].token;
            const resData = await fetch(api,{
                method:"POST",
                headers:{
                    Authorization: 'Bearer ' + jwt,
                    'Content-Type':'application/json'
                },
                credentials: 'include'
            })

            const res = await resData.json(); 

            console.log(res);
            console.log(resData);


            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                error.statusCode = res.status;
                throw error
            } 
   
            window.location.href = res.session.url

        }catch(err){
            const error = err;
            throw error;
        }

    },


    async synchoniseCartInDB(context){
        // upload currrent cart in VUEX to DB
        const cart = context.getters['getCart'];
        try{
            await context.dispatch('save',cart);              // update to database
        } catch(error){
            throw new Error(error.message);
        } 
    }




  

    // Cookies Approach Functions. Muted Because Heroku not support cookies 
    // async updateCartToDB(context,data){
    //     
    //     const cart = {
    //         cart: JSON.parse(JSON.stringify(data))
    //     }

    //     try{   
    //         const api = `${context.rootGetters['getServerUrl']}update-cart`;
    //         const resData = await fetch(api,{
    //                 method: "PUT",                              
    //                 headers:{
    //                     'Content-Type':'application/json'         
    //                 },
    //                 body:JSON.stringify(cart),
    //                 credentials: 'include'
    //         });
            
    //         const res = await resData.json();  

    //         console.log(res)
    //         if (resData.status !== 200) {                           // Check if return status 200
    //             const error = new Error(res.message)
    //             error.statusCode = res.status;
    //             throw error
    //         } 

    //     } catch(err){
    //         const error = err;
    //         throw error;
    //     }
    // },


    // async checkout(context){

    //     try {
    //         const api = `${context.rootGetters['getServerUrl']}checkout`;
    //         const resData = await fetch(api,{
    //             method:"POST",
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             credentials: 'include'
    //         })

    //         const res = await resData.json(); 


    //         if (resData.status !== 200) {                           // Check if return status 200
    //             const error = new Error(res.message)
    //             error.statusCode = res.status;
    //             throw error
    //         } 
   
    //         window.location.href = res.session.url

    //     }catch(err){
    //         const error = err;
    //         throw error;
    //     }

    // },


    // async writeToTempCart(context,data){
    //     console.log('in cart action write to tempcart')
    //     try {
    //         context.commit('writeToTempCart',data);                     // update the local state
    //     } catch(err) {
    //         const error = new Error('cannot write to temp cart');
    //         throw error;
    //     }
    // },



    


}