export default {
    async loadProducts(context){
       
        const api = `${context.rootGetters['getServerUrl']}get-products/`;
        console.log(api)
        
        try{
            const resData = await fetch(api,{
                    method: "GET",                              
                    headers:{
                        'Content-Type':'application/json'         
                    }
            });

            const res = await resData.json();   
        
            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                error.statusCode = resData.status
                throw error
            } 

            const products = [];
            res.products.forEach(product => {
                products.push(product);
            });

            context.commit('setProducts', products);

    
        } catch(err){
            const error = err;
            throw error;
        }
    },

    // async getProduct(context, data){

    // }
}