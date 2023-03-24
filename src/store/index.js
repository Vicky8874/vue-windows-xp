import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    storeDesktopApp:[],
    storeTaskbarApp:[],
  }),
  getters: {
    
  },
  actions: {
    sortIndex(id){
      let target=this.storeDesktopApp.find(item=>{return item.id===id}).zIndex
      this.storeDesktopApp.find(item=>{return item.id===id}).zIndex=this.storeDesktopApp.length
      if(target!==0){
        for(let i=0;i<this.storeDesktopApp.length;i++){
          if(this.storeDesktopApp[i].id!==id) this.storeDesktopApp[i].zIndex=this.storeDesktopApp[i].zIndex>=target?this.storeDesktopApp[i].zIndex-1:this.storeDesktopApp[i].zIndex===target?this.storeDesktopApp.length:this.storeDesktopApp[i].zIndex
        }
      }
    },
  },
})