export default {
    getUser(state){
        return {
            username : state.username,
            email : state.email,
            address : state.address,
            token : state.token
        }

    },

    isLogin(state){
        return state.isLogin
    },

    isAuthForCheckout(state){
        console.log('in getter, get authforcheckout:', state.authForCheckout)
        return state.authForCheckout
    }

}