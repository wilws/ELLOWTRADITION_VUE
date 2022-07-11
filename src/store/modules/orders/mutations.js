

export default {
    setInvoices(state,payload){
        console.log("Set Invoices")
        return state.invoices = payload
    },

    isSet(state,payload){
        console.log("Set isSet")
        return state.isSet = payload
    }
}