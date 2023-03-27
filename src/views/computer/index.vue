<style lang="scss">
.wrap{
  background:radial-gradient(circle closest-side at center,#295dfc,#2554e2);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 1000px;
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
.border{
  border-top: 2px solid #F0F0F0;
  border-left: 2px solid #F0F0F0;
  border-right: 2px solid #9d9d9d;
  border-bottom: 2px solid #9d9d9d;
}
.nav{
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  padding-left: 6px;
  &:hover{
    background-color: #dbd7c6;
  }
}
</style>
<template>
<div class="wrap">
  <div class="flex justify-between mx-[4px] mb-[4px] cursor-move">
    <div class="title_bar flex-1 font_arial font-black text-white flex items-center">
      <img class="w-[24px]" :src="data.img">
      <span class="ml-[2px] text-[16px]" style="text-shadow: 0.1em 0.1em #333;">{{ data.name }}</span>
    </div>
    <div class="flex font_arial">
      <div class="top_button top_button_blue">_</div>
      <div class="top_button top_button_blue">口</div>
      <div class="top_button top_button_red" @click="close()">X</div>
    </div>
  </div>
  <div class="border text-black bg-[#ece9d8] flex font_arial justify-between">
    <div class="flex flex-1 border">
      <div class="nav">文件(F)</div>
      <div class="nav">編輯(E)</div>
      <div class="nav">查看(V)</div>
      <div class="nav">收集(A)</div>
      <div class="nav">工具(T)</div>
      <div class="nav">幫助(H)</div>
    </div>
    <div class="border bg-white px-[10px] py-[2px]">
      <img class="w-[30px]" src="/image/start.png" />
    </div>
  </div>
  <div class="border bg-[#ece9d8] h-[50px] flex font_arial items-center">
    <img class="rounded-1/2 w-[30px] filter grayscale mx-[10px]" src="/image/windows_xp_icon/back.png" />
    <span class="text-[18px] text-[#a7a79f] mr-[20px]">後退</span>
    <div class="text-[10px] text-[#a7a79f]">▼</div>
    <img class="rounded-1/2 w-[30px] filter grayscale mx-[10px]" src="/image/windows_xp_icon/next.png" />
    <div class="text-[10px] text-[#a7a79f]">▼</div>
    <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/open_file.png" />
    <div class="w-[1px] h-[50px] bg-[#9d9d9d]"></div>
  </div>
  <div class="h-[600px] flex">
    <div class="w-[300px] h-full shadow bg-gradient-to-b from-[#7ca0e5] to-[#6573da]">

    </div>
    <div class="w-[700px] h-full bg-[#fff]">

    </div>
  </div>
</div>
</template>

<script>
import {app} from '@/configs/index.js'
import { useCounterStore } from '@/store/index.js'
export default {
  setup() {
    const {storeTaskbarApp,storeDesktopApp,deleteIndex} = useCounterStore()
    const data=app.find(item=>item.id===2)
    const close=()=>{
      deleteIndex(storeDesktopApp,2,true)
      deleteIndex(storeTaskbarApp,2,false)
    }
    return{
      data,
      //fn
      close,
    }
  }
}
</script>