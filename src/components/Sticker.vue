<template>
  <div class="sticker">
    <div class="sticker-text">Ресторан и бар</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Sticker",
  });
</script>
<style scoped>
  .sticker-text {
    position: relative;
    line-height: 140%;
  }
  .sticker {
    position: relative;
    border-radius: 8px;
    background-color: var(--accent);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 12px;
    box-sizing: border-box;
    text-align: left;
    font-size: var(--p-15r-size);
    color: var(--white);
    font-family: var(--p-15r);
  }
</style>
