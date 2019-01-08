<template>
  <section>
    <div class="company-example" :style="`background-color:${company.color}`">
      <header>{{ company.name }}</header>
      <main>{{ company.slogan }}</main>
      <footer v-if="type === 'mutation'">
        <button @click="newColorMutation">New Color Mutation</button>
      </footer>
      <footer v-if="type === 'action'">
        <button @click="newCompanyAction">New Company Action</button>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
    name: "CompanyExample",
    props: ['type'],
    methods: {
        newColorMutation() {
            this.$store.commit('newColorMutation');
        },
        newCompanyAction() {
            this.$store.dispatch('newCompanyAction');
        }
    },
    computed: {
        company() {
            return this.$store.state.company;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .company-example{
    width: 90%;
    max-width: 600px;
    margin: 2rem auto;
    border-radius: 6px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.5);
    padding: 20px;
    box-sizing: border-box;
    header{
      font-size:3rem;
      font-weight: 700;
      color:#fff;
      text-shadow: 1px 1px 5px rgba(0,0,0,1);
    }

    main{
      font-size:1.5rem;
      font-weight: 700;
      color:#fff;
      text-shadow: 1px 1px 5px rgba(0,0,0,1);
    }
    footer{
      margin-top:2rem;
      display:flex;
      justify-content: center;
      align-items: center;
      button{
        background: #fff;
        padding: 5px 20px;
        border:1px solid #2b2b2b;
        border-radius: 2px;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover{
          background: #333;
          color:#fff;
          border:1px solid #fff;
        }

        &:active{
          background: #000;
          color:#bbb;
          border:1px solid #bbb;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>
