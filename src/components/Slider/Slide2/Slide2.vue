<template>
  <!-- <div class="about-right-wrapper"> -->
  <div class="about-card">
    <img class="about-card-image-icon" alt="" src="./aboutcard--image@2x.png" />
    <div class="about-card-wrapper">
      <div class="sticker">
        <div class="sticker-text">Банный комплекс</div>
      </div>
      <div class="about-card-title">Термальная зона</div>
      <div class="about-card-text">
        В спа-центре отеля Долина 960, представлена термальная зона с финской
        сауной, паровой комнатой и турецким хаммамом, крытым бассейном с
        шезлонгами для отдыха. Гости могут посетить открытый подогреваемым
        инфинити-бассейн с панорамным видом на горы, крытый бассейн.
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
// import { defineComponent } from "vue";

export default {
  name: "Slide2",
};
</script>
<style scoped>
.about-card-image-icon {
  align-self: stretch;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  height: 200px;
  flex-shrink: 0;
  object-fit: cover;
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
  padding: 0px 0px 0px var(--padding-21xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--p-15r-size);
  color: var(--white);
  font-family: var(--h-24m);
}
</style>
