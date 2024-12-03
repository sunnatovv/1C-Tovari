<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-[390px] h-[374px]">
      <p class="text-gradient text-[180px] text-center font-black font-gilroy leading-none">
        404
      </p>
      <h4 class="text-gradient text-center text-[32px] font-black font-gilroy">
        Страница не найдена
      </h4>
      <p class="text-[#2C2B35] text-center py-4 font-gilroy">
        Страница, на которую вы пытаетесь попасть, не существует или была
        удалена. Перейдите на главную страницу.
      </p>
      <div class="flex items-center justify-center">
        <router-link to="/">
            <button class="py-3 px-11 mt-3 text-[#F7F8F8] bg-custom-gradient rounded-3xl ">Вернуться на главную</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
