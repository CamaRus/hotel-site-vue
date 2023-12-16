<template>
  <div class="about-right-wrapper">
    <div class="about-card">
      <div class="about-card-image" />
      <div class="about-card-wrapper">
        <div class="sticker">
          <div class="sticker-text">Ресторан и бар</div>
        </div>
        <div class="about-card-title">«Liechtenstein»</div>
        <div class="about-card-text">
          В ресторане и баре «Liechtenstein» используется авторский подход к
          приготовлению международных блюд. В заведении представлены блюда
          европейской, японской и итальянской кухонь. В баре имеется большой
          выбор терпких напитков и коктейлей.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AboutRightWrapper",
  });
</script>
<style scoped>
  .about-card-image {
    align-self: stretch;
    position: relative;
    border-radius: var(--br-xs);
    background-color: var(--color-dimgray);
    height: 200px;
  }
  .sticker-text {
    position: relative;
    line-height: 140%;
  }
  .sticker {
    border-radius: var(--br-5xs);
    background-color: var(--accent);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
  }
  .about-card-title {
    align-self: stretch;
    position: relative;
    font-size: var(--h-24m-size);
    line-height: 140%;
    font-weight: 500;
  }
  .about-card-text {
    align-self: stretch;
    position: relative;
    line-height: 140%;
  }
  .about-card-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .about-card {
    align-self: stretch;
    border-radius: var(--br-base);
    background-color: var(--color-gray);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-9xl) var(--padding-13xl);
    gap: var(--gap-9xl);
  }
  .about-right-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 40px;
    box-sizing: border-box;
    text-align: left;
    font-size: var(--p-15r-size);
    color: var(--white);
    font-family: var(--h-24m);
  }
</style>
