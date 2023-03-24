<style>
.click_text{
  background-color: #005AB5;
  border-radius:2px;
}
</style>
<template>
  <div class="app m-[10px]" style="width: fit-content;">
    <div v-for="(item,index) of app" :key="index">
      <div class="w-[48px] mb-[10px] mr-[10px] cursor-pointer" @click="clickCss(index)" @dblclick="display(item.id,item.className,item.zIndex)">
        <img class="w-[48px] mb-[4px]" :src="item.img" />
        <div class="app_text font_arial text-white text-center" style="text-shadow: 0.1em 0.1em #333;">{{ item.name }}</div>
      </div>
    </div>
    <div v-for="item in store.storeDesktopApp" :key="item.id">
      <div :class="item.className" class="absolute" :style="{zIndex:item.zIndex}">
        <component :is="item.component" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import {app} from '@/configs/index.js'
  import { useCounterStore } from '@/store/index.js'
  import { nextTick } from 'vue'
  const store = useCounterStore()
  const display=(id,className)=>{
    if(!store.storeTaskbarApp.some(items=>{return items.id===id})) store.storeTaskbarApp.push(app.find(item=>item.id===id))
    if(!store.storeDesktopApp.some(items=>{return items.id===id})) store.storeDesktopApp.push(app.find(item=>item.id===id))
    let target=store.storeDesktopApp.find(item=>{return item.id===id}).zIndex
    store.storeDesktopApp.find(item=>{return item.id===id}).zIndex=store.storeDesktopApp.length
    if(target!==0){
      for(let i=0;i<store.storeDesktopApp.length;i++){
        if(store.storeDesktopApp[i].id!==id) store.storeDesktopApp[i].zIndex=store.storeDesktopApp[i].zIndex>=target?store.storeDesktopApp[i].zIndex-1:store.storeDesktopApp[i].zIndex===target?store.storeDesktopApp.length:store.storeDesktopApp[i].zIndex
      }
    }
    nextTick(()=>{
      document.querySelector('.'+className+' .title_bar').onmousedown = function (e1) {
        document.onmousemove = function (e) {
          document.querySelector('.'+className).style.left = e.clientX - e1.offsetX + "px"
          document.querySelector('.'+className).style.top = e.clientY - e1.offsetY + "px"
        }
        document.onmouseup = function (e) {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    })
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
