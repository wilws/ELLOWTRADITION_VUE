<template>
    <h1>This is Cart page</h1>


    <ul v-for="item in cart" :key="item.productId">
        <li>{{item.productId}}</li>
        <li>{{item.name}}</li>
        <li>{{item.quantity}}</li>
        <li>{{item.subtotal}}</li>
    </ul>

    <p>Total Price : {{ totalPrice}}</p>

    <button @click="checkout">Checkout</button>
</template>




<script>


export default {
    data() {
        return {
            cart:[],
            products:[],
            
        }
    },
   
    async created(){
        await this.loadProducts()
        this.cartInfoConstruction();  
    },

    computed:{
        totalPrice(){
            let i = 0;
            this.cart.forEach(item =>{
                i += item.subtotal;
            })
            console.log(this.cart)

            console.log(i)
            return i
        }
    },

    methods:{
        async loadProducts(){
            try{
                await this.$store.dispatch('products/loadProducts');    
                this.products = this.$store.getters['products/products'];
            } catch(err){
                this.error = err.message || "O..Something goes wrong"
            }
        },

        cartInfoConstruction(){
            const productObj = JSON.parse(JSON.stringify(this.products)); 
            const cartObj = this.$store.getters['cart/getCart'];
            this.cart = cartObj.map( c =>{
                let a = productObj.find(p => p._id == c.productId)
        
                return {
                    ...c,
                    price: +a.price.$numberDecimal,
                    name: a.name,
                    subtotal: +c.quantity * +a.price.$numberDecimal
                }
            });            
        },

        checkout(){
            console.log('click checkout')
            this.$store.dispatch('cart/checkout');
        }
    }
}
</script>
