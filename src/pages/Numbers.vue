<template>
  <div class="appartments-wrapper">
    <!-- <div class="appartments-inner-wrapper"> -->
    <SliderNumbers></SliderNumbers>
    <!-- <div class="appartment-card-big">
        <img
          class="appartment-card-big-image-icon"
          alt=""
          src="/Numbers/appartmentcardbig--image@2x.png"
        />
        <div class="appartment-card-big-wrapper">
          <div class="sticker">
            <div class="button-text">от 4 000 руб.</div>
          </div>
          <div class="appartment-card-big-title">Премиум Кинг</div>
          <div class="appartment-card-big-text">
            В номере: большая двуспальная кровать/2 односпальные кровати,
            рабочее место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi,
            кондиционер, сейф, чайно-кофейная станция. В ванной комнате:
            подогреваемый пол, душевая кабина, полотенца, косметические
            средства, халаты, тапочки.
          </div>
        </div>
      </div>
      <div class="appartment-card-big">
        <img
          class="appartment-card-big-image-icon"
          alt=""
          src="/Numbers/appartmentcardbig--image1@2x.png"
        />
        <div class="appartment-card-big-wrapper">
          <div class="sticker">
            <div class="button-text">от 4 000 руб.</div>
          </div>
          <div class="appartment-card-big-title">Премиум Кинг</div>
          <div class="appartment-card-big-text">
            В номере: большая двуспальная кровать/2 односпальные кровати,
            рабочее место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi,
            кондиционер, сейф, чайно-кофейная станция. В ванной комнате:
            подогреваемый пол, душевая кабина, полотенца, косметические
            средства, халаты, тапочки.
          </div>
        </div>
      </div>
      <div class="appartment-card-big">
        <img
          class="appartment-card-big-image-icon"
          alt=""
          src="/Numbers/appartmentcardbig--image2@2x.png"
        />
        <div class="appartment-card-big-wrapper">
          <div class="sticker">
            <div class="button-text">от 4 000 руб.</div>
          </div>
          <div class="appartment-card-big-title">Премиум Кинг</div>
          <div class="appartment-card-big-text">
            В номере: большая двуспальная кровать/2 односпальные кровати,
            рабочее место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi,
            кондиционер, сейф, чайно-кофейная станция. В ванной комнате:
            подогреваемый пол, душевая кабина, полотенца, косметические
            средства, халаты, тапочки.
          </div>
        </div>
      </div>
      <div class="appartment-card-big">
        <img
          class="appartment-card-big-image-icon"
          alt=""
          src="/Numbers/appartmentcardbig--image3@2x.png"
        />
        <div class="appartment-card-big-wrapper">
          <div class="sticker">
            <div class="button-text">от 4 000 руб.</div>
          </div>
          <div class="appartment-card-big-title">Премиум Кинг</div>
          <div class="appartment-card-big-text">
            В номере: большая двуспальная кровать/2 односпальные кровати,
            рабочее место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi,
            кондиционер, сейф, чайно-кофейная станция. В ванной комнате:
            подогреваемый пол, душевая кабина, полотенца, косметические
            средства, халаты, тапочки.
          </div>
        </div>
      </div>
      <div class="appartment-card-big">
        <img
          class="appartment-card-big-image-icon"
          alt=""
          src="/Numbers/appartmentcardbig--image4@2x.png"
        />
        <div class="appartment-card-big-wrapper">
          <div class="sticker">
            <div class="button-text">от 4 000 руб.</div>
          </div>
          <div class="appartment-card-big-title">Премиум Кинг</div>
          <div class="appartment-card-big-text">
            В номере: большая двуспальная кровать/2 односпальные кровати,
            рабочее место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi,
            кондиционер, сейф, чайно-кофейная станция. В ванной комнате:
            подогреваемый пол, душевая кабина, полотенца, косметические
            средства, халаты, тапочки.
          </div>
        </div>
      </div> -->
    <!-- </div> -->
    <!-- <div class="clip-frame" /> -->
    <!-- <div class="clip-frame1" /> -->
  </div>
</template>
<script>
import SliderNumbers from "@/components/SliderNumbers.vue";

export default {
  name: "Numbers",
  components: {
    SliderNumbers,
  },
};
</script>
<style scoped>
.bgc-icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1040px;
  object-fit: cover;
}
.image-1-icon {
  position: relative;
  width: 128px;
  height: 61px;
  object-fit: cover;
}
.image-2-icon {
  position: relative;
  width: 128px;
  height: 47px;
  object-fit: cover;
}
.logos-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
}
.main-menu {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
}
.vk-icon {
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
}
.soc-icons {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
}
.button-text {
  position: relative;
  line-height: 140%;
}
.button {
  border-radius: var(--br-5xs);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-xl);
}
.right-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  font-size: var(--p-13r-size);
  color: var(--black);
}
.header1 {
  width: 1296px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-5xl) 0px;
  box-sizing: border-box;
}
.header {
  position: absolute;
  top: 0px;
  left: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-81xl);
}
.appartment-card-big-image-icon {
  align-self: stretch;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  height: 200px;
  flex-shrink: 0;
  object-fit: cover;
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
  gap: var(--gap-xs);
}
.appartment-card-big {
  border-radius: var(--br-base);
  background-color: var(--color-gray-100);
  backdrop-filter: blur(12px);
  width: 416px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-9xl) var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-9xl);
}
.appartments-inner-wrapper {
  position: absolute;
  top: 0px;
  left: calc(50% - 1088px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
}
.clip-frame {
  position: absolute;
  top: 0px;
  left: -312px;
  background-color: var(--color-slategray);
  width: 288px;
  height: 547px;
  overflow: hidden;
  opacity: 0.75;
}
.clip-frame1 {
  position: absolute;
  top: 0px;
  right: -312px;
  background-color: var(--color-slategray);
  width: 288px;
  height: 547px;
  overflow: hidden;
  opacity: 0.75;
}
.appartments-wrapper {
  position: absolute;
  top: 209px;
  left: 235px;
  width: 1445px;
  height: 650px;
  overflow-x: auto;
  font-size: var(--p-15r-size);
}
.div {
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1040px;
  overflow: hidden;
  text-align: left;
  font-size: var(--p-14book-size);
  color: var(--white);
  font-family: var(--h-24m);
}
</style>
