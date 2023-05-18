(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{88:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(23),o=n.n(c),i=n(20),s=n(10),u=n(54),l=n(13),b=n(14),j=n(22),d=n(55),p=n.n(d),x=n(7),O=n(11),f=n(18),h=n.n(f);h.a.defaults.baseURL="https://connections-api.herokuapp.com";var m,g,v,w,y,C,k,z,S,L,F,I,M,A,E,P,N,U,W,D,V,R,q,B,J,Z,T,H,Y,$,G,K,Q,X,_,ee,te,ne,ae,re,ce,oe,ie,se,ue,le,be,je,de,pe,xe=function(e){h.a.defaults.headers.common.Authorization="Bearer ".concat(e)},Oe=function(){h.a.defaults.headers.common.Authorization=""},fe=Object(b.b)("auth/register",function(){var e=Object(O.a)(Object(x.a)().mark((function e(t){var n,a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/signup",t);case 3:return n=e.sent,a=n.data,xe(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),he=Object(b.b)("auth/login",function(){var e=Object(O.a)(Object(x.a)().mark((function e(t){var n,a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/login",t);case 3:return n=e.sent,a=n.data,xe(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),me=Object(b.b)("auth/logout",Object(O.a)(Object(x.a)().mark((function e(){return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/logout");case 3:Oe(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))),ge=Object(b.b)("auth/refresh",function(){var e=Object(O.a)(Object(x.a)().mark((function e(t,n){var a,r,c,o;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),null!==(r=a.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return xe(r),e.prev=5,e.next=8,h.a.get("/users/current");case 8:return c=e.sent,o=c.data,e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),ve={register:fe,login:he,logout:me,fetchCurrentUser:ge},we=n(9),ye=Object(b.c)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(m={},Object(we.a)(m,ve.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(we.a)(m,ve.login.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(we.a)(m,ve.logout.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(we.a)(m,ve.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0})),m)}).reducer,Ce={getLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name}},ke=Object(b.b)("/contacts/fetchContacts",function(){var e=Object(O.a)(Object(x.a)().mark((function e(t,n){var a,r,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,h.a.get("/contacts");case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),ze=Object(b.b)("/contacts/addContact",function(){var e=Object(O.a)(Object(x.a)().mark((function e(t,n){var a,r,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,h.a.post("/contacts",t);case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),Se=Object(b.b)("/contacts/deleteContact",function(){var e=Object(O.a)(Object(x.a)().mark((function e(t,n){var a,r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,h.a.delete("/contacts/".concat(t));case 4:return r=e.sent,r.status,e.abrupt("return",t);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),Le=Object(b.b)("/contacts/updateContact",function(){var e=Object(O.a)(Object(x.a)().mark((function e(t,n){var a,r,c,o,i,s;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,r=t.name,c=t.number,o=n.rejectWithValue,e.prev=2,e.next=5,h.a.patch("/contacts/".concat(a),{name:r,number:c});case 5:return i=e.sent,s=i.data,e.abrupt("return",s);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",o(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()),Fe={fetchContacts:ke,addContact:ze,deleteContact:Se,updateContact:Le},Ie=Object(b.c)({name:"contacts",initialState:{items:[],filter:"",isLoading:!1,error:null,showModal:!1,editContact:{}},reducers:{updateFilter:function(e,t){e.filter=t.payload},openModal:function(e,t){e.showModal=!0,e.editContact=e.items.filter((function(e){return e.id===t.payload}))},closeModal:function(e,t){e.showModal=!1}},extraReducers:(g={},Object(we.a)(g,Fe.fetchContacts.fulfilled,(function(e,t){e.items=t.payload})),Object(we.a)(g,Fe.addContact.fulfilled,(function(e,t){e.items.push(t.payload)})),Object(we.a)(g,Fe.deleteContact.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))})),Object(we.a)(g,Fe.updateContact.fulfilled,(function(e,t){e.items=e.items.map((function(e){return e.id===t.payload.id?t.payload:e}))})),g)}),Me=Ie.actions,Ae=Me.updateFilter,Ee=Me.openModal,Pe=Me.closeModal,Ne=Ie.reducer,Ue=Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),We={key:"auth",storage:p.a,whitelist:["token"]},De=Object(b.a)({reducer:{auth:Object(j.g)(We,ye),contacts:Ne},middleware:Ue,devTools:!1}),Ve=Object(j.h)(De),Re=(n(88),n(89),n(90),n(4)),qe=n(59),Be=n(5),Je=n(6),Ze=Je.a.div(v||(v=Object(Be.a)(["\n  margin: auto;\n  padding: 25px 20px;\n  border-radius: 10px;\n"]))),Te=n(2),He=function(e){var t=e.children;return Object(Te.jsx)(Ze,{children:t})},Ye=Je.a.nav(w||(w=Object(Be.a)(["\n  padding: 5, 0;\n"]))),$e=Je.a.ul(y||(y=Object(Be.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  font-size: 25px;\n"]))),Ge=Je.a.li(C||(C=Object(Be.a)(["\n  margin-right: 0px;\n  margin-bottom: 10px;\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),Ke=Object(Je.a)(i.c)(k||(k=Object(Be.a)(["\n  text-decoration: none;\n  color: #fff;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),Qe=function(){return Object(Te.jsx)(Ye,{children:Object(Te.jsxs)($e,{children:[Object(Te.jsx)(Ge,{children:Object(Te.jsx)(Ke,{to:"/logIn",children:"Log in"})}),Object(Te.jsx)(Ge,{children:Object(Te.jsx)(Ke,{to:"/register",children:"Register"})})]})})},Xe=Je.a.nav(z||(z=Object(Be.a)(["\n  padding: 5, 0;\n"]))),_e=Je.a.ul(S||(S=Object(Be.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  font-size: 25px;\n"]))),et=Je.a.li(L||(L=Object(Be.a)(["\n  margin-right: 0px;\n  margin-bottom: 10px;\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),tt=Object(Je.a)(i.c)(F||(F=Object(Be.a)(["\n  text-decoration: none;\n  color: #fff;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),nt=function(){return Object(Te.jsx)(Xe,{children:Object(Te.jsxs)(_e,{children:[Object(Te.jsx)(et,{children:Object(Te.jsx)(tt,{to:"/",children:"Home"})}),Object(Te.jsx)(et,{children:Object(Te.jsx)(tt,{to:"/contacts",children:"Contacts"})})]})})},at=n(40),rt=Je.a.div(I||(I=Object(Be.a)(["\n  display: flex;\n"]))),ct=Je.a.span(M||(M=Object(Be.a)(["\n  font-size: 25px;\n  margin-right: 20px;\n"]))),ot=Je.a.button(A||(A=Object(Be.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 5px 5px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 5px;\n  border: 1px solid #6b6b6b;\n  background: rgba(255, 255, 255, 0.4);\n  color: white;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),it=Object(Je.a)(at.b)(E||(E=Object(Be.a)(["\n  margin-left: 10px;\n"]))),st=function(){var e=Object(s.b)(),t=Object(s.c)(Ce.getUserName),n=Object(l.a)("\ud83d\ude0a\ud83d\ude43\ud83e\udd2a\ud83e\udd13\ud83e\udd2f\ud83d\ude34\ud83d\udca9\ud83d\udc7b\ud83d\udc7d\ud83e\udd16\ud83d\udc7e\ud83d\udc50\ud83d\udd96\u270c\ufe0f\ud83e\udd1f\ud83e\udd18\ud83e\udd19\ud83d\udc4b\ud83d\udc2d\ud83e\udd95\ud83e\udd96\ud83d\udc09");return Object(Te.jsxs)(rt,{children:[Object(Te.jsxs)(ct,{children:["Welcome, ",t," ",Object(Te.jsx)("span",{role:"img","aria-label":"hello",children:Object(l.a)(n)[Math.floor(Math.random()*n.length)]})]}),Object(Te.jsxs)(ot,{type:"button",onClick:function(){e(ve.logout())},children:["Log out",Object(Te.jsx)(it,{})]})]})},ut=Je.a.div(P||(P=Object(Be.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),lt=function(){var e=Object(s.c)(Ce.getLoggedIn);return Object(Te.jsxs)(ut,{children:[Object(Te.jsx)(nt,{}),e?Object(Te.jsx)(st,{}):Object(Te.jsx)(Qe,{})]})},bt=Je.a.h1(N||(N=Object(Be.a)(["\n  text-align: center;\n  margin: 200px auto;\n  font-size: 45px;\n"]))),jt=function(){return Object(Te.jsx)(bt,{children:"Your contacts in one place"})},dt=n(8),pt=Je.a.form(U||(U=Object(Be.a)(["\n  width: 400px;\n  margin: 100px 0;\n  margin-bottom: 15px;\n"]))),xt=Je.a.label(W||(W=Object(Be.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 18px;\n"]))),Ot=Je.a.input(D||(D=Object(Be.a)(["\n  margin-top: 10px;\n  border-radius: 5px;\n"]))),ft=Je.a.button(V||(V=Object(Be.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 5px 5px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 5px;\n  border: 1px solid #6b6b6b;\n  background: rgba(255, 255, 255, 0.4);\n  color: white;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),ht=Object(Je.a)(at.a)(R||(R=Object(Be.a)(["\n  margin-left: 10px;\n"]))),mt=Je.a.p(q||(q=Object(Be.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]))),gt=Object(Je.a)(i.b)(B||(B=Object(Be.a)(["\n  text-decoration: none;\n  color: #e6e5be;\n  &:active,\n  &:hover {\n    color: #807808;\n  }\n"]))),vt=function(){var e=Object(s.b)(),t=Object(a.useState)(""),n=Object(dt.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),i=Object(dt.a)(o,2),u=i[0],l=i[1],b=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":return c(a);case"password":return l(a);default:return}};return Object(Te.jsxs)("div",{children:[Object(Te.jsxs)(pt,{onSubmit:function(t){t.preventDefault(),e(ve.login({email:r,password:u})),c(""),l("")},autoComplete:"off",children:[Object(Te.jsxs)(xt,{htmlFor:"login",children:["E-mail",Object(Te.jsx)(Ot,{type:"email",name:"email",value:r,onChange:b})]}),Object(Te.jsxs)(xt,{htmlFor:"password",children:["Password",Object(Te.jsx)(Ot,{type:"password",name:"password",value:u,onChange:b})]}),Object(Te.jsxs)(ft,{type:"submit",children:["Log In",Object(Te.jsx)(ht,{})]})]}),Object(Te.jsxs)(mt,{children:["If you don`t have an account, please"," ",Object(Te.jsx)(gt,{to:"/register",children:"register"}),"!"]})]})},wt=Je.a.div(J||(J=Object(Be.a)(["\n  display: flex;\n  justify-content: center;\n"]))),yt=function(){return Object(Te.jsx)(wt,{children:Object(Te.jsx)(vt,{})})},Ct=function(){var e=Object(s.b)(),t=Object(a.useState)(""),n=Object(dt.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),i=Object(dt.a)(o,2),u=i[0],l=i[1],b=Object(a.useState)(""),j=Object(dt.a)(b,2),d=j[0],p=j[1],x=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return c(a);case"email":return l(a);case"password":return p(a);default:return}};return Object(Te.jsxs)(pt,{onSubmit:function(t){t.preventDefault(),e(ve.register({name:r,email:u,password:d})),c(""),l(""),p("")},autoComplete:"off",children:[Object(Te.jsxs)(xt,{htmlFor:"name",children:["Name",Object(Te.jsx)(Ot,{type:"text",name:"name",value:r,onChange:x})]}),Object(Te.jsxs)(xt,{htmlFor:"login",children:["Email",Object(Te.jsx)(Ot,{type:"email",name:"email",value:u,onChange:x})]}),Object(Te.jsxs)(xt,{htmlFor:"password",children:["Password",Object(Te.jsx)(Ot,{type:"password",name:"password",value:d,onChange:x})]}),Object(Te.jsxs)(ft,{type:"submit",children:["Sign up",Object(Te.jsx)(ht,{})]})]})},kt=Je.a.div(Z||(Z=Object(Be.a)(["\n  display: flex;\n  justify-content: center;\n"]))),zt=function(){return Object(Te.jsx)(kt,{children:Object(Te.jsx)(Ct,{})})},St=Je.a.div(T||(T=Object(Be.a)(["\n  display: block;\n  max-width: 100%;\n  height: 400px;\n  max-height: 100%;\n  position: fixed;\n  z-index: 100;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]))),Lt=Je.a.div(H||(H=Object(Be.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 50;\n\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),Ft=Je.a.form(Y||(Y=Object(Be.a)(["\n  width: 400px;\n  margin: 100px 0;\n  margin-bottom: 15px;\n"]))),It=Je.a.label($||($=Object(Be.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 18px;\n"]))),Mt=Je.a.input(G||(G=Object(Be.a)(["\n  margin-top: 10px;\n  border-radius: 5px;\n"]))),At=Je.a.button(K||(K=Object(Be.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 5px 5px;\n  margin-left: auto;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  border: 1px solid #6b6b6b;\n  background: rgba(127, 218, 0, 0.4);\n  color: white;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),Et=Je.a.button(Q||(Q=Object(Be.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 5px 5px;\n  margin-left: auto;\n  border-radius: 5px;\n  border: 1px solid #6b6b6b;\n  background: rgba(255, 69, 0, 0.4);\n  color: white;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),Pt=document.querySelector("#modal-root"),Nt=function(){var e=Object(a.useState)(""),t=Object(dt.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(dt.a)(o,2),u=i[0],l=i[1],b=Object(a.useState)(""),j=Object(dt.a)(b,2),d=j[0],p=j[1],x=Object(s.b)(),O=Object(s.c)((function(e){return e.contacts.editContact}));Object(a.useEffect)((function(){r(O[0].id),l(O[0].name),p(O[0].number)}),[O]);var f=function(e){switch(e.target.name){case"name":l(e.target.value);break;case"number":p(e.target.value);break;default:return}},h=function(e){e.preventDefault(),x(Fe.updateContact({id:n,name:u,number:d})),x(Pe({}))};return Object(c.createPortal)(Object(Te.jsx)(Lt,{children:Object(Te.jsx)(St,{children:Object(Te.jsxs)(Ft,{onSubmit:h,children:[Object(Te.jsxs)(It,{htmlFor:"",children:[" ","Name",Object(Te.jsx)(Mt,{type:"text",name:"name",value:u,onChange:f})]}),Object(Te.jsxs)(It,{htmlFor:"",children:[" ","Number",Object(Te.jsx)(Mt,{type:"text",name:"number",value:d,onChange:f})]}),Object(Te.jsx)(At,{type:"submit",onClick:h,children:"Save edit contact"}),Object(Te.jsx)(Et,{type:"submit",onClick:function(){return x(Pe({}))},children:"Exit"})]})})}),Pt)},Ut=Je.a.div(X||(X=Object(Be.a)(["\n  width: 400px;\n  margin-bottom: 15px;\n"]))),Wt=Je.a.label(_||(_=Object(Be.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 18px;\n"]))),Dt=Je.a.input(ee||(ee=Object(Be.a)(["\n  margin-top: 10px;\n  border-radius: 5px;\n"]))),Vt=function(){var e=Object(s.b)();return Object(Te.jsx)(Ut,{children:Object(Te.jsxs)(Wt,{children:["Find your contact",Object(Te.jsx)(Dt,{type:"search",name:"filter",onChange:function(t){e(Ae(t.currentTarget.value))},autoComplete:"off"})]})})},Rt=n(56),qt=n(57),Bt=Je.a.ul(te||(te=Object(Be.a)(["\n  margin: 0 auto;\n  width: auto;\n"]))),Jt=Je.a.li(ne||(ne=Object(Be.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),Zt=Je.a.span(ae||(ae=Object(Be.a)(["\n  width: 250px;\n"]))),Tt=Je.a.button(re||(re=Object(Be.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 5px 5px;\n  margin-left: auto;\n  margin-right: 10px;\n  border-radius: 5px;\n  border: 1px solid #6b6b6b;\n  background: rgba(255, 234, 106, 0.4);\n  color: white;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),Ht=(Je.a.p(ce||(ce=Object(Be.a)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),Object(Je.a)(Rt.a)(oe||(oe=Object(Be.a)(["\n  margin-left: 10px;\n"])))),Yt=Je.a.button(ie||(ie=Object(Be.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 5px 5px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 5px;\n  border: 1px solid #6b6b6b;\n  background: rgba(255, 69, 0, 0.4);\n  color: white;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),$t=Object(Je.a)(qt.a)(se||(se=Object(Be.a)(["\n  margin-left: 10px;\n"]))),Gt=function(){var e=Object(s.c)((function(e){return e.contacts.items})),t=Object(s.c)((function(e){return e.contacts.filter})),n=Object(s.b)(),a=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(Te.jsx)(Te.Fragment,{children:0===a.length?Object(Te.jsx)("p",{children:"Oops, there is no such contact in your phone!"}):Object(Te.jsx)(Bt,{children:a.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(Te.jsxs)(Jt,{children:[Object(Te.jsxs)(Zt,{children:[a,": ",r," "]}),Object(Te.jsxs)(Tt,{type:"submit",onClick:function(){return n(Ee(t))},children:["Edit",Object(Te.jsx)(Ht,{})]}),Object(Te.jsxs)(Yt,{type:"button",onClick:function(){return n(Fe.deleteContact(t))},children:["Delete",Object(Te.jsx)($t,{})]})]},t)}))})})},Kt=Je.a.div(ue||(ue=Object(Be.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Qt=n(58),Xt=Je.a.form(le||(le=Object(Be.a)(["\n  width: 400px;\n  margin: 100px 0;\n  margin-bottom: 15px;\n"]))),_t=Je.a.label(be||(be=Object(Be.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  font-size: 18px;\n"]))),en=Je.a.input(je||(je=Object(Be.a)(["\n  margin-top: 10px;\n  border-radius: 5px;\n"]))),tn=Je.a.button(de||(de=Object(Be.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 5px 5px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 5px;\n  border: 1px solid #6b6b6b;\n  background: rgba(255, 255, 255, 0.4);\n  color: white;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    color: #e6e5be;\n  }\n"]))),nn=Object(Je.a)(Qt.a)(pe||(pe=Object(Be.a)(["\n  margin-left: 10px;\n"]))),an=function(){var e=Object(a.useState)(""),t=Object(dt.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(dt.a)(c,2),i=o[0],u=o[1],l=Object(s.b)(),b=Object(s.c)((function(e){return e.contacts.items})),j=Object(s.c)((function(e){return e.auth.user}));Object(a.useEffect)((function(){j.email&&l(Fe.fetchContacts())}),[l,j]);var d=function(e){switch(e.target.name){case"name":r(e.target.value);break;case"number":u(e.target.value);break;default:return}};return Object(Te.jsxs)(Xt,{onSubmit:function(e){if(e.preventDefault(),b.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in contacts."));l(Fe.addContact({name:n,number:i})),r(""),u("")},autoComplete:"off",children:[Object(Te.jsxs)(_t,{htmlFor:"name",children:["Name",Object(Te.jsx)(en,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:d})]}),Object(Te.jsxs)(_t,{htmlFor:"password",children:["Phone number",Object(Te.jsx)(en,{type:"text\t",name:"number",required:!0,value:i,onChange:d})]}),Object(Te.jsxs)(tn,{type:"submit",children:["Add to contact",Object(Te.jsx)(nn,{})]})]})},rn=function(){var e=Object(s.c)((function(e){return e.contacts.showModal}));return Object(Te.jsxs)(Kt,{children:[Object(Te.jsx)(an,{}),Object(Te.jsx)(Vt,{}),Object(Te.jsx)(Gt,{}),e&&Object(Te.jsx)(Nt,{})]})},cn=function(e){var t=e.children,n=e.redirectPath,a=void 0===n?"/":n;return Object(s.c)((function(e){return e.auth.isLoggedIn}))?Object(Te.jsx)(Te.Fragment,{children:t}):Object(Te.jsx)(Re.a,{to:a,replace:!0})},on=function(e){var t=e.children,n=e.redirectPath,a=void 0===n?"/":n,r=e.restricted,c=void 0!==r&&r;return Object(s.c)((function(e){return e.auth.isLoggedIn}))&&c?Object(Te.jsx)(Re.a,{to:a,replace:!0}):t},sn=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){e(ve.fetchCurrentUser())}),[e]),Object(Te.jsx)(Te.Fragment,{children:Object(Te.jsxs)(He,{children:[Object(Te.jsx)(lt,{}),Object(Te.jsx)(a.Suspense,{fallback:Object(Te.jsx)("div",{children:"Loading..."}),children:Object(Te.jsxs)(Re.d,{children:[Object(Te.jsx)(Re.b,{path:"/",element:Object(Te.jsx)(jt,{})}),Object(Te.jsx)(Re.b,{path:"logIn",element:Object(Te.jsx)(on,{redirectPath:"/contacts",restricted:!0,children:Object(Te.jsx)(yt,{})})}),Object(Te.jsx)(Re.b,{path:"register",element:Object(Te.jsx)(on,{restricted:!0,children:Object(Te.jsx)(zt,{})})}),Object(Te.jsx)(Re.b,{path:"contacts",element:Object(Te.jsx)(cn,{redirectPath:"/login",children:Object(Te.jsx)(rn,{})})})]})}),Object(Te.jsx)(qe.a,{})]})})};o.a.render(Object(Te.jsx)(r.a.StrictMode,{children:Object(Te.jsx)(i.a,{children:Object(Te.jsx)(s.a,{store:De,children:Object(Te.jsx)(u.a,{loading:null,persistor:Ve,children:Object(Te.jsx)(sn,{})})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.9c89901f.chunk.js.map