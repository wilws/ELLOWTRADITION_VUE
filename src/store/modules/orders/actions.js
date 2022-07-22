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
                throw error
            } 

            const invoices = [];
                res.products.forEach(invoice => {
                    invoices.push(invoice);
            });

            context.commit('setInvoices', invoices);
            // context.commit('isSet',true);

        } catch(err){
            console.log(err)
            throw new Error(err);
        }
    },


    clearInvoices(context){
        console.log('clearInvoices')
        context.commit('setInvoices', []);
        context.commit('isSet',false);
    }





}