(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var s=a(9),c=a.n(s),i=a(37),r=a.n(i),o=(a(44),a(45),a(35),a(11)),n=(a(36),a(6)),l=function(e){var t=e.className,a=e.onClick,s=e.model,c=e.id,i=e.img,r=e.title,o=e.arrow,l=e.closet,j=e.stack,d=e.img1,h=e.p1,b=e.p2,m=e.url;return Object(n.jsx)("div",{className:"card-wrapper",children:Object(n.jsxs)("div",{className:t,onClick:"card open"===t?null:function(){return a(c)},children:["card open"===t?Object(n.jsx)("button",{className:"cancel",onClick:function(){return a(c)},children:"x"}):null,Object(n.jsxs)("div",{className:"card-top",children:[s?Object(n.jsxs)("div",{className:"model",style:{display:"block"},children:[s," "]}):"",0===c?"":Object(n.jsx)("div",{className:"img",style:{backgroundImage:"url(".concat(i,")")},alt:""})]}),Object(n.jsx)("div",{className:"card-header",children:Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:r})})}),0===c?"":Object(n.jsxs)("article",{className:"live-site",children:[Object(n.jsx)("h4",{children:o}),Object(n.jsx)("a",{className:"arrow-text",href:0===c?l:m,onClick:0===c?l:null,target:"blank",children:Object(n.jsx)("img",{className:"arrow",src:"/images/arrow.svg",alt:""})})]}),Object(n.jsx)("div",{className:"description",children:Object(n.jsxs)("article",{children:[Object(n.jsx)("h3",{children:"Project"}),Object(n.jsx)("p",{children:h}),Object(n.jsxs)("p",{children:[b," "]})]})}),Object(n.jsx)("div",{className:"imgs",children:Object(n.jsx)("img",{className:"img",src:d,alt:"screenshot"})}),Object(n.jsxs)("article",{className:"stack-div",children:[Object(n.jsx)("h3",{children:"Stack"}),Object(n.jsx)("div",{className:"stack-wrapper",children:j.map((function(e,t){return Object(n.jsx)("p",{className:"stack",children:e},t)}))})]})]})})},j=a(8),d=(a(47),a(17)),h=a(53);function b(e){var t=Object(s.useRef)(),a=Object(h.a)("/hamster.glb"),c=a.nodes,i=a.materials;return Object(d.b)((function(e,a){return t.current.rotation.y+=.01})),Object(n.jsxs)("group",Object(j.a)(Object(j.a)({ref:t},e),{},{dispose:null,children:[Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.neck.geometry,material:i["Material.007"],position:[.06314805,5.58120346,.35937101],rotation:[-.29974015,.08215367,.04442919],scale:[.15817423,.15817425,.15817423]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.legs.geometry,material:i["Material.011"],position:[.00481525,4.96720552,.33483559],rotation:[-4198e-8,-19044e-8,.00115213],scale:[.54523492,1.72270107,.34900141]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.torso.geometry,material:i["Material.006"],position:[.32891774,4.51422548,.39866883],rotation:[.01206153,.01779311,.1335134],scale:[.60566872,1.04906166,.30460978]}),Object(n.jsx)("mesh",{visible:"shorts"===e.bottomState.current,castShadow:!0,receiveShadow:!0,geometry:c.shorts.geometry,material:i["Material.009"],position:[.00838558,5.00606394,.36715826],rotation:[.03376368,.01387638,.01003241],scale:[.59219033,1.87105918,.3790572]}),Object(n.jsx)("mesh",{visible:"shirt"===e.topState.current,castShadow:!0,receiveShadow:!0,geometry:c.shirt.geometry,material:c.shirt.material,position:[.32891774,4.51422548,.39866883],rotation:[.01206153,.01779311,.1335134],scale:[.60566872,1.04906166,.30460978]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.shoes.geometry,material:i["Material.008"],position:[.00481525,4.96720552,.33483559],rotation:[-4198e-8,-19044e-8,.00115213],scale:[.54523492,1.72270107,.34900141]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.socks.geometry,material:i["Material.010"],position:[.00481525,4.96720552,.33483559],rotation:[-4198e-8,-19044e-8,.00115213],scale:[.54523492,1.72270107,.34900141]}),Object(n.jsxs)("group",{visible:"jacket"===e.topState.current,position:[.32931519,4.43788385,.39016473],rotation:[.01206153,.01779311,.1335134],scale:[.64959198,1.12513971,.32670012],children:[Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube010.geometry,material:i["Material.012"]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube010_1.geometry,material:i["Material.014"]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube010_2.geometry,material:i["Material.013"]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube010_3.geometry,material:i["Material.015"]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube010_4.geometry,material:i["Material.016"]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube010_5.geometry,material:i["Material.017"]})]}),Object(n.jsx)("mesh",{visible:"pants"===e.bottomState.current,castShadow:!0,receiveShadow:!0,geometry:c.pants.geometry,material:i["Material.018"],position:[.00838558,5.00606394,.36715826],rotation:[.03376368,.01387638,.01003241],scale:[.59219033,1.87105918,.3790572]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Head.geometry,material:i["Material.004"],position:[0,6.2395463,0],scale:.66845131}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Ears.geometry,material:i["Material.005"],position:[-.6639697,6.2840004,.31955105],rotation:[1.60629149,.00865687,.2391203],scale:[.18815909,.03333417,.18815914]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Eyes.geometry,material:c.Eyes.material,position:[.2144188,6.53345776,-.50512576],rotation:[.18652512,.22662392,.01534704],scale:[.05938037,.09338962,.02269922]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Hair.geometry,material:i["Material.002"],position:[.00364742,6.21911335,.00480925],scale:[.70466483,.70496672,.70496672]}),Object(n.jsxs)("group",{visible:"red-hat"===e.hatState.current,position:[.01561345,6.20101166,-.05566957],rotation:[.36406913,-.04649672,.01970669],scale:[.78938425,.78938431,.78938454],children:[Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube001.geometry,material:i["Material.020"]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube001_1.geometry,material:i.Material})]}),Object(n.jsxs)("group",{visible:"black-hat"===e.hatState.current,position:[.01561345,6.20101166,-.05566957],rotation:[.36406913,-.04649672,.01970669],scale:[.78938425,.78938431,.78938454],children:[Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube009.geometry,material:i["Material.019"]}),Object(n.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Cube009_1.geometry,material:c.Cube009_1.material})]})]}))}h.a.preload("/hamster.glb");var m=function(){var e=Object(s.useState)({isOpen:!1,current:"red-hat"}),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)({isOpen:!1,current:"jacket"}),r=Object(o.a)(i,2),l=r[0],h=r[1],m=Object(s.useState)({isOpen:!1,current:"pants"}),O=Object(o.a)(m,2),u=O[0],g=O[1],p=Object(s.useState)([0,-5,0]),x=Object(o.a)(p,2),v=x[0],w=x[1],y=Object(s.useState)(!1),S=Object(o.a)(y,2),f=S[0],k=S[1],N=function(e){c(Object(j.a)(Object(j.a)({},a),{},{current:e.currentTarget.value}))},C=function(e){h(Object(j.a)(Object(j.a)({},l),{},{current:e.currentTarget.value}))},M=function(e){g(Object(j.a)(Object(j.a)({},u),{},{current:e.currentTarget.value}))},E=function(){k(!f),w([0,-5,0]),g(Object(j.a)(Object(j.a)({},u),{},{isOpen:!1})),h(Object(j.a)(Object(j.a)({},l),{},{isOpen:!1})),c(Object(j.a)(Object(j.a)({},a),{},{isOpen:!1}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)("ambientLight",{intensity:.4}),Object(n.jsx)("directionalLight",{}),Object(n.jsx)(s.Suspense,{fallback:null,children:Object(n.jsx)(b,{hatState:a,topState:l,bottomState:u,scale:1.1,position:v})})]}),Object(n.jsx)("button",{className:"closet-toggle-button",onClick:E,children:"CLOSET"}),Object(n.jsxs)("div",{className:!1===f?"closet-hide":"closet",children:[Object(n.jsxs)("div",{className:"closet-header",children:[" ",Object(n.jsx)("h2",{children:"CLOSET"})," ",Object(n.jsx)("button",{className:"cancel",onClick:E,children:"x"})]}),Object(n.jsxs)("div",{className:"closet-buttons",children:[Object(n.jsx)("button",{onClick:function(){w([.5,-6.5,2]),c(Object(j.a)(Object(j.a)({},a),{},{isOpen:!a.isOpen})),g(Object(j.a)(Object(j.a)({},u),{},{isOpen:!1})),h(Object(j.a)(Object(j.a)({},l),{},{isOpen:!1}))},children:" HEAD "}),Object(n.jsx)("button",{className:a.isOpen?"":"hide",value:"black-hat",onClick:N,children:Object(n.jsx)("img",{src:"./images/closet/black-hat.png",alt:"black hat"})}),Object(n.jsx)("button",{className:a.isOpen?"":"hide",value:"red-hat",onClick:N,children:Object(n.jsx)("img",{src:"./images/closet/red-hat.png",alt:"red hat"})})]}),Object(n.jsxs)("div",{className:"closet-buttons",children:[Object(n.jsx)("button",{onClick:function(){w([.5,-5,2.5]),h(Object(j.a)(Object(j.a)({},l),{},{isOpen:!l.isOpen})),g(Object(j.a)(Object(j.a)({},u),{},{isOpen:!1})),c(Object(j.a)(Object(j.a)({},a),{},{isOpen:!1}))},children:"TOP"}),Object(n.jsx)("button",{className:l.isOpen?"":"hide",value:"jacket",onClick:C,children:Object(n.jsx)("img",{src:"./images/closet/jacket.png",alt:"jacket"})}),Object(n.jsx)("button",{className:l.isOpen?"":"hide",value:"shirt",onClick:C,children:Object(n.jsx)("img",{src:"./images/closet/shirt.png",alt:"shirt"})})]}),Object(n.jsxs)("div",{className:"closet-buttons",children:[Object(n.jsx)("button",{onClick:function(){w([.5,-4,2.5]),g(Object(j.a)(Object(j.a)({},u),{},{isOpen:!u.isOpen})),c(Object(j.a)(Object(j.a)({},a),{},{isOpen:!1})),h(Object(j.a)(Object(j.a)({},l),{},{isOpen:!1}))},children:"BOTTOM  "}),Object(n.jsx)("button",{className:u.isOpen?"":"hide",value:"pants",onClick:M,children:Object(n.jsx)("img",{src:"./images/closet/pants.png",alt:"pants"})}),Object(n.jsx)("button",{className:u.isOpen?"":"hide",value:"shorts",onClick:M,children:Object(n.jsx)("img",{src:"./images/closet/shorts.png",alt:"shorts"})})]})]})]})},O=a(31),u=a(32),g=a(34),p=[{id:0,type:"3d",title:"DRESS ME",url:"CLOSET",arrow:"CLOSET",stack:["React","Three.js","Blender"],p1:"This project started with me trying to learn blender in my free time for fun. Once I found out about three.js I started looking for ways to incorporate the two. Eventually I started  playing with changing his clothes and moving the camera around. I wanted to create an interactive avatar, \n    similar to something you would see in a video game.",p2:"In the future I would like to add more clothing options and add animations when the camera moves.",img1:"./images/closet/model.png"},{id:1,src:"/images/feed.gif",arrow:"LIVE SITE",img1:"./images/feed1.png",url:"https://shopifyfeed.herokuapp.com/",type:"Web App",stack:["React","Material UI","MongoDb","Node.js"],title:"SHOPIFY FEED",p1:"The idea behind this app was that I found myself spending alot of time checking shops for their new arrivals. I wanted to have one feed instead that would combined all these new arrivals together.",p2:" I ended up using Shopify's JSON api to get data from the shops I wanted. It checks for new items every couple of minutes and adds them to a database. Then uses this data to create a feed with a responsive masonry layout that has infinite scroll/pagination. You can also login using auth0 and customize you're own feed with the shops i've added."}],x=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(),r=Object(o.a)(i,2),j=r[0],d=r[1],h=Object(s.useState)(-1),b=Object(o.a)(h,2),x=b[0],v=b[1];O.a.registerPlugin(u.a),O.a.registerPlugin(g.a);var w=Object(s.useRef)(),y=O.a.utils.selector(w);g.a.create("apple","0.6, 0.2, 0.45, 1.3"),Object(s.useEffect)((function(){document.body.style.overflow=!0===a?"hidden":""}),[a]),Object(s.useLayoutEffect)((function(){if(j){var e=u.a.from(j,{duration:.5,delay:.1,targets:y(".card")});return function(){e.kill()}}}),[j,y]);var S=function(e){v(-1===x?e:-1),c(!a),d(u.a.getState(y(".card")))},f=p.map((function(e){return Object(n.jsx)(l,{id:e.id,className:e.id===x?"card open":"card","data-flip-id":e.id,arrow:e.arrow,stack:e.stack,title:e.title,url:e.url,src:e.src,type:e.type,img:e.src,p1:e.p1,p2:e.p2,img1:e.img1,onClick:S,model:0===e.id?Object(n.jsx)(m,{}):""},e.id)}));return Object(n.jsx)("div",{ref:w,className:"card-list",children:f})},v=function(){return Object(n.jsxs)("div",{className:"homepage",children:[Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)("h1",{children:"HAMZEY"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/beauferris/",children:Object(n.jsx)("img",{alt:"",src:"/images/linkedin.svg"})}),Object(n.jsx)("a",{target:"blank",href:"https://github.com/beauferris",children:Object(n.jsx)("img",{alt:"",src:"/images/github.svg"})})]})]}),Object(n.jsx)(x,{})]})};function w(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(v,{})})}r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c6265bd4.chunk.js.map