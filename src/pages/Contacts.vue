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
  <img class="contact-map-icon" alt="" src="/contact--map@2x.png" />
  <div class="left-wrapper">
    <b class="b">Контакты</b>
    <div class="left-wrapper-contacts">
      <div class="contact-telegram">
        <img class="telegram-icon1" alt="" src="/telegram1.svg" />
        <div class="telegram">
          Telegram канал «Лучшие горнолыжные курорты России»
        </div>
      </div>
      <div class="contact-h-p">
        <div class="div6">Свяжитесь с нами:</div>
        <div class="list">
          <div class="arrow-parent">
            <img class="arrow-icon" alt="" src="/arrow.svg" />
            <div class="telegram">
              8 (861) 205-07-32 (бронирование в Москве)
            </div>
          </div>
          <div class="arrow-parent">
            <img class="arrow-icon" alt="" src="/arrow.svg" />
            <div class="telegram">8 (499) 322-14-78 (корпоративный отдел)</div>
          </div>
        </div>
      </div>
      <div class="contact-h-p">
        <div class="div6">Адрес туристической компании:</div>
        <div class="list1">
          <img class="arrow-icon" alt="" src="/arrow.svg" />
          <div class="telegram">
            г. Москва, ул. Бауманская, д.6, стр.2, Бизнес-центр Виктория Плаза,
            8 этаж, 804 офис.
          </div>
        </div>
      </div>
      <div class="contact-h-p">
        <div class="div6">Адрес:</div>
        <div class="list1">
          <img class="arrow-icon" alt="" src="/arrow.svg" />
          <div class="telegram">
            Россия, г. Сочи, Курорт Красная Поляна 960, ул. Горная, д. 2.
          </div>
        </div>
      </div>
    </div>
    <div class="div13">
      *Обращаем Ваше внимание на то, что данный Интернет-сайт носит
      исключительно информационный характер и ни при каких условиях результаты
      расчетов не являются публичной офертой, определяемой положениями Статьи
      437 Гражданского кодекса Российской Федерации. За окончательным расчетом
      обращайтесь к нашим менеджерам. Данный ресурс не является официальным
      сайтом отеля.
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "Contacts",
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
.contact-map-icon {
  position: absolute;
  top: 316px;
  left: 972px;
  width: 636px;
  height: 450px;
  object-fit: cover;
}
.b {
  align-self: stretch;
  position: relative;
  line-height: 140%;
}
.telegram-icon1 {
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
}
.telegram {
  flex: 1;
  position: relative;
  line-height: 140%;
}
.contact-telegram {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  font-size: var(--p-15r-size);
}
.div6 {
  align-self: stretch;
  position: relative;
  line-height: 140%;
  font-weight: 500;
}
.arrow-icon {
  position: relative;
  width: 12px;
  height: 12px;
}
.arrow-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
}
.list {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  font-size: var(--p-16book-size);
}
.contact-h-p {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
}
.list1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  font-size: var(--p-16book-size);
}
.left-wrapper-contacts {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  font-size: var(--h-24m-size);
}
.div13 {
  align-self: stretch;
  position: relative;
  font-size: var(--p-14book-size);
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
  font-size: 48px;
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
