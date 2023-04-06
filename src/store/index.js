import { defineStore } from 'pinia'
import {app,otherWindow} from '@/configs/index.js'
import {nextTick} from 'vue'
  export const useCounterStore = defineStore('counter', {
  state: () => ({
    storeDesktopApp:[],
    storeTaskbarApp:[],
    startStatus:false,
    shutDownStatus:false,
  }),
  getters: {
    
  },
  actions: {
    sortIndex(id){
      if(!this.storeDesktopApp.some(item=>{return item.id===id})) return
      let target=this.storeDesktopApp.find(item=>{return item.id===id}).zIndex
      this.storeDesktopApp.find(item=>{return item.id===id}).zIndex=this.storeDesktopApp.length 
      if(target!==0){
        for(let i=0;i<this.storeDesktopApp.length;i++){
          if(this.storeDesktopApp[i].id!==id) this.storeDesktopApp[i].zIndex=this.storeDesktopApp[i].zIndex>=target?this.storeDesktopApp[i].zIndex-1:this.storeDesktopApp[i].zIndex===target?this.storeDesktopApp.length:this.storeDesktopApp[i].zIndex
        }
      }
    },
    deleteIndex(arr,id,bool){
      let target=arr.find(item=>item.id===id)
      if(bool)
        for(let i=0;i<arr.length;i++)
          if(arr[i].zIndex>target.zIndex) arr[i].zIndex=arr[i].zIndex-1
      arr.splice(arr.indexOf(target), 1)
      if(app.some(item=>item.id===id)) app.find(item=>item.id===id).zIndex=0
      if(otherWindow.some(item=>item.id===id)) otherWindow.find(item=>item.id===id).zIndex=0
    },
    daggle(className){
      nextTick(()=>{
        document.querySelector('.'+className+' .title_bar').onmousedown = function (e1) {
          document.onmousemove = function (e) {
            document.querySelector('.'+className).style.left = e.clientX - e1.offsetX + "px"
            document.querySelector('.'+className).style.top = e.clientY - e1.offsetY + "px"
          }
          document.onmouseup = function (e) {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      })
    },
  },
})