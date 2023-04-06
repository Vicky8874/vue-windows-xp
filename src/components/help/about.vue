<style lang="scss" scoped>
.about_wrap{
  background:radial-gradient(circle closest-side at center,#295dfc,#2554e2);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  width: 500px !important;
  box-shadow: 1px 1px 5px #000;
}
.top_button{
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-color: #fff;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  margin-left: 2px;
}
.top_button_red{
  background:linear-gradient(135deg, #e99281, #d64307);
  &:hover{
    background:linear-gradient(0deg, #e99281, #d64307);
  }
}
.about_head{
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right,#5a7dde,#97b5f5,#5a7dde);
}
.about_orange_line{
  height: 5px;
  width: 100%;
  background:linear-gradient(to right,rgba(255,127,0,0),rgba(255,127,0,100%),rgba(255,127,0,0));
}
</style>
<template>
<div class="about_wrap font_arial">
  <div class="flex justify-between mx-[4px] mb-[4px] cursor-move">
    <div class="title_bar flex-1 font-black text-white flex items-center">
      <span class="ml-[2px] text-[16px]" style="text-shadow: 0.1em 0.1em #333;">關於 Windows</span>
    </div>
    <div class="flex">
      <div class="top_button top_button_red" @click="close()">X</div>
    </div>
  </div>
  <div>
    <div class="about_head">
      <div class="flex justify-between p-4px">
        <div class="text-white text-[12px] flex flex-col justify-end">
          <span>Copyright@1985-2001</span>
          <span>Microsoft Corporation</span>
        </div>
        <div class="flex items-center mr-[70px]">
          <img class="w-[70px]" src="/image/start.png" />
          <div class="flex flex-col">
            <span class="text-[12px] text-white">Microsoft</span>
            <div class="">
              <span class="text-[24px] text-white">Window</span>
              <span class="text-[12px] text-[#f65327] absolute ml-[2px] mb-[16px]">XP</span>
            </div>
            <span class="text-[12px] text-white">Home Edition</span>
          </div>
        </div>
        <div class="flex flex-col justify-end">
          <span class="text-white text-[12px] italic font-black">Microsoft</span>
        </div>
      </div>
      <div class="about_orange_line"></div>
    </div>
    <div class="flex flex-col leading-snug text-[14px] bg-[#ebe9d8] pt-[10px] pl-[60px] pb-[10px] pr-[20px]">
      <span>Microsoft (R) Windows</span>
      <span>Version 5.1 (Build 2600.xpsp.080413-2111: Service Pack 3)</span>
      <span class="mb-[20px]">Copyright (C) 2007 Microsoft Corporation</span>
      <span>此產品依<u class="text-[#000080] cursor-pointer">使用者授權合約</u>中規定，使用權屬於：</span>
      <span class="my-[10px] ml-[10px]">☆㊣↙煞氣a賭聖↗㊣☆</span>
      <div class="w-full h-1 bg-[#aca89a] border-r border-b border-white"></div>
      <div class="flex justify-between pr-[50px]">
        <span>Windows 可用記憶體：</span>
        <span>2,096560KB</span>
      </div>
      <div class="flex justify-end mt-[30px]">
        <div class="cursor-pointer w-[70px] bg-gradient-to-b from-[#cee7ff] to-[#6982ee] border-1 border-[#003c74] rounded-[4px] p-1" @click="close()">
          <div class="text-center bg-white border-black border-dotted border-[2px] rounded-[4px]">確定</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { useCounterStore } from '@/store/index.js'
const {storeDesktopApp,deleteIndex} = useCounterStore()
const close=()=>{
  deleteIndex(storeDesktopApp,8,true)
}
</script>