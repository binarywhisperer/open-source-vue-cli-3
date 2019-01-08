<template>
  <section>
    <h1>
      Vue<br>
      Open Source<br>
      Single Page Application<br>
      Vue UI - Vue Router - Vuex - SCSS<br>
    </h1>
    <p>This is an Open Source Single Page Application built using Vue CLI 3 that details how to build this SPA using Vue CLI 3.</p>
    <div v-if="companyIsNotDefault">
      <company-example></company-example>
      <company-example :type="'mutation'"></company-example>
      <company-example :type="'action'"></company-example>
      <div class="section" id="shared-state-example">
        <p>...and of course changes here are shared with <router-link to="/vuex">Vuex View</router-link><span class=""></span></p>
      </div>
    </div>

  </section>
</template>

<script>
import CompanyExample from "../components/CompanyExample";

export default {
    name: "Introduction",
    components: {
        CompanyExample
    },
    computed:{
        companyIsNotDefault(){
            return this.$store.state.company.name !== 'Binary Whisperer' || this.$store.state.company.slogan !== '00000101 00111001' || this.$store.state.company.color !== '#2b2b2b';
        }
    }
};
</script>

<style scoped lang="scss">
</style>
