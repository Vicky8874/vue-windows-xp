<style lang="scss">
  .mine_footer{
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    background:linear-gradient(to bottom, #1e50ad, #285fd6);
    border-top: 1px solid #4591ed;
    box-shadow: 0 -4px 10px #333;
  }
  .mine_footer_start_wrap{
    height: 30px;
    background:linear-gradient(to bottom, #94c795, #2f753e);
    display: flex;
    align-items: center;
    padding: 2px 20px 2px 10px;
    cursor: pointer;
    &:hover{
      background:linear-gradient(to top, #94c795, #2f753e);
    }
  }
  .mine_footer_start{
    color: white;
    font-size: 14px;
    font-style: italic;
    text-shadow: 1px 1px 1px #666;
    margin-left: 4px;
  }
  .mine_footer_right{
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 14px;
    background:linear-gradient(to bottom, #369beb,#2f86da 90%, #2565dc);
    padding: 2px 20px;
    position: absolute;
    right: 0;
    border-top: 1px solid #3db1f1;
    border-left: 1px solid #000;
  }
</style>
<template>
  <div class="mine_footer">
    <div class="mine_footer_start_wrap" @click="store.startStatus=!store.startStatus">
      <img class="w-[20px]" src="/image/start.png"/>
      <div class="font_arial mine_footer_start">開始</div>
    </div>
    <div v-for="(item,index) in storeTaskbarApp" :key="index">
      <!-- <appDrawer :name="item.name" :img="item.img" :zIndex="num" @click="sortIndex(item.id)" /> -->
      <appDrawer :name="item.name" :img="item.img" :zIndex="item.zIndex===num?true:false" @click="sortIndex(item.id)" />
    </div>
    <div class="mine_footer_right font_arial">
      <img class="w-[20px] mr-[10px] cursor-pointer" src="/image/windows_xp_icon/shield.png" />
      <div>{{ timeText }} {{ time }}</div>
    </div>
    <div class="absolute bottom-[33px]">
      <startWindows v-if="startStatusDisplay" />
    </div>
  </div>
</template>

<script setup>
  import appDrawer from './appDrawer.vue'
  import startWindows from './startWindows.vue'
  import dayjs from 'dayjs'
  import {computed,ref} from 'vue'
  import { useCounterStore } from '@/store/index.js'
  const time=ref(dayjs().format('HH:mm:ss'))
  const timeText=ref(dayjs().format('A')==='AM'?'上午':'下午')
  function timer(){
    time.value=dayjs().format('HH:mm:ss')
    timeText.value=dayjs().format('A')==='AM'?'上午':'下午'
  }
  setInterval(timer,1000);
  const {storeTaskbarApp,sortIndex} = useCounterStore()
  const store = useCounterStore()
  const startStatusDisplay=computed(()=>store.startStatus)
  const num=computed(()=>store.storeTaskbarApp.length)
  document.addEventListener('click',event=>{
    if(document.querySelector('.mine_bg')===event.target&&document.querySelector('.mine_bg').contains(event.target)) store.startStatus=false
    if(document.querySelector('.bg')===event.target&&document.querySelector('.bg').contains(event.target)) store.startStatus=false
  })
</script>