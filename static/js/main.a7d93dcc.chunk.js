(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(30)},16:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=(n(16),n(1)),c=n(2),s=n(4),m=n(3),u=n(5),p=n(10),f=(r.a.Component,["#FDFB33","#030200","#292F3D","#6D9EA7","#572005","#DEF2C8","#C5DAC1","#D8AA96","#F7B1AB"]),d=(r.a.Component,function(e){var t=e.url,n=e.header,a=e.text,o=e.index,i=e.xTransform,l=e.yTransform;return r.a.createElement("div",{className:"columns portfolio-item ".concat(i||l?"in-motion":""),style:{transform:"translate(".concat(i,"px, ").concat(l,"px)")}},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:"#modal-0".concat(o),title:!0},r.a.createElement("img",{alt:"",src:t}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,n),r.a.createElement("p",null,a))),r.a.createElement("div",{className:"link-icon"},r.a.createElement("i",{className:"icon-plus"})))))}),g=function(e){return Math.floor((e+1)/4*v)%v},h=function(e){var t=.1*y;return e>3&&(t=.6*y),t},v=1020,y=600,b=[{header:"BGRoll",text:"Statistics/Die Roll Log",url:"images/portfolio/bgroll.png",key:"b"},{header:"CLICC",text:"Chemical Database/Analysis",url:"images/portfolio/clicc.png",key:"c"},{header:"Vivibot",text:"FB ChatBot & CMS",url:"images/portfolio/vivi.png",key:"f"},{header:"Guidings",text:"Map/Video-based Recommendation Finder",url:"images/portfolio/guidings.png",key:"g"},{header:"Climbz",text:"Climbing Gym Management and User App",url:"images/portfolio/climbz.png",key:"cl"},{header:"Grio",text:"Grio Homepage",url:"images/portfolio/grio.png",key:"gr"},{header:"Freedirt",text:"Free Camping Finder",url:"images/portfolio/freedirt.png",key:"fd"},{header:"Getaround",text:"Popular Car Sharing App",url:"images/portfolio/getaround.png",key:"l"}],E=b.map(function(e){return e.key}),k=function(e){var t={};b.forEach(function(e){var n=e.key;return t[n]={i:0,j:0}});for(var n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)e[n][a]&&(t[e[n][a]]={i:n,j:a});return t},C=function(e){var t=e.keys,n={};return t.forEach(function(e,t){n[e]={xTransform:g(t),yTransform:h(t)}}),{elementPos:n}}({keys:E}),w=(r.a.Component,n(6)),x=n(9),j=n.n(x),A=(n(26),function(){var e=r.a.useState(),t=Object(w.a)(e,2),n=t[0],o=t[1],i=r.a.useState(),l=Object(w.a)(i,2),c=l[0],s=l[1],m=Object(a.useCallback)(function(e){e&&!c&&s(e.getInstance())},[]),u=function(){if(n){c.crop(c.getCropzoneRect()),c.deactivateAll(),c.stopDrawingMode(),o(!1);var e=document.getElementsByClassName("tie-btn-crop");e&&e[0]&&e[0].click()}};return r.a.useEffect(function(){return n&&window.addEventListener("mouseup",u),function(){return window.removeEventListener("mouseup",u)}},[n]),c&&c.on("objectActivated",function(e){"cropzone"===e.type&&o(!0)}),r.a.createElement("div",{style:{height:"100vh",paddingTop:"160px"}},r.a.createElement(j.a,{style:{position:"relative"},ref:m,includeUI:{loadImage:{name:"Floor Plan"},menu:["crop","flip","rotate"],menuBarPosition:"bottom"},usageStatistics:!1}))}),F=(n(28),{me:{first:"Philip",firstshort:"Phil",last:"Lauffenburger",email:"lauffenp@gmail.com",role:"Full Stack Contracting Developer",imageUrl:"",address:"Hormayrstra\xdfe 19, Top 11",address2:"Innsbruck AT, 6020",phone:"+1-719-679-7516"},imagebaseurl:"https://lauffenp.github.io/"}),B=[r.a.createElement(A,{key:"image-editor"})],D=(Object(p.a)({},F),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=B.map(function(e){return r.a.cloneElement(e,F)});return r.a.createElement("div",{className:"App"},e)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.a7d93dcc.chunk.js.map