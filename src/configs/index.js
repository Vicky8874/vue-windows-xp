import minesweeper from '@/views/minesweeper/index.vue'
import computer from '@/views/computer/index.vue'
import about from '@/components/help/about.vue'
import trush from '@/views/trush/index.vue'
import iexplore from '@/views/iexplore/index.vue'
import file from '@/views/file/index.vue'
import picture from '@/views/picture/index.vue'

export const app=[
  {id:1,desktop:true,zIndex:0,className:'minesweeper',component:minesweeper,name:'踩地雷',display:false,img:'/image/windows_desktop/bomb.webp'},
  {id:2,desktop:true,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
  {id:3,desktop:true,zIndex:0,className:'trush',component:trush,name:'垃圾桶',display:false,img:'/image/windows_desktop/trush.png'},
  {id:4,desktop:true,zIndex:0,className:'iexplore',component:iexplore,name:'Internet Explorer',display:false,img:'/image/windows_desktop/iexplore.png'},
]
export const start_right=[
  {id:5,desktop:false,zIndex:0,className:'file',component:file,name:'我的文件',display:false,img:'/image/windows_desktop/file.png'},
  {id:6,desktop:false,zIndex:0,className:'picture',component:picture,name:'我的圖片',display:false,img:'/image/windows_desktop/picture.png'},
  {id:7,desktop:false,zIndex:0,className:'music',component:trush,name:'我的音樂',display:false,img:'/image/windows_desktop/music.png'},
  {id:2,desktop:false,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
  {id:9,desktop:false,zIndex:0,className:'control',component:trush,name:'控制台(C)',display:false,img:'/image/windows_desktop/control.png'},
  {id:10,desktop:false,zIndex:0,className:'program',component:trush,name:'設定程式存取與預設值',display:false,img:'/image/windows_desktop/program.png'},
  {id:11,desktop:false,zIndex:0,className:'help',component:trush,name:'說明及支援(H)',display:false,img:'/image/windows_desktop/help.png'},
  {id:12,desktop:false,zIndex:0,className:'search',component:trush,name:'搜尋(S)',display:false,img:'/image/windows_desktop/search.png'},
  {id:13,desktop:false,zIndex:0,className:'run',component:trush,name:'執行(R)...',display:false,img:'/image/windows_desktop/run.png'},
]
export const otherWindow=[
  {id:8,desktop:false,zIndex:0,className:'about',component:about,name:'關於 Windows',display:false,img:''},
]
export const button=[
  {id:1,type:'minimize',img:'/image/windows_xp_icon/minimize.png'},
  {id:2,type:'maximize',img:'/image/windows_xp_icon/maximize.png'},
  {id:3,type:'restore',img:'/image/windows_xp_icon/restore.png'},
  {id:4,type:'exit',img:'/image/windows_xp_icon/exit.png'},
]