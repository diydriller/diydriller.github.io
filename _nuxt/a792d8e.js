(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{405:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("1c3bdfe9",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n(405)},414:function(t,e,n){var o=n(34)(!1);o.push([t.i,'article[data-v-1f8dc060]{display:block;margin:0 auto;padding:50px 30px;max-width:800px}h1[data-v-1f8dc060]{font-size:28px;font-weight:900;margin-bottom:30px}*[data-v-1f8dc060]{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif}body[data-v-1f8dc060],html[data-v-1f8dc060]{width:100%;height:100%}a[data-v-1f8dc060]{text-decoration:none}effect[data-v-1f8dc060],effect span[data-v-1f8dc060]{position:absolute}effect span[data-v-1f8dc060]{display:block;width:4px;height:50px;border-radius:4px;background:#474469;box-shadow:0 0 4px hsla(0,0%,100%,.5);left:50%;bottom:50%;transform-origin:center bottom;transition:transform .2s,opacity .45s;transition-timing-function:ease-out;z-index:100}.preview[data-v-1f8dc060]{margin:0 auto;max-width:800px}.article-preview[data-v-1f8dc060]{padding:15px;background:#fff;box-shadow:0 3px 6px rgba(0,0,0,.1);border-radius:8px;margin:0 auto 10px}',""]),t.exports=o},443:function(t,e,n){"use strict";n.r(e);var o=n(6),r=Object(o.b)({setup:function(){var t=Object(o.k)(),e=t.$content,n=t.params;return{articlePreviews:Object(o.j)((function(){return e("git/core",n.value.slug).only(["title","slug"]).sortBy("createdAt","asc").fetch()}),"wLNNHgjMdGE90v4p1oG9Gg==")}}}),c=(n(413),n(19)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-container"},[n("div",{staticClass:"preview"},t._l(t.articlePreviews,(function(e){return n("div",{key:e.title,staticClass:"article-preview"},[n("nuxt-link",{attrs:{to:"core/"+e.slug}},[n("h3",[t._v(t._s(e.title))])])],1)})),0)])}),[],!1,null,"1f8dc060",null);e.default=component.exports}}]);