<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeJogo from "@/router/HomeJogo.vue";
</script>

<template>
  <header>
    <div class="ola">
      <HomeJogo msg="olá" />
      <nav>
        <RouterLink to="/">Home </RouterLink>
        <RouterLink to="/times">Times </RouterLink>
        <RouterLink to="/jogadores">Jogadores</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
