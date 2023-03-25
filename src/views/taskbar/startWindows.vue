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
  }
  .center{
    height: 450px;
    display: flex;
  }
  .center_left{
    height: 100%;
    width: 240px;
    background-color: #fff;
    border-right: 1px solid #8ea2cd;
    padding: 4px;
  }
  .center_rigth{
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
</style>
<template>
  <div>
    <div class="border-[#3c68c8] border-2 rounded-t-[10px] w-[440px] shadow-xl">
      <div class="head">
        <img class="w-[60px] border-2 border-[#fff] rounded-[4px]" src="./image/stitch.GIF" />
        <span class="text-white text-[24px] ml-[16px]" style="text-shadow: 0.1em 0.1em #333;">Stitch</span>
      </div>
      <div class="center">
        <div class="center_left">
          <div v-for="(item,index) in app" :key="index">
            <div class="flex items-center mb-[4px]" v-if="index<9">
              <img class="w-[40px] mr-[4px]" :src="item.img" />
              <span class="text-[14px]">{{ item.name }}</span>
            </div>
            <div v-if="index===4" class="line"></div>
          </div>
          <div class="line"></div>
          <div class="flex items-center mt-[8px]">
            <img class="w-[30px] mr-[4px]" src="/image/windows_desktop/bomb.webp" />
            <span class="font-black text-[14px] font_arial">All Programs</span>
          </div>
        </div>
        <div class="center_rigth">

        </div>
      </div>
      <div class="bottom">
      </div>
    </div>
  </div>
</template>

<script setup>
import {app} from '@/configs/index.js'
console.log(app)
</script>