<style lang="scss" scoped>
.center{
  background: linear-gradient(to right,#5a7dde,#97b5f5,#5a7dde);
}.line{
  height: 3px;
  width: 100%;
  background:linear-gradient(to right,rgba(0,0,0,10%),rgba(255,255,255,100%),rgba(0,0,0,10%));
  margin: 4px 0px;
}
</style>
<template>
  <div class="border-1 border-black bg-[#013399] w-[400px] font_arial">
    <div class="flex items-center justify-between px-[20px] py-[6px]">
      <span class="text-white text-[20px] shadow ">電腦關機</span>
      <img class="w-[50px]" src="/image/start.png"/>
    </div>
    <div class="center">
      <div class="line"></div>
      <div class="flex justify-between py-[50px] px-[50px]">
        <div class="flex flex-col items-center w-[80px] cursor-pointer">
          <img class="w-[40px]" src="/image/windows_xp_icon/standby.png" />
          <span class="text-white text-[14px] mt-[8px]">待命(S)</span>
        </div>
        <div class="flex flex-col items-center w-[80px] cursor-pointer" @click="shutDown()">
          <img class="w-[40px]" src="/image/windows_xp_icon/shutdown.png" />
          <span class="text-white text-[14px] mt-[8px]">關機(U)</span>
        </div>
        <div class="flex flex-col items-center w-[80px] cursor-pointer">
          <img class="w-[40px]" src="/image/windows_xp_icon/restart.png" />
          <span class="text-white text-[14px] mt-[8px]">重新啟動(R)</span>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-[20px] py-[16px]">
      <div class="border-1 border-[rgba(255,255,255,30%)] cursor-pointer">
        <div class="w-[60px] text-center py-[2px] text-[16px] bg-white rounded-[4px] border-1 border-black shadow" @click="emit('close')">取消</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['close'])
const shutDown=()=>{
  if (confirm("Do you want to close this window?")) {
    window.opener=null
    open(location, '_self').close()
    // window.close()
  }
}
</script>