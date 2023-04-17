<style lang="scss" scoped>
.wrap{
  background:radial-gradient(circle closest-side at center,#295dfc,#2554e2);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 900px;
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
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #316ac5;
  }
}
.click_text{
  background-color: #3670b6;
  border-radius:2px;
  border: 1px dotted #000;
  box-sizing:content-box;
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
      <div class="nav" @click="file()">檔案</div>
      <div class="nav" @click="edit()">編輯(E)</div>
      <div class="nav" @click="veiw()">檢視(V)</div>
      <div class="nav" @click="favourite()">我的最愛(A)</div>
      <div class="nav" @click="tool()">工具(T)</div>
      <div class="nav" @click="help()">說明(H)</div>
      <!-- 檔案 -->
      <div v-if="fileDisplay" class="drow w-[180px] bg-white absolute border-1 bordr-[#989791] shadow top-[80px] left-[14px] z-10">
        <div class="text-[14px] py-[6px] cursor-pointer hover:(bg-[#316ac5] text-white)" v-for="(item,index) in fileContent" :key="index">
          <span class="pl-[20px] text-[#aca89a]">{{ item }}</span>
        </div>
      </div>
      <!-- 編輯 -->
      <div v-if="editDisplay" class="drow w-[180px] bg-white absolute border-1 bordr-[#989791] shadow top-[80px] left-[82px] z-10">
        <div class="text-[14px] py-[6px] cursor-pointer hover:(bg-[#316ac5] text-white)" v-for="(item,index) in editContent" :key="index">
          <span class="pl-[20px] text-[#aca89a]">{{ item }}</span>
        </div>
      </div>
      <!-- 檢視 -->
      <div v-if="veiwDisplay" class="drow w-[180px] bg-white absolute border-1 bordr-[#989791] shadow top-[80px] left-[152px] z-10">
        <div class="text-[14px] py-[6px] cursor-pointer hover:(bg-[#316ac5] text-white)" v-for="(item,index) in veiwContent" :key="index">
          <span class="pl-[20px] text-[#aca89a]">{{ item }}</span>
        </div>
      </div>
      <!-- 我的最愛 -->
      <div v-if="favouriteDisplay" class="drow w-[180px] bg-white absolute border-1 bordr-[#989791] shadow top-[80px] left-[221px] z-10">
        <div class="text-[14px] py-[6px] cursor-pointer hover:(bg-[#316ac5] text-white)" v-for="(item,index) in favouriteContent" :key="index">
          <span class="pl-[20px] text-[#aca89a]">{{ item }}</span>
        </div>
      </div>
      <!-- 工具 -->
      <div v-if="toolDisplay" class="drow w-[180px] bg-white absolute border-1 bordr-[#989791] shadow top-[80px] left-[322px]">
        <div class="text-[14px] py-[6px] cursor-pointer hover:(bg-[#316ac5] text-white)" v-for="(item,index) in toolContent" :key="index">
          <span class="pl-[20px] text-[#aca89a]">{{ item }}</span>
        </div>
      </div>
      <!-- 說明 -->
      <div v-if="helpDisplay" class="drow w-[250px] bg-white absolute border-1 bordr-[#989791] shadow top-[80px] left-[391px]">
        <div class="text-[14px] py-[6px] cursor-pointer hover:(bg-[#316ac5] text-white)" v-for="(item,index) in helpContent" :key="index" @click="helpAction(item.icon)">
          <span class="pl-[20px]" :class="item.display?'text-black':'text-[#aca89a]'">{{ item.content }}</span>
        </div>
      </div>
      <!-- <about v-if="" class="absolute z-10 top-1/5 left-1/5" /> -->
    </div>
    <div class="border bg-white px-[10px] py-[2px]">
      <img class="w-[30px]" src="/image/start.png" />
    </div>
  </div>
  <div class="border bg-[#ece9d8] h-[50px] flex items-center">
    <img class="rounded-1/2 w-[30px] filter grayscale mx-[10px]" src="/image/windows_xp_icon/back.png" />
    <span class="text-[16px] text-[#a7a79f] mr-[20px]">上一頁</span>
    <div class="text-[10px] text-[#a7a79f]">▼</div>
    <img class="rounded-1/2 w-[30px] filter grayscale mx-[10px]" src="/image/windows_xp_icon/next.png" />
    <div class="text-[10px] text-[#a7a79f]">▼</div>
    <div class="flex h-full items-center cursor-pointer hover:(bg-[#dbd7c6])">
      <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/up.png" />
    </div>
    <div class="w-[1px] h-[50px] bg-[#9d9d9d]"></div>
    <div class="flex h-full items-center cursor-pointer hover:(bg-[#dbd7c6])">
      <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/search.png" />
      <span class="text-[16px] text-black mr-[20px]">搜尋</span>
    </div>
    <div class="flex h-full items-center cursor-pointer hover:(bg-[#dbd7c6])">
      <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/folder_view.png" />
      <span class="text-[16px] text-black mr-[20px]">資料夾</span>
    </div>
    <div class="w-[1px] h-[50px] bg-[#9d9d9d]"></div>
    <div class="flex h-full items-center cursor-pointer hover:(bg-[#dbd7c6])">
      <img class="w-[30px] mx-[10px]" src="/image/windows_xp_icon/icon_view.png" />
      <div class="mr-[4px] text-[10px] text-black">▼</div>
    </div>
  </div>
  <div class="h-[500px] flex">
    <div class="w-[300px] h-full shadow bg-gradient-to-b from-[#7ca0e5] to-[#6573da] p-[20px]">
      <div class="shadow bg-gradient-to-tr from-white to-[#c7d3f9] rounded-t-[6px] p-[2px]">
        <div class="cursor-pointer flex items-center justify-between p-[4px] group" @click="openClose()">
          <span class="ml-[10px] text-[12px] text-[#2f55aa] font-black group-hover:text-[#428eff]">系統任務</span>
          <img class="transform" :class="dropContentStatus?'rotate-180':''" src="/image/windows_xp_icon/drow_arrow.png" />
        </div>
        <div class="drop_content bg-[#d7def8] px-[14px] overflow-hidden transition-all duration-300" :style="{ maxHeight: dropContentHeight ? `${dropContentHeight}px` : 0 }">
          <div v-for="(item,index) in task" :key="index" class="flex items-center my-[8px]">
            <img class="w-[18px] mr-[6px] cursor-pointer" :src="item.img" />
            <span class="text-[#4262a6] text-[12px] cursor-pointer hover:(underline)">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="shadow bg-gradient-to-tr from-white to-[#c7d3f9] rounded-t-[6px] p-[2px] mt-[20px]">
        <div class="cursor-pointer flex items-center justify-between p-[4px] group" @click="detailOpenClose()">
          <span class="ml-[10px] text-[12px] text-[#2f55aa] font-black group-hover:text-[#428eff]">詳細信息</span>
          <img class="transform" :class="dropDetailStatus?'rotate-180':''" src="/image/windows_xp_icon/drow_arrow.png" />
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
    <div class="w-[700px] h-full bg-[#fff]">
    </div>
  </div>
</div>
</template>

<script>
import {app,otherWindow} from '@/configs/index.js'
import { useCounterStore } from '@/store/index.js'
import {ref} from 'vue'
export default {
  setup() {
    const {storeTaskbarApp,storeDesktopApp,deleteIndex,sortIndex,daggle} = useCounterStore()
    const data=app.find(item=>item.id===4)
    const close=()=>{
      deleteIndex(storeDesktopApp,4,true)
      deleteIndex(storeTaskbarApp,4,false)
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
      {name:'檢視系統資訊',img:new URL('/image/windows_xp_icon/explorer_properties.png',import.meta.url)},
      {name:'新增或移除程式',img:new URL('/image/windows_xp_icon/programs.png',import.meta.url)},
      {name:'變更設置',img:new URL('/image/windows_xp_icon/control_panel.png',import.meta.url)},
    ]
    const address=[
      {name:'網路上的芳鄰',img:new URL('/image/windows_xp_icon/network.png',import.meta.url)},
      {name:'我的文件',img:new URL('/image/windows_xp_icon/my_file.png',import.meta.url)},
      {name:'共享文件',img:new URL('/image/windows_xp_icon/file.png',import.meta.url)},
      {name:'控制台',img:new URL('/image/windows_xp_icon/control_panel.png',import.meta.url)},
    ]
    const disk=[
      {name:'本機磁碟(C:)',img:new URL('/image/windows_xp_icon/disk.png',import.meta.url)},
      {name:'DWG(D:)',img:new URL('/image/windows_xp_icon/disk.png',import.meta.url)},
      {name:'本機磁碟(E:)',img:new URL('/image/windows_xp_icon/disk.png',import.meta.url)},
      {name:'本機磁碟(F:)',img:new URL('/image/windows_xp_icon/disk.png',import.meta.url)},
    ]
    const saveDisk=[
      {name:'3.5軟碟機(A:)',img:new URL('/image/windows_xp_icon/floppy_disk.png',import.meta.url)},
      {name:'DVD 驅動器(E:)',img:new URL('/image/windows_xp_icon/DVD.png',import.meta.url)},
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
    const fileContent=['建立捷徑(S)','刪除(D)','重新命名(M)','內容(R)','關閉(C))']
    const fileDisplay=ref(false)
    const file=()=>{
      fileDisplay.value=!fileDisplay.value
      editDisplay.value=false
      veiwDisplay.value=false
      favouriteDisplay.value=false
      toolDisplay.value=false
      helpDisplay.value=false
    }
    const editContent=['復原(U)','剪下(T)','複製(C)','貼上(P)','貼上捷徑(S)','複製到資料夾(F)','移到資料夾(V)','全選(A)','反向選擇(I)']
    const editDisplay=ref(false)
    const edit=()=>{
      editDisplay.value=!editDisplay.value
      fileDisplay.value=false
      veiwDisplay.value=false
      favouriteDisplay.value=false
      toolDisplay.value=false
      helpDisplay.value=false
    }
    const veiwContent=['工具列(T)','狀態列(B)','瀏覽器列(E)','縮圖(H)','並排(S)','圖示(N)','清單(L)','詳細資料(D)','排列圖示依(I)','選擇詳細資料(C)...','移至(O)','重新整理(R)']
    const veiwDisplay=ref(false)
    const veiw=()=>{
      veiwDisplay.value=!veiwDisplay.value
      fileDisplay.value=false
      editDisplay.value=false
      favouriteDisplay.value=false
      toolDisplay.value=false
      helpDisplay.value=false
    }
    const favouriteContent=['加到我的最愛(A)','組織我的最愛(O)','連結(E)','MSN.com','廣播電台指南']
    const favouriteDisplay=ref(false)
    const favourite=()=>{
      favouriteDisplay.value=!favouriteDisplay.value
      fileDisplay.value=false
      editDisplay.value=false
      veiwDisplay.value=false
      toolDisplay.value=false
      helpDisplay.value=false
    }
    const toolContent=['連線網路磁碟機(N)...','中斷網路磁碟機(D)...','同步處理(S)...','資料夾選項(O)...']
    const toolDisplay=ref(false)
    const tool=()=>{
      toolDisplay.value=!toolDisplay.value
      fileDisplay.value=false
      editDisplay.value=false
      veiwDisplay.value=false
      favouriteDisplay.value=false
      helpDisplay.value=false
    }
    const helpContent=[
      {content:'說明及支援中心(H)',icon:'',display:false},
      {content:'備份 Windows是合法的版本嗎(L)?',icon:'',display:false},
      {content:'關於Windows(A)',icon:'about',display:true},]
    const helpDisplay=ref(false)
    const help=()=>{
      helpDisplay.value=!helpDisplay.value
      fileDisplay.value=false
      editDisplay.value=false
      veiwDisplay.value=false
      favouriteDisplay.value=false
      toolDisplay.value=false
    }
    const helpAction=(val)=>{
      switch(val){
        case 'about':
          if(!storeDesktopApp.some(items=>{return items.className===val})) storeDesktopApp.push(otherWindow.find(item=>item.className===val))
          sortIndex(storeDesktopApp.find(item=>item.className===val).id)
          daggle(val)
          helpDisplay.value=false
          break
        default:
          break
      }
    }
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
      fileContent,
      fileDisplay,
      editContent,
      editDisplay,
      veiwContent,
      veiwDisplay,
      favouriteContent,
      favouriteDisplay,
      toolContent,
      toolDisplay,
      helpContent,
      helpDisplay,
      //fn
      close,
      openClose,
      otherOpenClose,
      detailOpenClose,
      clickCss,
      file,
      edit,
      veiw,
      favourite,
      tool,
      help,
      helpAction,
    }
  }
}
</script>