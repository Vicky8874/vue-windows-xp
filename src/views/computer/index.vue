<style lang="scss" scoped>
.wrap{
  background:radial-gradient(circle closest-side at center,#295dfc,#2554e2);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 1000px;
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
.click_text{
  background-color: #3670b6;
  border-radius:2px;
  border: 1px dotted #000;
  color: #fff;
}
</style>
<template>
<div class="wrap font_arial">
  <div class="flex justify-between mx-[4px] mb-[4px] cursor-move">
    <div class="title_bar flex-1 font-black text-white flex items-center">
      <img class="w-[24px]" :src="data.img">
      <span class="ml-[2px] text-[16px]" style="text-shadow: 0.1em 0.1em #333;">{{ data.name }}</span>
    </div>
    <div class="flex">
      <div class="top_button top_button_blue">_</div>
      <div class="top_button top_button_blue">口</div>
      <div class="top_button top_button_red" @click="close()">X</div>
    </div>
  </div>
  <div class="border text-black bg-[#ece9d8] flex justify-between">
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
  <div class="border bg-[#ece9d8] h-[50px] flex items-center">
    <img class="rounded-1/2 w-[30px] filter grayscale mx-[10px]" src="/image/windows_xp_icon/back.png" />
    <span class="text-[18px] text-[#a7a79f] mr-[20px]">上一頁</span>
    <div class="text-[10px] text-[#a7a79f]">▼</div>
    <img class="rounded-1/2 w-[30px] filter grayscale mx-[10px]" src="/image/windows_xp_icon/next.png" />
    <div class="text-[10px] text-[#a7a79f]">▼</div>
    <div class="flex h-full items-center cursor-pointer hover:(bg-[#dbd7c6])">
      <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/up.png" />
    </div>
    <div class="w-[1px] h-[50px] bg-[#9d9d9d]"></div>
    <div class="flex h-full items-center cursor-pointer hover:(bg-[#dbd7c6])">
      <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/search.png" />
      <span class="text-[18px] text-black mr-[20px]">搜尋</span>
    </div>
    <div class="flex h-full items-center cursor-pointer hover:(bg-[#dbd7c6])">
      <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/folder_view.png" />
      <span class="text-[18px] text-black mr-[20px]">資料夾</span>
    </div>
    <div class="w-[1px] h-[50px] bg-[#9d9d9d]"></div>
    <div class="flex h-full items-center cursor-pointer hover:(bg-[#dbd7c6])">
      <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/icon_view.png" />
      <div class="mr-[4px] text-[10px] text-black">▼</div>
    </div>
  </div>
  <div class="h-[600px] flex">
    <div class="w-[300px] h-full shadow bg-gradient-to-b from-[#7ca0e5] to-[#6573da] p-[20px]">
      <div class="shadow bg-gradient-to-tr from-white to-[#c7d3f9] rounded-t-[6px] p-[2px]">
        <div class="flex items-center justify-between p-[4px]">
          <span class="text-[12px] text-[#2f55aa] font-black">系統任務</span>
          <img class="cursor-pointer transform" :class="dropContentStatus?'rotate-180':''" src="/image/windows_xp_icon/drow_arrow.png" @click="openClose()" />
        </div>
        <div class="drop_content bg-[#d7def8] px-[14px] overflow-hidden transition-all duration-300" :style="{ maxHeight: dropContentHeight ? `${dropContentHeight}px` : 0 }">
          <div v-for="(item,index) in task" :key="index" class="flex items-center my-[8px]">
            <img class="w-[18px] mr-[6px] cursor-pointer" :src="item.img" />
            <span class="text-[#4262a6] text-[12px] cursor-pointer hover:(underline)">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="shadow bg-gradient-to-tr from-white to-[#c7d3f9] rounded-t-[6px] p-[2px] mt-[20px]">
        <div class="flex items-center justify-between p-[4px]">
          <span class="text-[12px] text-[#2f55aa] font-black">其他位置</span>
          <img class="cursor-pointer transform" :class="dropAddressContentStatus?'rotate-180':''" src="/image/windows_xp_icon/drow_arrow.png" @click="otherOpenClose()" />
        </div>
        <div class="drop_address_content bg-[#d7def8] px-[14px] overflow-hidden transition-all duration-300" :style="{ maxHeight: dropAddressContentHeight ? `${dropAddressContentHeight}px` : 0 }">
          <div v-for="(item,index) in address" :key="index" class="flex items-center my-[8px]">
            <img class="w-[18px] mr-[6px] cursor-pointer" :src="item.img" />
            <span class="text-[#4262a6] text-[12px] cursor-pointer hover:(underline)">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="shadow bg-gradient-to-tr from-white to-[#c7d3f9] rounded-t-[6px] p-[2px] mt-[20px]">
        <div class="flex items-center justify-between p-[4px]">
          <span class="text-[12px] text-[#2f55aa] font-black">詳細信息</span>
          <img class="cursor-pointer transform" :class="dropDetailStatus?'rotate-180':''" src="/image/windows_xp_icon/drow_arrow.png" @click="detailOpenClose()" />
        </div>
        <div class="drop_detail_content bg-[#d7def8] px-[14px] overflow-hidden transition-all duration-300" :style="{ maxHeight: dropDetailHeight ? `${dropDetailHeight}px` : 0 }">
          <div class="flex flex-col my-[8px]">
            <span class="text-[12px] font-black">我的電腦</span>
            <span class="text-[12px]">系統文件夾</span>
          </div>
        </div>
      </div>
      <img class="absolute left-[20px] bottom-[20px]" src="/image/rover_windows_xp.gif" />
    </div>
    <div class="w-[700px] h-full bg-[#fff] flex flex-col">
      <div class="text-[12px] font-black ml-[10px] my-[4px]">硬碟機</div>
      <div class="w-1/2 h-[2px] bg-gradient-to-r from-[#6e93bc] to-white"></div>
      <div class="flex ml-[10px] my-[20px] disk">
        <div v-for="(item,index) in disk" :key="index" class="flex flex-col items-center mr-[30px] cursor-pointer" @click="clickCss(index,0)">
          <img class="w-[30px]" :src="item.img" />
          <span class="disk_text">{{item.name}}</span>
        </div>
      </div>
      <div class="text-[12px] font-black ml-[10px] my-[4px]">裝置中含有卸除式存放裝置</div>
      <div class="w-1/2 h-[2px] bg-gradient-to-r from-[#6e93bc] to-white"></div>
      <div class="flex ml-[10px] my-[20px] save_disk">
        <div v-for="(item,index) in saveDisk" :key="index" class="flex flex-col items-center mr-[30px] cursor-pointer" @click="clickCss(index,1)">
          <img class="w-[30px]" :src="item.img" />
          <span class="save_disk_text">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {app} from '@/configs/index.js'
import { useCounterStore } from '@/store/index.js'
import {ref} from 'vue'
export default {
  setup() {
    const {storeTaskbarApp,storeDesktopApp,deleteIndex} = useCounterStore()
    const data=app.find(item=>item.id===2)
    const close=()=>{
      deleteIndex(storeDesktopApp,2,true)
      deleteIndex(storeTaskbarApp,2,false)
    }
    const dropContentStatus=ref(true)
    const dropContentHeight=ref(86)
    const openClose=()=>{
      dropContentStatus.value=!dropContentStatus.value
      if(dropContentStatus.value) dropContentHeight.value=document.querySelector('.drop_content')?document.querySelector('.drop_content').scrollHeight:0
      else dropContentHeight.value=0
    }
    const dropAddressContentStatus=ref(true)
    const dropAddressContentHeight=ref(112)
    const otherOpenClose=()=>{
      dropAddressContentStatus.value=!dropAddressContentStatus.value
      if(dropAddressContentStatus.value) dropAddressContentHeight.value=document.querySelector('.drop_address_content')?document.querySelector('.drop_address_content').scrollHeight:0
      else dropAddressContentHeight.value=0
    }
    const dropDetailStatus=ref(true)
    const dropDetailHeight=ref(40)
    const detailOpenClose=()=>{
      dropDetailStatus.value=!dropDetailStatus.value
      if(dropDetailStatus.value) dropDetailHeight.value=document.querySelector('.drop_detail_content')?document.querySelector('.drop_detail_content').scrollHeight:0
      else dropDetailHeight.value=0
    }
    const task=[
      {name:'檢視系統資訊',img:'/image/windows_xp_icon/explorer_properties.png'},
      {name:'新增或移除程式',img:'/image/windows_xp_icon/programs.png'},
      {name:'變更設置',img:'/image/windows_xp_icon/control_panel.png'},
    ]
    const address=[
      {name:'網路上的芳鄰',img:'/image/windows_xp_icon/network.png'},
      {name:'我的文件',img:'/image/windows_xp_icon/my_file.png'},
      {name:'共享文件',img:'/image/windows_xp_icon/file.png'},
      {name:'控制台',img:'/image/windows_xp_icon/control_panel.png'},
    ]
    const disk=[
      {name:'本機磁碟(C:)',img:'/image/windows_xp_icon/disk.png'},
      {name:'DWG(D:)',img:'/image/windows_xp_icon/disk.png'},
      {name:'本機磁碟(E:)',img:'/image/windows_xp_icon/disk.png'},
      {name:'本機磁碟(F:)',img:'/image/windows_xp_icon/disk.png'},
    ]
    const saveDisk=[
      {name:'3.5軟碟機(A:)',img:'/image/windows_xp_icon/floppy_disk.png'},
      {name:'DVD 驅動器(E:)',img:'/image/windows_xp_icon/DVD.png'},
    ]
    const clickCss=(val,index)=>{
      if(index===0){
        for(let i=0;i<disk.length;i++){
          if(i===val)document.getElementsByClassName('disk_text')[val].classList.add('click_text')
          else document.getElementsByClassName('disk_text')[i].classList.remove('click_text')
        }
      }
      else if(index===1){
        for(let i=0;i<saveDisk.length;i++){
          if(i===val)document.getElementsByClassName('save_disk_text')[val].classList.add('click_text')
          else document.getElementsByClassName('save_disk_text')[i].classList.remove('click_text')
        }
      }
    }
    document.addEventListener('click',event=>{
      if(!(document.querySelector('.disk')===event.target||document.querySelector('.disk').contains(event.target))){
        for(let i=0;i<disk.length;i++){
          document.getElementsByClassName('disk_text')[i]?.classList.remove('click_text')
        }
      }
      if(!(document.querySelector('.save_disk')===event.target||document.querySelector('.save_disk').contains(event.target))){
        for(let i=0;i<saveDisk.length;i++){
          document.getElementsByClassName('save_disk_text')[i]?.classList.remove('click_text')
        }
      }
    })
    return{
      data,
      task,
      address,
      dropContentHeight,
      dropContentStatus,
      dropAddressContentStatus,
      dropAddressContentHeight,
      dropDetailStatus,
      dropDetailHeight,
      disk,
      saveDisk,
      //fn
      close,
      openClose,
      otherOpenClose,
      detailOpenClose,
      clickCss,
    }
  }
}
</script>