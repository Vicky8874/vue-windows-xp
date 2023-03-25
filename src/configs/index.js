import minesweeper from '@/views/minesweeper/index.vue'
import computer from '@/views/computer/index.vue'
import trush from '@/views/trush/index.vue'
import iexplore from '@/views/iexplore/index.vue'

export const app=[
  {id:1,desktop:true,zIndex:0,className:'minesweeper',component:minesweeper,name:'踩地雷',display:false,img:'/image/windows_desktop/bomb.webp'},
  {id:2,desktop:true,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
  {id:3,desktop:true,zIndex:0,className:'trush',component:trush,name:'垃圾桶',display:false,img:'/image/windows_desktop/trush.png'},
  {id:4,desktop:true,zIndex:0,className:'iexplore',component:iexplore,name:'Internet Explorer',display:false,img:'/image/windows_desktop/iexplore.png'},
  {id:5,desktop:false,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
  {id:6,desktop:false,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
  {id:7,desktop:false,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
  {id:8,desktop:false,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
  {id:9,desktop:false,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
  {id:10,desktop:false,zIndex:0,className:'computer',component:computer,name:'我的電腦',display:false,img:'/image/windows_desktop/computer.png'},
]
