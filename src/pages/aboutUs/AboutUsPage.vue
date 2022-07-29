<template>
<section class="section-2">
    <div>
        <h1> WHO WE ARE</h1>
        <p>Dear Valued Customers,</p>
        <p>It is my privilege that you are visiting our website. This is not a website but a wonderland where you can look for lovely cultural home decorations. </p>
        <p>How many times have you brought a decoration as a gift for friends or yourself without having any idea about the story or the history behind it?  This time it will be different - we will tell you the story. 
        Our high quality hand-made exquisite decorations will not only make your room appealing but also help you understand and share the beautiful stories along  with their historical significance. </p>
        <p>Let story to decorate your room.</p>
        <p>We greatly value your opinion. If you are not satisfied with our products or service, or have any suggestions to improve, or find a unique artefact that you would like us to share here — E-mail us. </p>
        <!-- <p>Once again, thank you for viewing our website. Your each visit cheers up every team member in Ellow Tradition. </p> -->
        <p>Yours sincerely, <br>W.S.WILSON<br>Business Development Manager</p>
    </div>
    <img src="@/assets/about_us_bg.jpg" alt="">
</section>
</template>




<style scoped>

/* Section 2 About Us */
.section-2{
    width:100%;
    height:100%;
    position: relative;
    /* perspective: 100rem; */
}

.section-2 div{
    position:absolute;
    top:0;
    left:13rem;
    width:50%;
    height:100vh;
    display: flex;
    flex-direction: column;
    z-index: 10;
    overflow: scroll;
    padding-right: 4rem;
    text-align: justify;
    scrollbar-width: none;
    -ms-overflow-style: none; 
}

/* Hide scrollbar for Chrome, Safari and Opera */
.section-2 div::-webkit-scrollbar {
    display: none;
}



.section-2 div h1{
font-weight: 100;
    font-family: 'Mukta Vaani', sans-serif;
    letter-spacing: .2rem;
    font-size: 7rem;
    color: #7D929B;
}

.section-2 div p{
    width:100%;
    font-size: 1.9rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    color: #000;
    line-height: 3rem;
    margin-bottom: 3.2rem;
}


.section-2 img{
    /* width:69rem; */
    position:absolute;
    right:0;
    top:0; 
    height: 100%;
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    opacity: .3;
}



/* End of Section 2 */



/* responsive */
@media (max-width: 900px){
    .section-2 div{
        width:100%;
        padding-right: 17rem;
    }
}

@media (max-width: 600px){
    .section-2 div h1{
        text-align: center;
        font-size: 5rem;
    }
    .section-2 div p{
         font-size: 2rem;
    }
}

@media (max-width: 460px){
    .section-2 div h1{
        text-align: center;
        font-size: 4rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
    .section-2 div p{
         font-size: 1.5rem;
    }
}

@media (max-width: 410px){
    
    .section-2 div h1{
        font-size: 3rem;
        letter-spacing: 0rem;
    }
    .section-2 div p{
         /* font-size: 1.5rem; */
    }
}


/* End of responsive */

</style>