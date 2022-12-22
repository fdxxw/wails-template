<template>
  <NConfigProvider :locale="zhCN" :dateLocale="dateZhCN">
    <NMessageProvider>
      <NDialogProvider>
        <Home />
      </NDialogProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider, NDialogProvider, zhCN, dateZhCN } from 'naive-ui';
// This template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './components/Home'
</script>

<style>
@font-face {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  src: local(""),
  url("assets/fonts/nunito-v16-latin-regular.woff2") format("woff2");
}

html {
  color: white;
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
}

body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.link {
  cursor: pointer;
  color: #df0000;
}

.link:hover {
  text-decoration: underline;
}
</style>
