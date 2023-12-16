<template>
  <div class="appartment-card-big">
    <div class="appartment-card-big-image" />
    <div class="appartment-card-big-wrapper">
      <div class="sticker">
        <div class="sticker-text">от 4 000 руб.</div>
      </div>
      <div class="appartment-card-big-title">Премиум Кинг</div>
      <div class="appartment-card-big-text">
        В номере: большая двуспальная кровать/2 односпальные кровати, рабочее
        место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi, кондиционер, сейф,
        чайно-кофейная станция. В ванной комнате: подогреваемый пол, душевая
        кабина, полотенца, косметические средства, халаты, тапочки.
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppartmentCardBig",
});
</script>
<style scoped>
.appartment-card-big-image {
  align-self: stretch;
  position: relative;
  border-radius: 12px;
  background-color: #6c6c6c;
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
.appartment-card-big-title {
  align-self: stretch;
  position: relative;
  font-size: var(--h-24m-size);
  line-height: 140%;
  font-weight: 500;
}
.appartment-card-big-text {
  align-self: stretch;
  position: relative;
  line-height: 140%;
}
.appartment-card-big-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.appartment-card-big {
  position: relative;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px);
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 28px 32px;
  box-sizing: border-box;
  gap: 28px;
  text-align: left;
  font-size: var(--p-15r-size);
  color: var(--white);
  font-family: var(--h-24m);
}
</style>
