(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{401:function(e,t,r){var content=r(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(32).default)("106f4fe0",content,!0,{sourceMap:!1})},407:function(e,t,r){"use strict";r(401)},408:function(e,t,r){var n=r(31)(!1);n.push([e.i,".preview[data-v-53cb719e]{margin:0 auto;max-width:800px}.article-preview[data-v-53cb719e]{padding:15px;background:#fff;box-shadow:0 3px 6px rgba(0,0,0,.1);border-radius:8px;margin:0 auto 10px}",""]),e.exports=n},430:function(e,t,r){"use strict";r.r(t);var n=r(9),c=Object(n.b)({setup:function(){var e=Object(n.g)(),t=e.$content,r=e.params;return{articlePreviews:Object(n.f)((function(){return t("backend/nodejs",r.value.slug).only(["title","slug"]).sortBy("createdAt","asc").fetch()}),"wLNNHgjMdGE90v4p1oG9Gg==")}}}),o=(r(407),r(19)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preview-container"},[r("div",{staticClass:"preview"},e._l(e.articlePreviews,(function(t){return r("div",{key:t.title,staticClass:"article-preview"},[r("nuxt-link",{attrs:{to:"nodejs/"+t.slug}},[r("h3",[e._v(e._s(t.title))])])],1)})),0)])}),[],!1,null,"53cb719e",null);t.default=component.exports}}]);