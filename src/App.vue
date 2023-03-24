<script setup>
import taskbar from './views/taskbar/index.vue'
import desktop from './views/desktop/index.vue'
window.addEventListener("contextmenu", e => e.preventDefault());
</script>

<template>
<div class="mine_bg">
  <desktop class="relative z-0" />
  <taskbar />
</div>
</template>
