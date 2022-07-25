export default {

    async loadInvoices(context){

        try{
            const api = `${context.rootGetters['getServerUrl']}get-invoices`;
            const jwt = context.rootGetters['auth/getUser'].token;
  
            const resData = await fetch(api,{
                    method: "GET",                              
                    headers:{
                        Authorization: 'Bearer ' + jwt,
                        'Content-Type':'application/json'         
                    },
                    credentials: 'include'
            });

            const res = await resData.json();     
            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                error.statusCode = resData.status
                throw error
            } 

            const invoices = [];
                res.products.forEach(invoice => {
                    invoices.push(invoice);
            });

            context.commit('setInvoices', invoices);

        } catch(err){
            const error = err;
            throw error;
        }
    },


    clearInvoices(context){
        context.commit('setInvoices', []);
        context.commit('isSet',false);
    },


    // 
    // async loadInvoices(context){
    // This method is muted because cookies Auth approach is not support by heroku
    
    //     try{
    //         const api = `${context.rootGetters['getServerUrl']}get-invoices`;
  
    //         const resData = await fetch(api,{
    //                 method: "GET",                              
    //                 headers:{
    //                     'Content-Type':'application/json'         
    //                 },
    //                 credentials: 'include'
    //         });

    //         const res = await resData.json();     
    //         if (resData.status !== 200) {                           // Check if return status 200
    //             const error = new Error(res.message)
    //             error.statusCode = resData.status
    //             throw error
    //         } 

    //         const invoices = [];
    //             res.products.forEach(invoice => {
    //                 invoices.push(invoice);
    //         });

    //         context.commit('setInvoices', invoices);

    //     } catch(err){
    //         const error = err;
    //         throw error;
    //     }
    // },

}