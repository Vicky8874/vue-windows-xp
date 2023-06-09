import minesweeper from '@/views/minesweeper/index.vue'
import computer from '@/views/computer/index.vue'
import about from '@/components/help/about.vue'
import trush from '@/views/trush/index.vue'
// import iexplore from '@/views/iexplore/index.vue'
import file from '@/views/file/index.vue'
import picture from '@/views/picture/index.vue'
import music from '@/views/music/index.vue'
import control from '@/views/control/index.vue'
import run from '@/views/run/index.vue'
import {markRaw} from 'vue'
export const app=[
  {id:1,desktop:true,zIndex:0,className:'minesweeper',component:markRaw(minesweeper),name:'踩地雷',display:false,img:new URL('/image/windows_desktop/bomb.webp',import.meta.url)},
  {id:2,desktop:true,zIndex:0,className:'computer',component:markRaw(computer),name:'我的電腦',display:false,img:new URL('/image/windows_desktop/computer.png',import.meta.url)},
  {id:3,desktop:true,zIndex:0,className:'trush',component:markRaw(trush),name:'垃圾桶',display:false,img:new URL('/image/windows_desktop/trush.png',import.meta.url)},
  // {id:4,desktop:true,zIndex:0,className:'iexplore',component:markRaw(iexplore),name:'Internet Explorer',display:false,img:new URL('/image/windows_desktop/iexplore.png',import.meta.url)},
]
export const start_right=[
  {id:5,desktop:false,zIndex:0,className:'file',component:markRaw(file),name:'我的文件',display:false,img:new URL('/image/windows_desktop/file.png',import.meta.url)},
  {id:6,desktop:false,zIndex:0,className:'picture',component:markRaw(picture),name:'我的圖片',display:false,img:new URL('/image/windows_desktop/picture.png',import.meta.url)},
  {id:7,desktop:false,zIndex:0,className:'music',component:markRaw(music),name:'我的音樂',display:false,img:new URL('/image/windows_desktop/music.png',import.meta.url)},
  {id:2,desktop:false,zIndex:0,className:'computer',component:markRaw(computer),name:'我的電腦',display:false,img:new URL('/image/windows_desktop/computer.png',import.meta.url)},
  {id:9,desktop:false,zIndex:0,className:'control',component:markRaw(control),name:'控制台(C)',display:false,img:new URL('/image/windows_desktop/control.png',import.meta.url)},
  // {id:10,desktop:false,zIndex:0,className:'program',component:markRaw(trush),name:'設定程式存取與預設值',display:false,img:new URL('/image/windows_desktop/program.png',import.meta.url)},
  // {id:11,desktop:false,zIndex:0,className:'help',component:markRaw(trush),name:'說明及支援(H)',display:false,img:new URL('/image/windows_desktop/help.png',import.meta.url)},
  // {id:12,desktop:false,zIndex:0,className:'search',component:markRaw(trush),name:'搜尋(S)',display:false,img:new URL('/image/windows_desktop/search.png',import.meta.url)},
  {id:13,desktop:false,zIndex:0,className:'run',component:markRaw(run),name:'執行(R)...',display:false,img:new URL('/image/windows_desktop/run.png',import.meta.url)},
]
export const otherWindow=[
  {id:8,desktop:false,zIndex:0,className:'about',component:markRaw(about),name:'關於 Windows',display:false,img:''},
]
export const button=[
  {id:1,type:'minimize',img:new URL('/image/windows_xp_icon/minimize.png',import.meta.url)},
  {id:2,type:'maximize',img:new URL('/image/windows_xp_icon/maximize.png',import.meta.url)},
  {id:3,type:'restore',img:new URL('/image/windows_xp_icon/restore.png',import.meta.url)},
  {id:4,type:'exit',img:new URL('/image/windows_xp_icon/exit.png',import.meta.url)},
]