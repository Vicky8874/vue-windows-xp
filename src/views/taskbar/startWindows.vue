<style>
  .head{
    background:linear-gradient(to bottom,#73aae4 , #1566d0 6%,#1d6fd5, #4994ee);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: inset 0 0 10px #0b4dad;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  .bottom{
    background:linear-gradient(to bottom,#4994ee ,#1d6fd5, #1566d0);
    box-shadow: inset 0 0 10px #0b4dad;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 40px;
  }
  .shut_down_center{
    height: 450px;
    display: flex;
  }
  .center_left{
    padding-top: 10px;
    height: 100%;
    width: 240px;
    background-color: #fff;
    border-right: 1px solid #8ea2cd;
  }
  .center_rigth{
    padding-top: 10px;
    height: 100%;
    width: 200px;
    background-color: #d3e5fa;
  }
  .line{
    height: 1px;
    width: 100%;
    background:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,30%),rgba(0,0,0,0));
    margin: 4px 0px;
  }
  .orange_line{
    position: absolute;
    height: 2px;
    width: 100%;
    background:linear-gradient(to right,rgba(255,127,0,0),rgba(255,127,0,100%),rgba(255,127,0,0));
  }
</style>
<template>
  <div>
    <div class="border-[#3c68c8] border-2 rounded-t-[10px] w-[440px] shadow-xl">
      <div class="head">
        <img class="w-[60px] border-2 border-[#fff] rounded-[4px]" src="./image/chess.png" />
        <span class="text-white text-[24px] ml-[16px]" style="text-shadow: 0.1em 0.1em #333;">☆㊣↙煞氣a賭聖↗㊣☆</span>
      </div>
      <div>
        <div class="orange_line"></div>
        <div class="shut_down_center">
          <div class="center_left">
            <div v-for="(item,index) in app" :key="index">
              <div class="px-[10px] py-[2px] flex items-center cursor-pointer hover:(bg-[#1264c8] text-white)" v-if="index<9" @click="display(item.id,item.className,'left')">
                <img class="w-[40px] mr-[4px]" :src="item.img" />
                <span class="text-[14px] ">{{ item.name }}</span>
              </div>
              <div v-if="index===4" class="line"></div>
            </div>
            <div class="line"></div>
            <div class="px-[10px] py-[2px] flex items-center justify-center cursor-pointer hover:(bg-[#1264c8] text-white)">
              <span class="font-black text-[14px] font_arial">All Programs</span>
              <img class="w-[24px] ml-[4px]" src="/image/windows_xp_icon/all_program.ico" />
            </div>
          </div>
          <div class="center_rigth">
            <div v-for="(item,index) in start_right" :key="index">
              <div class="px-[10px] py-[2px] flex items-center cursor-pointer hover:(bg-[#1264c8] text-white)" v-if="index<9" @click="display(item.id,item.className,'right')">
                <img class="w-[30px] mr-[4px]" :src="item.img" />
                <span class="text-[12px] ">{{ item.name }}</span>
              </div>
              <div v-if="index===3||index===5" class="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="flex items-center cursor-pointer">
          <img class="w-[30px]" src="/image/windows_xp_icon/lock.png" />
          <span class="ml-[6px] text-[12px] text-white hover:(text-black)">登出(L)</span>
        </div>
        <div class="flex items-center ml-[20px] cursor-pointer" @click="shutDownDisplayAction()">
          <img class="w-[30px]" src="/image/windows_xp_icon/shutdown.png" />
          <span class="ml-[6px] text-[12px] text-white hover:(text-black)">電腦關機(U)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {app,start_right} from '@/configs/index.js'
import { useCounterStore } from '@/store/index.js'
const {storeTaskbarApp,storeDesktopApp,sortIndex,daggle} = useCounterStore()
const store=useCounterStore()
const display=(id,className,val)=>{
  store.startStatus=false
  if(val==='left'){
    if(!storeDesktopApp.some(items=>{return items.id===id})) storeDesktopApp.push(app.find(item=>item.id===id))
    if(!storeTaskbarApp.some(items=>{return items.id===id})) storeTaskbarApp.push(app.find(item=>item.id===id))
  }
  else{
    if(!storeDesktopApp.some(items=>{return items.id===id})) storeDesktopApp.push(start_right.find(item=>item.id===id))
    if(!storeTaskbarApp.some(items=>{return items.id===id})) storeTaskbarApp.push(start_right.find(item=>item.id===id))
  }
  sortIndex(id)
  daggle(className)
}
const shutDownDisplayAction=()=>{
  store.startStatus=false
  store.shutDownStatus=!store.shutDownStatus
}
</script>