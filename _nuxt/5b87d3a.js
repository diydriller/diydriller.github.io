(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{403:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("ee70c03e",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(403)},411:function(t,e,n){var r=n(32)(!1);r.push([t.i,'article[data-v-0d6d2e76]{display:block;margin:0 auto;padding:50px 30px;max-width:800px}h1[data-v-0d6d2e76]{font-size:28px;font-weight:900;margin-bottom:30px}*[data-v-0d6d2e76]{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif}a[data-v-0d6d2e76]{text-decoration:none}effect[data-v-0d6d2e76],effect span[data-v-0d6d2e76]{position:absolute}effect span[data-v-0d6d2e76]{display:block;width:4px;height:50px;border-radius:4px;background:#474469;box-shadow:0 0 4px hsla(0,0%,100%,.5);left:50%;bottom:50%;transform-origin:center bottom;transition:transform .2s,opacity .45s;transition-timing-function:ease-out;z-index:100}.preview[data-v-0d6d2e76]{margin:0 auto;max-width:800px}.article-preview[data-v-0d6d2e76]{padding:15px;background:#fff;box-shadow:0 3px 6px rgba(0,0,0,.1);border-radius:8px;margin:0 auto 10px}',""]),t.exports=r},432:function(t,e,n){"use strict";n.r(e);var r=n(6),o=Object(r.b)({setup:function(){var t=Object(r.h)(),e=t.$content,n=t.params;return{articlePreviews:Object(r.g)((function(){return e("backend/spring",n.value.slug).only(["title","slug"]).sortBy("createdAt","asc").fetch()}),"wLNNHgjMdGE90v4p1oG9Gg==")}}}),d=(n(410),n(19)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-container"},[n("div",{staticClass:"preview"},t._l(t.articlePreviews,(function(e){return n("div",{key:e.title,staticClass:"article-preview"},[n("nuxt-link",{attrs:{to:"spring/"+e.slug}},[n("h3",[t._v(t._s(e.title))])])],1)})),0)])}),[],!1,null,"0d6d2e76",null);e.default=component.exports}}]);