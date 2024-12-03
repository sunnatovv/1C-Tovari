<template>
  <section class="bg-[#2C2B35] pt-[40px]">
    <div class="container w-full flex gap-12 mb-6">
      <div class="w-1/2">
        <img class="mb-10" src="/FooterLogo.svg" alt="" />
        <div class="flex justify-between items-center pb-10">
          <div>
            <p class="text-[#6F7973] text-[14px] font-normal mb-2">
              Телефон техподдержки
            </p>
            <p class="text-white font-semibold text-[20px] font-gilroy">
              +99893-455-46-76
            </p>
          </div>
          <div>
            <p class="text-[#6F7973] text-[14px] font-normal mb-2">
              E-mail техподдержки
            </p>
            <p class="text-white font-semibold text-[20px] font-gilroy">
              s77@gmail.com
            </p>
          </div>

          <div>
            <button class="bg-custom-gradient py-3 px-8 rounded-3xl text-white">
              Заказать звонок
            </button>
          </div>
        </div>

        <div>
          <p class="font-gilroy text-[15px] pb-4 text-[#FFFFFF] font-light">
            Для активации перейдите на
            <span>
              <a
                class="underlin"
                href="https://portal.1c.ru/applications/1C-Goods"
                >portal.1c.ru</a
              >
            </span>
            или обратитесь к Вашему партнеру 1С.
          </p>
          <p class="text-[#43A548]">
            <router-link to="/"> Инструкция по установке сервиса </router-link>
          </p>
        </div>
      </div>
      <div class="w-1/2 flex justify-between">
        <div class="text-white">
          <p class="font-semibold text-[20px] font-gilroy pb-[32px]">
            Информация
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to=""> Как это работает </router-link>
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to=""> Инструкции </router-link>
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to=""> Блог</router-link>
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to=""> О нас </router-link>
          </p>
        </div>
        <div class="text-white">
          <p class="font-semibold text-[20px] font-gilroy pb-[32px]">
            Продукты
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to=""> 1С-Ритейл Чекер Демо </router-link>
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to="">
              1С-Товары.Тестовый для магазина на 1 месяц
            </router-link>
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to=""> 1С-Ритейл Чекер</router-link>
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to=""> 1С-Товары 300 </router-link>
          </p>
          <p class="font-normal text-[16px] font-gilroy pb-[20px]">
            <router-link to=""> 1С-Товары 30000 </router-link>
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="h-[1px] bg-[#494949]"></div>
      <div class="flex justify-between py-4">
        <p class="text-[#919999] font-normal font-gilroy">1С-Товары © 2023</p>
        <p class="text-[#919999] font-normal font-gilroy">Site Created By - <span class="text-[#43A548]">@sunnatov77</span></p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
