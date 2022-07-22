<script>

import AuthMiddlewares from "./authMiddlewares.vue";

export default {
    mixins:[AuthMiddlewares],

    methods:{
        async InvoiceHandler(action="Invoices",invoiceId=""){

            try{
                if(!this.checkIfLogin()){
                    throw new Error('Not authenticated');
                }

                // await this.loadInvoiceFromDB();
                // return this.constructInvoiceObj();

                switch(action){
                    case('Invoices'):
                        await this.loadInvoiceFromDB();
                        return this.constructInvoiceObj();
                    case('View'):
                        await this.loadInvoiceFromDB();
                        return this.getSingleInvoice(this.constructInvoiceObj(),invoiceId);
                    default:
                        throw new Error('Please provide action: "Invoices" / " View"');
                }
            } catch(error) {
                console.log(error)
                throw new Error(error)
            }
        },


        constructInvoiceObj(){
            const invoicesObj = this.getInvoiceFromVUEX();
            const invoices = this.constructInvoices(invoicesObj);
            const totalNoInvoice =  invoices.length;
            const accumulativeSpending = this.calculateAccumulativeSpending(invoices);

            return {
                totalNoInvoice : totalNoInvoice,
                accumulativeSpending :accumulativeSpending,
                invoices : invoices,
            }
        },

        constructInvoices(invoiceObj){ 
            var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            
            return invoiceObj.map((invoice)=>{
                const date = invoice.createdAt.split('-');
                const d = date[2].substring(0,1);
                const y = date[0];
                const m = date[1];
                const mEng = months[+m-1]
                const dZero = +d < 9? `0${d}` : d
         
                return {
                    _id :invoice._id,
                    total : invoice.total,
                    products: invoice.products,
                    noOfItem:invoice.products.length,
                    vat:invoice.vat,
                    shipping:invoice.shipping,
                    productTotal:invoice.productTotal,
                    date : {
                        fullDate : invoice.createdAt,
                        day: dZero,
                        month: m,
                        year:y,
                        mEng : mEng,
                    }
                }
            })
        },

        calculateAccumulativeSpending(invoices){
            let amount = 0;
            invoices.forEach((invoice)=>{
                amount += +invoice.total;
            });
            return amount
        },


        getInvoiceFromVUEX(){
            return this.$store.getters['orders/getInvoices'];
        },

        getSingleInvoice(invoiceObj,invoiceId){
           return invoiceObj.invoices.find((invoice)=>             
                invoice._id.toString() === invoiceId.toString()
            );
        },

        async loadInvoiceFromDB(){
            try{
                await this.$store.dispatch('orders/loadInvoices');
            } catch(error){
                throw new Error(error);
            }
        }
    }
}
</script>