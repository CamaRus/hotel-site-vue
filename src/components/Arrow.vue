<template>
  <div class="arrow">
    <img class="arrow-child" alt="" src="/polygon-1.svg" />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Arrow",
  });
</script>
<style scoped>
  .arrow-child {
    position: absolute;
    top: 0.68px;
    left: 1px;
    border-radius: 1px;
    width: 9.91px;
    height: 10.63px;
  }
  .arrow {
    position: relative;
    width: 100%;
    height: 12px;
  }
</style>
