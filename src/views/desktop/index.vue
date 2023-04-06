<style scoped>
.click_text{
  background-color: #005AB5;
  border-radius:2px;
}
</style>
<template>
  <div class="app m-[10px]" style="width: fit-content;">
    <div v-for="(item,index) of app" :key="index">
      <div v-if="item.desktop" class="flex flex-col items-center w-[66px] mb-[10px] mr-[10px] cursor-pointer" @click="clickCss(index)" @dblclick="display(item.id,item.className)">
        <img class="w-[50px] mb-[4px]" :src="item.img" />
        <div class="app_text font_arial text-white text-center" style="text-shadow: 0.1em 0.1em #333;">{{ item.name }}</div>
      </div>
    </div>
    <div v-for="item of storeDesktopApp" :key="item.id">
      <div :class="item.className" class="absolute top-1/10 left-1/10" :style="{zIndex:item?.zIndex}" @mousedown="sortIndex(item.id)">
        <component :is="item.component" />
      </div>
    </div>
  </div>
  <Teleport to="body">
    <shutDown class="absolute ml-[-200px] mt-[-145px] top-[50%] left-[50%]" v-if="store.shutDownStatus" @close="shutDownDisplayAction()" />
  </Teleport>
</template>

<script setup>
  import {app} from '@/configs/index.js'
  import shutDown from  '@/components/shutDown.vue'
  import { useCounterStore } from '@/store/index.js'
  const {storeTaskbarApp,storeDesktopApp,sortIndex,daggle} = useCounterStore()
  const store=useCounterStore()
  const display=(id,className)=>{
    if(!storeDesktopApp.some(items=>{return items.id===id})) storeDesktopApp.push(app.find(item=>item.id===id))
    if(!storeTaskbarApp.some(items=>{return items.id===id})) storeTaskbarApp.push(app.find(item=>item.id===id))
    sortIndex(id)
    daggle(className)
  }
  const clickCss=(val)=>{
    for(let i=0;i<app.filter(item=>{return item.desktop}).length;i++){
      if(i===val)document.getElementsByClassName('app_text')[val].classList.add('click_text')
      else document.getElementsByClassName('app_text')[i].classList.remove('click_text')
    }
  }
  document.addEventListener('click',event=>{
    if(!(document.querySelector('.app')===event.target||document.querySelector('.app').contains(event.target))){
      for(let i=0;i<app.length;i++){
        document.getElementsByClassName('app_text')[i]?.classList.remove('click_text')
      }
    }
  })
  const shutDownDisplayAction=()=>{
    store.shutDownStatus=!store.shutDownStatus
  }
</script>
