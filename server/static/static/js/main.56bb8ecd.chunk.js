(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{37:function(e,t,a){e.exports=a(71)},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),i=(a(42),a(13)),s=a(1),u={APP_LOADING:"APP_LOADING",POPUP:"POPUP",DETAILS:"DETAILS",FETCH_CONFIG:"FETCH_CONFIG",SAVE_CONFIG:"SAVE_CONFIG",FETCH_LANGUAGE_DICTIONARY:"FETCH_LANGUAGE_DICTIONARY",TOGGLE_PROGRESS:"TOGGLE_PROGRESS",FETCH_BUILDS:"FETCH_BUILDS",FETCH_MORE_BUILDS:"FETCH_MORE_BUILDS",DETAILS_BUILD:"DETAILS_BUILD",LOG_BUILD:"LOG_BUILD",NEW_BUILD_ID:"NEW_BUILD_ID",INDEX_PAGE_HEADER:"INDEX_PAGE_HEADER",BUILD_LOG_PAGE_HEADER:"BUILD_LOG_PAGE_HEADER",SETTINGS_PAGE_HEADER:"SETTINGS_PAGE_HEADER",BUILD_DETAILS_PAGE_HEADER:"BUILD_DETAILS_PAGE_HEADER",GO_TO_SETTINGS:"GO_TO_SETTINGS",RUN_BUILD:"RUN_BUILD",REBUILD:"REBUILD",SERVER_API:"http://localhost:9999/api"},l=a(8),m=Object(l.a)(),d=a(4),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map((function(t){var a=Object(d.a)(t,2),n=a[0],c=a[1];return"".concat(e,"_").concat(n).concat([void 0,!1,null].includes(c)?"":"_".concat(c))})).join(" ")};a(47);var E=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=e.onClick;return c.a.createElement("div",{className:"".concat(a," ").concat("Icon"," ").concat(f("Icon",r)),onClick:o})};a(48);var p=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=e.onClick,i=void 0===o?function(){}:o,u=e.text,l=void 0===u?null:u,m=e.iconType,d=void 0===m?null:m,p=e.type,b=void 0===p?"button":p,v=Object(s.c)((function(e){return e.common.isInProgress}));return c.a.createElement("button",{type:b,className:"".concat(a," ").concat("Button"," ").concat(f("Button",r)," ").concat(v?"".concat("Button","_disabled"):""),onClick:i},d&&c.a.createElement(E,{className:"".concat("Button","-Icon"),modifiers:[["type",d]]}),l&&c.a.createElement("div",{className:"".concat("Button","-Text")},l))},b=(a(49),a(6)),v={config:{},dictionary:{}},N=function(e){return e.settings.config},O=function(e){return e.settings.dictionary},h=function(e){return e.settings.dictionary.CURRENT_LANG||"en"},_=a(30);var I={ru:function(e){var t=e%10,a=e%100;return 1===t&&11!==a?"one":t>1&&t<5&&(a<10||a>20)?"few":"many"},en:function(e){return 1===e?"one":"other"}};function T(e,t){var a,n=[],c="",r=Object(_.a)(e);try{for(r.s();!(a=r.n()).done;){var o=a.value;switch(o){default:c+=o;break;case"{":n.push(c),c="";break;case"}":n.push(t[c]),c=""}}}catch(i){r.e(i)}finally{r.f()}return c&&n.push(c),n.join("")}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,c=e[a];if("string"===typeof c)return T(c,n);var r=c[I[t](n.count)];return T(r,n)};var g=function(e){var t="WithoutConfiguration",a=e.className,n=void 0===a?"":a,r=e.modifiers,o=void 0===r?[]:r,i=e.actionFn,u=Object(s.c)(O),l=Object(s.c)(h);return c.a.createElement("main",{className:"".concat(n," ").concat(t," ").concat(f(t,o))},c.a.createElement("div",{className:"".concat(t,"-Content")},c.a.createElement(E,{className:"".concat(t,"-Logo"),modifiers:[["type","settingsLogo"]]}),c.a.createElement("div",{className:"".concat(t,"-Description Text")},y(u,l,"WITHOUT_CONFIG_DESC")),c.a.createElement(p,{className:"".concat(t,"-Button"),modifiers:[["color","accent"]],onClick:i,text:y(u,l,"OPEN_SETTINGS")})))},j=(a(50),function(e){return{type:u.TOGGLE_PROGRESS,payload:e}}),C=function(e){return{type:u.APP_LOADING,payload:e}},L=function(e){return{type:u.POPUP,payload:e}},x=a(2),S=a.n(x),B=a(5),D=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){var c=new URL("".concat(u.SERVER_API,"/builds"));return c.search=new URLSearchParams(t).toString(),console.log("fetchBuilds: ",c),fetch(c).then((function(e){return e.json()})).then(function(){var c=Object(B.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=9;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:c.next=10;break;case 9:n({type:u.FETCH_BUILDS,payload:o});case 10:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}},A=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(c){return console.log("fetchDetails: ",t),fetch("".concat(u.SERVER_API,"/builds/").concat(t)).then((function(e){return e.json()})).then(function(){var r=Object(B.a)(S.a.mark((function r(o){var i;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=o.data,!o.error){r.next=9;break}if(!(++a<10)){r.next=7;break}return r.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return r.abrupt("return",e(t,a,n)(c));case 7:return n&&m.push("/"),r.abrupt("return",null);case 9:if(!n){r.next=13;break}c({type:u.DETAILS_BUILD,payload:i}),r.next=14;break;case 13:return r.abrupt("return",i);case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}},R=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(c){return console.log("fetchLog: ",t),fetch("".concat(u.SERVER_API,"/builds/").concat(t,"/logs")).then((function(e){return e.json()})).then(function(){var r=Object(B.a)(S.a.mark((function r(o){return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!o.error){r.next=8;break}if(!(++a<10)){r.next=6;break}return r.next=5,new Promise((function(e){return setTimeout(e,1e3)}));case 5:return r.abrupt("return",e(t,a,n)(c));case 6:return n&&m.push("/"),r.abrupt("return",null);case 8:if(!n){r.next=12;break}c({type:u.LOG_BUILD,payload:o}),r.next=13;break;case 12:return r.abrupt("return",o);case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}},k=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return console.log("try to add build by commit: ",t),n(j(!0)),fetch("".concat(u.SERVER_API,"/builds/").concat(t),{method:"POST"}).then((function(e){return e.json()})).then(function(){var c=Object(B.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=10;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:return n(j(!1)),n(L(!1)),c.abrupt("return",null);case 10:n({type:u.DETAILS_BUILD,payload:{}}),n({type:u.NEW_BUILD_ID,payload:o.id}),n(j(!1)),n(L(!1)),m.push("/build/".concat(o.id));case 15:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}},F=a(24),P={data:[],details:null,log:null,newBuildId:null},U=function(e){return e.builds.data},G=function(e){return e.builds.details},w=function(e){return e.builds.log},H=function(e){return e.builds.newBuildId};var M=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=e.title,i=void 0===o?{text:!1,modifiers:[]}:o,l=e.buttons,d=void 0===l?[]:l,E=Object(s.b)(),b=Object(s.c)(G);return c.a.createElement("header",{className:"".concat(a," ").concat("Header"," ").concat(f("Header",r))},c.a.createElement("div",{className:"".concat("Header","-Content")},i.text&&c.a.createElement("div",{className:"".concat("Header","-Title Text ").concat(f("Text",i.modifiers))},i.text),d.length>0&&c.a.createElement("div",{className:"".concat("Header","-ButtonsBlock")},d.map((function(e,t){var a,n=e.modifiers,r=e.onClick,o=e.text,i=e.iconType;switch(r){case u.GO_TO_SETTINGS:a=function(){return m.push("/settings")};break;case u.RUN_BUILD:a=function(){E(L(!0))};break;case u.REBUILD:a=function(){E(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return console.log("try to rebuild build by commit: ",t),n(j(!0)),fetch("".concat(u.SERVER_API,"/builds/").concat(t),{method:"POST"}).then((function(e){return e.json()})).then(function(){var c=Object(B.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=9;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:return n(j(!1)),c.abrupt("return",null);case 9:n({type:u.DETAILS_BUILD,payload:{}}),n({type:u.NEW_BUILD_ID,payload:o.id}),n(j(!1)),m.push("/build/".concat(o.id));case 13:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}}(b.commitHash))}}return c.a.createElement(p,{key:t,className:"".concat("Header","-Button"),modifiers:n,onClick:a,text:o,iconType:i})})))))};var V=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.c)(O),l=Object(s.c)(h);return Object(n.useEffect)((function(){document.title=y(i,l,"SITE_NAME")}),[i,l]),c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{className:"Container-Header",title:{text:y(i,l,"SITE_NAME"),modifiers:[["type","headerTitle"]]},buttons:[{modifiers:[["type","control"],["icon","before"]],onClick:u.GO_TO_SETTINGS,text:y(i,l,"SETTINGS"),iconType:"settings"}]}),c.a.createElement(g,{className:a,modifiers:o,actionFn:function(){return m.push("/settings")}}))},W=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n(j(!0)),fetch("".concat(u.SERVER_API,"/settings"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(function(){var c=Object(B.a)(S.a.mark((function c(r){return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!r.error){c.next=9;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:c.next=10;break;case 9:n({type:u.SAVE_CONFIG,payload:t});case 10:n(j(!1)),m.goBack();case 12:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}},Y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return console.log("fetchSettings"),fetch("".concat(u.SERVER_API,"/settings")).then((function(e){return e.json()})).then(function(){var c=Object(B.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=8;break}if(!(++t<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:return c.abrupt("return",null);case 8:if(!a){c.next=12;break}n({type:u.FETCH_CONFIG,payload:o}),c.next=13;break;case 12:return c.abrupt("return",o);case 13:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}},q=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(c){return console.log("fetchLanguage"+t),fetch("".concat(u.SERVER_API,"/language?lang=").concat(t)).then((function(e){return e.json()})).then(function(){var r=Object(B.a)(S.a.mark((function r(o){var i;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=o.data,!o.error){r.next=8;break}if(!(++a<10)){r.next=7;break}return r.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return r.abrupt("return",e(t,a,n)(c));case 7:return r.abrupt("return",null);case 8:if(!n){r.next=12;break}c({type:u.FETCH_LANGUAGE_DICTIONARY,payload:i}),r.next=13;break;case 12:return r.abrupt("return",i);case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}};a(52);var J=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=e.labelBefore,u=void 0===i?{text:!1,className:"",modifiers:[]}:i,l=e.labelAfter,m=void 0===l?{text:!1,className:"",modifiers:[]}:l,p=e.id,b=e.type,v=void 0===b?"text":b,N=e.placeholder,_=void 0===N?null:N,I=e.name,T=e.required,g=void 0!==T&&T,j=e.inputMode,C=e.value,L=void 0===C?"":C,x=e.pattern,S=e.forwardRef,B=o.filter((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return"clear"===a&&"visible"===n})).length>0,D=Object(s.c)(O),A=Object(s.c)(h),R=Object(n.useState)(L),k=Object(d.a)(R,2),F=k[0],P=k[1],U=Object(s.c)((function(e){return e.common.isInProgress}));return c.a.createElement(c.a.Fragment,null,u.text&&c.a.createElement("label",{htmlFor:p,className:"".concat(u.className," Text ").concat(f("Text",u.modifiers))},y(D,A,u.text,{count:Number(F)||0})),c.a.createElement("div",{className:"".concat(a," ").concat("Input"," ").concat(f("Input",o)," ").concat(U?"".concat("Input","_disabled"):"")},c.a.createElement("input",{id:p,className:"".concat("Input","-Control"),type:v,placeholder:_,name:I,required:g,onChange:function(e){return P(e.target.value)},value:F,inputMode:j,pattern:x,ref:S}),B&&c.a.createElement(E,{className:"".concat("Input","-ClearIcon"),modifiers:[["type","clear"]],onClick:function(){return P("")}})),m.text&&c.a.createElement("label",{htmlFor:p,className:"".concat(m.className," Text ").concat(f("Text",m.modifiers))},y(D,A,m.text,{count:Number(F)||0})))};a(53);var X=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.c)(O),u=Object(s.c)(h),l=Object(s.b)(),d=Object(n.useRef)(null),E=Object(n.useRef)(null),b=Object(n.useRef)(null),v=Object(n.useRef)(null),N=Object(s.c)((function(e){return e.settings.config.repoName?e.settings.config.repoName:""})),_=Object(s.c)((function(e){return e.settings.config.buildCommand?e.settings.config.buildCommand:""})),I=Object(s.c)((function(e){return e.settings.config.mainBranch?e.settings.config.mainBranch:""})),T=Object(s.c)((function(e){return e.settings.config.period?e.settings.config.period:"10"})),g=function(){var e=Object(B.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.preventDefault(),a={repoName:d.current.value,buildCommand:E.current.value,mainBranch:b.current.value,period:v.current.value},console.log("config: ",a),l(W(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("form",{className:"".concat(a," ").concat("Form"," ").concat(f("Form",o)),onSubmit:g},c.a.createElement("div",{className:"".concat("Form","-Content")},c.a.createElement("div",{className:"".concat("Form","-Item ").concat("Form","-Item_type_header")},c.a.createElement("div",{className:"".concat("Form","-Label Text Text_type_formHeader")},y(i,u,"SETTINGS")),c.a.createElement("div",{className:"Text"},y(i,u,"CONFIGURE_REP")," ",c.a.createElement("span",{className:"Text-NonBreakable"},y(i,u,"AND_SYNC_SETTINGS")))),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement(J,{className:"".concat("Form","-Input"),modifiers:[["clear","visible"]],labelBefore:{text:"GITHUB_REP",className:"".concat("Form","-Label ").concat("Form","-Label_type_required"),modifiers:[["type","formLabel"]]},id:"repository",type:"text",placeholder:"user-name/repo-name",name:"repository",required:!0,value:N,forwardRef:d})),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement(J,{className:"".concat("Form","-Input"),modifiers:[["clear","visible"]],labelBefore:{text:"BUILD_COMMAND",className:"".concat("Form","-Label"),modifiers:[["type","formLabel"]]},id:"command",type:"text",placeholder:"npm ci && npm run build",name:"command",required:!0,value:_,forwardRef:E})),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement(J,{className:"".concat("Form","-Input"),modifiers:[["clear","visible"]],labelBefore:{text:"MAIN_BRANCH",className:"".concat("Form","-Label"),modifiers:[["type","formLabel"]]},id:"branch",type:"text",placeholder:"master",name:"branch",required:!0,value:I,forwardRef:b})),c.a.createElement("div",{className:"".concat("Form","-Item ").concat("Form","-Item_type_flat")},c.a.createElement(J,{className:"".concat("Form","-Input"),modifiers:[["size","small"],["align","right"]],labelBefore:{text:"SYNC_EVERY",className:"".concat("Form","-Label"),modifiers:[]},labelAfter:{text:"MINUTE",className:"".concat("Form","-Label"),modifiers:[]},id:"minutes",type:"text",inputMode:"numeric",pattern:"^[0]*[1-9][\\d]*$",name:"minutes",required:!0,value:T,forwardRef:v})),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement("div",{className:"".concat("Form","-ButtonsBlock")},c.a.createElement(p,{className:"".concat("Form","-Button"),modifiers:[["color","accent"]],text:y(i,u,"SAVE"),type:"submit"}),c.a.createElement(p,{type:"button",className:"".concat("Form","-Button"),onClick:function(){m.goBack()},text:y(i,u,"CANCEL")})))))};var $=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.c)(O),u=Object(s.c)(h);return Object(n.useEffect)((function(){document.title="".concat(y(i,u,"SETTINGS")," | ").concat(y(i,u,"SITE_NAME"))}),[i,u]),c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{className:"Container-Header",title:{text:y(i,u,"SITE_NAME"),modifiers:[["type","headerTitle"]]}}),c.a.createElement(X,{className:a,modifiers:o}))},z=a(11);a(54);var K=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=e.buildNumber,u=e.commitMessage,l=void 0===u?"":u,m=e.branchName,p=void 0===m?"":m,b=e.commitHash,v=void 0===b?"":b,N=e.authorName,_=void 0===N?"":N,I=e.status,T=e.start,g=e.duration,j=e.to,C=Object(s.c)(O),L=Object(s.c)(h),x=Object(n.useState)({full:"",short:""}),S=Object(d.a)(x,2),B=S[0],D=S[1];Object(n.useEffect)((function(){if(T){var e=T.split("T"),t=Object(d.a)(e,2),a=t[0],n=t[1],c={"01":y(C,L,"JANUARY"),"02":y(C,L,"FEBRUARY"),"03":y(C,L,"MARCH"),"04":y(C,L,"APRIL"),"05":y(C,L,"MAY"),"06":y(C,L,"JUNE"),"07":y(C,L,"JULY"),"08":y(C,L,"AUGUST"),"09":y(C,L,"SEPTEMBER"),10:y(C,L,"OCTOBER"),11:y(C,L,"NOVEMBER"),12:y(C,L,"DECEMBER")};D(function(e,t){var a=e.split("-"),n=Object(d.a)(a,3),r=n[0],o=n[1],i=n[2],s=t.split(":"),u=Object(d.a)(s,2),l=u[0],m=u[1],f=c[o];return{full:"".concat(i," ").concat(f," ").concat(r,", ").concat(l,":").concat(m),short:"".concat(i," ").concat(f,", ").concat(l,":").concat(m)}}(a,n))}}),[T,C,L]);var A=Object(n.useState)(""),R=Object(d.a)(A,2),k=R[0],F=R[1];function P(e,t){return e.length>t?e.slice(0,t-1)+"...":e}Object(n.useEffect)((function(){if(g){F(function(e){var t=Math.floor(e/60),a=e%60,n=t?"".concat(t," ").concat(y(C,L,"HOURS_SHORT")):"",c=a?"".concat(a," ").concat(y(C,L,"MINUTES_SHORT")):"";return"".concat(n).concat(t&&a?" ":"").concat(c)}(g))}}),[g,C,L]);var U=Object(n.useState)(""),G=Object(d.a)(U,2),w=G[0],H=G[1];Object(n.useEffect)((function(){p&&H(P(p,15))}),[p]);var M=Object(n.useState)(""),V=Object(d.a)(M,2),W=V[0],Y=V[1];Object(n.useEffect)((function(){_&&Y(P(_,15))}),[_]);var q=Object(n.useState)(""),J=Object(d.a)(q,2),X=J[0],$=J[1];Object(n.useEffect)((function(){v&&$(v.slice(0,7))}),[v]);var K=j?z.a:"div";return c.a.createElement(K,{className:"".concat(a," ").concat("Card"," ").concat(f("Card",o)),to:j},c.a.createElement("div",{className:"".concat("Card","-Content")},c.a.createElement(E,{className:"".concat("Card","-Icon"),modifiers:[["type",I]]}),c.a.createElement("div",{className:"".concat("Card","-DataWrapper")},c.a.createElement("div",{className:"".concat("Card","-Data")},c.a.createElement("div",{className:"".concat("Card","-DataTitle")},c.a.createElement("div",{className:"".concat("Card","-Number")},"#",i),c.a.createElement("div",{className:"".concat("Card","-CommitName Text Text_type_commit")},l)),c.a.createElement("div",{className:"".concat("Card","-DataOther")},c.a.createElement("div",{className:"".concat("Card","-OtherInfo")},c.a.createElement(E,{className:"".concat("Card","-OtherIcon"),modifiers:[["type","branch"]]}),c.a.createElement("div",{className:"".concat("Card","-OtherText Text Text_type_card")},w),c.a.createElement("div",{className:"".concat("Card","-OtherText ").concat("Card","-OtherText_type_hash Text Text_type_card")},X)),c.a.createElement("div",{className:"".concat("Card","-OtherInfo")},c.a.createElement(E,{className:"".concat("Card","-OtherIcon"),modifiers:[["type","user"]]}),c.a.createElement("div",{className:"".concat("Card","-OtherText Text Text_type_card")},W)))),c.a.createElement("div",{className:"".concat("Card","-TimeBlock")},c.a.createElement("div",{className:"".concat("Card","-TimeItem ").concat(B.short?"":"".concat("Card","-TimeItem_hidden"))},c.a.createElement(E,{className:"".concat("Card","-TimeIcon"),modifiers:[["type","calendar"]]}),c.a.createElement("div",{className:"".concat("Card","-TimeText Text Text_type_card"),title:B.full||""},B.short||"")),c.a.createElement("div",{className:"".concat("Card","-TimeItem ").concat(k?"":"".concat("Card","-TimeItem_hidden"))},c.a.createElement(E,{className:"".concat("Card","-TimeIcon"),modifiers:[["type","stopwatch"]]}),c.a.createElement("div",{className:"".concat("Card","-TimeText Text Text_type_card")},k||""))))))};a(56);var Q=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.c)(O),l=Object(s.c)(h),m=Object(s.c)(U),d=Object(s.b)();Object(n.useEffect)((function(){d(D({limit:10}))}),[]);var E=Object(n.useCallback)((function(){return d(function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){n(j(!0));var c=new URL("".concat(u.SERVER_API,"/builds"));return c.search=new URLSearchParams(t).toString(),console.log("fetchMoreBuilds: ",c),fetch(c).then((function(e){return e.json()})).then(function(){var c=Object(B.a)(S.a.mark((function c(r){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=r.data,!r.error){c.next=9;break}if(!(++a<10)){c.next=7;break}return c.next=6,new Promise((function(e){return setTimeout(e,1e3)}));case 6:return c.abrupt("return",e(t,a)(n));case 7:c.next=10;break;case 9:n({type:u.FETCH_MORE_BUILDS,payload:o});case 10:n(j(!1));case 11:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}}({limit:10,offset:m.length}))}),[m.length]);return c.a.createElement("main",{className:"".concat(a," ").concat("BuildList"," ").concat(f("BuildList",o))},c.a.createElement("div",{className:"".concat("BuildList","-Content")},m.map((function(e){var t,a=e.status,n=e.id,r=e.buildNumber,o=e.commitMessage,i=e.branchName,s=e.commitHash,u=e.authorName,l=e.start,m=e.duration;switch(a){case"InProgress":case"Waiting":t="progress";break;case"Success":t="done";break;case"Fail":case"Canceled":default:t="fail"}return c.a.createElement(K,{className:"".concat("BuildList","-Item"),modifiers:[["type",t]],buildId:n,to:"/build/".concat(n),buildNumber:r,commitMessage:o,branchName:i,commitHash:s,authorName:u,start:l,duration:m,key:n,status:t})})),c.a.createElement(p,{className:"".concat("BuildList","-Button"),modifiers:[["type","controlExtended"]],text:y(i,l,"SHOW_MORE"),onClick:E})))};var Z=function(e){var t=e.className,a=void 0===t?"":t,r=Object(s.c)(O),o=Object(s.c)(h);Object(n.useEffect)((function(){document.title="".concat(y(r,o,"BUILD_HISTORY")," | ").concat(y(r,o,"SITE_NAME"))}),[r,o]);var i=Object(s.c)(N);return c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{className:"Container-Header",title:{text:i.repoName,modifiers:[["type","repositoryName"]]},buttons:[{modifiers:[["type","control"],["icon","before"]],onClick:u.RUN_BUILD,text:y(r,o,"RUN_BUILD"),iconType:"play"},{modifiers:[["type","control"],["icon","only"]],onClick:u.GO_TO_SETTINGS,iconType:"settings"}]}),c.a.createElement(Q,{className:a}))};a(57);var ee=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=e.logString,i=void 0===o?"":o;return c.a.createElement("pre",{className:"".concat(a," ").concat("BuildLog"," ").concat(f("BuildLog",r)),dangerouslySetInnerHTML:{__html:i}})};a(58),a(59);var te=function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader-SpinerWrapper"},c.a.createElement("div",{className:"Loader-Spiner"})))},ae=a(60);var ne=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,l=Object(i.g)().buildId,E=Object(s.c)(U),p=Object(s.c)(H),b=Object(s.c)(G),v=Object(s.c)(w),N=Object(n.useState)(""),O=Object(d.a)(N,2),h=O[0],_=O[1],I=new ae({fg:"#000",bg:"#000"}),T=Object(s.b)();Object(n.useEffect)((function(){p===l||E.some((function(e){return e.id===l}))?T(function(e){return function(){var t=Object(B.a)(S.a.mark((function t(a){var n,c,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(j(!0)),t.next=3,Promise.all([A(e)(a),R(e)(a)]);case 3:if(n=t.sent,c=Object(d.a)(n,2),r=c[0],null!==(o=c[1])&&null!==r){t.next=11;break}return a(j(!1)),m.push("/"),t.abrupt("return",null);case 11:a({type:u.LOG_BUILD,payload:o}),a({type:u.DETAILS_BUILD,payload:r}),a(j(!1));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(l)):m.push("/")}),[l,E,p]),Object(n.useEffect)((function(){_(I.toHtml(v||""))}),[v,I]);var y=Object(n.useState)(""),g=Object(d.a)(y,2),C=g[0],L=g[1];return Object(n.useEffect)((function(){if(b){var e;switch(b.status){case"InProgress":case"Waiting":e="progress";break;case"Success":e="done";break;case"Fail":case"Canceled":default:e="fail"}L(e)}}),[b]),c.a.createElement("main",{className:"".concat(a," ").concat("BuildDetails"," ").concat(f("BuildDetails",o))},c.a.createElement("div",{className:"".concat("BuildDetails","-Content")},b&&b.id===l?c.a.createElement(c.a.Fragment,null,c.a.createElement(K,{className:"".concat("BuildDetails","-Item"),modifiers:[["type",C],["page","details"]],buildId:b.id,buildNumber:b.buildNumber,commitMessage:b.commitMessage,branchName:b.branchName,commitHash:b.commitHash,authorName:b.authorName,start:b.start,duration:b.duration,status:C}),h&&c.a.createElement(ee,{logString:h})):c.a.createElement(te,null)))};var ce=function(e){var t=e.className,a=void 0===t?"":t,r=Object(s.c)(O),o=Object(s.c)(h);Object(n.useEffect)((function(){document.title="".concat(y(r,o,"BUILD_DETAILS")," | ").concat(y(r,o,"SITE_NAME"))}),[r,o]);var i=Object(s.c)(N);return c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{className:"Container-Header",title:{text:i.repoName,modifiers:[["type","repositoryName"]]},buttons:[{modifiers:[["type","control"],["icon","before"]],onClick:u.REBUILD,text:y(r,o,"REBUILD"),iconType:"restart"},{modifiers:[["type","control"],["icon","only"]],onClick:u.GO_TO_SETTINGS,iconType:"settings"}]}),c.a.createElement(ne,{className:a}))};a(67);var re=function(e){var t=e.className,a=void 0===t?"":t,n=e.modifiers,r=void 0===n?[]:n,o=Object(s.c)(O),i=Object(s.c)(h);return c.a.createElement("main",{className:"".concat(a," ").concat("NotFound"," ").concat(f("NotFound",r))},c.a.createElement("div",{className:"".concat("NotFound","-Content")},y(o,i,"ERROR_404")," ",c.a.createElement(z.a,{to:"/"},y(o,i,"GO_TO_HOME_PAGE")),"."))};var oe=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.c)(O),u=Object(s.c)(h);return Object(n.useEffect)((function(){document.title="".concat(y(i,u,"PAGE_NOT_FOUND")," | ").concat(y(i,u,"SITE_NAME"))}),[i,u]),c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{className:"Container-Header",title:{text:y(i,u,"SITE_NAME"),modifiers:[["type","headerTitle"]]}}),c.a.createElement(re,{className:a,modifiers:o}))};a(68),a(69);var ie=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.c)(O),u=Object(s.c)(h),l=Object(s.b)(),m=Object(n.useCallback)((function(){var e="en"===u?"ru":"en";window.localStorage.setItem("shri_ci_lang",e),console.log("footer change lang clicked, changing language to ",e),l(q(e,void 0,!0))}),[u]);return c.a.createElement("footer",{className:"".concat(a," ").concat("Footer"," ").concat(f("Footer",o))},c.a.createElement("div",{className:"".concat("Footer","-Content")},c.a.createElement("div",{className:"".concat("Footer","-LinksWrapper")},c.a.createElement(z.a,{to:"/support",className:"".concat("Footer","-Link MyLink MyLink_type_footer")},y(i,u,"SUPPORT")),c.a.createElement(z.a,{to:"/learning",className:"".concat("Footer","-Link MyLink MyLink_type_footer")},y(i,u,"LEARNING")),c.a.createElement("div",{className:"".concat("Footer","-Link MyLink MyLink_type_footer"),onClick:m},y(i,u,"CHANGE_LOCALE"))),c.a.createElement("div",{className:"".concat("Footer","-Credentional Text Text_type_footer")},y(i,u,"COPYRIGHT",{year:2020}))))},se={isInProgress:!1,isAppLoading:!0,isPopupActive:!1},ue=function(e){return e.common.isInProgress},le=function(e){return e.common.isAppLoading},me=function(e){return e.common.isPopupActive};a(70);var de=function(e){var t=e.className,a=void 0===t?"":t,r=e.modifiers,o=void 0===r?[]:r,i=Object(s.c)(O),u=Object(s.c)(h),l=Object(s.b)(),m=Object(n.useRef)(null),d=function(){var e=Object(B.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.preventDefault(),a=m.current.value.trim(),console.log("commitHash: ",a),l(k(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"Popup-Wrapper"},c.a.createElement("form",{className:"Popup ".concat(a," ").concat("Form"," ").concat(f("Form",o)),onSubmit:d},c.a.createElement("div",{className:"".concat("Form","-Content")},c.a.createElement("div",{className:"".concat("Form","-Header Text Text_type_popupHeader")},y(i,u,"NEW_BUILD")),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement(J,{className:"".concat("Form","-Input"),modifiers:[["clear","visible"]],labelBefore:{text:"NEW_BUILD_POPUP_DESCRIPTION",className:"".concat("Form","-Label"),modifiers:[["type","formLabel"]]},id:"commit",type:"text",placeholder:y(i,u,"COMMIT_HASH"),pattern:"\\S+",name:"commit",required:!0,value:"",forwardRef:m})),c.a.createElement("div",{className:"".concat("Form","-Item")},c.a.createElement("div",{className:"".concat("Form","-ButtonsBlock")},c.a.createElement(p,{className:"".concat("Form","-Button"),modifiers:[["color","accent"]],text:y(i,u,"RUN_BUILD"),type:"submit"}),c.a.createElement(p,{type:"button",className:"".concat("Form","-Button"),modifiers:[["color","transparent"]],onClick:function(){m.current.value="",l(L(!1))},text:y(i,u,"CANCEL")}))))))};var fe=function(e){var t=Object(s.c)(le),a=Object(s.c)(me),r=Object(s.c)(ue),o=Object(s.c)(N),l=Object(s.b)();return Object(n.useEffect)((function(){l(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";return function(){var t=Object(B.a)(S.a.mark((function t(a){var n,c,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.localStorage.getItem("shri_ci_lang")||"en",t.next=3,Promise.all([Y()(a),q(e)(a)]);case 3:if(n=t.sent,c=Object(d.a)(n,2),r=c[0],o=c[1],a({type:u.FETCH_LANGUAGE_DICTIONARY,payload:o||{}}),null!==r){t.next=11;break}return m.go(),t.abrupt("return");case 11:if(!r.repoName){t.next=14;break}return t.next=14,D({limit:10})(a);case 14:a({type:u.FETCH_CONFIG,payload:r}),a(C(!1));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}())}),[l]),Object(n.useEffect)((function(){var e=document.getElementById("root");a?e.classList.add("Container_popup_active"):e.classList.remove("Container_popup_active")}),[a]),Object(n.useEffect)((function(){var e=document.getElementById("root");r?e.classList.add("Container_inactive"):e.classList.remove("Container_inactive")}),[r]),c.a.createElement(c.a.Fragment,null,t?c.a.createElement(te,null):c.a.createElement(i.c,{history:m},c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",render:function(){return o.repoName?c.a.createElement(Z,{className:"Container-Main"}):c.a.createElement(V,{className:"Container-Main"})}}),c.a.createElement(i.b,{path:"/build/:buildId",render:function(e){var t=e.location;return o.repoName?c.a.createElement(ce,{className:"Container-Main"}):c.a.createElement(i.a,{to:{pathname:"/",state:{from:t}}})}}),c.a.createElement(i.b,{path:"/settings"},c.a.createElement($,{className:"Container-Main"})),c.a.createElement(i.b,{path:"*"},c.a.createElement(oe,{className:"Container-Main"}))),c.a.createElement(ie,{className:"Container-Footer"}),a&&c.a.createElement(de,{modifiers:[["popup"]]})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(32),pe=a(33),be=a(36),ve=a(35),Ne=function(e){Object(be.a)(a,e);var t=Object(ve.a)(a);function a(e){var n;return Object(Ee.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(pe.a)(a,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{className:"Container-Header",title:{text:u.SITE_NAME,modifiers:[["type","headerTitle"]]}}),c.a.createElement("main",{className:"Container-Main"},"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),c.a.createElement(ie,{className:"Container-Footer"})):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component),Oe=a(12),he=a(34),_e=Object(Oe.c)({common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.TOGGLE_PROGRESS:return Object(b.a)({},e,{isInProgress:t.payload});case u.APP_LOADING:return Object(b.a)({},e,{isAppLoading:t.payload});case u.POPUP:return Object(b.a)({},e,{isPopupActive:t.payload});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.SAVE_CONFIG:var a=t.payload,n=a.repoName,c=a.buildCommand,r=a.mainBranch,o=a.period;return Object(b.a)({},e,{config:{repoName:n,buildCommand:c,mainBranch:r,period:o}});case u.FETCH_CONFIG:return Object(b.a)({},e,{config:Object(b.a)({},t.payload)});case u.FETCH_LANGUAGE_DICTIONARY:return Object(b.a)({},e,{dictionary:Object(b.a)({},t.payload)});default:return e}},builds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.FETCH_BUILDS:return Object(b.a)({},e,{data:Object(F.a)(t.payload)});case u.FETCH_MORE_BUILDS:for(var a=e.data[e.data.length-1],n=a?a.buildNumber:-1,c=[],r=0;r<t.payload.length;r++)t.payload[r].buildNumber>=n||c.push(t.payload[r]);return Object(b.a)({},e,{data:[].concat(Object(F.a)(e.data),c)});case u.DETAILS_BUILD:return Object(b.a)({},e,{details:Object(b.a)({},t.payload)});case u.LOG_BUILD:return Object(b.a)({},e,{log:t.payload});case u.NEW_BUILD_ID:return Object(b.a)({},e,{newBuildId:t.payload});default:return e}}}),Ie=[he.a],Te=Object(Oe.e)(_e,{},Object(Oe.d)(Oe.a.apply(void 0,Ie),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),ye=document.getElementById("root");o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:Te},c.a.createElement(Ne,null,c.a.createElement(fe,null)))),ye),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.56bb8ecd.chunk.js.map