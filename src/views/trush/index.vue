<style lang="scss">
.wrap{
  background:radial-gradient(circle closest-side at center,#295dfc,#2554e2);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
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
.nav{
  font-size: 18px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #dbd7c6;
  }
}
.box_click_bg{
  background-color: #ccc;
  border: 1px solid #999;
  cursor: default;
}
.box_noclick_bg{
  background-color: #ddd;
  border-top: 5px solid #F0F0F0;
  border-left: 5px solid #F0F0F0;
  border-right: 5px solid #9d9d9d;
  border-bottom: 5px solid #9d9d9d;
  cursor: pointer;
  &:hover{
    background-color: #ccc;
  }
}
.box_centerClick_bg{
  background-color: #fff;
cursor: default;
}
.box_shadow_up{
  border-top: 5px solid #F0F0F0;
  border-left: 5px solid #F0F0F0;
  border-right: 5px solid #9d9d9d;
  border-bottom: 5px solid #9d9d9d;
}
.box_shadow_up_hover{
&:hover{
  border-top: 5px solid #9d9d9d;
  border-left: 5px solid #9d9d9d;
  border-right: 5px solid #F0F0F0;
  border-bottom: 5px solid #F0F0F0;
}
}
.box_shadow_down{
  border-top: 5px solid #9d9d9d;
  border-left: 5px solid #9d9d9d;
  border-right: 5px solid #F0F0F0;
  border-bottom: 5px solid #F0F0F0;
}
</style>
<template>
<!-- 踩地雷 -->
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
  <div class="text-black bg-[#ece9d8] w-full flex pl-[6px] font_arial">
    <div class="nav">遊戲(G)</div>
    <div class="nav">說明(H)</div>
  </div>
  <div class="box_shadow_up flex flex-col items-center bg-[#BEBEBE] p-20px">
    <div class="box_shadow_down flex justify-around items-center w-full bg-[#BEBEBE]">
      <!-- <input id="num" class="font_digital7 text-black text-[20px] mr-[20px] text-center pl-[14px]" type="number" min="8" max="50" v-model="num" :disabled="status"/> -->
      <div class="font_digital7 text-center w-[100px] text-[40px] bg-black">{{ boomNum-boomClickNum }}</div>
      <div class="start_button text-white box_shadow_up box_shadow_up_hover w-[50px] h-[50px] flex justify-center items-center text-[30px] cursor-pointer" @click="start()">{{ startButtonFace }}</div>
      <div class="font_digital7 text-center w-[100px] text-[40px] bg-black">{{ time }}</div>
    </div>
    <div class="box_shadow_down mt-[50px]">
      <div class="flex" v-for="i in num">
        <div class="box bg-[#ddd] text-black w-[40px] h-[40px] flex justify-center items-center" :class="status?'box_noclick_bg':'cursor-not-allowed'" v-for="j in num" @mouseup="(e)=>{mouse(e,(i-1)*num+j)}" @mousedown="(e)=>{mouseDown(e,(i-1)*num+j)}">
        </div>
      </div>
    </div>
  </div>
  <div class="text-black bg-[#ece9d8] w-full flex font_arial">
    <div class="nav">{{ statusConsole[0] }}</div>
  </div>
</div>
</template>

<script>
import {ref} from 'vue'
import {app} from '@/configs/index.js'
import { useCounterStore } from '@/store/index.js'
export default {
  setup() {
    const {storeTaskbarApp,storeDesktopApp,deleteIndex} = useCounterStore()
    const data=app.find(item=>item.id===3)
    const mineweeperDisplay=ref(false)
    const statusConsole=['就緒...','遊戲中...','你贏了！','Opps！']
    const gameStatus=['你輸了！','你贏了！']
    const num=ref(12)
    const status=ref(false) //開始狀態
    let box=[] //炸彈位置
    let boomNumAll=[] //炸彈位置
    const clickStatus=ref(JSON.parse(JSON.stringify(new Array(num.value).fill(JSON.parse(JSON.stringify(new Array(num.value).fill(0))))))) //已點擊位置 1左鍵 2右鍵
    const probability=ref(0.125) //地雷機率
    const total=ref(num.value*num.value) //總格數
    let boomNum=Math.floor(total.value*probability.value) //炸彈數量
    const boomClickNum=ref(0) //點擊炸彈數量
    const startButtonFace=ref('🙂')
    let startBool=false //是否開始
    let timer //計時器
    const timerVal=ref(0) //計時
    const time=ref('00:00') //計時顯示
    function timerCount(timer){ //計時
      timerVal.value++
      time.value=Math.floor(timerVal.value/60).toString().padStart(2,'0')+':'+(timer.value%60).toString().padStart(2,'0')
    }
    //開始
    const start=()=>{
      reset()
      startButtonFace.value='🙂'
      if(!startBool)timer=setInterval(timerCount,1000,timerVal)
      startBool=true
      boomClickNum.value=0
      clickStatus.value=JSON.parse(JSON.stringify(new Array(num.value).fill(JSON.parse(JSON.stringify(new Array(num.value).fill(0))))))
      status.value=true
      box = JSON.parse(JSON.stringify(new Array(num.value).fill(JSON.parse(JSON.stringify(new Array(num.value).fill(false))))))
      boomNumAll = JSON.parse(JSON.stringify(new Array(num.value).fill(JSON.parse(JSON.stringify(new Array(num.value).fill(false))))))
      total.value=num.value*num.value
      boomNum=Math.floor(total.value*probability.value)
      //設置炸彈
      for(let i=1;i<=boomNum;i++){
        let boom=Math.floor(Math.random()*(total.value))
        let row=Math.floor(boom/num.value)
        let col=boom%num.value
        if(box[row][col]) i--
        else box[row][col]=true
      }
      //計算每個位置炸彈數量
      for(let i=0;i<num.value;i++){
        for(let j=0;j<num.value;j++){
          boomNumAll[i][j]=boomNumCount(i,j)
        }
      }
      // console.log('boomNumAll',boomNumAll)
    }
    //結束
    const end=(val)=>{
      startBool=false
      clearInterval(timer)
      switch(val){
        case 0:
          startButtonFace.value='😵'
          for(let i=0;i<num.value;i++){
            for(let j=0;j<num.value;j++){
              if(box[i][j]){
                document.getElementsByClassName('box')[i*num.value+j].innerHTML='💣'
                document.getElementsByClassName('box')[i*num.value+j].classList.remove("box_noclick_bg")
                document.getElementsByClassName('box')[i*num.value+j].classList.add("box_click_bg")
              }
            }
          }
          break
        case 1:
          startButtonFace.value='😎'
          for(let i=0;i<num.value;i++){
            for(let j=0;j<num.value;j++){
              if(boomNumAll[i][j]>0){
                document.getElementsByClassName('box')[i*num.value+j].innerHTML=boomNumAll[i][j]
                document.getElementsByClassName('box')[i*num.value+j].classList.remove("box_noclick_bg")
                document.getElementsByClassName('box')[i*num.value+j].classList.add("box_click_bg")
              }
              else if(boomNumAll[i][j]===-1) document.getElementsByClassName('box')[i*num.value+j].innerHTML='🚩'
              else console.log(2)
            }
          }
          break
      }
      console.log(gameStatus[val])
    }
    const reset=()=>{
      timerVal.value=0
      time.value='00:00'
      status.value=false
      for(let i=0;i<total.value;i++){
        document.getElementsByClassName('box')[i].innerHTML=''
        document.getElementsByClassName('box')[i].classList.remove("box_click_bg")
        document.getElementsByClassName('box')[i].classList.add("box_noclick_bg")
      }
    }
    //炸彈數量
    function boomNumCount(x,y){
      if(box[x][y]) return -1
      let x1=x-1>=0?x-1:0
      let x2=x+1<num.value?x+1:num.value-1
      let y1=y-1>=0?y-1:0
      let y2=y+1<num.value?y+1:num.value-1
      let boom=0
      for(let i=x1;i<=x2;i++){
        for(let j=y1;j<=y2;j++){
          if(box[i][j]) boom++
        }
      }
      return boom
    }
    //左鍵
    const leftMouse=(val)=>{
      if(!startBool) return
      let row=Math.floor(val/num.value)
      let col=val%num.value
      if(!status.value || clickStatus.value?.[row][col]) return
      if(boomNumAll[row][col]===-1) end(0)
      else decide(row,col,val)
    }
    //右鍵
    const rightMouse=(val)=>{
      if(!startBool) return
      let row=Math.floor(val/num.value)
      let col=val%num.value
      if(!status.value || clickStatus.value?.[row][col]===1) return
      boomClickNum.value=clickStatus.value[row][col]===2?boomClickNum.value-1:boomClickNum.value+1
      clickStatus.value[row][col]=clickStatus.value[row][col]===2?0:2
      if(clickStatus.value[row][col]===2){
        document.getElementsByClassName('box')[val].innerHTML='🚩'
      }
      else{
        document.getElementsByClassName('box')[val].innerHTML=''
      }
      winDecide()
    }
    //中鍵
    const centerMouse=(val,bool)=>{
      if(!startBool) return
      let x=Math.floor(val/num.value)
      let y=val%num.value
      if(clickStatus.value[x][y]!==1 || boomNumAll[x][y]===0) return
      let x1=x-1>=0?x-1:0
      let x2=x+1<num.value?x+1:num.value-1
      let y1=y-1>=0?y-1:0
      let y2=y+1<num.value?y+1:num.value-1
      if(bool){
        let boom=0
        for(let i=x1;i<=x2;i++){
          for(let j=y1;j<=y2;j++){
            if(clickStatus.value[i][j]===2) boom++
            if(clickStatus.value[i][j]===0){
              document.getElementsByClassName('box')[i*num.value+j].classList.remove("box_centerClick_bg")
              document.getElementsByClassName('box')[i*num.value+j].classList.add("box_noclick_bg")
            }
          }
        }
        if(boom===boomNumAll[x][y]){
          for(let i=x1;i<=x2;i++){
            for(let j=y1;j<=y2;j++){
              if(clickStatus.value[i][j]===0) leftMouse(i*num.value+j)
            }
          }
        }
      }
      else{
        for(let i=x1;i<=x2;i++){
          for(let j=y1;j<=y2;j++){
            if(clickStatus.value[i][j]===0){
              document.getElementsByClassName('box')[i*num.value+j].classList.remove("box_noclick_bg")
              document.getElementsByClassName('box')[i*num.value+j].classList.add("box_centerClick_bg")
            }
          }
        }
      }
    }
    //左鍵判斷
    function decide(x,y,val){
      if(clickStatus.value[x][y]===1) return
      clickStatus.value[x][y]=1
      let x1=x-1>=0?x-1:0
      let x2=x+1<num.value?x+1:num.value-1
      let y1=y-1>=0?y-1:0
      let y2=y+1<num.value?y+1:num.value-1
      let boom=0
      for(let i=x1;i<=x2;i++){
        for(let j=y1;j<=y2;j++){
          if(box[i][j]) boom++
        }
      }
      if(boom===0){
        document.getElementsByClassName('box')[val].classList.remove("box_noclick_bg")
        document.getElementsByClassName('box')[val].classList.add("box_click_bg")
        if(x-1>=0&&y-1>=0)decide(x-1,y-1,val-num.value-1)
        if(x-1>=0)decide(x-1,y,val-num.value)
        if(x-1>=0&&y+1<num.value)decide(x-1,y+1,val-num.value+1)
        if(y-1>=0)decide(x,y-1,val-1)
        if(y+1<num.value)decide(x,y+1,val+1)
        if(x+1<num.value&&y-1>=0)decide(x+1,y-1,val+num.value-1)
        if(x+1<num.value)decide(x+1,y,val+num.value)
        if(x+1<num.value&&y+1<num.value)decide(x+1,y+1,val+num.value+1)
      }
      else{
        document.getElementsByClassName('box')[val].innerHTML=boom
        document.getElementsByClassName('box')[val].classList.remove("box_noclick_bg")
        document.getElementsByClassName('box')[val].classList.add("box_click_bg")
      }
      //判斷是否結束
      let leftClick=0
      for(let i=0;i<num.value;i++)
        for(let j=0;j<num.value;j++)
          if(clickStatus.value[i][j]===1&&!box[i][j]) leftClick++
      if(leftClick===total.value-boomNum) end(1)
    }
    //結束判斷(右鍵)
    function winDecide(){
      if(boomClickNum.value===boomNum){
        for(let i=0;i<num.value;i++)
          for(let j=0;j<num.value;j++)
            if(clickStatus.value[i][j]===2&&!box[i][j]) return
        end(1)
      }
    }
    const eButton=ref(0)
    function mouse(e,val){
      const clickVal=ref(0) //點擊位置
      clickVal.value=val-1
      switch (eButton.value){
        case 1:
          leftMouse(clickVal.value)
          break;
        case 2:
          rightMouse(clickVal.value)
          break;
        case 3:
        case 4:
          centerMouse(clickVal.value,true)
          break;
        default:
          break;
      }
    }
    function mouseDown(e,val){
      const clickVal=ref(0) //點擊位置
      clickVal.value=val-1
      eButton.value=e.buttons
      switch (e.buttons){
        case 3:
        case 4:
          centerMouse(clickVal.value,false)
          break;
        default:
          break;
      }

    }
    const close=()=>{
      deleteIndex(storeDesktopApp,3,true)
      deleteIndex(storeTaskbarApp,3,false)
    }
    return{
      num,
      status,
      clickStatus,
      boomClickNum,
      boomNum,
      startButtonFace,
      time,
      statusConsole,
      mineweeperDisplay,
      data,
      //fn
      start,
      mouse,
      mouseDown,
      close,
    }
  },
}
</script>