<style lang="scss">
  .drawer_wrap{
    margin-left: 4px;
    display: flex;
    align-items: center;
    width: 180px;
    height: 30px;
    background:radial-gradient(ellipse at center,#4a8df8,#3980f4);
    border-top: 1px solid #60a1ff;
    border-left: 1px solid #60a1ff;
    border-radius: 4px;
    padding-left: 10px;
    cursor: pointer;
    &:hover{
      background:radial-gradient(ellipse at center,#1e50b8,#1a43ac);
    }
  }
</style>
<template>
  <div class="drawer_wrap">
    <img class="w-[24px] mr-[6px]" :src="img" />
    <div>{{ name }}</div>
  </div>
</template>
<script setup>
  const props = defineProps(['name','img'])
</script>