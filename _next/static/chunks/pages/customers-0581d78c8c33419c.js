(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{6086:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers",function(){return t(41808)}])},84747:function(e,a,t){"use strict";t.d(a,{U:function(){return n}});var r=t(85893),n=(0,t(82066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},97169:function(e,a,t){"use strict";t.d(a,{o:function(){return n}});var r=t(85893),n=(0,t(82066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search")},2248:function(e,a,t){"use strict";t.d(a,{g:function(){return n}});var r=t(85893),n=(0,t(82066).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")},41808:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return H}});var r=t(85893),n=t(9008),s=t.n(n),i=t(87357),c=t(53156),l=t(26042),d=t(69396),o=t(99534),h=t(67294),u=t(51964),m=t.n(u),x=t(45697),v=t.n(x),g=t(32912),p=t(66242),j=t(7906),Z=t(53184),f=t(53816),y=t(53252),w=t(69368),A=t(295),S=t(69661),U=t(15861),_=t(4570),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")},k=function(e){var a=e.customers,t=(0,o.Z)(e,["customers"]),n=(0,h.useState)([]),s=n[0],c=n[1],u=(0,h.useState)(10),x=u[0],v=u[1],k=(0,h.useState)(0),C=k[0],R=k[1];return(0,r.jsxs)(p.Z,(0,d.Z)((0,l.Z)({},t),{children:[(0,r.jsx)(m(),{children:(0,r.jsx)(i.Z,{sx:{minWidth:1050},children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(Z.Z,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(y.Z,{padding:"checkbox",children:(0,r.jsx)(w.Z,{checked:s.length===a.length,color:"primary",indeterminate:s.length>0&&s.length<a.length,onChange:function(e){var t;t=e.target.checked?a.map((function(e){return e.id})):[],c(t)}})}),(0,r.jsx)(y.Z,{children:"Network Contract Manager"}),(0,r.jsx)(y.Z,{children:"Email"}),(0,r.jsx)(y.Z,{children:"Location"}),(0,r.jsx)(y.Z,{children:"Phone"}),(0,r.jsx)(y.Z,{children:"Date"})]})}),(0,r.jsx)(A.Z,{children:a.slice(0,x).map((function(e){return(0,r.jsxs)(f.Z,{hover:!0,selected:-1!==s.indexOf(e.id),children:[(0,r.jsx)(y.Z,{padding:"checkbox",children:(0,r.jsx)(w.Z,{checked:-1!==s.indexOf(e.id),onChange:function(a){return function(e,a){var t=s.indexOf(a),r=[];-1===t?r=r.concat(s,a):0===t?r=r.concat(s.slice(1)):t===s.length-1?r=r.concat(s.slice(0,-1)):t>0&&(r=r.concat(s.slice(0,t),s.slice(t+1))),c(r)}(0,e.id)},value:"true"})}),(0,r.jsx)(y.Z,{children:(0,r.jsxs)(i.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,r.jsx)(S.Z,{src:e.avatarUrl,sx:{mr:2},children:P(e.name)}),(0,r.jsx)(U.Z,{color:"textPrimary",variant:"body1",children:e.name})]})}),(0,r.jsx)(y.Z,{children:e.email}),(0,r.jsx)(y.Z,{children:"".concat(e.address.city,", ").concat(e.address.state,", ").concat(e.address.country)}),(0,r.jsx)(y.Z,{children:e.phone}),(0,r.jsx)(y.Z,{children:(0,g.Z)(e.createdAt,"dd/MM/yyyy")})]},e.id)}))})]})})}),(0,r.jsx)(_.Z,{component:"div",count:a.length,onPageChange:function(e,a){R(a)},onRowsPerPageChange:function(e){v(e.target.value)},page:C,rowsPerPage:x,rowsPerPageOptions:[5,10,25]})]}))};k.propTypes={customers:v().array.isRequired};var C=t(83321),R=t(44267),b=t(61903),L=t(87109),N=t(53219),z=t(97169),M=t(2248),D=t(84747),E=function(e){return(0,r.jsxs)(i.Z,(0,d.Z)((0,l.Z)({},e),{children:[(0,r.jsxs)(i.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:[(0,r.jsx)(U.Z,{sx:{m:1},variant:"h4",children:"Network Strategic Planners"}),(0,r.jsxs)(i.Z,{sx:{m:1},children:[(0,r.jsx)(C.Z,{startIcon:(0,r.jsx)(M.g,{fontSize:"small"}),sx:{mr:1},children:"Import"}),(0,r.jsx)(C.Z,{startIcon:(0,r.jsx)(D.U,{fontSize:"small"}),sx:{mr:1},children:"Export"}),(0,r.jsx)("a",{href:"https://jl34.github.io/nsp/404",passHref:!0,children:(0,r.jsx)(C.Z,{color:"primary",variant:"contained",children:"Add NSP"})})]})]}),(0,r.jsx)(i.Z,{sx:{mt:3},children:(0,r.jsx)(p.Z,{children:(0,r.jsx)(R.Z,{children:(0,r.jsx)(i.Z,{sx:{maxWidth:500},children:(0,r.jsx)(b.Z,{fullWidth:!0,InputProps:{startAdornment:(0,r.jsx)(L.Z,{position:"start",children:(0,r.jsx)(N.Z,{color:"action",fontSize:"small",children:(0,r.jsx)(z.o,{})})})},placeholder:"Search NSP",variant:"outlined"})})})})})]}))},W=t(46447),B=t(25934),I=[{id:(0,B.Z)(),address:{country:"USA",state:"West Virginia",city:"Parkersburg",street:"2849 Fulton Street"},avatarUrl:"/static/images/avatars/avatar_3.png",createdAt:15550164e5,email:"dummy@uhc.com",name:"Jennifer Luu",phone:"304-428-3097"},{id:(0,B.Z)(),address:{country:"USA",state:"Bristow",city:"Iowa",street:"1865  Pleasant Hill Road"},avatarUrl:"/static/images/avatars/avatar_4.png",createdAt:15550164e5,email:"dummy2@uhc.com",name:"George Washington",phone:"712-351-5711"},{id:(0,B.Z)(),address:{country:"USA",state:"Georgia",city:"Atlanta",street:"4894  Lakeland Park Drive"},avatarUrl:"/static/images/avatars/avatar_2.png",createdAt:15550164e5,email:"dummy3@uhc.com",name:"Alex Richardson",phone:"770-635-2682"},{id:(0,B.Z)(),address:{country:"USA",state:"Ohio",city:"Dover",street:"4158  Hedge Street"},avatarUrl:"/static/images/avatars/avatar_5.png",createdAt:155493e7,email:"dummy4@uhc.com",name:"John Smith",phone:"908-691-3242"},{id:(0,B.Z)(),address:{country:"USA",state:"Texas",city:"Dallas",street:"75247"},avatarUrl:"/static/images/avatars/avatar_6.png",createdAt:15547572e5,email:"dummy5@uhc.com",name:"Clarke Gilbert",phone:"972-333-4106"},{id:(0,B.Z)(),address:{country:"USA",state:"California",city:"Los Angeles",street:"317 Angus Road"},avatarUrl:"/static/images/avatars/avatar_1.png",createdAt:15546708e5,email:"dummy6@uhc.com",name:"Adam Eve",phone:"858-602-3409"},{id:(0,B.Z)(),address:{country:"USA",state:"California",city:"Redondo Beach",street:"2188  Armbrester Drive"},avatarUrl:"/static/images/avatars/avatar_7.png",createdAt:15543252e5,email:"dummy7@uhc.com",name:"Steve Jobs",phone:"415-907-2647"},{id:(0,B.Z)(),address:{country:"USA",state:"Nevada",city:"Las Vegas",street:"1798  Hickory Ridge Drive"},avatarUrl:"/static/images/avatars/avatar_8.png",createdAt:15230484e5,email:"dummy8@uhc.com",name:"Bill Gates",phone:"702-661-1654"},{id:(0,B.Z)(),address:{country:"USA",state:"Michigan",city:"Detroit",street:"3934  Wildrose Lane"},avatarUrl:"/static/images/avatars/avatar_9.png",createdAt:15547028e5,email:"dummy9@uhc.com",name:"Nancy Pelosi",phone:"313-812-8947"},{id:(0,B.Z)(),address:{country:"USA",state:"Utah",city:"Salt Lake City",street:"368 Lamberts Branch Road"},avatarUrl:"/static/images/avatars/avatar_10.png",createdAt:15227028e5,email:"dummy10@uhc.com",name:"Angelina Jolie",phone:"801-301-7894"}],O=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"Network Strategic Planners"})}),(0,r.jsx)(i.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsxs)(c.Z,{maxWidth:!1,children:[(0,r.jsx)(E,{}),(0,r.jsx)(i.Z,{sx:{mt:3},children:(0,r.jsx)(k,{customers:I})})]})})]})};O.getLayout=function(e){return(0,r.jsx)(W.c,{children:e})};var H=O}},function(e){e.O(0,[326,180,903,325,22,118,26,447,774,888,179],(function(){return a=6086,e(e.s=a);var a}));var a=e.O();_N_E=a}]);