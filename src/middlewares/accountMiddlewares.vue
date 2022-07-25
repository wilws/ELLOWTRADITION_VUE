<script>

import AuthMiddlewares from "./authMiddlewares.vue";

export default {
    mixins:[AuthMiddlewares],

    methods:{
        async AccountHandler(action="User"){

            try{
                if(!this.checkIfLogin()){
                    throw new Error('Not authenticated');
                }

                // await this.loadInvoiceFromDB();
                // return this.constructInvoiceObj();

                switch(action){
                    case('User'):
                        return this.$store.getters['auth/getUser'];
                    case('View'):
                        // await this.loadInvoiceFromDB();
                        // return this.getSingleInvoice(this.constructInvoiceObj(),invoiceId);
                        break;
                    default:
                        throw new Error('Please provide action: "Invoices" / " View"');
                }
            } catch(error) {
                console.log(error)
                throw new Error(error)
            }
        },

        getUserInfo(){
            return this.$store.getters['auth/getUser'];
        }


    }
}

</script>