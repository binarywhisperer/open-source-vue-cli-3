<template>
  <div class="screenshot">
    <div class="screenshot__header">{{ header }}</div>
    <figure class="screenshot__figure">
        <img :src="baseUrl + path"/>
    </figure>
  </div>
</template>

<script>
export default {
    name: "Screenshot",
    props: ["header", "path"],
    data(){
        return{
            baseUrl: BASE_URL + 'static-no-js/'
        }
    }
};
</script>

<style scoped lang="scss">
.screenshot {
    margin: 10px 0;
    font-family: "Roboto Mono", monospace;
    &__header {
        font-size: 1.25rem;
        color: #2b2b2b;
    }
    &__figure {
        margin: 0;
        padding: 0;

        img {
            max-width: 100%;
        }
    }
}
</style>
