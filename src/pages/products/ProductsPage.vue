<template>
    <h1>This is product page</h1>

    <button @click="clearCart()">Clear cart</button>



    <ul>
        <li v-for="(product, index ) in products" :key="product._id" >
            <h3>{{ product.name }}</h3>
            <h4>${{ product.price.$numberDecimal }}</h4>
            
            
          
            <div>
                <button @click="viewProduct(index)">View</button>
                <button @click="addtoCart(product)"> + </button>
                <button @click="deductfromCart(product)">  - </button>
                <button @click="removefromCart(product)"> Remove </button>
            </div>
        
       
        </li>
     
    </ul>

    <Teleport to="body">
        <div v-if="open" class="modal">
            <h3>{{ clickedProduct.name }}</h3>
            <h4>${{ clickedProduct.price }}</h4>
            <h4>{{ clickedProduct.description }}</h4>
            <button @click="open = false">Close</button>
        </div>
    </Teleport>

   
</template>



<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    data() {
        return{
            error:"",
            open:false,
            clickedProduct : {}
        }
    },

    computed:{
        products() {
            return this.$store.getters['products/products'];
        }
    },

    created(){
        this.loadProducts()
                const a = this.$store.getters['auth/getUser'];
        console.log("when app create:", a)

         const b = this.$store.getters['auth/isLogin'];
         console.log('if loginin',b)
    },

    methods:{
        async loadProducts(){
            try{
                await this.$store.dispatch('products/loadProducts');
            } catch(err){
                this.error = err.message || "O..Something goes wrong"
            }
        },

        viewProduct(i){

            this.clickedProduct = {
                name: this.products[i].name,
                price: this.products[i].price.$numberDecimal,
                description:this.products[i].description,
            }

            this.open = true
        },

        addtoCart(p){
            const a = this.$store.getters['cart/getCart']
            console.log("before add",JSON.parse(JSON.stringify(a)))
            try {
                this.$store.dispatch('cart/addtoCart',{
                    id : p._id,
                })

                const b = this.$store.getters['cart/getCart']
                console.log("after add",JSON.parse(JSON.stringify(b)))

            }catch(err){

                this.error = err.message || "Cannot add product into cart";
            }
        },
        // deductOnefromCart(p){},
        removefromCart(p){
            const a = this.$store.getters['cart/getCart']
            console.log("before remove",JSON.parse(JSON.stringify(a)))
            try {
                this.$store.dispatch('cart/removeCart',{
                    id : p._id,
                });

                const b = this.$store.getters['cart/getCart']
                console.log("after remove",JSON.parse(JSON.stringify(b)))

            }catch(err){

                this.error = err.message || "Cannot add product into cart";
            }
        },

        deductfromCart(p){
            const a = this.$store.getters['cart/getCart']
            console.log("before remove",JSON.parse(JSON.stringify(a)))
            try {
                this.$store.dispatch('cart/deductCart',{
                    id : p._id,
                });

                const b = this.$store.getters['cart/getCart']
                console.log("after remove",JSON.parse(JSON.stringify(b)))

            }catch(err){

                this.error = err.message || "Cannot add product into cart";
            }

        },


        clearCart(){
            const a = this.$store.getters['cart/getCart']
            console.log("before clear",JSON.parse(JSON.stringify(a)))
            try {
                this.$store.dispatch('cart/clearCart')

                const b = this.$store.getters['cart/getCart']
                console.log("after clear",JSON.parse(JSON.stringify(b)))

            }catch(err){

                this.error = err.message || "Cannot add product into cart";
            }
        },

        
        
    }
}
</script>


<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: blanchedalmond;
}
</style>