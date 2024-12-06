<template>
  <div class="shadow-lg w-full fixed z-40 bg-white">
    <div class="container flex h-[88px] items-center justify-between">
      <div>
        <router-link to="/">
          <img src="/NavbarLogo.svg" alt="" />
        </router-link>
      </div>

      <div class="w-[700px] flex justify-between items-center">
        <a href="howworks">Как это работает</a>
        <a href="instruction">Инструкции</a>
        <a href="products">Продукты</a>
        <a href="base">База знаний </a>
        <a href="about">О нас</a>
        <button class="text-white bg-custom-gradient px-5 py-2 rounded-3xl">
          Вход
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
