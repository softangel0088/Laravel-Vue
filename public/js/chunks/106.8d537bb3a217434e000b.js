(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{119:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c}));var r=n(27),a=n.n(r),i=n(3),o=n(1),s=Object(o.d)({plain:Object(o.c)(i.g,!1)},"formControls"),c=a.a.extend({props:s,computed:{custom:function(){return!this.plain}}})},1387:function(t,e){t.exports="/images/_/_/_/_/master-uping-new/resources/js/src/assets/images/pages/register-v2-dark.svg"},1388:function(t,e,n){"use strict";n(711)},1389:function(t,e,n){(e=n(13)(!1)).push([t.i,'.auth-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n}\n.auth-wrapper .auth-inner {\n  width: 100%;\n  position: relative;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.auth-wrapper.auth-v1 .auth-inner:before {\n  width: 244px;\n  height: 243px;\n  content: " ";\n  position: absolute;\n  top: -54px;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:before {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:before {\n  left: -46px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:before {\n  right: -46px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:before {\n    display: none;\n}\n}\n.auth-wrapper.auth-v1 .auth-inner:after {\n  width: 272px;\n  height: 272px;\n  content: " ";\n  position: absolute;\n  bottom: -55px;\n  z-index: -1;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:after {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:after {\n  right: -75px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:after {\n  left: -75px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:after {\n    display: none;\n}\n}\n.auth-wrapper.auth-v2 {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner {\n  height: 100vh;\n  overflow-y: auto;\n  height: calc(var(--vh, 1vh) * 100);\n}\n.auth-wrapper.auth-v2 .brand-logo {\n  position: absolute;\n  top: 2rem;\n  z-index: 1;\n}\n[dir] .auth-wrapper.auth-v2 .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n  right: 2rem;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  max-width: 400px;\n}\n.auth-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n}\n[dir] .auth-wrapper .brand-logo {\n  margin: 1rem 0 2rem 0;\n}\n.auth-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n[dir] .auth-wrapper .auth-footer-btn .btn {\n  padding: 0.6rem !important;\n}\n[dir=ltr] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-right: 1rem;\n}\n[dir=rtl] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-left: 1rem;\n}\n@media (min-width: 1200px) {\n.auth-wrapper.auth-v2 .auth-card {\n    width: 400px;\n}\n}\n[dir] .auth-wrapper .auth-bg {\n  background-color: #fff;\n}\n[dir] .dark-layout .auth-wrapper .auth-bg {\n  background-color: #283046;\n}\n@media (max-height: 625px) {\n[dir] .dark-layout .auth-wrapper .auth-inner {\n    background-color: #283046;\n}\n[dir] .auth-wrapper .auth-bg {\n    padding-top: 3rem;\n}\n[dir] .auth-wrapper .auth-inner {\n    background-color: #fff;\n    padding-bottom: 1rem;\n}\n.auth-wrapper.auth-v2 .brand-logo {\n    width: 100%;\n    display: flex;\n    justify-content: unset;\n    position: relative;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n    left: 0;\n    padding-left: 1.5rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n    right: 0;\n    padding-right: 1.5rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 150px;\n}',""]),t.exports=e},149:function(t,e,n){"use strict";n.d(e,"a",(function(){return G})),n.d(e,"c",(function(){return B})),n.d(e,"b",(function(){return S}));var r,a,i=n(27),o=n.n(i),s=n(3),c=n(15),u=n(12),l=n(10),d=n(52),p=n(61),h=n(19),b=n(1),f=n(63),g=n(72),m=n(119),A=n(71),v=n(66),w=n(39),O=n(37);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=Object(p.a)("checked",{defaultValue:null}),k=x.mixin,P=x.props,I=x.prop,G=x.event,B=Object(b.d)(Object(h.m)(y(y(y(y(y(y(y({},w.b),P),g.b),A.b),v.b),m.b),{},{ariaLabel:Object(b.c)(s.u),ariaLabelledby:Object(b.c)(s.u),button:Object(b.c)(s.g,!1),buttonVariant:Object(b.c)(s.u),inline:Object(b.c)(s.g,!1),value:Object(b.c)(s.a)})),"formRadioCheckControls"),S=o.a.extend({mixins:[f.a,w.a,k,O.a,g.a,A.a,v.a,m.a],inheritAttrs:!1,props:B,data:function(){return{localChecked:this.isGroup?this.bvGroup[I]:this[I],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(d.a)(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(l.b)(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},C(t,"btn-".concat(e),e),C(t,"disabled",this.isDisabled),C(t,"active",this.isChecked),C(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return y(y({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(r={},C(r,I,(function(){this["".concat(I,"Watcher")].apply(this,arguments)})),C(r,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),r),methods:(a={},C(a,"".concat(I,"Watcher"),(function(t){Object(d.a)(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),C(a,"computedLocalCheckedWatcher",(function(t,e){Object(d.a)(t,e)||this.$emit(G,t)})),C(a,"handleChange",(function(t){var e=this,n=t.target.checked,r=this.value,a=n?r:null;this.computedLocalChecked=r,this.$nextTick((function(){e.$emit(c.d,a),e.isGroup&&e.bvGroup.$emit(c.d,a)}))})),C(a,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),C(a,"focus",(function(){this.isDisabled||Object(u.d)(this.$refs.input)})),C(a,"blur",(function(){this.isDisabled||Object(u.c)(this.$refs.input)})),a),render:function(t){var e=this.isRadio,n=this.isBtnMode,r=this.isPlain,a=this.isCustom,i=this.isInline,o=this.isSwitch,s=this.computedSize,c=this.bvAttrs,u=this.normalizeSlot(),l=t("input",{class:[{"form-check-input":r,"custom-control-input":a,"position-static":r&&!u},n?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:y({change:this.handleChange},n?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(n){var d=t("label",{class:this.buttonClasses},[l,u]);return this.isGroup||(d=t("div",{class:["btn-group-toggle","d-inline-block"]},[d])),d}var p=t();return r&&!u||(p=t("label",{class:{"form-check-label":r,"custom-control-label":a},attrs:{for:this.safeId()}},u)),t("div",{class:[C({"form-check":r,"form-check-inline":r&&i,"custom-control":a,"custom-control-inline":a&&i,"custom-checkbox":a&&!e&&!o,"custom-switch":o,"custom-radio":a&&e},"b-custom-control-".concat(s),s&&!n),c.class],style:c.style},[l,p])}})},1578:function(t,e,n){"use strict";n.r(e);n(286);var r=n(30),a=n(1857),i=n(521),o=n(317),s=n(68),c=n(93),u=n(1844),l=n(1851),d=n(387),p=n(462),h=n(1845),b=n(1842),f=n(1854),g=n(471),m=n(1876),A=n(31),v=n(347),w=n(4),O=n(131),j=n(18),y=n(9);function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var x=Object.prototype.hasOwnProperty;var k,P,I,G=(k=!1,P=[],I={resolved:function(){return k},resolve:function(){if(!k){k=!0;for(var t=0,e=P.length;t<e;t++)P[t]()}},promise:{then:function(t){k?t():P.push(t)}}},{notify:function(){I.resolve()},wait:function(){return I.promise},render:function(t,e,n){this.wait().then((function(){n(window.grecaptcha.render(t,e))}))},reset:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(t)})))},execute:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(t)})))},checkRecaptchaLoad:function(){x.call(window,"grecaptcha")&&x.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!I.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=G.notify);var B=Object(y.defineComponent)({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(t,e){var n=e.slots,r=e.emit,a=Object(y.ref)(null),i=Object(y.ref)(null),o=function(t){r("verify",t)},s=function(){r("expired")},c=function(){r("error")};return Object(y.onMounted)((function(){if(G.checkRecaptchaLoad(),t.loadRecaptchaScript&&!document.getElementById(t.recaptchaScriptId)){var e=document.createElement("script");e.id=t.recaptchaScriptId,e.src="https://"+t.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+t.language,e.async=!0,e.defer=!0,document.head.appendChild(e)}var u=C({},t,{callback:o,"expired-callback":s,"error-callback":c}),l=a.value,d=n.default?l.children[0]:l;G.render(d,u,(function(t){i.value=t,r("render",t)}))})),{root:a,widgetId:i,reset:function(){G.reset(i.value)},execute:function(){G.execute(i.value)}}},render:function(){var t,e=this.$slots.default;return t="function"==typeof e?e():e,Object(y.h)("div",{ref:"root"},t)}}),S={components:{BRow:a.a,BImg:i.a,BCol:o.a,BLink:s.a,BButton:c.a,BForm:u.a,BCardText:l.a,BCardTitle:d.a,BFormCheckbox:p.a,BFormGroup:h.a,BFormInput:b.a,BInputGroup:f.a,BInputGroupAppend:g.a,BCard:m.a,ValidationProvider:r.b,ValidationObserver:r.a,VueRecaptcha:B},mixins:[v.a],data:function(){return{referrer_id:"",status:"",username:"",name:"",email:"",password:"",confirmation_password:"",sideImg:n(399),logoUrl:n(153),required:A.c}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===w.a.state.appConfig.layout.skin?(this.sideImg=n(1387),this.sideImg):this.sideImg}},methods:{register:function(){var t=this;this.$refs.registerForm.validate().then((function(e){e&&O.a.register({name:t.name,username:t.username,email:t.email,password:t.password,confirmation_password:t.confirmation_password,ref:t.$route.query.ref}).then((function(e){t.$router.push("/login"),t.$toast({component:j.a,position:"top-right",props:{title:"Account Registered.",icon:"CoffeeIcon",variant:"success",text:"Please contact your account manager. Check your inbox."}})})).catch((function(e){401===e.response.status&&t.$toast({component:j.a,position:"top-right",props:{title:"Error Creating Account::",icon:"AlertCircleIcon",variant:"danger",text:"Please enter valid credentials"}}),t.$refs.registerForm.setErrors(e.response.error)}))}))}}},R=(n(1388),n(2)),N=Object(R.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-wrapper auth-v1 px-2"},[n("div",{staticClass:"auth-inner py-2"},[n("b-card",{staticClass:"mb-0 "},[n("b-link",{staticClass:"brand-logo"},[n("b-img",{staticClass:"z-index-0",attrs:{src:t.logoUrl,alt:"Login V2",width:"150",height:"45"}})],1),t._v(" "),n("b-card-title",{staticClass:"mb-1"},[t._v("\n                    Join Network\n                ")]),t._v(" "),n("b-card-text",{staticClass:"mb-2"},[t._v("\n                    Create your account! 🚀\n                ")]),t._v(" "),n("validation-observer",{ref:"registerForm"},[n("b-form",{staticClass:"auth-register-form mt-2",on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[n("b-form-group",{attrs:{label:"Username","label-for":"username"}},[n("validation-provider",{attrs:{name:"Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-form-input",{attrs:{id:"username",state:!(r.length>0)&&null,name:"username",placeholder:"johndoe"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),t._v(" "),n("b-form-group",{attrs:{label:"Name","label-for":"name"}},[n("validation-provider",{attrs:{name:"Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-form-input",{attrs:{id:"name",state:!(r.length>0)&&null,name:"name",placeholder:"John Doe"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),t._v(" "),n("b-form-group",{attrs:{label:"Email","label-for":"email"}},[n("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-form-input",{attrs:{id:"email",state:!(r.length>0)&&null,name:"email",placeholder:"john@example.com"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),t._v(" "),n("b-form-group",{attrs:{label:"Password","label-for":"password"}},[n("validation-provider",{attrs:{name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[n("b-form-input",{staticClass:"form-control-merge",attrs:{id:"password",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"register-password",placeholder:"············"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("b-input-group-append",{attrs:{"is-text":""}},[n("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),t._v(" "),n("b-form-group",{attrs:{label:"Confirm Password","label-for":"confirmation_password"}},[n("validation-provider",{attrs:{name:"confirmation_password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[n("b-form-input",{staticClass:"form-control-merge",attrs:{id:"confirmation_password",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"confirmation_password",placeholder:"············"},model:{value:t.confirmation_password,callback:function(e){t.confirmation_password=e},expression:"confirmation_password"}}),t._v(" "),n("b-input-group-append",{attrs:{"is-text":""}},[n("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),t._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{id:"register-privacy-policy",name:"checkbox-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v("\n                                I agree to\n                                "),n("b-link",[t._v("privacy policy & terms")])],1)],1),t._v(" "),n("b-button",{attrs:{variant:"primary",block:"",type:"submit"}},[t._v("\n                            Sign up\n                        ")])],1)],1),t._v(" "),n("b-card-text",{staticClass:"text-center mt-2"},[n("span",[t._v("Already have an account? ")]),t._v(" "),n("b-link",{attrs:{to:{name:"auth-login"}}},[n("span",[t._v("Sign in instead")])])],1)],1)],1)])}),[],!1,null,null,null);e.default=N.exports},18:function(t,e,n){"use strict";var r={components:{BAvatar:n(477).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},a=(n(897),n(2)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);e.a=i.exports},1851:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(27),a=n.n(r),i=n(65),o=n(8),s=n(3),c=n(1),u=Object(c.d)({textTag:Object(c.c)(s.u,"p")},o.s),l=a.a.extend({name:o.s,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.textTag,Object(i.a)(r,{staticClass:"card-text"}),a)}})},1857:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n(65),a=n(8),i=n(3),o=n(29),s=n(78),c=n(42),u=n(151),l=n(19),d=n(1),p=n(35);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=["start","end","center"],m=Object(u.a)((function(t,e){return(e=Object(p.h)(Object(p.g)(e)))?Object(p.c)(["row-cols",t,e].filter(c.a).join("-")):null})),A=Object(u.a)((function(t){return Object(p.c)(t.replace("cols",""))})),v=[],w={name:a.wb,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(s.b)().reduce((function(t,e){return t[Object(d.g)(e,"cols")]=Object(d.c)(i.p),t}),Object(l.c)(null)),v=Object(l.h)(t),Object(d.d)(Object(l.m)(b(b({},t),{},{alignContent:Object(d.c)(i.u,null,(function(t){return Object(o.a)(Object(o.b)(g,"between","around","stretch"),t)})),alignH:Object(d.c)(i.u,null,(function(t){return Object(o.a)(Object(o.b)(g,"between","around"),t)})),alignV:Object(d.c)(i.u,null,(function(t){return Object(o.a)(Object(o.b)(g,"baseline","stretch"),t)})),noGutters:Object(d.c)(i.g,!1),tag:Object(d.c)(i.u,"div")})),a.wb)),this.props},render:function(t,e){var n,a=e.props,i=e.data,o=e.children,s=a.alignV,c=a.alignH,u=a.alignContent,l=[];return v.forEach((function(t){var e=m(A(t),a[t]);e&&l.push(e)})),l.push((f(n={"no-gutters":a.noGutters},"align-items-".concat(s),s),f(n,"justify-content-".concat(c),c),f(n,"align-content-".concat(u),u),n)),t(a.tag,Object(r.a)(i,{staticClass:"row",class:l}),o)}}},31:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return l}));var r=n(30),a=n(111),i=n(465),o=n(464),s=(n(140),n(900),Object(r.c)("required",a.l)),c=Object(r.c)("email",a.g),u=(Object(r.c)("min",a.j),Object(r.c)("confirmed",a.e),Object(r.c)("regex",a.k),Object(r.c)("between",a.d),Object(r.c)("alpha",a.a),Object(r.c)("integer",a.h),Object(r.c)("digits",a.f),Object(r.c)("alpha-dash",a.b),Object(r.c)("alpha-num",a.c)),l=(Object(r.c)("length",a.i),Object(r.c)("positive",{validate:function(t){return t>=0},message:"Please enter positive number!"}),Object(r.c)("credit-card",{validate:function(t){return/^(?:3[47][0-9]{13})$/.test(t)},message:"It is not valid credit card!"}),Object(r.c)("password",{validate:function(t){return/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/.test(t)},message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"}),Object(r.c)("url",{validate:function(t){if(null==t||0===t.length)return!0;return/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(t)},message:"URL is invalid"}));Object(r.d)({en:{messages:o.messages,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:i.messages,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})},347:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}}},399:function(t,e){t.exports="/images/_/_/_/_/master-uping-new/resources/js/src/assets/images/pages/flat-bg2.jpg"},457:function(t,e,n){var r=n(898);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,a);r.locals&&(t.exports=r.locals)},462:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r,a=n(27),i=n.n(a),o=n(8),s=n(15),c=n(3),u=n(10),l=n(52),d=function(t,e){for(var n=0;n<t.length;n++)if(Object(l.a)(t[n],e))return n;return-1},p=n(19),h=n(1),b=n(149);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A=s.db+"indeterminate",v=Object(h.d)(Object(p.m)(g(g({},b.c),{},(m(r={},"indeterminate",Object(h.c)(c.g,!1)),m(r,"switch",Object(h.c)(c.g,!1)),m(r,"uncheckedValue",Object(h.c)(c.a,!1)),m(r,"value",Object(h.c)(c.a,!0)),r))),o.C),w=i.a.extend({name:o.C,mixins:[b.b],inject:{bvGroup:{from:"bvCheckGroup",default:null}},props:v,computed:{isChecked:function(){var t=this.value,e=this.computedLocalChecked;return Object(u.a)(e)?d(e,t)>-1:Object(l.a)(e,t)},isRadio:function(){return!1}},watch:m({},"indeterminate",(function(t,e){Object(l.a)(t,e)||this.setIndeterminate(t)})),mounted:function(){this.setIndeterminate(this.indeterminate)},methods:{computedLocalCheckedWatcher:function(t,e){if(!Object(l.a)(t,e)){this.$emit(b.a,t);var n=this.$refs.input;n&&this.$emit(A,n.indeterminate)}},handleChange:function(t){var e=this,n=t.target,r=n.checked,a=n.indeterminate,i=this.value,o=this.uncheckedValue,c=this.computedLocalChecked;if(Object(u.a)(c)){var l=d(c,i);r&&l<0?c=c.concat(i):!r&&l>-1&&(c=c.slice(0,l).concat(c.slice(l+1)))}else c=r?i:o;this.computedLocalChecked=c,this.$nextTick((function(){e.$emit(s.d,c),e.isGroup&&e.bvGroup.$emit(s.d,c),e.$emit(A,a)}))},setIndeterminate:function(t){Object(u.a)(this.computedLocalChecked)&&(t=!1);var e=this.$refs.input;e&&(e.indeterminate=t,this.$emit(A,t))}}})},477:function(t,e,n){"use strict";n.d(e,"b",(function(){return R})),n.d(e,"a",(function(){return L}));var r=n(27),a=n.n(r),i=n(8),o=n(15),s=n(3),c=n(24),u=n(10),l=n(33),d=n(19),p=n(1),h=n(110),b=n(37),f=n(65),g=n(50),m=n(35),A=n(77),v=n(280);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=Object(d.j)(v.b,["content"]),C=Object(p.d)(Object(d.m)(O(O({},y),{},{icon:Object(p.c)(s.u)})),i.V),x=a.a.extend({name:i.V,functional:!0,props:C,render:function(t,e){var n=e.data,r=e.props,i=e.parent,o=Object(m.e)(Object(m.h)(r.icon||"")).replace(g.n,"");return t(o&&function t(e,n){if(!e)return a.a.component(n);var r=(e.$options||{}).components;return r&&r[n]||t(e.$parent,n)}(i,"BIcon".concat(o))||A.a,Object(f.a)(n,{props:Object(p.e)(y,r)}))}}),k=n(93),P=n(68);function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=["sm",null,"lg"],R=function(t){return t=Object(u.n)(t)&&Object(u.i)(t)?Object(l.b)(t,0):t,Object(u.h)(t)?"".concat(t,"px"):t||null},N=Object(d.j)(P.b,["active","event","routerTag"]),E=Object(p.d)(Object(d.m)(G(G({},N),{},{alt:Object(p.c)(s.u,"avatar"),ariaLabel:Object(p.c)(s.u),badge:Object(p.c)(s.j,!1),badgeLeft:Object(p.c)(s.g,!1),badgeOffset:Object(p.c)(s.u),badgeTop:Object(p.c)(s.g,!1),badgeVariant:Object(p.c)(s.u,"primary"),button:Object(p.c)(s.g,!1),buttonType:Object(p.c)(s.u,"button"),icon:Object(p.c)(s.u),rounded:Object(p.c)(s.j,!1),size:Object(p.c)(s.p),square:Object(p.c)(s.g,!1),src:Object(p.c)(s.u),text:Object(p.c)(s.u),variant:Object(p.c)(s.u,"secondary")})),i.b),L=a.a.extend({name:i.b,mixins:[b.a],inject:{bvAvatarGroup:{default:null}},props:E,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return R(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===S.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,r=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return r?{marginLeft:r,marginRight:r}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,r=this.badgeOffset||"0px";return{fontSize:-1===S.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?r:null,bottom:e?null:r,left:n?r:null,right:n?null:r}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(o.y,t)},onClick:function(t){this.$emit(o.f,t)}},render:function(t){var e,n=this.computedVariant,r=this.disabled,a=this.computedRounded,i=this.icon,o=this.localSrc,s=this.text,u=this.fontStyle,l=this.marginStyle,d=this.computedSize,b=this.button,f=this.buttonType,g=this.badge,m=this.badgeVariant,v=this.badgeStyle,w=!b&&Object(h.d)(this),O=b?k.a:w?P.a:"span",j=this.alt,y=this.ariaLabel||null,C=null;this.hasNormalizedSlot()?C=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):o?(C=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:o,alt:j},on:{error:this.onImgError}}),C=t("span",{staticClass:"b-avatar-img"},[C])):C=i?t(x,{props:{icon:i},attrs:{"aria-hidden":"true",alt:j}}):s?t("span",{staticClass:"b-avatar-text",style:u},[t("span",s)]):t(A.j,{attrs:{"aria-hidden":"true",alt:j}});var I=t(),R=this.hasNormalizedSlot(c.d);if(g||""===g||R){var E=!0===g?"":g;I=t("span",{staticClass:"b-avatar-badge",class:B({},"badge-".concat(m),m),style:v},[R?this.normalizeSlot(c.d):E])}return t(O,{staticClass:"b-avatar",class:(e={},B(e,"".concat("b-avatar","-").concat(d),d&&-1!==S.indexOf(d)),B(e,"badge-".concat(n),!b&&n),B(e,"rounded",!0===a),B(e,"rounded-".concat(a),a&&!0!==a),B(e,"disabled",r),e),style:G(G({},l),{},{width:d,height:d}),attrs:{"aria-label":y||null},props:b?{variant:n,disabled:r,type:f}:w?Object(p.e)(N,this):{},on:b||w?{click:this.onClick}:{}},[C,I])}})},711:function(t,e,n){var r=n(1389);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,a);r.locals&&(t.exports=r.locals)},897:function(t,e,n){"use strict";n(457)},898:function(t,e,n){(e=n(13)(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=e}}]);