# vue-project
 
## History Mode 
-> `createWebHistory` vs hashMode 
purpose in SPA (one file and navigation does not work)
single entry in server
 
## Lazy Loading 
all destinations area loaded  (js module import)
build - bundle all code into 1 file 
```npm run build```
what if we want to load particular JS file if we go to corrensponding pages --> **code spliting** intu chunks

```js
  {path: '/hawaii', name: 'hawaii', component: ()=> import('@/views/Hawaii.vue')},
```  
## Navigation
- create seperate component 
- add active class link 
```js
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link'
})
```