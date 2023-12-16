<template>
  <!-- <div class="div"> -->
  <!-- <img class="bgc-icon" alt="" src="/bgc@2x.png" /> -->
  <!-- <div class="header">
      <div class="header1">
        <div class="logos-wrapper">
          <img class="image-1-icon" alt="" src="/image-1@2x.png" />
          <img class="image-2-icon" alt="" src="/image-2@2x.png" />
        </div>
        <div class="main-menu">
          <div class="button-text">Главная</div>
          <div class="button-text">Номера</div>
          <div class="button-text">Развлечения</div>
          <div class="button-text">Трансфер</div>
          <div class="button-text">Контакты</div>
        </div>
        <div class="right-wrapper">
          <div class="soc-icons">
            <img class="vk-icon" alt="" src="/vk.svg" />
            <img class="vk-icon" alt="" src="/telegram.svg" />
          </div>
          <div class="button">
            <div class="button-text">Групповые заезды</div>
          </div>
        </div>
      </div>
    </div> -->
  <div class="left-wrapper">
    <b class="b">Пляж</b>
    <div class="sup-">
      Каждый день на побережье Черного моря от горного курорта курсирует
      бесплатный трансфер к самым ближайшим пляжам в Имеретинской низменности.
      Записаться на нужное время нужно заранее на стойке ресепшен. Просторный
      пляж для гостей курорта расположен вблизи Олимпийского парка и крупнейшего
      в России тематического парка развлечений Сочи Парк. На территории пляжа
      есть вся необходимая инфраструктура для отдыха на побережье: шезлонги и
      зонтики, зона аэрария, прокат SUP-бордов. Множество кафе на выбор всего в
      нескольких шагах.
    </div>
  </div>
  <div class="rectangle-parent">
    <img
      class="frame-child"
      alt=""
      src="/Hotel Ter Beach/rectangle-42@2x.png"
    />
    <img
      class="frame-child"
      alt=""
      src="/Hotel Ter Beach/rectangle-43@2x.png"
    />
    <img
      class="frame-child"
      alt=""
      src="/Hotel Ter Beach/rectangle-44@2x.png"
    />
    <img
      class="frame-child"
      alt=""
      src="/Hotel Ter Beach/rectangle-46@2x.png"
    />
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "HotelTerritoryBeach",
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
  line-height: 140%;
}
.sup- {
  align-self: stretch;
  position: relative;
  font-size: var(--p-16book-size);
  line-height: 140%;
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
.div {
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
