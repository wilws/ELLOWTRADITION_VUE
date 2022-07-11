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




<script>
import checkIndexPage from '../../mixins/checkIndexPage';

export default {
    mixins: [checkIndexPage],

    methods:{},

    created(){
        this.checkIndexPage();
    }
}
</script>


<style scoped>

/* Section 2 About Us */
.section-2{
    width:100%;
    height:100vh;
    position: relative;
    overflow: hidden; 
    perspective: 100rem;
}

.section-2 div{
    position:absolute;
    top:0;
    left:13rem;
    width:55rem;
    display: flex;
    flex-direction: column;
    z-index: 10;
    
}

.section-2 div h1{
font-weight: 100;
    font-family: 'Mukta Vaani', sans-serif;
    letter-spacing: .2rem;
    font-size: 7rem;
    color: #7D929B;
}

.section-2 div p{
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
     opacity: .3;
}



/* End of Section 2 */

</style>