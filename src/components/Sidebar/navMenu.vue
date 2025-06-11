<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
};
</script>


<template>
  <aside :class="`${is_expanded && 'is_expanded'}`">
    <div class="logo" style="cursor: pointer;">
      <img src="@/assets/logo.svg" alt="vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <h1>My VueJs Project</h1>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">article</span>
        <span class="text">Todo-List-App</span>
      </router-link>
      <router-link class="button" to="/weight-tracking">
        <span class="material-icons">speed</span>
        <span class="text">Weight-Tracking</span>
      </router-link>
      <router-link class="button" to="/weather-check-app">
        <span class="material-icons">severe_cold</span>
        <span class="text">weather-check-app</span>
      </router-link>
      <router-link class="button" to="/contact">
        <span class="material-icons">contacts</span>
        <span class="text">Contact</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
         <router-link class="button" to="/settings">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>