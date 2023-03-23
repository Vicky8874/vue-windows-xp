<style>
.click_text{
  background-color: #005AB5;
  border-radius:2px;
}
</style>
<template>
  <div class="app m-[10px]" style="width: fit-content;">
    <div v-for="(item,index) of app" :key="index">
      <div class="w-[48px] mb-[10px] mr-[10px] cursor-pointer" @click="clickCss(index)" @dblclick="display(item.id)">
        <img class="w-[48px] mb-[4px]" :src="item.img" />
        <div class="app_text font_arial text-white text-center" style="text-shadow: 0.1em 0.1em #333;">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {app} from '@/configs/index.js'
  const display=(id)=>{
    app.find(item=>item.id===id).display=true
  }
  const clickCss=(val)=>{
    for(let i=0;i<app.length;i++){
      if(i===val)document.getElementsByClassName('app_text')[val].classList.add('click_text')
      else document.getElementsByClassName('app_text')[i].classList.remove('click_text')
    }
  }
  document.addEventListener('click',event=>{
    if(!(document.querySelector('.app')===event.target||document.querySelector('.app').contains(event.target))){
      for(let i=0;i<app.length;i++){
        document.getElementsByClassName('app_text')[i].classList.remove('click_text')
      }
    }
  })
</script>