<template>
    
    <h1>Invoice</h1>


    <p>Invoice no: {{ invoice._id }}</p>
    <p>{{ invoice.createdAt }}</p>
    

    <ul v-for="product in invoice.products" :key="product.productId">
        <li> Product: {{product.name}}</li>
        <li> Price: {{product.price}}</li>
        <li> Quantity: {{product.quantity}}</li>
        <li> Subtotal: {{product.subtotal}}</li>


    </ul>

    <p>Total Amount: {{ invoice.total}}</p>
 



</template>


<script>


export default {

    data(){
        return {
            invoice:"",
            previousPath :null,
        }
    },




    async created(){

        
        if (this.$route.query.checkout){
            this.$store.dispatch('cart/clearCart')
            try{
                await this.$store.dispatch('orders/loadInvoices');
            } catch (err){
                console.log(err)
            }
        }
       
        const InvoiceId = this.$route.params.invoiceId;
        let invoices = this.$store.getters['orders/getInvoices'];
        const idx = invoices.findIndex(invoice =>{
            return invoice._id.toString() == InvoiceId
        });
        this.invoice = invoices[idx];
        console.log(this.invoice)
    },

    methods:{

        // getInvoiceId(){
        //     this.invoideId = this.$route.query.invoideId;
        //     console.log(this.$route.query)
        // }

    }


}
</script>
