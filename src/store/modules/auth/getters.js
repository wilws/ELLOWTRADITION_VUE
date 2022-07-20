export default {
    getUser(state){
        return {
            username : state.username,
            email : state.email,
            token : state.token
        }

    },

    isLogin(state){
        return state.isLogin
    }


}