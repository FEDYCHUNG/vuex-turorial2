<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style>
</style>
