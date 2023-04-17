<style lang="scss" scoped>
.about_wrap{
  background:radial-gradient(circle closest-side at center,#295dfc,#2554e2);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  width: 450px !important;
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
.top_button_blue{
  background:linear-gradient(135deg, #8ba9f3, #2159c4);
  &:hover{
    background:linear-gradient(0deg, #8ba9f3, #2159c4);
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
      <span class="ml-[2px] text-[16px]" style="text-shadow: 0.1em 0.1em #333;">{{data.name}}</span>
    </div>
    <div class="flex">
      <div class="top_button top_button_blue">?</div>
      <div class="top_button top_button_red" @click="close()">X</div>
    </div>
  </div>
  <div>
    <div class="flex flex-col leading-snug text-[14px] bg-[#ebe9d8] pt-[10px] pl-[30px] pb-[10px] pr-[20px]">
      <div class="flex items-center">
        <img class="w-[50px] mr-[20px]" src="/image/windows_desktop/run.png" />
        <span>輸入程式、資料夾、文件或網際網路資源的名稱，Windows會自動開啟</span>
      </div>
      <div class="mt-[6px]">
        <span>開啟(O)：</span>
        <input class="w-[300px] border-1 border-[#7f9db9] ml-[10px]" type="text" />
      </div>
      <div class="flex mt-[30px] justify-end">
        <div class="w-[100px] border-1 border-[#003c74] rounded-[6px] ml-[6px]"><div class="w-full text-center py-[2px] border-[2px] rounded-[6px] bg-white cursor-pointer hover:(border-[#ea9f10])">確定</div></div>
        <div class="w-[100px] border-1 border-[#003c74] rounded-[6px] ml-[6px]"><div class="w-full text-center py-[2px] border-[2px] rounded-[6px] bg-white cursor-pointer hover:(border-[#ea9f10])" @click="close()">取消</div></div>
        <div class="w-[100px] border-1 border-[#003c74] rounded-[6px] ml-[6px]"><div class="w-full text-center py-[2px] border-[2px] rounded-[6px] bg-white cursor-pointer hover:(border-[#ea9f10])">瀏覽(B)...</div></div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import {start_right} from '@/configs/index.js'
import { useCounterStore } from '@/store/index.js'
const {storeDesktopApp,storeTaskbarApp,deleteIndex} = useCounterStore()
const data=start_right.find(item=>item.id===13)
const close=()=>{
  deleteIndex(storeDesktopApp,13,true)
  deleteIndex(storeTaskbarApp,13,false)
}
</script>