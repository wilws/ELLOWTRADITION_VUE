

export default {

    async signup(context,data){
        const formData = {
            email : data.email,
            username : data.username,
            password : data.password,
            address : data.address,
        }

        const api = `${context.rootGetters['getServerUrl']}auth/signup`;

        try{
            const resData = await fetch(api,{
                    method: "POST",                              
                    headers:{
                        'Content-Type':'application/json'         
                    },
                    body:JSON.stringify(formData),
                    credentials: 'include'
            });
            const res = await resData.json();  

            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message);
                error.statusCode = resData.status;
                throw error;
            } 

        } catch(err){
            const error = err // prevent " error  Unnecessary try/catch wrapper "
            throw error;
        }
    },



    async login(context,data){
        const formData = {
            email : data.email,
            password : data.password,
        }

        const api = `${context.rootGetters['getServerUrl']}auth/login`;
        // const api = "http://localhost:8080/auth/login/"
        try{    
            const resData = await fetch(api,{
                    method: "POST",                              
                    headers:{
                        'Content-Type':'application/json'         
                    },
                    body:JSON.stringify(formData),
                    credentials: 'include'
            });
            
            const res = await resData.json();  
            console.log(res)
            if (resData.status !== 200) {                        // Check if return status 200
                const error = new Error(res.message)
                error.statusCode = resData.status;
                throw error
            }


            const d = new Date();
            d.setTime(d.getTime() + (1*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = "jwt=" + res.token + ";" + expires + ";path=/";
  
            

            context.dispatch('localStatusUpdate',{
                isLogin :true,
                token:res.token,
                username: res.username,
                email: res.email,
                address: res.address,
            })

            

        } catch(err){
            const error = err // prevent " error  Unnecessary try/catch wrapper "
            throw error;
        }
    },

    async logout(context){

        const api = `${context.rootGetters['getServerUrl']}auth/logout`;

        try{

            const resData = await fetch(api,{
                method:'POST',
                headers:{
                    "Content-Type" : "aplication/json",
                },
                credentials: 'include'
            })

            const res = await resData.json();

            if (resData.status != 200){
                const error = new Error(res.message)
                error.statusCode = resData.status;
                throw error;
            }

            const d = new Date();
            d.setTime(d.getTime() + (0*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = "jwt=" + res.token + ";" + expires + ";path=/";

            context.dispatch('localStatusUpdate',{
                isLogin :false,
                token:"",
                username:"",
                email:"",
                address:"",
            })


            context.dispatch('orders/clearInvoices',null,{root:true})
            context.dispatch('cart/clearCart',null,{root:true})

        } catch(err){
            const error = err  // prevent " error  Unnecessary try/catch wrapper "
            throw error;
        }
    },

    // async LoginValidation(context){

    //     console.log("in LoginValidation")

    //     try{
    //         const resData = await fetch("http://localhost:8080/auth/is-Login",{
    //             method:'POST',
    //             headers:{
    //                 "Content-Type" : "aplication/json",
    //             },
    //             credentials: 'include'
    //         })

    //         if (resData.status != 200){
    //             context.dispatch('localStatusUpdate',{
    //                 isLogin :false,
    //                 token:"",
    //                 username:"",
    //                 email:"",
    //                 address:"",
    //             });
    //         }

    //     } catch(err){
    //         const error = new Error("Fail to checkstatus");
    //         context.dispatch('localStatusUpdate',{
    //             isLogin :false,
    //             token:"",
    //             username:"",
    //             email:"",
    //         });
    //         throw error;
    //     }
    // },

    localStatusUpdate(context,data){
        context.commit('updateStatus',{
            isLogin :data.isLogin,
            token:data.token,
            username:data.username,
            email:data.email,
            address:data.address,
        });
    },

    setAuthForCheckout(context,data){
        context.commit('setAuthForCheckout',data);
    },

}