(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{36:function(e,t,a){e.exports=a(70)},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),i=(a(41),a(13)),s=a(1),l="APP_LOADING",u="POPUP",m="FETCH_CONFIG",d="SAVE_CONFIG",f="TOGGLE_PROGRESS",p="FETCH_BUILDS",v="FETCH_MORE_BUILDS",b="DETAILS_BUILD",h="LOG_BUILD",N="NEW_BUILD_ID",E="GO_TO_SETTINGS",y="RUN_BUILD",g="REBUILD",O="School CI server",x="http://localhost:9999/api",j=a(8),C=Object(j.a)(),k=a(4),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map((function(t){var a=Object(k.a)(t,2),n=a[0],c=a[1];return"".concat(e,"_").concat(n).concat([void 0,!1,null].includes(c)?"":"_".concat(c))})).join(" ")};a(46);var I=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=e.onClick;return c.a.createElement("div",{className:"".concat(a," ").concat("Icon"," ").concat(T("Icon",r)),onClick:o})};a(47);var _=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=e.onClick,i=void 0===o?function(){}:o,l=e.text,u=void 0===l?null:l,m=e.iconType,d=void 0===m?null:m,f=e.type,p=void 0===f?"button":f,v=Object(s.c)((function(e){return e.common.isInProgress}));return c.a.createElement("button",{type:p,className:"".concat(a," ").concat("Button"," ").concat(T("Button",r)," ").concat(v?"".concat("Button","_disabled"):""),onClick:i},d&&c.a.createElement(I,{className:"".concat("Button","-Icon"),modifiers:[["type",d]]}),u&&c.a.createElement("div",{className:"".concat("Button","-Text")},u))};a(48);var w=function(e){var t="WithoutConfiguration",a=e.className,n=void 0===a?"":a,r=e.modifiers,o=void 0===r?[]:r,i=e.actionFn;return c.a.createElement("main",{className:"".concat(n," ").concat(t," ").concat(T(t,o))},c.a.createElement("div",{className:"".concat(t,"-Content")},c.a.createElement(I,{className:"".concat(t,"-Logo"),modifiers:[["type","settingsLogo"]]}),c.a.createElement("div",{className:"".concat(t,"-Description Text")},"Configure repository connection and synchronization settings"),c.a.createElement(_,{className:"".concat(t,"-Button"),modifiers:[["color","accent"]],onClick:i,text:"Open settings"})))},F=(a(49),function(e){return{type:f,payload:e}}),B=function(e){return{type:u,payload:e}},L=a(3),S=a.n(L),P=a(5),D=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){var c=new URL("".concat(x,"/builds"));return c.search=new URLSearchParams(t).toString(),console.log("fetchBuilds: ",c),fetch(c).then((function(e){return e.json()})).then(function(){var c=Object(P.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=9;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:c.next=10;break;case 9:n({type:p,payload:o});case 10:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}},H=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(c){return console.log("fetchDetails: ",t),fetch("".concat(x,"/builds/").concat(t)).then((function(e){return e.json()})).then(function(){var r=Object(P.a)(S.a.mark((function r(o){var i;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=o.data,!o.error){r.next=9;break}if(!(++a<10)){r.next=7;break}return r.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return r.abrupt("return",e(t,a,n)(c));case 7:return n&&C.push("/"),r.abrupt("return",null);case 9:if(!n){r.next=13;break}c({type:b,payload:i}),r.next=14;break;case 13:return r.abrupt("return",i);case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}},R=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(c){return console.log("fetchLog: ",t),fetch("".concat(x,"/builds/").concat(t,"/logs")).then((function(e){return e.json()})).then(function(){var r=Object(P.a)(S.a.mark((function r(o){return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!o.error){r.next=8;break}if(!(++a<10)){r.next=6;break}return r.next=5,new Promise((function(e){return setTimeout(e,1e3)}));case 5:return r.abrupt("return",e(t,a,n)(c));case 6:return n&&C.push("/"),r.abrupt("return",null);case 8:if(!n){r.next=12;break}c({type:h,payload:o}),r.next=13;break;case 12:return r.abrupt("return",o);case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}},M=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return console.log("add build by commit: ",t),n(F(!0)),fetch("".concat(x,"/builds/").concat(t),{method:"POST"}).then((function(e){return e.json()})).then(function(){var c=Object(P.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=10;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:return n(F(!1)),n(B(!1)),c.abrupt("return",null);case 10:n({type:b,payload:{}}),n({type:N,payload:o.id}),n(F(!1)),n(B(!1)),C.push("/build/".concat(o.id));case 15:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}},U=a(24),A=a(6),G={data:[],details:null,log:null,newBuildId:null},W=function(e){return e.builds.data},q=function(e){return e.builds.details},z=function(e){return e.builds.log},X=function(e){return e.builds.newBuildId};var J=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=e.title,i=void 0===o?{text:!1,modifiers:[]}:o,l=e.buttons,u=void 0===l?[]:l,m=Object(s.b)(),d=Object(s.c)(q);return c.a.createElement("header",{className:"".concat(a," ").concat("Header"," ").concat(T("Header",r))},c.a.createElement("div",{className:"".concat("Header","-Content")},i.text&&c.a.createElement("div",{className:"".concat("Header","-Title Text ").concat(T("Text",i.modifiers))},i.text),u.length>0&&c.a.createElement("div",{className:"".concat("Header","-ButtonsBlock")},u.map((function(e,t){var a,n=e.modifiers,r=e.onClick,o=e.text,i=e.iconType;switch(r){case E:a=function(){return C.push("/settings")};break;case y:a=function(){m(B(!0))};break;case g:a=function(){m(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return console.log("rebuild build by commit: ",t),n(F(!0)),fetch("".concat(x,"/builds/").concat(t),{method:"POST"}).then((function(e){return e.json()})).then(function(){var c=Object(P.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=9;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:return n(F(!1)),c.abrupt("return",null);case 9:n({type:b,payload:{}}),n({type:N,payload:o.id}),n(F(!1)),C.push("/build/".concat(o.id));case 13:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}}(d.commitHash))}}return c.a.createElement(_,{key:t,className:"".concat("Header","-Button"),modifiers:n,onClick:a,text:o,iconType:i})})))))};var V=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r;return Object(n.useEffect)((function(){document.title=O}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(J,{className:"Container-Header",title:{text:O,modifiers:[["type","headerTitle"]]},buttons:[{modifiers:[["type","control"],["icon","before"]],onClick:E,text:"Settings",iconType:"settings"}]}),c.a.createElement(w,{className:a,modifiers:o,actionFn:function(){return C.push("/settings")}}))},$=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n(F(!0)),fetch("".concat(x,"/settings"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(function(){var c=Object(P.a)(S.a.mark((function c(r){return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!r.error){c.next=9;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:c.next=10;break;case 9:n({type:d,payload:t});case 10:n(F(!1)),C.goBack();case 12:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}},Y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return console.log("fetchSettings"),fetch("".concat(x,"/settings")).then((function(e){return e.json()})).then(function(){var c=Object(P.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=8;break}if(!(++t<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:return c.abrupt("return",null);case 8:if(!a){c.next=12;break}n({type:m,payload:o}),c.next=13;break;case 12:return c.abrupt("return",o);case 13:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}};a(51);var K=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=e.labelBefore,l=void 0===i?{text:!1,className:"",modifiers:[]}:i,u=e.labelAfter,m=void 0===u?{text:!1,className:"",modifiers:[]}:u,d=e.id,f=e.type,p=void 0===f?"text":f,v=e.placeholder,b=void 0===v?null:v,h=e.name,N=e.required,E=void 0!==N&&N,y=e.inputMode,g=e.value,O=void 0===g?"":g,x=e.pattern,j=e.forwardRef,C=o.filter((function(e){var t=Object(k.a)(e,2),a=t[0],n=t[1];return"clear"===a&&"visible"===n})).length>0,_=Object(n.useState)(O),w=Object(k.a)(_,2),F=w[0],B=w[1],L=Object(s.c)((function(e){return e.common.isInProgress}));return c.a.createElement(c.a.Fragment,null,l.text&&c.a.createElement("label",{htmlFor:d,className:"".concat(l.className," Text ").concat(T("Text",l.modifiers))},l.text),c.a.createElement("div",{className:"".concat(a," ").concat("Input"," ").concat(T("Input",o)," ").concat(L?"".concat("Input","_disabled"):"")},c.a.createElement("input",{id:d,className:"".concat("Input","-Control"),type:p,placeholder:b,name:h,required:E,onChange:function(e){return B(e.target.value)},value:F,inputMode:y,pattern:x,ref:j}),C&&c.a.createElement(I,{className:"".concat("Input","-ClearIcon"),modifiers:[["type","clear"]],onClick:function(){return B("")}})),m.text&&c.a.createElement("label",{htmlFor:d,className:"".concat(m.className," Text ").concat(T("Text",m.modifiers))},m.text))};a(52);var Q=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.b)(),l=Object(n.useRef)(null),u=Object(n.useRef)(null),m=Object(n.useRef)(null),d=Object(n.useRef)(null),f=Object(s.c)((function(e){return e.settings.config.repoName?e.settings.config.repoName:""})),p=Object(s.c)((function(e){return e.settings.config.buildCommand?e.settings.config.buildCommand:""})),v=Object(s.c)((function(e){return e.settings.config.mainBranch?e.settings.config.mainBranch:""})),b=Object(s.c)((function(e){return e.settings.config.period?e.settings.config.period:"10"})),h=function(){var e=Object(P.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.preventDefault(),a={repoName:l.current.value,buildCommand:u.current.value,mainBranch:m.current.value,period:d.current.value},console.log("config: ",a),i($(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("form",{className:"".concat(a," ").concat("Form"," ").concat(T("Form",o)),onSubmit:h},c.a.createElement("div",{className:"".concat("Form","-Content")},c.a.createElement("div",{className:"".concat("Form","-Item ").concat("Form","-Item_type_header")},c.a.createElement("div",{className:"".concat("Form","-Label Text Text_type_formHeader")},"Settings"),c.a.createElement("div",{className:"Text"},"Configure repository connection"," ",c.a.createElement("span",{className:"Text-NonBreakable"},"and synchronization settings"))),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement(K,{className:"".concat("Form","-Input"),modifiers:[["clear","visible"]],labelBefore:{text:"GitHub repository",className:"".concat("Form","-Label ").concat("Form","-Label_type_required"),modifiers:[["type","formLabel"]]},id:"repository",type:"text",placeholder:"user-name/repo-name",name:"repository",required:!0,value:f,forwardRef:l})),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement(K,{className:"".concat("Form","-Input"),modifiers:[["clear","visible"]],labelBefore:{text:"Build command",className:"".concat("Form","-Label"),modifiers:[["type","formLabel"]]},id:"command",type:"text",placeholder:"npm ci && npm run build",name:"command",required:!0,value:p,forwardRef:u})),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement(K,{className:"".concat("Form","-Input"),modifiers:[["clear","visible"]],labelBefore:{text:"Main branch",className:"".concat("Form","-Label"),modifiers:[["type","formLabel"]]},id:"branch",type:"text",placeholder:"master",name:"branch",required:!0,value:v,forwardRef:m})),c.a.createElement("div",{className:"".concat("Form","-Item ").concat("Form","-Item_type_flat")},c.a.createElement(K,{className:"".concat("Form","-Input"),modifiers:[["size","small"],["align","right"]],labelBefore:{text:"Synchronize every",className:"".concat("Form","-Label"),modifiers:[]},labelAfter:{text:"minutes",className:"".concat("Form","-Label"),modifiers:[]},id:"minutes",type:"text",inputMode:"numeric",pattern:"^[0]*[1-9][\\d]*$",name:"minutes",required:!0,value:b,forwardRef:d})),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement("div",{className:"".concat("Form","-ButtonsBlock")},c.a.createElement(_,{className:"".concat("Form","-Button"),modifiers:[["color","accent"]],text:"Save",type:"submit"}),c.a.createElement(_,{type:"button",className:"".concat("Form","-Button"),onClick:function(){C.goBack()},text:"Cancel"})))))};var Z=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r;return Object(n.useEffect)((function(){document.title="Settings | ".concat(O)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(J,{className:"Container-Header",title:{text:O,modifiers:[["type","headerTitle"]]}}),c.a.createElement(Q,{className:a,modifiers:o}))},ee=a(11);a(53);var te=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=e.buildNumber,s=e.commitMessage,l=void 0===s?"":s,u=e.branchName,m=void 0===u?"":u,d=e.commitHash,f=void 0===d?"":d,p=e.authorName,v=void 0===p?"":p,b=e.status,h=e.start,N=e.duration,E=e.to,y=Object(n.useState)({full:"",short:""}),g=Object(k.a)(y,2),O=g[0],x=g[1];Object(n.useEffect)((function(){if(h){var e=h.split("T"),t=Object(k.a)(e,2),a=t[0],n=t[1],c={"01":"\u044f\u043d\u0432","02":"\u0444\u0435\u0432\u0440","03":"\u043c\u0430\u0440\u0442","04":"\u0430\u043f\u0440","05":"\u043c\u0430\u0439","06":"\u0438\u044e\u043d\u044c","07":"\u0438\u044e\u043b\u044c","08":"\u0430\u0432\u0433","09":"\u0441\u0435\u043d\u0442",10:"\u043e\u043a\u0442",11:"\u043d\u043e\u044f\u0431",12:"\u0434\u0435\u043a"};x(function(e,t){var a=e.split("-"),n=Object(k.a)(a,3),r=n[0],o=n[1],i=n[2],s=t.split(":"),l=Object(k.a)(s,2),u=l[0],m=l[1],d=c[o];return{full:"".concat(i," ").concat(d," ").concat(r,", ").concat(u,":").concat(m),short:"".concat(i," ").concat(d,", ").concat(u,":").concat(m)}}(a,n))}}),[h]);var j=Object(n.useState)(""),C=Object(k.a)(j,2),_=C[0],w=C[1];function F(e,t){return e.length>t?e.slice(0,t-1)+"...":e}Object(n.useEffect)((function(){if(N){w(function(e){var t=Math.floor(e/60),a=e%60,n=t?"".concat(t," \u0447"):"",c=a?"".concat(a," \u043c\u0438\u043d"):"";return"".concat(n).concat(t&&a?" ":"").concat(c)}(N))}}),[N]);var B=Object(n.useState)(""),L=Object(k.a)(B,2),S=L[0],P=L[1];Object(n.useEffect)((function(){m&&P(F(m,15))}),[m]);var D=Object(n.useState)(""),H=Object(k.a)(D,2),R=H[0],M=H[1];Object(n.useEffect)((function(){v&&M(F(v,15))}),[v]);var U=Object(n.useState)(""),A=Object(k.a)(U,2),G=A[0],W=A[1];Object(n.useEffect)((function(){f&&W(f.slice(0,7))}),[f]);var q=E?ee.a:"div";return c.a.createElement(q,{className:"".concat(a," ").concat("Card"," ").concat(T("Card",o)),to:E},c.a.createElement("div",{className:"".concat("Card","-Content")},c.a.createElement(I,{className:"".concat("Card","-Icon"),modifiers:[["type",b]]}),c.a.createElement("div",{className:"".concat("Card","-DataWrapper")},c.a.createElement("div",{className:"".concat("Card","-Data")},c.a.createElement("div",{className:"".concat("Card","-DataTitle")},c.a.createElement("div",{className:"".concat("Card","-Number")},"#",i),c.a.createElement("div",{className:"".concat("Card","-CommitName Text Text_type_commit")},l)),c.a.createElement("div",{className:"".concat("Card","-DataOther")},c.a.createElement("div",{className:"".concat("Card","-OtherInfo")},c.a.createElement(I,{className:"".concat("Card","-OtherIcon"),modifiers:[["type","branch"]]}),c.a.createElement("div",{className:"".concat("Card","-OtherText Text Text_type_card")},S),c.a.createElement("div",{className:"".concat("Card","-OtherText ").concat("Card","-OtherText_type_hash Text Text_type_card")},G)),c.a.createElement("div",{className:"".concat("Card","-OtherInfo")},c.a.createElement(I,{className:"".concat("Card","-OtherIcon"),modifiers:[["type","user"]]}),c.a.createElement("div",{className:"".concat("Card","-OtherText Text Text_type_card")},R)))),c.a.createElement("div",{className:"".concat("Card","-TimeBlock")},c.a.createElement("div",{className:"".concat("Card","-TimeItem ").concat(O.short?"":"".concat("Card","-TimeItem_hidden"))},c.a.createElement(I,{className:"".concat("Card","-TimeIcon"),modifiers:[["type","calendar"]]}),c.a.createElement("div",{className:"".concat("Card","-TimeText Text Text_type_card"),title:O.full||""},O.short||"")),c.a.createElement("div",{className:"".concat("Card","-TimeItem ").concat(_?"":"".concat("Card","-TimeItem_hidden"))},c.a.createElement(I,{className:"".concat("Card","-TimeIcon"),modifiers:[["type","stopwatch"]]}),c.a.createElement("div",{className:"".concat("Card","-TimeText Text Text_type_card")},_||""))))))};a(55);var ae=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.c)(W),l=Object(s.b)();Object(n.useEffect)((function(){l(D({limit:10}))}),[]);var u=Object(n.useCallback)((function(){return l(function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){n(F(!0));var c=new URL("".concat(x,"/builds"));return c.search=new URLSearchParams(t).toString(),console.log("fetchMoreBuilds: ",c),fetch(c).then((function(e){return e.json()})).then(function(){var c=Object(P.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=9;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:c.next=10;break;case 9:n({type:v,payload:o});case 10:n(F(!1));case 11:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}}({limit:10,offset:i.length}))}),[i.length]);return c.a.createElement("main",{className:"".concat(a," ").concat("BuildList"," ").concat(T("BuildList",o))},c.a.createElement("div",{className:"".concat("BuildList","-Content")},i.map((function(e){var t,a=e.status,n=e.id,r=e.buildNumber,o=e.commitMessage,i=e.branchName,s=e.commitHash,l=e.authorName,u=e.start,m=e.duration;switch(a){case"InProgress":case"Waiting":t="progress";break;case"Success":t="done";break;case"Fail":case"Canceled":default:t="fail"}return c.a.createElement(te,{className:"".concat("BuildList","-Item"),modifiers:[["type",t]],buildId:n,to:"/build/".concat(n),buildNumber:r,commitMessage:o,branchName:i,commitHash:s,authorName:l,start:u,duration:m,key:n,status:t})})),c.a.createElement(_,{className:"".concat("BuildList","-Button"),modifiers:[["type","controlExtended"]],text:"Show more",onClick:u})))},ne={config:{}},ce=function(e){return e.settings.config};var re=function(e){var t=e.className,a=void 0===t?"":t;Object(n.useEffect)((function(){document.title="Build history | ".concat(O)}),[]);var r=Object(s.c)(ce);return c.a.createElement(c.a.Fragment,null,c.a.createElement(J,{className:"Container-Header",title:{text:r.repoName,modifiers:[["type","repositoryName"]]},buttons:[{modifiers:[["type","control"],["icon","before"]],onClick:y,text:"Run build",iconType:"play"},{modifiers:[["type","control"],["icon","only"]],onClick:E,iconType:"settings"}]}),c.a.createElement(ae,{className:a}))};a(56);var oe=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=e.logString,i=void 0===o?"":o;return c.a.createElement("pre",{className:"".concat(a," ").concat("BuildLog"," ").concat(T("BuildLog",r)),dangerouslySetInnerHTML:{__html:i}})};a(57),a(58);var ie=function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader-SpinerWrapper"},c.a.createElement("div",{className:"Loader-Spiner"})))},se=a(59);var le=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,l=Object(i.g)().buildId,u=Object(s.c)(W),m=Object(s.c)(X),d=Object(s.c)(q),f=Object(s.c)(z),p=Object(n.useState)(""),v=Object(k.a)(p,2),N=v[0],E=v[1],y=new se({fg:"#000",bg:"#000"}),g=Object(s.b)();Object(n.useEffect)((function(){m===l||u.some((function(e){return e.id===l}))?g(function(e){return function(){var t=Object(P.a)(S.a.mark((function t(a){var n,c,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(F(!0)),t.next=3,Promise.all([H(e)(a),R(e)(a)]);case 3:if(n=t.sent,c=Object(k.a)(n,2),r=c[0],null!==(o=c[1])&&null!==r){t.next=11;break}return a(F(!1)),C.push("/"),t.abrupt("return",null);case 11:a({type:h,payload:o}),a({type:b,payload:r}),a(F(!1));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l)):C.push("/")}),[l,u,m]),Object(n.useEffect)((function(){E(y.toHtml(f||""))}),[f,y]);var O=Object(n.useState)(""),x=Object(k.a)(O,2),j=x[0],I=x[1];return Object(n.useEffect)((function(){if(d){var e;switch(d.status){case"InProgress":case"Waiting":e="progress";break;case"Success":e="done";break;case"Fail":case"Canceled":default:e="fail"}I(e)}}),[d]),c.a.createElement("main",{className:"".concat(a," ").concat("BuildDetails"," ").concat(T("BuildDetails",o))},c.a.createElement("div",{className:"".concat("BuildDetails","-Content")},d&&d.id===l?c.a.createElement(c.a.Fragment,null,c.a.createElement(te,{className:"".concat("BuildDetails","-Item"),modifiers:[["type",j],["page","details"]],buildId:d.id,buildNumber:d.buildNumber,commitMessage:d.commitMessage,branchName:d.branchName,commitHash:d.commitHash,authorName:d.authorName,start:d.start,duration:d.duration,status:j}),N&&c.a.createElement(oe,{logString:N})):c.a.createElement(ie,null)))};var ue=function(e){var t=e.className,a=void 0===t?"":t;Object(n.useEffect)((function(){document.title="Build details | ".concat(O)}),[]);var r=Object(s.c)(ce);return c.a.createElement(c.a.Fragment,null,c.a.createElement(J,{className:"Container-Header",title:{text:r.repoName,modifiers:[["type","repositoryName"]]},buttons:[{modifiers:[["type","control"],["icon","before"]],onClick:g,text:"Rebuild",iconType:"restart"},{modifiers:[["type","control"],["icon","only"]],onClick:E,iconType:"settings"}]}),c.a.createElement(le,{className:a}))};a(66);var me=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n;return c.a.createElement("main",{className:"".concat(a," ").concat("NotFound"," ").concat(T("NotFound",r))},c.a.createElement("div",{className:"".concat("NotFound","-Content")},"Page not found. Error 404. ",c.a.createElement(ee.a,{to:"/"},"Go to home page"),"."))};var de=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r;return Object(n.useEffect)((function(){document.title="Page not found | ".concat(O)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(J,{className:"Container-Header",title:{text:O,modifiers:[["type","headerTitle"]]}}),c.a.createElement(me,{className:a,modifiers:o}))};a(67),a(68);var fe=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n;return c.a.createElement("footer",{className:"".concat(a," ").concat("Footer"," ").concat(T("Footer",r))},c.a.createElement("div",{className:"".concat("Footer","-Content")},c.a.createElement("div",{className:"".concat("Footer","-LinksWrapper")},c.a.createElement(ee.a,{to:"/support",className:"".concat("Footer","-Link MyLink MyLink_type_footer")},"Support"),c.a.createElement(ee.a,{to:"/learning",className:"".concat("Footer","-Link MyLink MyLink_type_footer")},"Learning")),c.a.createElement("div",{className:"".concat("Footer","-Credentional Text Text_type_footer")},"\xa9 2020 Your Name")))},pe={isInProgress:!1,isAppLoading:!0,isPopupActive:!1},ve=function(e){return e.common.isInProgress},be=function(e){return e.common.isAppLoading},he=function(e){return e.common.isPopupActive};a(69);var Ne=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.b)(),l=Object(n.useRef)(null),u=function(){var e=Object(P.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.preventDefault(),a=l.current.value.trim(),console.log("commitHash: ",a),i(M(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"Popup-Wrapper"},c.a.createElement("form",{className:"Popup ".concat(a," ").concat("Form"," ").concat(T("Form",o)),onSubmit:u},c.a.createElement("div",{className:"".concat("Form","-Content")},c.a.createElement("div",{className:"".concat("Form","-Header Text Text_type_popupHeader")},"New build"),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement(K,{className:"".concat("Form","-Input"),modifiers:[["clear","visible"]],labelBefore:{text:"Enter the commit hash which you want to build.",className:"".concat("Form","-Label"),modifiers:[["type","formLabel"]]},id:"commit",type:"text",placeholder:"Commit hash",pattern:"\\S+",name:"commit",required:!0,value:"",forwardRef:l})),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement("div",{className:"".concat("Form","-ButtonsBlock")},c.a.createElement(_,{className:"".concat("Form","-Button"),modifiers:[["color","accent"]],text:"Run build",type:"submit"}),c.a.createElement(_,{type:"button",className:"".concat("Form","-Button"),modifiers:[["color","transparent"]],onClick:function(){l.current.value="",i(B(!1))},text:"Cancel"}))))))};var Ee=function(e){var t=Object(s.c)(be),a=Object(s.c)(he),r=Object(s.c)(ve),o=Object(s.c)(ce),u=Object(s.b)();return Object(n.useEffect)((function(){u(function(){var e=Object(P.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y()(t);case 2:if(null!==(a=e.sent)){e.next=6;break}return C.go(),e.abrupt("return");case 6:if(!a.repoName){e.next=9;break}return e.next=9,D({limit:10})(t);case 9:t({type:m,payload:a}),t({type:l,payload:!1});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[u]),Object(n.useEffect)((function(){var e=document.getElementById("root");a?e.classList.add("Container_popup_active"):e.classList.remove("Container_popup_active")}),[a]),Object(n.useEffect)((function(){var e=document.getElementById("root");r?e.classList.add("Container_inactive"):e.classList.remove("Container_inactive")}),[r]),c.a.createElement(c.a.Fragment,null,t?c.a.createElement(ie,null):c.a.createElement(i.c,{history:C},c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",render:function(){return o.repoName?c.a.createElement(re,{className:"Container-Main"}):c.a.createElement(V,{className:"Container-Main"})}}),c.a.createElement(i.b,{path:"/build/:buildId",render:function(e){var t=e.location;return o.repoName?c.a.createElement(ue,{className:"Container-Main"}):c.a.createElement(i.a,{to:{pathname:"/",state:{from:t}}})}}),c.a.createElement(i.b,{path:"/settings"},c.a.createElement(Z,{className:"Container-Main"})),c.a.createElement(i.b,{path:"*"},c.a.createElement(de,{className:"Container-Main"}))),c.a.createElement(fe,{className:"Container-Footer"}),a&&c.a.createElement(Ne,{modifiers:[["popup"]]})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=a(31),ge=a(32),Oe=a(34),xe=a(35),je=function(e){Object(xe.a)(a,e);var t=Object(Oe.a)(a);function a(e){var n;return Object(ye.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(ge.a)(a,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?c.a.createElement(c.a.Fragment,null,c.a.createElement(J,{className:"Container-Header",title:{text:O,modifiers:[["type","headerTitle"]]}}),c.a.createElement("main",{className:"Container-Main"},"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),c.a.createElement(fe,{className:"Container-Footer"})):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component),Ce=a(12),ke=a(33),Te=Object(Ce.c)({common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(A.a)({},e,{isInProgress:void 0===t.payload?!e.common.isInProgress:t.payload});case l:return Object(A.a)({},e,{isAppLoading:t.payload});case u:return Object(A.a)({},e,{isPopupActive:t.payload});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var a=t.payload,n=a.repoName,c=a.buildCommand,r=a.mainBranch,o=a.period;return Object(A.a)({},e,{config:{repoName:n,buildCommand:c,mainBranch:r,period:o}});case m:return Object(A.a)({},e,{config:Object(A.a)({},t.payload)});default:return e}},builds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(A.a)({},e,{data:Object(U.a)(t.payload)});case v:for(var a=e.data[e.data.length-1],n=a?a.buildNumber:-1,c=[],r=0;r<t.payload.length;r++)t.payload[r].buildNumber>=n||c.push(t.payload[r]);return Object(A.a)({},e,{data:[].concat(Object(U.a)(e.data),c)});case b:return Object(A.a)({},e,{details:Object(A.a)({},t.payload)});case h:return Object(A.a)({},e,{log:t.payload});case N:return Object(A.a)({},e,{newBuildId:t.payload});default:return e}}}),Ie=[ke.a],_e=Object(Ce.e)(Te,{},Object(Ce.d)(Ce.a.apply(void 0,Ie),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),we=document.getElementById("root");o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:_e},c.a.createElement(je,null,c.a.createElement(Ee,null)))),we),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.873e37c0.chunk.js.map