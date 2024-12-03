<template>
  <div class="container mx-auto w-full py-6">
    <div>
      <h2 class="text-[#2C2B35] font-gilroy font-semibold text-[28px] mb-[60px] mt-[40px]">С нами удобнее</h2>
    </div>
    <div class="flex flex-wrap gap-5 h-auto">
      <!-- Without 1C-Tovary Section -->
      <div class="bg-white rounded-2xl p-10 shadow-lg w-full md:w-1/2 max-w-[630px]">
        <div class="h-[400px]">
          <h2 class="font-semibold text-center font-gilroy text-[24px]">
            {{ without1C.title }}
          </h2>
          <ul class="mt-6">
            <li
              v-for="(item, index) in without1C.items"
              :key="index"
              class="flex items-center mb-5 font-gilroy text-[18px] leading-7 text-[#3D4641]"
            >
              <img class="text-red-500 mr-4" src="/x.png" alt="" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- With 1C-Tovary Section -->
      <div class="bg-green-100 p-10 rounded-2xl shadow-lg w-full md:w-1/2 max-w-[630px]">
        <div class="h-[400px]">
          <h2 class="font-semibold text-center font-gilroy  text-[24px]">
            {{ with1C.title }}
          </h2>
          <ul class="mt-6">
            <li
              v-for="(item, index) in with1C.items"
              :key="index"
              class="flex items-center mb-5 font-gilroy text-[18px] leading-7 text-[#3D4641]"
            >
              <img class="mr-[10px]" src="/check.svg" alt="" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const without1C = ref({
  title: "Без 1С-Товары",
  items: [
    "Лишний товар складируется и не продается",
    "Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
    "Лишний товар складируется и не продается",
    "Лишний товар складируется и не продается",
    "Лишний товар складируется и не продается",
    "Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента",
  ],
});

const with1C = ref({
  title: "Вместе с 1С-Товары",
  items: [
    "Организованная система остатков",
    "В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент",
    "Рассчитанный прогноз спроса",
    "В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент",
    "Организованная система остатков",
    "Система контроля упущенных продаж",
  ],
});
</script>

<style scoped>
/* Customize your styles here */
</style>
