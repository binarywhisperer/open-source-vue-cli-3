<template>
  <div class="app">
    <navigation></navigation>
    <div class="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
    name: "App",
    components: {
        Navigation
    }
};
</script>

<style lang="scss">
.app {
    display: inline-block;
    width: 100vw;
    height: 100vh;
    .router-view {
        padding: 20px 10vw 20px 30vw;
    }
}
</style>
