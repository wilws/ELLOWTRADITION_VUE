<template>

    <section class="section-5">
        <div class="left-area">
            <div class="invoice_summary_wrapper">
                <h1>Invoices</h1>
                <p class="total_invoice">Total No. of Invoice: <span>{{totalNoInvoice}}</span></p>
                <p class="spend">Accumulative Spend: $<span> {{accumulativeSpending}}</span></p>
            </div>
            <div class="personal_info_wrapper">
                <h1>Personal Info</h1>
                <div class="username">
                    <p class="label">User Name</p>
                    <p>Ron Wilson</p>
                </div>
                <div class="email">
                    <p class="label">E-mail</p>
                    <p>test@gmail.com</p>
                </div>
                <div class="shippingAddress">
                    <p class="label">Shipping Address</p>
                    <p>Room 12A, The Blue Roomes, Media City, Manchester</p>
                </div>
            </div>
        </div>

        

   

    <div class="invoices">
        <ul v-for="invoice in invoices" :key="invoice._id">
            <li>
                <router-link :to="{name:'invoice',params:{'invoiceId':invoice._id}}" class="view" style="text-decoration:none">
                <div class="invoice">
                        <div class="date">
                            <p class="day">{{ invoice.date.day }}</p>
                            <p class="month">{{ invoice.date.mEng }}</p>
                            <p class="year">{{ invoice.date.year }}</p>
                        </div>
                        <div class="line"></div>
                        <div class="invoice_no">
                            <div class="tag">Invoice no</div>
                            <p>{{ invoice._id }}</p>
                        </div>
                        <div class="amount">
                            <p>$ {{ invoice.total }}</p>
                        </div>
                </div>
                </router-link>
            </li>
        </ul>
    </div>
</section>

</template>


<script>

import InvoiceHandler from "../../middlewares/invoiceMiddlewares.vue";
export default {

    mixins:[InvoiceHandler],

    data(){
        return {
            invoiceObj:{},
            invoices:[],
            totalNoInvoice:0,
            accumulativeSpending:0
        }
    },

    async created(){
        try{
            this.invoiceObj = await this.InvoiceHandler("Invoices");
            // console.log(this.invoiceObj);
            // this.setVariables(this.invoiceObj);
            this.invoices = this.invoiceObj.invoices,
            this.totalNoInvoice = this.invoiceObj.totalNoInvoice,
            this.accumulativeSpending =  this.invoiceObj.accumulativeSpending
            
        } catch(error){
            if (error.message=="Error: Not authenticated"){
                await this.$router.push({name:"products"});
                // window.location.reload()
            }
            throw new Error(error);
        }
    },
// methods:{
//     setVariables(invoiceObj){
//         this.invoices = invoiceObj.invoices,
//         this.totalNoInvoice = invoiceObj.totalNoInvoice,
//         this.accumulativeSpending =  invoiceObj.accumulativeSpending
//     },
// }
}
</script>


<style scoped>
/* Section 5 - Invoice */
.section-5{
    width:calc( 100% - 6rem);
    height:100vh;
    position: relative;
    display: flex;
    perspective: 100rem;
    /* justify-content: space-around;
    align-items: center; */
    padding-top: 2rem;
    padding-left: 2rem;
    margin-left:6rem;
    /* background: blue; */
}

.left-area{
    position: relative;
    width:40rem;
    height:95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.left-area .invoice_summary_wrapper{
    position: relative;
    width:100%;
    height:40vh;
    background-color: #7D929B;
    display: flex;
    flex-direction: column;
    align-items: left;
    box-shadow: .2rem .2rem 1rem #000000;
    border-radius: 1rem;
    padding: 3rem;
    perspective: 100rem;
}

.left-area .invoice_summary_wrapper h1{
    font-size: 3rem;
    font-family: 'Meera Inimai', sans-serif;
    letter-spacing: 0.5rem;
    text-align: center;
    color: white;
    margin:3rem 0 6rem 0;
    text-transform: uppercase;
}

.left-area .invoice_summary_wrapper p{
    font-size: 2rem;
    color: white;
    margin-bottom:1rem;
    font-family: 'IBM Plex Sans', sans-serif;
}



.left-area  .personal_info_wrapper{
    position: relative;
    width:40rem;
    height:52vh;
    background-color: #7D929B;
    display: flex;
    flex-direction: column;
    align-items: left;
    box-shadow: .2rem .2rem 1rem #000000;
    border-radius: 1rem;
    padding: 3rem;
}

.left-area .personal_info_wrapper h1{
    font-size: 3rem;
    font-family: 'Meera Inimai', sans-serif;
    letter-spacing: 0.6rem;
    color: white;
    margin:3rem 0 5rem 0;
    text-align: center;
    text-transform: uppercase;
}

.left-area .personal_info_wrapper div .label{
    font-size: 1.5rem;
    color: white;
    font-weight: 900;
    margin-bottom:0rem;
    font-family: 'IBM Plex Sans', sans-serif;
}

.left-area .personal_info_wrapper div p {
    font-size: 1.5rem;
    color: white;
    margin-bottom:4rem;
    font-family: 'IBM Plex Sans', sans-serif;
}

/* invoices */
.invoices{
    position: relative;
    width:calc(100% - 40rem);
    height:95vh;
    margin-left:3rem;
    overflow: scroll;
    padding: 0rem 2rem 0rem 2.3rem;
}

.invoice{
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgba(112,112,112, 0.04);
    box-shadow: 1rem 1rem 1rem rgba(0,0,0, .3);
    border: rgba(112,112,112,.1) 0.1rem solid;
    border-radius: 0 1rem 1rem 0;
    height: 10rem;
    margin-bottom: 2rem;
    display: flex;
    align-items:center;
    color: #707070;
    white-space: nowrap;
    z-index: 101;
}


.invoice::before{
    content:"";
    position: absolute;
    border-radius: 1rem 0 0 1rem;
    top:0;
    left:-1.8rem;
    width:1.2rem;
    height:100%;
    background-color: #7D929B;
}

.invoice .line{
    width:.1rem;
    height:80%;
    background-color: #7D929B;
}

.invoice .date{
    position: relative;
    margin:2rem 2rem 2rem 3.5rem;
}

.invoice .date .day{
    position: relative;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 2.4rem;
    color: black;
    font-weight: 600;
    margin-bottom:-0.9rem;
}

.invoice .date .month{
    position: relative;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 2rem;
    color: black;
    font-weight: 600;
    margin-bottom:-0.6rem;
}

.invoice .date .year{
    position: relative;
    font-family: 'IBM Plex Sans', sans-serif;
    color: black;
    font-size: 1.5rem;
    
}

.invoice .invoice_no{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    width:50%;
    height:60%;
    justify-content: space-between;
}

.invoice .invoice_no .tag{
 
    border-radius: .3rem;
    font-family: 'IBM Plex Sans', sans-serif;
    letter-spacing: .1rem;
    font-size:1.5rem;
    color:black;
    font-weight:200;
    position: relative;
    background-color: rgba(112,112,112, 0.1);
    border: rgba(112,112,112,.4) 0.1rem solid;
    text-align: center;
    width:10rem;
    height:2.3rem;
}

.invoice .invoice_no p{
    position: relative;
        width: 100%;
    /* width: 35.6rem; */
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    color: black;
    font-size: 1.8rem;
}

.invoice .amount{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right:10rem;
    border:#707070 thin solid;
    border-radius: 3rem;
    width:10rem;
    height:3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(112,112,112, 0.05);
    box-shadow: inset 0.1rem 0.1rem 0.1rem rgba(106, 106, 106,7);
    overflow: hidden;
    white-space: nowrap;
}

.invoice .amount p{
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    font-size:2rem;
    color:black
}

.invoice .view{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right:4rem;
}

.invoice .view i{
    font-size: 2.5rem;
    color: black;
    position: relative;
}

@media(max-width:1106px){
    .invoice .amount{
        display: none;
    }
}

@media(max-width:930px){
    .invoice .invoice_no p{
        font-size: 1.2rem;
    }
    .invoice .view{
        right: 2rem;
    }
}

@media(max-width:860px){
    .section-5{
        flex-direction: column;
        overflow: scroll;
    }
    .left-area{
        width:98%;
    }
    .invoices{
        overflow: unset;
        margin-top: 3rem;
        margin-left: 0;
        width: 100%;
        padding-right: 1rem;
    }
    .invoice{
        width:100%;
    }
    .invoice .invoice_no p{
        font-size: 1.2rem;
    }
    .invoice .view{
        right: 2rem;
    }

    .left-area .invoice_summary_wrapper{
        width:95%;
        height:33vh;
        margin-bottom:2rem;
    }

    .left-area .invoice_summary_wrapper h1{
        margin: 0rem 0 5rem 0rem
    }
    .left-area .personal_info_wrapper{
        width:95%;
         height:48vh;
    }
    .left-area .personal_info_wrapper h1{
         margin: 0rem 0 3rem 0;
        
    }
    .invoice .amount{
        display: unset;
    }
    .invoice .amount p{
        text-align: center;
        line-height: 3rem;;
    }       
}


@media(max-width:600px){
    .invoice .amount{
        display: none;
    }
}

@media(max-width:450px){
    .invoice .amount{
        display: none;
    }
    .left-area .invoice_summary_wrapper{
        height:26vh;
    }
    .left-area .invoice_summary_wrapper h1{
        font-size:2rem;
        margin-bottom:3rem;
    }
    .left-area .invoice_summary_wrapper p{
        font-size: 1.5rem;
    }
        .left-area personal_info_wrapper{
        height:26vh;
    }
    .left-area .personal_info_wrapper h1{
        font-size:1.8rem;
        margin-bottom:3rem;
    }
    .left-area .personal_info_wrapper div p{
        font-size: 1.5rem;
        margin-bottom:2rem;
    }
    
    .invoice .invoice_no .tag{
        display: none;
    }
    .invoice .view{
        top:60%;
    }
}
@media(max-width:375px){
    .left-area .personal_info_wrapper div p{
        font-size: 1rem;
    }
    .left-area .invoice_summary_wrapper p{
        font-size: 1rem;
    }
    .invoice .invoice_no p{
        font-size: 0rem;
    }
}
/* End of Invoice */
</style>