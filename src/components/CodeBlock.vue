<template>
  <div class="code-block">
    <div class="code-block__header">{{ header }}</div>
    <div class="code-block__code">
      <div class="code-block__code-line" v-for="line in lines" v-html="line">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "CodeBlock",
    props: ["header", "lines"]
};
</script>

<style scoped lang="scss">
</style>
