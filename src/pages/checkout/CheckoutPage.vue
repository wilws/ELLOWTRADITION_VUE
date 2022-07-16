<template>
    <section class="section-5">

    </section>
</template>



<style scoped>
/* Section 5 - Invoice */
.section-5{
    width:calc( 100% - 8rem);
    height:100vh;
    position: relative;
    display: flex;
    perspective: 100rem;
    /* justify-content: space-around;
    align-items: center; */
    padding-top: 2rem;
    padding-left: 2rem;
    margin-left:8rem;
}

/* cart-summary */
.cart-summary{
    position: relative;
    width:40rem;
    height:95vh;
    background-color: #7D929B;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-transform: uppercase;
    box-shadow: .2rem .2rem 1rem #000000;
    border-radius: 1rem;
    padding: 2rem;
    perspective: 100rem;
}



/* invoices */
.invoices{
    width:calc(100% - 40rem);
    height:95vh;
    margin-left:1.5rem;
    overflow: scroll;
    padding: .7rem 2rem 0rem 1rem;
    perspective: 100rem;

}

.invoice{
    width: 100%;
    background-color: #FAFAFA;
    box-shadow: 1rem 1rem 1rem rgba(0,0,0, .3);
    border: rgba(112,112,112,.2) 0.1rem solid;
    border-radius: 1rem;
    height: 10rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #707070;
     /* animation:frontSwing 1s forwards; */
     transform-style: preserve-3d;
     /* overflow: hidden; */
}
</style>