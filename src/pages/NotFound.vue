<template>
  <section class="section">
    <empty-page-component></empty-page-component>
    <div class="notFound">
      <h2>Page not found</h2>
      <p>
        This page could not be found
      </p>
    </div>
  </section>
</template>


<script>
import emptyPageComponent from "../components/emptyPageComponent.vue";

export default {
  components:{emptyPageComponent},
}

</script>


<style scoped>


.section{
  position: relative;
  width:calc( 100% - 8rem);
  height:100%;
  perspective: 100rem;
  margin-left:8rem;
}

.section .notFound{
    position: absolute;
    width: 100%;
    top: 25%;
    text-align: center;
}

.notFound h2{
  font-size:3rem;
}

</style>