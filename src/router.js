import { createRouter, createWebHistory } from 'vue-router';


import aboutUsPage from './pages/aboutUs/AboutUsPage';
import authPage from './pages/auth/AuthPage';
import cartPage from './pages/cart/CartPage';
import checkoutPage from './pages/checkout/CheckoutPage';
import indexPage from './pages/index/IndexPage';
import policyPage from './pages/policy/PolicyPage';
import productsPage from './pages/products/ProductsPage';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', redirect:'/index'},
        { path: '/index',component:indexPage },
        { path: '/aboutus',component:aboutUsPage },
        { path: '/auth', component:authPage },
        { path:'/checkout',component:checkoutPage },
        { path:'/cart',component:cartPage },
        { path:'/policy',component:policyPage },
        { path:'/products',component:productsPage },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    // mode: 'abstract'
})



export default router;