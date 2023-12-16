<template>
  <!-- <nav class="nav"> -->
  <!-- <img class="bgc-icon" alt="" src="/bgc@2x.png" /> -->
  <!-- <div class="header">
      <div class="header1">
        <div class="logos-wrapper">
          <img class="image-1-icon" alt="" src="/image-1@2x.png" />
          <img class="image-2-icon" alt="" src="/image-2@2x.png" />
        </div>
        <div class="main-menu">
          <div class="div">Главная</div>
          <div class="div">Номера</div>
          <div class="div">Развлечения</div>
          <div class="div">Трансфер</div>
          <div class="div">Контакты</div>
        </div>
        <div class="right-wrapper">
          <div class="soc-icons">
            <img class="vk-icon" alt="" src="/vk.svg" />
            <img class="vk-icon" alt="" src="/telegram.svg" />
          </div>
          <div class="button">
            <div class="div">Групповые заезды</div>
          </div>
        </div>
      </div>
    </div> -->
  <div class="left-wrapper">
    <b class="b">Рестораны и бары</b>
    <div class="left-wrapper-text">
      <div class="liechtenstein">
        На территории отеля работает рестобар «Liechtenstein», примыкающая к
        нему банкетная терраса и яркий оригинальный лобби-бар.
      </div>
      <div class="liechtenstein-parent">
        <div class="room-service">Ресторан и бар «Liechtenstein»</div>
        <div class="liechtenstein">
          Роскошный стиль поп-арт, репродукции картин Роя Лихтенштейна,
          живописные панорамные виды Кавказских гор в сочетании с высоким
          сервисом и авторским подходом к приготовлению блюд разных кухонь мира
          подарят незабываемые впечатления от гастрономического отдыха.
        </div>
      </div>
      <div class="liechtenstein-parent">
        <div class="room-service">Room Service</div>
        <div class="liechtenstein">
          Рестобар Liechtenstein временно не работает, в отеле работает только
          Room Service. В отеле работает служба доставки еды и напитков в номер
          с 11:00 до 22:30, бар открыт с 11:00 до 23:00.
        </div>
      </div>
    </div>
  </div>
  <div class="rectangle-parent">
    <img class="frame-child" alt="" src="/Hotel Ter/rectangle-42@2x.png" />
    <img class="frame-child" alt="" src="/Hotel Ter/rectangle-43@2x.png" />
    <img class="frame-child" alt="" src="/Hotel Ter/rectangle-44@2x.png" />
    <img class="frame-child" alt="" src="/Hotel Ter/rectangle-45@2x.png" />
  </div>
  <!-- </nav> -->
</template>
<script>
export default {
  name: "HotelTerritory",
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
.div {
  position: relative;
  line-height: 140%;
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
  line-height: 140%;
}
.liechtenstein {
  align-self: stretch;
  position: relative;
  font-size: var(--p-16book-size);
  line-height: 140%;
}
.liechtenstein-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
}
.room-service {
  align-self: stretch;
  position: relative;
  line-height: 140%;
  font-weight: 500;
}
.left-wrapper-text {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  font-size: var(--h-24m-size);
}
.left-wrapper {
  position: absolute;
  top: 209px;
  left: 312px;
  width: 636px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 40px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-21xl);
  font-size: var(--h-48b-size);
}
.frame-child {
  position: relative;
  width: 306px;
  height: 192px;
  object-fit: cover;
}
.rectangle-parent {
  position: absolute;
  top: 316px;
  left: 972px;
  width: 636px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
}
.nav {
  margin: 0;
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1040px;
  overflow: hidden;
  text-align: left;
  font-size: var(--p-14book-size);
  color: var(--white);
  font-family: var(--p-16book);
}
</style>
