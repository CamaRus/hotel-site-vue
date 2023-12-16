<template>
  <div class="left-wrapper">
    <b class="b">Добро пожаловать в отель «Долина 960»</b>
    <div class="liechtenstein-container">
      <p class="p">
        Бутик-отель расположен на Поляне 960, верхнем уровне Курорта Красная
        Поляна. Небольшой номерной фонд в 48 просторных номеров создает ощущение
        уединенности и в то же время отвечает запросам молодежной аудитории,
        которая ценит стиль и активный отдых.
      </p>
      <p class="p">
        Ресторан отеля подает завтраки по системе «шведский стол» и примечателен
        интерьерным решением в стиле поп-арт. Рестобар Liechtenstein временно не
        работает, в отеле работает только Room Service.
      </p>
      <p class="c-">
        Cпа-комплекс отеля предлагает гостям посетить открытый подогреваемым
        инфинити-бассейн с панорамным видом на горы, крытый бассейн. Также в
        спа-центре отеля Долина 960, представлена термальная зона с финской
        сауной, паровой комнатой и турецким хаммамом, крытым бассейном с
        шезлонгами для отдыха.
      </p>
    </div>
    <div class="button1">
      <div class="button-text">Быстрое бронирование</div>
    </div>
  </div>
  <div class="about-right-wrapper">
    <SliderAbout></SliderAbout>
    <!-- <div class="about-card">
      <img
        class="about-card-image-icon"
        alt=""
        src="/About/aboutcard--image@2x.png"
      />
      <div class="about-card-wrapper">
        <div class="sticker">
          <div class="button-text">Ресторан и бар</div>
        </div>
        <div class="about-card-title">«Liechtenstein»</div>
        <div class="liechtenstein-container">
          В ресторане и баре «Liechtenstein» используется авторский подход к
          приготовлению международных блюд. В заведении представлены блюда
          европейской, японской и итальянской кухонь. В баре имеется большой
          выбор терпких напитков и коктейлей.
        </div>
      </div>
    </div> -->
  </div>
  <!-- </div> -->
</template>
<script>
import SliderAbout from "@/components/SliderAbout.vue";

export default {
  components: {
    SliderAbout,
  },
  name: "About",
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
.b {
  align-self: stretch;
  position: relative;
  font-size: var(--h-48b-size);
  line-height: 140%;
}
.p {
  margin-block-start: 0;
  margin-block-end: 18px;
}
.c- {
  margin: 0;
}
.liechtenstein-container {
  align-self: stretch;
  position: relative;
  line-height: 140%;
}
.button1 {
  border-radius: var(--br-xs);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-5xl);
  color: var(--black);
}
.left-wrapper {
  position: absolute;
  top: 209px;
  left: 312px;
  width: 856px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  font-size: var(--p-18book-size);
}
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
/* .sticker {
  border-radius: var(--br-5xs);
  background-color: var(--accent);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
} */
/* .about-card-title {
  align-self: stretch;
  position: relative;
  font-size: var(--h-24m-size);
  line-height: 140%;
  font-weight: 500;
} */
/* .about-card-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
} */
/* .about-card {
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--color-gray-100);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-9xl) var(--padding-13xl);
  gap: var(--gap-9xl);
} */
.about-right-wrapper {
  position: absolute;
  top: 209px;
  left: 1192px;
  width: 416px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-21xl);
  box-sizing: border-box;
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
  font-family: var(--p-18book);
}
</style>
