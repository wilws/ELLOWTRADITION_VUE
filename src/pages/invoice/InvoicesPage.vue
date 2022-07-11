<template>
    

    <ul v-for="invoice in invoices" :key="invoice._id">
        <li> 
            <h5> {{ invoice.createdAt }}</h5>
            <router-link :to="`/invoice/${invoice._id}`" >Invoice No: {{invoice._id}}</router-link>
        </li>
 
</ul>
   

</template>


<script>


export default {

    data(){
        return {
            invoices:[]
        }
    },


    async created(){


        const isSet = this.$store.getters['orders/isSet'];


        if (!isSet) {
            try{
                await this.$store.dispatch('orders/loadInvoices');
            } catch (err){
                console.log(err)
            }
        }
         
        this.invoices = this.$store.getters['orders/getInvoices'];
    }
}
</script>
