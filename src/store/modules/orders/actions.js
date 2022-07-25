export default {

    async loadInvoices(context){

        try{
            const resData = await fetch(
                'http://localhost:8080/get-invoices',{
                    method: "GET",                              
                    headers:{
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
    }





}