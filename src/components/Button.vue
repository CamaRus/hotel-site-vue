<template>
  <div class="button">
    <div class="sizesmall-coloraccent">
      <div class="button-text">Подробнее</div>
    </div>
    <div class="sizesmall-colorwhite">
      <div class="button-text">Подробнее</div>
    </div>
    <div class="sizebig-coloraccent">
      <div class="button-text">Подробнее</div>
    </div>
    <div class="sizebig-colorwhite">
      <div class="button-text">Подробнее</div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Button",
  });
</script>
<style scoped>
  .button-text {
    position: relative;
    line-height: 140%;
  }
  .sizesmall-coloraccent {
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: var(--br-5xs);
    background-color: var(--accent);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs) var(--padding-xl);
  }
  .sizesmall-colorwhite {
    position: absolute;
    top: 185px;
    left: 20px;
    border-radius: var(--br-5xs);
    background-color: var(--white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs) var(--padding-xl);
    color: var(--black);
  }
  .sizebig-coloraccent {
    position: absolute;
    top: 95px;
    left: 20px;
    border-radius: var(--br-xs);
    background-color: var(--accent);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-base) var(--padding-5xl);
    font-size: var(--p-18r-size);
  }
  .sizebig-colorwhite {
    position: absolute;
    top: 260px;
    left: 20px;
    border-radius: var(--br-xs);
    background-color: var(--white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-base) var(--padding-5xl);
    font-size: var(--p-18r-size);
    color: var(--black);
  }
  .button {
    position: relative;
    border-radius: 5px;
    border: 1px dashed #9747ff;
    box-sizing: border-box;
    width: 100%;
    height: 337px;
    overflow: hidden;
    text-align: left;
    font-size: var(--p-13r-size);
    color: var(--white);
    font-family: var(--p-18r);
  }
</style>
