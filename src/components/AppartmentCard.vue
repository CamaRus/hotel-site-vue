<template>
  <div class="appartment-card">
    <div class="appartment-card-image" />
    <div class="appartment-card-right-wrapper">
      <div class="appartment-card-title">Премиум Кинг</div>
      <div class="appartment-card-price-wrapper">
        <div class="appartment-card-ruble">
          <img class="icon" alt="" src="/.svg" />
        </div>
        <div class="appartment-card-price">4 000</div>
      </div>
      <div class="button">
        <div class="button-text">Подробнее</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AppartmentCard",
  });
</script>
<style scoped>
  .appartment-card-image {
    position: relative;
    border-radius: 12px;
    background-color: #6c6c6c;
    width: 128px;
    height: 128px;
  }
  .appartment-card-title {
    align-self: stretch;
    position: relative;
    line-height: 140%;
  }
  .icon {
    position: relative;
    width: 13.59px;
    height: 17.94px;
  }
  .appartment-card-ruble {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .appartment-card-price {
    position: relative;
    line-height: 140%;
    font-weight: 500;
  }
  .appartment-card-price-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    font-size: var(--h-24m-size);
  }
  .button-text {
    position: relative;
    line-height: 140%;
  }
  .button {
    border-radius: var(--br-5xs);
    background-color: var(--accent);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs) var(--padding-xl);
    font-size: var(--p-13r-size);
  }
  .appartment-card-right-wrapper {
    width: 136px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }
  .appartment-card {
    position: relative;
    border-radius: 16px;
    background-color: var(--white-35);
    backdrop-filter: var(--blur);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-xl) 24px;
    box-sizing: border-box;
    gap: 28px;
    text-align: left;
    font-size: var(--p-15r-size);
    color: var(--white);
    font-family: var(--h-24m);
  }
</style>
