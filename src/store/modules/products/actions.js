export default {
    async loadProducts(context){

        try{
            
            const resData = await fetch(
                'http://localhost:8080/get-products/',{
                    method: "GET",                              
                    headers:{
                        'Content-Type':'application/json'         
                    }
            });

            const res = await resData.json();                  


            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                throw error
            } 

            const products = [];
            res.products.forEach(product => {
                products.push(product);
            });

            context.commit('setProducts', {                     
                ...products,
            });


        } catch(err){
            const error = new Error("Fail to Load Products");
            throw error;
        }
    },

    // async getProduct(context, data){

    // }
}