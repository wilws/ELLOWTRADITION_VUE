export default {
    getInvoices(state){
        console.log("getters in get Invoice")

        return state.invoices
    },

    isSet(state){
        return state.isSet
    }


}