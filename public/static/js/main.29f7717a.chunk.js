(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),s=(n(70),n(9)),o=n(26),i=n(63),l=n(5),u="[ui] Open modal",j="[ui] Close modal",d="[event] Set active",b="[event] Clean active event",p="[event] Event added",m="[event] Clear active event",O="[event] Event updated",f="[event] Event deleted",h="[event] Events loaded",v="[auth] Finish checking login state",x="[auth] Login",g="[auth] Start register",N="[auth] Logout",y={modalOpen:!1},k=n(53),w={events:[],activeEvent:null},E={checking:!0},C=Object(o.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case p:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(k.a)(e.events),[t.payload])});case m:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case O:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(l.a)(Object(l.a)({},e),{},{events:Object(k.a)(t.payload)});case b:return Object(l.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:case g:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case v:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case N:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,T=Object(o.d)(C,S(Object(o.a)(i.a))),D=n(22),I=n(10),A=n(37),_=n(2),F=["isAuthenticated","component"],P=function(e){var t=e.isAuthenticated,n=e.component,a=Object(A.a)(e,F);return Object(_.jsx)(I.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(_.jsx)(I.a,{to:"/"}):Object(_.jsx)(n,Object(l.a)({},e))}}))},L=["isAuthenticated","component"],G=function(e){var t=e.isAuthenticated,n=e.component,a=Object(A.a)(e,L);return Object(_.jsx)(I.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(_.jsx)(n,Object(l.a)({},e)):Object(_.jsx)(I.a,{to:"/login"})}}))},R=n(12),H=n.n(R),J=n(21),M=n(17),V=n.n(M),B="https://node-mern-calendar.herokuapp.com/api",U=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(B,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},X=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(B,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},q=n(18),z=n.n(q),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:z()(e.end).toDate(),start:z()(e.start).toDate()})}))},K=function(e){return{type:p,payload:e}},Q=function(){return{type:m}},W=function(e){return{type:O,payload:e}},Z=function(){return{type:f}},$=function(e){return{type:h,payload:e}},ee=function(e){return{type:x,payload:e}},te=function(){return{type:v}},ne=function(){return function(e){localStorage.clear(),e({type:b}),e(ae())}},ae=function(){return{type:N}},ce=n(16),re=(n(88),n(25)),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(ce.a)(t,2),c=n[0],r=n[1],s=function(){r(e)},o=function(e){var t=e.target;r(Object(l.a)(Object(l.a)({},c),{},Object(re.a)({},t.name,t.value)))};return[c,o,s]},oe=function(){var e=Object(s.b)(),t=se({email:"",password:""}),n=Object(ce.a)(t,2),a=n[0],c=n[1],r=a.email,o=a.password;return Object(_.jsx)("div",{className:"login-container",children:Object(_.jsx)("div",{className:"col-md-6 col-lg-3",children:Object(_.jsxs)("div",{className:"card card-login",children:[Object(_.jsx)("div",{className:"card-header bg-white",children:Object(_.jsx)("h3",{className:"text-center mb-0",children:"Iniciar sesi\xf3n"})}),Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(){var n=Object(J.a)(H.a.mark((function n(a){var c,r;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U("auth",{email:e,password:t},"POST");case 2:return c=n.sent,n.next=5,c.json();case 5:(r=n.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),a(ee({uid:r.uid,name:r.name}))):V.a.fire({icon:"error",title:"Error de autenticaci\xf3n",text:r.message});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(r,o))},children:[Object(_.jsxs)("div",{className:"input-group mb-2",children:[Object(_.jsx)("div",{className:"input-group-prepend",children:Object(_.jsx)("div",{className:"input-group-text",children:Object(_.jsx)("i",{className:"fas fa-envelope"})})}),Object(_.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"nombre@gmail.com",onChange:c})]}),Object(_.jsxs)("div",{className:"input-group mb-2",children:[Object(_.jsx)("div",{className:"input-group-prepend",children:Object(_.jsx)("div",{className:"input-group-text",children:Object(_.jsx)("i",{className:"fas fa-lock"})})}),Object(_.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Contrase\xf1a",onChange:c})]}),Object(_.jsx)("div",{className:"form-group",children:Object(_.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-3",children:"Iniciar sesi\xf3n"})})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{className:"mr-2",children:"\xbfNo tienes cuenta?"}),Object(_.jsx)(D.b,{to:"/register",children:"Crear cuenta"})]})]})]})})})},ie=function(){var e=Object(s.b)(),t=se({name:"",email:"",password1:"",password2:""}),n=Object(ce.a)(t,2),a=n[0],c=n[1],r=a.name,o=a.email,i=a.password1,l=a.password2;return Object(_.jsx)("div",{className:"register-container",children:Object(_.jsx)("div",{className:"col-md-6 col-lg-3",children:Object(_.jsxs)("div",{className:"card card-register mb-3",children:[Object(_.jsx)("div",{className:"card-header bg-white",children:Object(_.jsx)("h3",{className:"text-center mb-0",children:"Crea tu cuenta"})}),Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),i!==l)return V.a.fire({icon:"info",title:"Advertencia",text:"Las contrase\xf1as deben de ser iguales"});e(function(e,t,n){return function(){var a=Object(J.a)(H.a.mark((function a(c){var r,s;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U("auth/register",{name:e,email:t,password:n},"POST");case 2:return r=a.sent,a.next=5,r.json();case 5:(s=a.sent).ok?(localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),c(ee({uid:s.uid,name:s.name}))):V.a.fire({icon:"error",title:"Error de autenticaci\xf3n",text:s.message});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(r,o,i))},children:[Object(_.jsxs)("div",{className:"input-group mb-2",children:[Object(_.jsx)("div",{className:"input-group-prepend",children:Object(_.jsx)("div",{className:"input-group-text",children:Object(_.jsx)("i",{className:"fas fa-user"})})}),Object(_.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Nombre",onChange:c})]}),Object(_.jsxs)("div",{className:"input-group mb-2",children:[Object(_.jsx)("div",{className:"input-group-prepend",children:Object(_.jsx)("div",{className:"input-group-text",children:Object(_.jsx)("i",{className:"fas fa-envelope"})})}),Object(_.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"nombre@gmail.com",onChange:c})]}),Object(_.jsxs)("div",{className:"input-group mb-2",children:[Object(_.jsx)("div",{className:"input-group-prepend",children:Object(_.jsx)("div",{className:"input-group-text",children:Object(_.jsx)("i",{class:"fas fa-lock"})})}),Object(_.jsx)("input",{type:"password",name:"password1",className:"form-control",placeholder:"Contrase\xf1a",onChange:c})]}),Object(_.jsxs)("div",{className:"input-group mb-2",children:[Object(_.jsx)("div",{className:"input-group-prepend",children:Object(_.jsx)("div",{className:"input-group-text",children:Object(_.jsx)("i",{class:"fas fa-lock"})})}),Object(_.jsx)("input",{type:"password",name:"password2",className:"form-control",placeholder:"Repita la contrase\xf1a",onChange:c})]}),Object(_.jsx)("div",{className:"form-group",children:Object(_.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-3",children:"Crear cuenta"})})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{className:"mr-2",children:"\xbfYa tienes cuenta?"}),Object(_.jsx)(D.b,{to:"/login",children:"Iniciar sesi\xf3n"})]})]})]})})})},le=n(52),ue={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},je=(n(89),n(90),function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(_.jsxs)("div",{className:"navbar navbar-light bg-light mb-4",children:[Object(_.jsx)("span",{className:"navbar-brand",children:e}),Object(_.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){t(ne())},children:Object(_.jsx)("i",{className:"fas fa-power-off"})})]})}),de=function(e){var t=e.event,n=t.title,a=t.user;return Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{children:n}),Object(_.jsxs)("span",{children:[" - ",a.name]})]})},be=n(49),pe=n.n(be),me=n(50),Oe=n.n(me),fe=function(){return{type:u}},he={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};pe.a.setAppElement("#root");var ve=z()().minutes(0).seconds(0).add(1,"hours"),xe=ve.clone().add(1,"hours"),ge={title:"",notes:"",start:ve.toDate(),end:xe.toDate()},Ne=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).modalOpen,n=Object(s.c)((function(e){return e.calendar})).activeEvent,c=Object(a.useState)(ge),r=Object(ce.a)(c,2),o=r[0],i=r[1],u=o.title,d=o.notes,b=o.start,p=o.end;Object(a.useEffect)((function(){i(n||ge)}),[n,i]);var m=function(e){var t=e.target;i(Object(l.a)(Object(l.a)({},o),{},Object(re.a)({},t.name,t.value)))},O=function(){e({type:j}),e(Q()),i(ge)};return Object(_.jsxs)(pe.a,{isOpen:t,onRequestClose:O,style:he,closeTimeoutMS:300,className:"modal",overlayClassName:"modal-background",children:[Object(_.jsxs)("h2",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(_.jsx)("hr",{}),Object(_.jsxs)("form",{className:"container",onSubmit:function(t){if(t.preventDefault(),0===u.trim().length)return V.a.fire({icon:"info",title:"Advertencia",text:"El t\xedtulo del evento es obligatorio"});var a;e(n?(a=o,function(){var e=Object(J.a)(H.a.mark((function e(t){var n,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).ok?t(W(a)):V.a.fire({icon:"error",title:"Error",text:c.message}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(J.a)(H.a.mark((function t(n,a){var c,r,s,o,i;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,s=c.name,t.prev=1,t.next=4,X("events",e,"POST");case 4:return o=t.sent,t.next=7,o.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:r,name:s},console.log(e),n(K(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(o)),O()},children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{children:"Fecha y hora inicio"}),Object(_.jsx)(Oe.a,{onChange:function(e){i(Object(l.a)(Object(l.a)({},o),{},{start:e}))},value:b,className:"form-control"})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{children:"Fecha y hora fin"}),Object(_.jsx)(Oe.a,{onChange:function(e){i(Object(l.a)(Object(l.a)({},o),{},{end:e}))},value:p,minDate:b,className:"form-control"})]}),Object(_.jsx)("hr",{}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{children:"Titulo y notas"}),Object(_.jsx)("input",{type:"text",className:"form-control",placeholder:"T\xedtulo del evento",autoComplete:"off",name:"title",value:u,onChange:m}),Object(_.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Descripci\xf3n corta"})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:d,onChange:m}),Object(_.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(_.jsx)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:Object(_.jsx)("span",{children:" Guardar"})})]})]})},ye=function(){var e=Object(s.b)();return Object(_.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(fe())},children:Object(_.jsx)("i",{className:"fas fa-plus"})})},ke=function(){var e=Object(s.b)();return Object(_.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(J.a)(H.a.mark((function e(t,n){var a,c,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,X("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(Z()):V.a.fire({icon:"error",title:"Error",text:r.message}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(_.jsx)("i",{className:"fas fa-trash"})})};z.a.locale("es");var we=Object(le.b)(z.a),Ee=function(){var e=Object(s.c)((function(e){return e.calendar})),t=e.events,n=e.activeEvent,c=Object(s.c)((function(e){return e.auth})).uid,r=Object(s.b)(),o=Object(a.useState)(localStorage.getItem("lastview")||"month"),i=Object(ce.a)(o,2),l=i[0],u=i[1];Object(a.useEffect)((function(){r(function(){var e=Object(J.a)(H.a.mark((function e(t){var n,a,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=Y(a.events),t($(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[r]);return Object(_.jsxs)("div",{className:"d-flex flex-column vh-100",children:[Object(_.jsx)(je,{}),Object(_.jsx)(le.a,{localizer:we,events:t,startAccessor:"start",endAccessor:"end",messages:ue,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367cf7":"#455a64",borderRadius:"0px",opacity:.8,display:"block",color:"#ffffff"}}},onDoubleClickEvent:function(e){r(fe())},onSelectEvent:function(e){r({type:d,payload:e})},onView:function(e){u(e),localStorage.setItem("lastview",e)},onSelectSlot:function(e){r(Q())},selectable:!0,view:l,components:{event:de}}),Object(_.jsx)(ye,{}),n&&Object(_.jsx)(ke,{}),Object(_.jsx)(Ne,{})]})},Ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(J.a)(H.a.mark((function e(t){var n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(ee({uid:a.uid,name:a.name}))):t(te());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(_.jsx)("div",{className:"text-center spinner",children:Object(_.jsx)("i",{className:"fas fa-spinner fa-spin fa-5x"})}):Object(_.jsx)(D.a,{children:Object(_.jsx)("div",{children:Object(_.jsxs)(I.d,{children:[Object(_.jsx)(P,{exact:!0,path:"/login",component:oe,isAuthenticated:!!c}),Object(_.jsx)(P,{exact:!0,path:"/register",component:ie,isAuthenticated:!!c}),Object(_.jsx)(G,{exact:!0,path:"/",component:Ee,isAuthenticated:!!c}),Object(_.jsx)(I.a,{to:"/"})]})})})},Se=function(){return Object(_.jsx)(s.a,{store:T,children:Object(_.jsx)(Ce,{})})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};r.a.render(Object(_.jsx)(Se,{}),document.getElementById("root")),Te()},70:function(e,t,n){},88:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.29f7717a.chunk.js.map