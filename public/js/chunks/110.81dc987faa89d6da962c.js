(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1021:function(t,e){t.exports="/images/_/_/_/_/uping-main/resources/js/src/assets/images/banner/banner.png"},1022:function(t,e,n){"use strict";n(534)},1023:function(t,e,n){(e=n(14)(!1)).push([t.i,"[dir] .knowledge-base-bg {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .kb-search-content-info .kb-search-content .card-img-top {\n  background-color: #fcfcfc;\n}\n.kb-search-content-info .no-result.no-items {\n  display: none;\n}\n.kb-title {\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n.knowledge-base-bg .kb-search-input .input-group {\n    width: 576px;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group {\n    margin: 0 auto;\n}\n}\n@media (min-width: 992px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 8rem;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 6rem;\n}\n}\n[dir] .list-group-circle .list-group-item-action:focus, [dir] .list-group-circle .list-group-item-action:active {\n  background-color: transparent;\n}\n[dir] .question-content ul li {\n  margin-bottom: 1rem;\n}\n.question-content ul li a {\n  color: inherit;\n}",""]),t.exports=e},1556:function(t,e,n){"use strict";n.r(e);n(120),n(39),n(179),n(180);var r=n(1832),a=n(315),c=n(1851),o=n(387),i=n(1826),s=n(1819),u=n(1829),l=n(466),d=n(1817),b={components:{BRow:r.a,BCol:a.a,BCard:c.a,BCardBody:o.a,BCardText:i.a,BForm:s.a,BInputGroup:u.a,BInputGroupPrepend:l.a,BFormInput:d.a},data:function(){return{knowledgeBaseSearchQuery:"",kb:[]}},computed:{filteredKB:function(){var t=this.knowledgeBaseSearchQuery.toLowerCase();return this.kb.filter((function(e){return e.title.toLowerCase().includes(t)||e.desc.toLowerCase().includes(t)}))}},created:function(){var t=this;this.$http.get("/kb/data/knowledge_base").then((function(e){t.kb=e.data}))}},p=(n(1022),n(2)),g=Object(p.a)(b,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{attrs:{id:"knowledge-base-search"}},[r("b-card",{staticClass:"knowledge-base-bg text-center",style:{backgroundImage:"url("+n(1021)+")"},attrs:{"no-body":""}},[r("b-card-body",{staticClass:"card-body"},[r("h2",{staticClass:"text-primary"},[t._v("\n          Dedicated Source Used on Website\n        ")]),t._v(" "),r("b-card-text",{staticClass:"mb-2"},[r("span",[t._v("Popular searches: ")]),t._v(" "),r("span",{staticClass:"font-weight-bolder"},[t._v("Sales automation, Email marketing")])]),t._v(" "),r("b-form",{staticClass:"kb-search-input"},[r("b-input-group",{staticClass:"input-group-merge"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"SearchIcon"}})],1),t._v(" "),r("b-form-input",{attrs:{id:"searchbar",placeholder:"Ask a question...."},model:{value:t.knowledgeBaseSearchQuery,callback:function(e){t.knowledgeBaseSearchQuery=e},expression:"knowledgeBaseSearchQuery"}})],1)],1)],1)],1)],1),t._v(" "),r("section",{attrs:{id:"knowledge-base-content"}},[r("b-row",{staticClass:"kb-search-content-info match-height"},[t._l(t.filteredKB,(function(e){return r("b-col",{key:e.id,staticClass:"kb-search-content",attrs:{md:"4",sm:"6"}},[r("b-card",{staticClass:"text-center cursor-pointer",attrs:{"img-src":e.img,"img-alt":e.img.slice(5),"img-top":""},on:{click:function(n){return t.$router.push({name:"pages-knowledge-base-category",params:{category:e.category}})}}},[r("h4",[t._v(t._s(e.title))]),t._v(" "),r("b-card-text",{staticClass:"mt-1"},[t._v("\n            "+t._s(e.desc)+"\n          ")])],1)],1)})),t._v(" "),r("b-col",{directives:[{name:"show",rawName:"v-show",value:!t.filteredKB.length,expression:"!filteredKB.length"}],staticClass:"text-center",attrs:{cols:"12"}},[r("h4",{staticClass:"mt-4"},[t._v("\n          Search result not found!!\n        ")])])],2)],1)])}),[],!1,null,null,null);e.default=g.exports},1819:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(27),a=n.n(r),c=n(65),o=n(8),i=n(3),s=n(1),u=Object(s.d)({id:Object(s.c)(i.u),inline:Object(s.c)(i.g,!1),novalidate:Object(s.c)(i.g,!1),validated:Object(s.c)(i.g,!1)},o.A),l=a.a.extend({name:o.A,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t("form",Object(c.a)(r,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),a)}})},1826:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(27),a=n.n(r),c=n(65),o=n(8),i=n(3),s=n(1),u=Object(s.d)({textTag:Object(s.c)(i.u,"p")},o.s),l=a.a.extend({name:o.s,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.textTag,Object(c.a)(r,{staticClass:"card-text"}),a)}})},1832:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(65),a=n(8),c=n(3),o=n(29),i=n(77),s=n(42),u=n(150),l=n(19),d=n(1),b=n(35);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=["start","end","center"],m=Object(u.a)((function(t,e){return(e=Object(b.h)(Object(b.g)(e)))?Object(b.c)(["row-cols",t,e].filter(s.a).join("-")):null})),O=Object(u.a)((function(t){return Object(b.c)(t.replace("cols",""))})),w=[],j={name:a.wb,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(i.b)().reduce((function(t,e){return t[Object(d.g)(e,"cols")]=Object(d.c)(c.p),t}),Object(l.c)(null)),w=Object(l.h)(t),Object(d.d)(Object(l.m)(g(g({},t),{},{alignContent:Object(d.c)(c.u,null,(function(t){return Object(o.a)(Object(o.b)(h,"between","around","stretch"),t)})),alignH:Object(d.c)(c.u,null,(function(t){return Object(o.a)(Object(o.b)(h,"between","around"),t)})),alignV:Object(d.c)(c.u,null,(function(t){return Object(o.a)(Object(o.b)(h,"baseline","stretch"),t)})),noGutters:Object(d.c)(c.g,!1),tag:Object(d.c)(c.u,"div")})),a.wb)),this.props},render:function(t,e){var n,a=e.props,c=e.data,o=e.children,i=a.alignV,s=a.alignH,u=a.alignContent,l=[];return w.forEach((function(t){var e=m(O(t),a[t]);e&&l.push(e)})),l.push((f(n={"no-gutters":a.noGutters},"align-items-".concat(i),i),f(n,"justify-content-".concat(s),s),f(n,"align-content-".concat(u),u),n)),t(a.tag,Object(r.a)(c,{staticClass:"row",class:l}),o)}}},534:function(t,e,n){var r=n(1023);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(15)(r,a);r.locals&&(t.exports=r.locals)}}]);