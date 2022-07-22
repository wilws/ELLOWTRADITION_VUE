

export default {
    setInvoices(state,payload){
        return state.invoices = payload
    },

    isSet(state,payload){
        return state.isSet = payload
    }
}